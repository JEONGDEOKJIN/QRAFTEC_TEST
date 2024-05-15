import { totalTestDummy } from "./dummyData";
import { getKorCategoryId, transformData, transformDataFn } from "./utils";

/* [getDisClosureData 함수 용례]
    1. [매개변수 input] page, filter 키워드 
    2. [process] 
        - startDate, endDate 받아서 -> dataDate 필터링
        - pageNation
        - exchangeType 으로 categoryId 변환 (더 적은 페이지로 변환하면 빠르게 끝날 것 같아서)
    3. [return] 
        [{  id: 0,
            dataDate: "2024-05-01",
            korName: "삼성전자",
            details: {
            secCode: "005930",
            secName: "삼성전자 주식",
            categoryId: "100",
            },
            analysisDetails: {
            topicKor: "투자 발표",
            summarizeTinyKor: "삼성전자, 새로운 투자 발표",
            summarizeLongKor:
                "삼성전자는 오늘 주요 기술 투자에 대한 공시를 발표하였습니다. 주요 내용은...",
            },
            {...}
        ]
*/

// ------------------- 이전 타입 --------------------------------
// interface QueryParameters {
//   exchangeType: "홍콩" | "심천";
//   startDate: string;
//   endDate: string;
// }

// ----------------- 타입 변경 ---------------
interface QueryParameters {
  exchangeType: "홍콩" | "심천";
  startDate: string;
  endDate: string;
}

interface Details {
  secCode: string[];
  secName: string[];
  categoryId: string;
  fileLink?: string; // fileLink 필드 추가
}

interface AnalysisDetails {
  topicKor: string;
  summarizeTinyKor: string;
  summarizeLongKor: string;
}

interface Disclosure {
  id: string;
  dataDate: string;
  korName: string;
  details: Details;
  analysisDetails: AnalysisDetails;
}

interface ClosureDataResponse {
  nextCursor: number;
  pages: Disclosure[];
}

// ----------------- 타입 변경 ---------------

