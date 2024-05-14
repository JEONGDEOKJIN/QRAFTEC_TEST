

// export const getClosureData = (req: any) => {
//   const { page = 1, exchangeType, startDate, endDate } = req.query;

//   let filteredDisclosure = dummyDisclosures;
//   const PAGE_SIZE = 10;
//   const startIndex = (page - 1) * PAGE_SIZE;
//   const endIndex = (page - 1) * PAGE_SIZE + PAGE_SIZE;
//   /*
//       page 요청 0 : slice(0~10) -> 실제 전달되는 건 0~9, 10개
//       page 요청 1 : slice(10~20) -> 실제 전달되는 건 10~19, 10개
//     */

//   // 시작일과 종료일을 Date 객체로 변환
//   // [input] startDate, endDate 이 문자열로 들어오나❓❓❓
//   const startCriteria = new Date(startDate);
//   const endCriteria = new Date(endDate);

//   // startDate 와 endDate 에 맞는 dataDate 필터링
//   filteredDisclosure = filteredDisclosure.filter((item) => {
//     const itemDate = new Date(item.dataDate);
//     return itemDate >= startCriteria && itemDate <= endCriteria;
//   });

//   const totalItemsNum = filteredDisclosure.length;

//   // pageNation
//   if (totalItemsNum > PAGE_SIZE) {
//     // 기준 페이지보다 많을 때, pageNation
//     filteredDisclosure = filteredDisclosure.slice(startIndex, endIndex);
//   }

//   // categoryId 에 넣어서 -> Kor필드로 반환 -> 이걸 다시 filteredDisclosure 에 넣기
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

//   // useInfiniteQuery 에서 사용할 수 있게, page 정보를 추가? 
    


//   return filteredDisclosure;
// };

export const dummyCategoryIdObj = {
  심천: [
    { value: "010301", kor: "연간보고서", org: "010301" },
    { value: "010303", kor: "2분기보고서", org: "010303" },
    { value: "010305", kor: "1분기보고서", org: "010305" },
    { value: "010307", kor: "3분기보고서", org: "010307" },
    { value: "0102", kor: "기업공개/상장", org: "0102" },
    { value: "0105", kor: "주식발행/증자", org: "0105" },
    { value: "0107", kor: "증자/제3자배정", org: "0107" },
    { value: "0109", kor: "전환사채", org: "0109" },
    { value: "0110", kor: "신주인수권부채권", org: "0110" },
    { value: "0111", kor: "기타융자", org: "0111" },
    { value: "0113", kor: "배당/보호예수해제", org: "0113" },
    { value: "0115", kor: "지분변경", org: "0115" },
    { value: "0117", kor: "투자/거래", org: "0117" },
    { value: "0119", kor: "주주총회", org: "0119" },
    { value: "0121", kor: "정정/경고/실적전망", org: "0121" },
    { value: "0125", kor: "유의종목/상장폐지", org: "0125" },
    { value: "0127", kor: "정정공시", org: "0127" },
    { value: "0129", kor: "외부감사보고", org: "0129" },
    { value: "0131", kor: "경영주요공시", org: "0131" },
    { value: "0139", kor: "채권발행", org: "0139" },
    { value: "0123", kor: "기타주요사항", org: "0123" },
    { value: "01239901", kor: "이사회공시", org: "01239901" },
    { value: "01239910", kor: "감사위원회공시", org: "01239910" },
  ],
  홍콩: [
    {
      value: "Announcements and Notices",
      kor: "일반공시",
      org: "Announcements and Notices",
    },
    { value: "Circulars", kor: "주요안내보고서", org: "Circulars" },
    { value: "Listing Documents", kor: "보고서", org: "Listing Documents" },
    {
      value: "Financial Statements/ESG Information",
      kor: "재무/ESG",
      org: "Financial Statements/ESG Information",
    },
    {
      value: "Next Day Disclosure Returns",
      kor: "발행주식수변동",
      org: "Next Day Disclosure Returns",
    },
    { value: "Monthly Returns", kor: "월간보고서", org: "Monthly Returns" },
    { value: "Proxy Forms", kor: "대리행사", org: "Proxy Forms" },
    {
      value: "Company Information Sheet",
      kor: "회사개요",
      org: "Company Information Sheet",
    },
    {
      value: "Trading Information of Exchange Traded Funds",
      kor: "ETF정보",
      org: "Trading Information of Exchange Traded Funds",
    },
    {
      value: "Trading Information of Leveraged and Inverse Products",
      kor: "파생상품거래정보",
      org: "Trading Information of Leveraged and Inverse Products",
    },
    {
      value: "Constitutional Documents",
      kor: "정관수정",
      org: "Constitutional Documents",
    },
    {
      value: "Documents on Display",
      kor: "기타공시",
      org: "Documents on Display",
    },
    {
      value: "Regulatory Announcement & News",
      kor: "공지/뉴스",
      org: "Regulatory Announcement & News",
    },
    {
      value: "Takeovers Code - dealing disclosures",
      kor: "거래공시",
      org: "Takeovers Code - dealing disclosures",
    },
    {
      value: "Debt and Structured Products",
      kor: "부채/구조화상품",
      org: "Debt and Structured Products",
    },
    {
      value: "Documents on Display (Debt Issuance Programmes)",
      kor: "채권발행",
      org: "Documents on Display (Debt Issuance Programmes)",
    },
    {
      value: "Documents on Display (Debt Securities)",
      kor: "채무증권",
      org: "Documents on Display (Debt Securities)",
    },
    {
      value: "Documents on Display (Structured Products)",
      kor: "구조화상품",
      org: "Documents on Display (Structured Products)",
    },
  ],
};

