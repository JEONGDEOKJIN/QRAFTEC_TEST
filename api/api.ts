// import { getDisClosureData } from "@/lib/dummyBackend";

// export const fetchDisClosureData = async (queryParameters: any) => {
//   console.log("👉queryParameters", queryParameters);
//   /* {
//         "startDate": "2022-01-01",
//         "endDate": "2022-12-01",
//         "exchangeType": "심천",
//         "page": 0 } 
//     */

//   const closureData = await getDisClosureData(queryParameters);
//   console.log("🧤🧤closureData", closureData);
//     // 👉👉closureData 여기에는 pageParams 랑 pages 가 제대로 있어!!! 

//   // `useInfiniteQuery`에 적합하게 데이터 포맷
//   //   return {
//   //     pageParams: [queryParameters.page], // 현재 페이지 매개변수
//   //     pages: closureData, // 현재 페이지 데이터
//   //   };

//   // pageParams와 pages 배열에 현재 데이터 추가
// //   return {
// //     pageParams: queryParameters.pageParams
// //       ? [...queryParameters.pageParams, queryParameters.page]
// //       : [queryParameters.page],
// //     pages: closureData
// //   };

//     return  closureData
// };
