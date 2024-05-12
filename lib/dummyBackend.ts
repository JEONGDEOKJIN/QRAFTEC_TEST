import { dummyDisclosures } from "./dummyData";
import { getKorCategoryId } from "./utils";


/* [getClosureData 함수 용례]
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
export const getClosureData = (req: any) => {
  const { page = 1, exchangeType, startDate, endDate } = req.query;

  let filteredDisclosure = dummyDisclosures;
  const PAGE_SIZE = 10;
  const startIndex = (page - 1) * PAGE_SIZE;
  const endIndex = (page - 1) * PAGE_SIZE + PAGE_SIZE;

  // 시작일과 종료일을 Date 객체로 변환
  // [input] startDate, endDate 이 문자열로 들어오나❓❓❓
  const startCriteria = new Date(startDate);
  const endCriteria = new Date(endDate);

  // startDate 와 endDate 에 맞는 dataDate 필터링
  filteredDisclosure = filteredDisclosure.filter((item) => {
    const itemDate = new Date(item.dataDate);
    return itemDate >= startCriteria && itemDate <= endCriteria;
  });

  const totalItemsNum = filteredDisclosure.length;

  // pageNation : 기준페이지보다 많을 때만 진행
  if (totalItemsNum > PAGE_SIZE) {
    filteredDisclosure = filteredDisclosure.slice(startIndex, endIndex);
  }

  // categoryId 에 넣어서 -> Kor필드로 반환 -> 이걸 다시 filteredDisclosure 에 넣기
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
      },
    };
  });

  // useInfiniteQuery 에서 사용할 수 있게, page 정보를 추가?

  return filteredDisclosure;
};