export const getDisClosureData = async (
  pageParam: any,
  queryParameters: QueryParameters
): Promise<ClosureDataResponse> => {
  console.log("-------- getDisClosureData -----------");
  console.log("pageParam : ", pageParam);
  const { exchangeType, startDate, endDate } = queryParameters;
  const page = pageParam;

  console.log("getDisClosureData page : ", page);
  console.log("getDisClosureData exchangeType : ", exchangeType);
  // console.log("getDisClosureData startDate : ", startDate);
  // console.log("getDisClosureData endDate : ", endDate);

  // ✅ 현재 거래소가 '홍콩' 인지, '심천' 인지에 따라서 '선택해야 하는 더미DB'다름
  // let filteredDisclosure = dummyDisclosures[exchangeType]; // ✅✅ 기존

  let filteredDisclosure = totalTestDummy[exchangeType].data.getDisclosure;
  console.log("🙏🙏🙏🙏🙏🙏 filteredDisclosure : ", filteredDisclosure);
  console.log("🙏🙏🙏🙏🙏🙏 typeof : ", typeof filteredDisclosure);
  // alert(`filteredDisclosure : ${filteredDisclosure[0].details.categoryId}`)

  // ✅ 데이터 변환 잠시 스톱
  // filteredDisclosure = transformDataFn(filteredDisclosure, data.getDisclosure);

  filteredDisclosure = filteredDisclosure.map((item: any) => ({
    id: item.id,
    dataDate: item.dataDate,
    korName: item.korName,
    details: {      
      secCode:
        typeof item.details.secCode === "string"
          ? item.details.secCode
          : item.details.secCode[0],
      secName:
        typeof item.details.secName === "string"
          ? item.details.secName
          : item.details.secName[0],
      categoryId:
        typeof item.details.categoryId === "string"
          ? item.details.categoryId
          : item.details.categoryId[0],
      fileLink: item.details.fileLink || "", // 기본값을 빈 문자열로 설정
    },
    analysisDetails: {
      topicKor: item.analysisDetails.topicKor
        .split(" ")
        .map((topic: string) => topic.replace(/,/g, '').trim()) // 콤마 제거 및 공백 제거
        .slice(0, 3), // topicKor를 배열로 변환
      summarizeTinyKor: item.analysisDetails.summarizeTinyKor,
      summarizeLongKor: item.analysisDetails.summarizeLongKor,
    },
  }));

  console.log(`🔥🔥🔥🔥🔥 transformData ${exchangeType}`, transformData);

  
  // exchangeType 이 '홍콩' 이면, HONGKONG_DISCLOSUREDATA.json 에서 가져오고 - data > getDisclosure 까지 들어가면 형식 맞음
  // 이제 세세하게 depth 가 다른 부분 있는데 그거를 맞춰야 함
  // 아니면 이걸, 다시 함수로 만들어야 할 수도!
  // ✅✅✅ 여기에서 C:\Users\user11\OneDrive\바탕 화면\dj_dev\QRAFTEC_TEST\ai-content\lib\dummyBackend.ts
  // C:\Users\user11\OneDrive\바탕 화면\dj_dev\QRAFTEC_TEST\ai-content\lib\HONGKONG_DISCLOSUREDATA.json 여기에 있는 파일 가져오고 싶어

  const PAGE_SIZE = 2;
  const startIndex = 0;
  const endIndex = page * PAGE_SIZE + PAGE_SIZE;

  // 시작일과 종료일을 Date 객체로 변환
  const startCriteria = new Date(startDate + "T00:00:00"); //  날짜형식은 "2024-05-01T22:52:00"과 같이 ISO 8601 형식
  const endCriteria = new Date(endDate + "T23:59:59");

  // startDate 와 endDate 에 맞는 dataDate 필터링
  filteredDisclosure = filteredDisclosure.filter((item) => {
    const itemDate = new Date(item.dataDate); //
    return itemDate >= startCriteria && itemDate <= endCriteria;
  });

  // const nextCursor = totalNum > ( page * PAGE_SIZE) ? page + 1 : -1;
  // console.log("@nextCursor : ", nextCursor);

  // 만약, 부정적인거면, 안되는거면 -1 을 반환!!! | 위치를 이곳에 놓아야, nextCursor 이 제대로 먹음
  const totalNum = filteredDisclosure.length;
  const nextCursor = totalNum > endIndex ? page + 1 : -1;


  // pageNation : 기준페이지보다 많을 때만 진행
  const totalItemsNum = filteredDisclosure.length;
  if (totalItemsNum > PAGE_SIZE) {
    filteredDisclosure = filteredDisclosure.slice(startIndex, endIndex);
  }
  filteredDisclosure = filteredDisclosure.slice(startIndex, endIndex);
  // console.log("pageNation 완료 2️⃣ : ", filteredDisclosure); // 🔵작동 | PAGE_SIZE 2개를 했고, 작동함

  // [categoryId 변환] categoryId 에 넣어서 -> Kor필드로 반환 -> 이걸 다시 filteredDisclosure 에 넣기
  filteredDisclosure = filteredDisclosure.map((item) => {
    const korCategoryId = getKorCategoryId(
      exchangeType,
      item.details.categoryId
    );
    return {
      ...item, // 원본 배열을 수정하지 않도록, spread 연산자 사용
      details: {
        ...item.details,
        categoryId: korCategoryId,
        // fileLink: item.details.fileLink || "", // 기본값 설정
      },
    };
  });
  console.log("3️⃣ categoryId 변환 완료된 closure  : ", filteredDisclosure);



  const finalObj = {
    nextCursor: nextCursor,
    pages: filteredDisclosure,
  };

  console.log("📌lastPage 가 이렇게!? finalObj : ", finalObj);

  return finalObj;
  /*
  {

    
  }
*/
};
