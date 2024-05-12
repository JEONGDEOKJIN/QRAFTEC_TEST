import { getDisClosureData } from "@/lib/dummyBackend"


export const fetchDisClosureData = async (queryParameters : any) => {

    console.log("👉queryParameters" , queryParameters)
    /* {
        "startDate": "2022-01-01",
        "endDate": "2022-12-01",
        "exchangeType": "심천",
        "page": 0 } 
    */

    const closureData = await getDisClosureData(queryParameters)
    console.log("👉closureData" , closureData)

    // `useInfiniteQuery`에 적합하게 데이터 포맷 
    return {
        pageParams: [queryParameters.page], // 현재 페이지 매개변수
        pages: closureData // 현재 페이지 데이터
    };


} 