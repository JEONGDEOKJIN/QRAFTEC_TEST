import {
  AnalysisDetails,
  DisClosureDataResponse,
  Details,
  QueryParameters,
} from "@/types";
import { totalTestDummy } from "./dummyData";
import { getKorCategoryId } from "./utils";

interface Disclosure {
  id: string;
  dataDate: string;
  korName: string;
  details: Details;
  analysisDetails: AnalysisDetails;
}

export const getDisClosureData = async (
  pageParam: any,
  queryParameters: QueryParameters
): Promise<DisClosureDataResponse> => {
  const { exchangeType, startDate, endDate } = queryParameters;
  const page = pageParam;

  let filteredDisclosure = totalTestDummy[exchangeType].data.getDisclosure;

  filteredDisclosure = filteredDisclosure.map((item: any) => ({
    id: item.id,
    dataDate: item.dataDate,
    korName: item.korName,
    details: {
      secCode: Array.isArray(item.details.secCode)
        ? item.details.secCode[0]
        : item.details.secCode, // 배열에서 첫 번째 항목 선택
      secName: Array.isArray(item.details.secName)
        ? item.details.secName[0]
        : item.details.secName, // 배열에서 첫 번째 항목 선택
      categoryId: Array.isArray(item.details.categoryId)
        ? item.details.categoryId[0]
        : item.details.categoryId, // 배열에서 첫 번째 항목 선택
      fileLink: item.details.fileLink || "", // 기본값을 빈 문자열로 설정
    },
    analysisDetails: {
      topicKor: Array.isArray(item.analysisDetails.topicKor)
        ? item.analysisDetails.topicKor
        : item.analysisDetails.topicKor
            .split(" ")
            .map((topic: string) => topic.replace(/,/g, "").trim()) // 콤마 제거 및 공백 제거
            .slice(0, 3), // topicKor를 배열로 변환
      summarizeTinyKor: item.analysisDetails.summarizeTinyKor,
      summarizeLongKor: item.analysisDetails.summarizeLongKor,
    },
  }));

  const PAGE_SIZE = 10;
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

  const totalNum = filteredDisclosure.length;
  const nextCursor = totalNum > endIndex ? page + 1 : -1; // nextCursor 없으면 -1 을 반환

  // pageNation : 기준페이지보다 많을 때만 진행
  const totalItemsNum = filteredDisclosure.length;
  if (totalItemsNum > PAGE_SIZE) {
    filteredDisclosure = filteredDisclosure.slice(startIndex, endIndex);
  }
  filteredDisclosure = filteredDisclosure.slice(startIndex, endIndex);

  // [categoryId 변환] categoryId 에 넣어서 -> Kor필드로 반환 -> 이걸 다시 filteredDisclosure 에 넣기
  filteredDisclosure = filteredDisclosure.map((item: any): Disclosure => {
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

  const finalObj = {
    nextCursor: nextCursor,
    pages: filteredDisclosure,
  };

  console.log("📌lastPage 가 이렇게!? finalObj : ", finalObj);

  return finalObj;
};
