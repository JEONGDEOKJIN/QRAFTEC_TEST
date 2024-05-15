// import { dummyDisclosures } from "./dummyData";
// import { getKorCategoryId } from "./utils";

// /* [getDisClosureData 함수 용례]
//     1. [매개변수 input] page, filter 키워드 
//     2. [process] 
//         - startDate, endDate 받아서 -> dataDate 필터링
//         - pageNation
//         - exchangeType 으로 categoryId 변환 (더 적은 페이지로 변환하면 빠르게 끝날 것 같아서)
//     3. [return] 
//         [{  id: 0,
//             dataDate: "2024-05-01",
//             korName: "삼성전자",
//             details: {
//             secCode: "005930",
//             secName: "삼성전자 주식",
//             categoryId: "100",
//             },
//             analysisDetails: {
//             topicKor: "투자 발표",
//             summarizeTinyKor: "삼성전자, 새로운 투자 발표",
//             summarizeLongKor:
//                 "삼성전자는 오늘 주요 기술 투자에 대한 공시를 발표하였습니다. 주요 내용은...",
//             },
//             {...}
//         ]
// */

// export const getDisClosureData = async (
//   pageParam: any,
//   queryParameters: any
// ) => {
//   /* req 데이터 예시 
//         {
//         "startDate": "2022-01-01",
//         "endDate": "2022-12-01",
//         "exchangeType": "심천",
//         "page": 0 } 
//     */
//   console.log("-------- getDisClosureData -----------");
//   console.log("pageParam : ", pageParam);
//   const { exchangeType, startDate, endDate } = queryParameters;
//   const page = pageParam;

//   console.log("page : ", page);
//   console.log("exchangeType : ", exchangeType);
//   console.log("startDate : ", startDate);
//   console.log("endDate : ", endDate);

//   // console.log("dummyDisclosures : ", dummyDisclosures);
//   /* [{
//         "id": 0,
//         "dataDate": "2024-05-01",
//         "korName": "삼성전자",
//         "details": {
//             "secCode": "005930",
//             "secName": "삼성전자 주식",
//             "categoryId": "100"
//         },
//         "analysisDetails": {
//             "topicKor": "투자 발표",
//             "summarizeTinyKor": "삼성전자, 새로운 투자 발표",
//             "summarizeLongKor": "삼성전자는 오늘 주요 기술 투자에 대한 공시를 발표하였습니다. 주요 내용은..."
//         }
//     }, {}... ]
//   */

//   let filteredDisclosure = dummyDisclosures;
//   // console.log("filteredDisclosure : ", filteredDisclosure);

//   const PAGE_SIZE = 2;
//   const startIndex = 0;
//   const endIndex = page * PAGE_SIZE + PAGE_SIZE;

//   // 시작일과 종료일을 Date 객체로 변환
//   // [input] startDate, endDate 이 문자열로 들어오나❓❓❓

//   /*  날짜의 형식은 "2024-05-01T22:52:00"과 같이 ISO 8601 형식을 따름 
//       시간 정보가 없으면 - 임의로 넣어줌
//   */
//   const startCriteria = new Date(startDate + "T00:00:00");
//   const endCriteria = new Date(endDate + "T23:59:59");
//   // console.log("날짜 type 체크 : ", typeof(startCriteria) , typeof(endCriteria)) // object, object
//   // console.log("startCriteria & endCriteria : ", startCriteria , endCriteria);

//   // startDate 와 endDate 에 맞는 dataDate 필터링
//   filteredDisclosure = filteredDisclosure.filter((item) => {
//     const itemDate = new Date(item.dataDate); //
//     return itemDate >= startCriteria && itemDate <= endCriteria;
//   });
//   console.log("1️⃣ dateDate 필터링 완료 : ", filteredDisclosure); //🔵작동 📛 실제 calendar 에서 날짜 넘기면 애매함
//   console.log("1️⃣ dateDate 필터링 완료 : ", filteredDisclosure[0]); //🔵작동 📛 실제 calendar 에서 날짜 넘기면 애매함
//   console.log("1️⃣ dateDate 필터링 완료 : ", filteredDisclosure[page]); //🔵작동 📛 실제 calendar 에서 날짜 넘기면 애매함

//   const selectedDisclosure = filteredDisclosure[page];
//   console.log("1️⃣ dateDate 필터링 완료 : ", selectedDisclosure); //🔵작동 📛 실제 calendar 에서 날짜 넘기면 애매함




//   // pageNation : 기준페이지보다 많을 때만 진행
//   const totalItemsNum = filteredDisclosure.length;
//   if (totalItemsNum > PAGE_SIZE) {
//     filteredDisclosure = filteredDisclosure.slice(startIndex, endIndex);
//   }
//   filteredDisclosure = filteredDisclosure.slice(startIndex, endIndex);
//   console.log("pageNation 완료 2️⃣ : ", filteredDisclosure); // 🔵작동 | PAGE_SIZE 2개를 했고, 작동함

//   // [categoryId 변환] categoryId 에 넣어서 -> Kor필드로 반환 -> 이걸 다시 filteredDisclosure 에 넣기
//   filteredDisclosure = filteredDisclosure.map((item) => {
//     const korCategoryId = getKorCategoryId(
//       exchangeType,
//       item.details.categoryId
//     );
//     return {
//       ...item, // 원본 배열을 수정하지 않도록, spread 연산자 사용
//       details: {
//         ...item.details,
//         categoryId: korCategoryId,
//       },
//     };
//   });
//   console.log("3️⃣ categoryId 변환 완료된 closure  : ", filteredDisclosure);

//   // filteredDisclosure 이 객체에 nextCursor 키를 추가하려면? 📛📛📛 4
//   // 만약, 부정적인거면, 안되는거면 -1 을 반환!!!
//   const nextCursor = filteredDisclosure.length === PAGE_SIZE ? page + 1 : -1;

//   // filteredDisclosure 객체에 추가하기
//   filteredDisclosure = filteredDisclosure.map((item) => {
//     return {
//       ...item,
//       nextCursor: nextCursor,
//     };
//   });

//   console.log("4️⃣ nextCursor 완료된 filteredDisclosure : ", filteredDisclosure);

//   // useInfiniteQuery 에서 사용할 수 있게, page 정보를 추가해서 return 해야? 📛📛📛📛📛
//   // filteredDisclosure = {
//   //   pageParams: [page],
//   //   pages: filteredDisclosure,
//   // };
//   // }

//   // filteredDisclosure 이 객체에 nextCursor 키를 추가하려면? 📛📛📛
//   // const nextCursor = filteredDisclosure.length === PAGE_SIZE ? page + 1 : null;
//   // console.log("nextCursor 4️⃣: ", nextCursor);

//   return filteredDisclosure;
// /*
//   {
    
    
//   }
// */

// };