// export const getKorCategoryId = (exchangeType: any, value: any) => {
//   const dummyCategoryIdJSON = JSON.parse(getDummyCategoryIdJSON());
//   /* [getDummyCategoryIdJSON 사용 이유] 
//     - 혹시, 실제 GPT 로 부터 받게되는 데이터는, string 으로 들어왔던 경험이 있어서.
//     - 만약, 자바스크립트 객체로 들어오면, getDummyCategoryIdJSON 에서 json.stringfy 안 하면 됨
//   */

//   const specificCategoryIdArr = dummyCategoryIdJSON[exchangeType];
//   if (!specificCategoryIdArr) return undefined; // 해당 카테고리 없음

//   // ex) '홍콩' 중 value(숫자값) 이 input(매개변수)의 value 와 같은 '첫번째' item 을 반환
//   const targetValue = specificCategoryIdArr.find((item: any) => {
//     return item.value === value;
//   });

//   return targetValue.kor;
// };

// export const getDummyCategoryIdJSON = () => {
//   return JSON.stringify(dummyCategoryIdObj, null, 2);
//   // 가독성을 높이기 위해 두 번째 인자인 null과 세 번째 인자인 2를 사용하여 들여쓰기
// };

export const dummyDisclosures = [
  {
    id: 0,
    dataDate: "2024-05-01T22:52:00",
    korName: "삼성전자",
    details: {
      secCode: "005930",
      secName: "삼성전자 주식",
      categoryId: "010301",
    },
    analysisDetails: {
      topicKor: "투자 발표",
      summarizeTinyKor: "삼성전자, 새로운 투자 발표",
      summarizeLongKor:
        "삼성전자는 오늘 주요 기술 투자에 대한 공시를 발표하였습니다. 주요 내용은...",
    },
  },
  {
    id: 1,
    dataDate: "2024-05-02T22:52:00",
    korName: "현대자동차",
    details: {
      secCode: "005380",
      secName: "현대자동차 주식",
      categoryId: "010303",
    },
    analysisDetails: {
      topicKor: "재무 결과 발표",
      summarizeTinyKor: "현대자동차, 분기 재무 결과 발표",
      summarizeLongKor:
        "현대자동차는 이번 분기에 대한 재무 결과를 발표하였습니다. 순이익은...",
    },
  },
  {
    id: 2,
    dataDate: "2024-05-03T22:52:00",
    korName: "SK하이닉스",
    details: {
      secCode: "000660",
      secName: "SK하이닉스 주식",
      categoryId: "010305",
    },
    analysisDetails: {
      topicKor: "인수 합병",
      summarizeTinyKor: "SK하이닉스, 인수 합병 계획 발표",
      summarizeLongKor:
        "SK하이닉스는 새로운 기업 인수 합병 계획을 발표하였습니다. 이번 인수로...",
    },
  },
  {
    id: 3,
    dataDate: "2024-05-04T22:52:00",
    korName: "LG전자",
    details: {
      secCode: "066570",
      secName: "LG전자 주식",
      categoryId: "010307",
    },
    analysisDetails: {
      topicKor: "배당 발표",
      summarizeTinyKor: "LG전자, 배당 발표",
      summarizeLongKor:
        "LG전자는 이번 분기 배당에 대한 발표를 진행했습니다. 배당율은...",
    },
  },
  {
    id: 4,
    dataDate: "2024-05-05T22:52:00",
    details: {
      secCode: "035420",
      secName: "NAVER 주식",
      categoryId: "0102",
    },
    analysisDetails: {
      topicKor: "신제품 출시",
      summarizeTinyKor: "NAVER, 신제품 출시 발표",
      summarizeLongKor:
        "NAVER는 최신 검색 기술을 활용한 신제품을 출시합니다. 주요 기능은...",
    },
  },
  {
    id: 5,
    dataDate: "2024-05-06T22:52:00",
    korName: "카카오",
    details: {
      secCode: "035720",
      secName: "카카오 주식",
      categoryId: "0111",
    },
    analysisDetails: {
      topicKor: "사업 확장",
      summarizeTinyKor: "카카오, 사업 확장 계획 발표",
      summarizeLongKor:
        "카카오는 글로벌 시장을 겨냥한 사업 확장 계획을 발표했습니다. 핵심 내용은...",
    },
  },
  {
    id: 6,
    dataDate: "2024-05-07T22:52:00",
    korName: "POSCO",
    details: {
      secCode: "005490",
      secName: "POSCO 주식",
      categoryId: "0111",
    },
    analysisDetails: {
      topicKor: "시장 전략",
      summarizeTinyKor: "POSCO, 새로운 시장 전략 발표",
      summarizeLongKor:
        "POSCO는 글로벌 시장에 진출하기 위한 전략적 계획을 발표했습니다. 세부 내용은...",
    },
  },
  {
    id: 7,
    dataDate: "2024-05-08T22:52:00",
    korName: "KB금융",
    details: {
      secCode: "105560",
      secName: "KB금융 주식",
      categoryId: "010301",
    },
    analysisDetails: {
      topicKor: "주식 발행",
      summarizeTinyKor: "KB금융, 주식 발행 발표",
      summarizeLongKor:
        "KB금융은 자본 구조 조정을 위해 주식을 새로 발행할 계획입니다. 세부 내용은...",
    },
  },
  {
    id: 8,
    dataDate: "2024-05-09T22:52:00",
    korName: "셀트리온",
    details: {
      secCode: "068270",
      secName: "셀트리온 주식",
      categoryId: "0115",
    },
    analysisDetails: {
      topicKor: "재무 분석",
      summarizeTinyKor: "셀트리온, 재무 분석 결과 발표",
      summarizeLongKor:
        "셀트리온은 향후 성장 전망을 바탕으로 재무 분석 결과를 발표하였습니다. 요점은...",
    },
  },
  {
    id: 9,
    dataDate: "2024-05-10T22:52:00",
    korName: "한국전력공사",
    details: {
      secCode: "015760",
      secName: "한국전력공사 주식",
      categoryId: "0102",
    },
    analysisDetails: {
      topicKor: "시장 보고서",
      summarizeTinyKor: "한국전력공사, 시장 보고서 발표",
      summarizeLongKor:
        "한국전력공사는 국내 전력 시장 동향에 대한 새로운 보고서를 발표하였습니다. 주요 내용은...",
    },
  },
];

// lib/dummyData.ts
export interface Item {
  id: number;
  title: string;
  body: string;
}

export interface FetchItemsResponse {
  data: Item[];
  nextPage: number;
  hasMore: boolean;
}

export const fetchItems = async (page = 0): Promise<FetchItemsResponse> => {
  const itemsPerPage = 10;
  const totalItems = 50;
  const allItems = Array.from({ length: totalItems }, (_, index) => ({
    id: index + 1,
    title: `Item ${index + 1}`,
    body: `This is the body of item ${index + 1}`,
  }));

  const start = page * itemsPerPage;
  const end = start + itemsPerPage;
  const data = allItems.slice(start, end);

  return {
    data,
    nextPage: page + 1,
    hasMore: end < totalItems,
  };
};