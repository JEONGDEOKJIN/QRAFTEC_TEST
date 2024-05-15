import fs from "fs";
import path from "path";

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

export const dummyDisclosures = {
  심천: [
    {
      id: 0,
      dataDate: "2024-05-01T22:52:00",
      korName: "심천 삼성전자",
      details: {
        secCode: "005930",
        secName: "삼성전자 주식",
        categoryId: "010301",
      },
      analysisDetails: {
        topicKor: ["주식 발행", "현금 지급", "지분 인수"],
        summarizeTinyKor:
          "안산중흥기계, 주식 발행 및 현금 지급을 통해 Jiangxi Jinhui Renewable Resources의 30% 지분을 인수 계획",
        summarizeLongKor:
          "안산중흥기계는 주식 발행 및 현금 지급을 통해 Jiangxi Jinhui Renewable Resources의 30% 지분을 인수 계획을 발표했다. 회사는 법적 절차의 완전성과 준수, 제출된 법적 문서의 유효성을 철저히 검토했다. 회사는 관련 법령에서 요구하는 법적 절차를 준수하였으며, 법적으로 유효한 법적 문서를 제출했다. 회사는 내부자 명단을 Shenzhen Stock Exchange에 제출하였으며, 관련 법령을 준수했다.",
      },
    },
    {
      id: 1,
      dataDate: "2024-05-02T22:52:00",
      korName: "심천 현대자동차 심천",
      details: {
        secCode: "005380",
        secName: "현대자동차 주식",
        categoryId: "010303",
      },
      analysisDetails: {
        topicKor: ["주식 발행", "지분 인수", "현금 지급"],
        summarizeTinyKor:
          "안산중흥기계, 주식 발행 및 현금 지급을 통해 Jiangxi Jinhui Renewable Resources의 30% 지분을 인수 계획",
        summarizeLongKor:
          "안산중흥기계는 주식 발행 및 현금 지급을 통해 Jiangxi Jinhui Renewable Resources의 30% 지분을 인수 계획을 발표했다. 회사는 법적 절차의 완전성과 준수, 제출된 법적 문서의 유효성을 철저히 검토했다. 회사는 관련 법령에서 요구하는 법적 절차를 준수하였으며, 법적으로 유효한 법적 문서를 제출했다. 회사는 내부자 명단을 Shenzhen Stock Exchange에 제출하였으며, 관련 법령을 준수했다.",
      },
    },
    {
      id: 2,
      dataDate: "2024-05-03T22:52:00",
      korName: "심천 SK하이닉스",
      details: {
        secCode: "000660",
        secName: "SK하이닉스 주식",
        categoryId: "010305",
      },
      analysisDetails: {
        topicKor: ["주식 발행"],
        summarizeTinyKor:
          "안산중흥기계, 주식 발행 및 현금 지급을 통해 Jiangxi Jinhui Renewable Resources의 30% 지분을 인수 계획",
        summarizeLongKor:
          "안산중흥기계는 주식 발행 및 현금 지급을 통해 Jiangxi Jinhui Renewable Resources의 30% 지분을 인수 계획을 발표했다. 회사는 법적 절차의 완전성과 준수, 제출된 법적 문서의 유효성을 철저히 검토했다. 회사는 관련 법령에서 요구하는 법적 절차를 준수하였으며, 법적으로 유효한 법적 문서를 제출했다. 회사는 내부자 명단을 Shenzhen Stock Exchange에 제출하였으며, 관련 법령을 준수했다.",
      },
    },
    {
      id: 3,
      dataDate: "2024-05-04T22:52:00",
      korName: "심천 LG전자",
      details: {
        secCode: "066570",
        secName: "LG전자 주식",
        categoryId: "010307",
      },
      analysisDetails: {
        topicKor: ["주식 발행", "지분 인수", "현금 지급"],
        summarizeTinyKor:
          "안산중흥기계, 주식 발행 및 현금 지급을 통해 Jiangxi Jinhui Renewable Resources의 30% 지분을 인수 계획",
        summarizeLongKor:
          "안산중흥기계는 주식 발행 및 현금 지급을 통해 Jiangxi Jinhui Renewable Resources의 30% 지분을 인수 계획을 발표했다. 회사는 법적 절차의 완전성과 준수, 제출된 법적 문서의 유효성을 철저히 검토했다. 회사는 관련 법령에서 요구하는 법적 절차를 준수하였으며, 법적으로 유효한 법적 문서를 제출했다. 회사는 내부자 명단을 Shenzhen Stock Exchange에 제출하였으며, 관련 법령을 준수했다.",
      },
    },
    {
      id: 4,
      dataDate: "2024-05-05T22:52:00",
      korName: "심천 NAVER",
      details: {
        secCode: "035420",
        secName: "NAVER 주식",
        categoryId: "0102",
      },
      analysisDetails: {
        topicKor: ["주식 발행", "지분 인수", "현금 지급"],
        summarizeTinyKor:
          "안산중흥기계, 주식 발행 및 현금 지급을 통해 Jiangxi Jinhui Renewable Resources의 30% 지분을 인수 계획",
        summarizeLongKor:
          "안산중흥기계는 주식 발행 및 현금 지급을 통해 Jiangxi Jinhui Renewable Resources의 30% 지분을 인수 계획을 발표했다. 회사는 법적 절차의 완전성과 준수, 제출된 법적 문서의 유효성을 철저히 검토했다. 회사는 관련 법령에서 요구하는 법적 절차를 준수하였으며, 법적으로 유효한 법적 문서를 제출했다. 회사는 내부자 명단을 Shenzhen Stock Exchange에 제출하였으며, 관련 법령을 준수했다.",
      },
    },
    {
      id: 5,
      dataDate: "2024-05-06T22:52:00",
      korName: "심천 카카오",
      details: {
        secCode: "035720",
        secName: "카카오 주식",
        categoryId: "0111",
      },
      analysisDetails: {
        topicKor: ["주식 발행", "지분 인수", "현금 지급"],
        summarizeTinyKor:
          "안산중흥기계, 주식 발행 및 현금 지급을 통해 Jiangxi Jinhui Renewable Resources의 30% 지분을 인수 계획",
        summarizeLongKor:
          "안산중흥기계는 주식 발행 및 현금 지급을 통해 Jiangxi Jinhui Renewable Resources의 30% 지분을 인수 계획을 발표했다. 회사는 법적 절차의 완전성과 준수, 제출된 법적 문서의 유효성을 철저히 검토했다. 회사는 관련 법령에서 요구하는 법적 절차를 준수하였으며, 법적으로 유효한 법적 문서를 제출했다. 회사는 내부자 명단을 Shenzhen Stock Exchange에 제출하였으며, 관련 법령을 준수했다.",
      },
    },
    {
      id: 6,
      dataDate: "2024-05-07T22:52:00",
      korName: "심천 POSCO",
      details: {
        secCode: "005490",
        secName: "POSCO 주식",
        categoryId: "0111",
      },
      analysisDetails: {
        topicKor: ["주식 발행", "지분 인수", "현금 지급"],
        summarizeTinyKor:
          "안산중흥기계, 주식 발행 및 현금 지급을 통해 Jiangxi Jinhui Renewable Resources의 30% 지분을 인수 계획",
        summarizeLongKor:
          "안산중흥기계는 주식 발행 및 현금 지급을 통해 Jiangxi Jinhui Renewable Resources의 30% 지분을 인수 계획을 발표했다. 회사는 법적 절차의 완전성과 준수, 제출된 법적 문서의 유효성을 철저히 검토했다. 회사는 관련 법령에서 요구하는 법적 절차를 준수하였으며, 법적으로 유효한 법적 문서를 제출했다. 회사는 내부자 명단을 Shenzhen Stock Exchange에 제출하였으며, 관련 법령을 준수했다.",
      },
    },
    {
      id: 7,
      dataDate: "2024-05-08T22:52:00",
      korName: "심천 KB금융",
      details: {
        secCode: "105560",
        secName: "KB금융 주식",
        categoryId: "010301",
      },
      analysisDetails: {
        topicKor: ["주식 발행", "지분 인수", "현금 지급"],
        summarizeTinyKor:
          "안산중흥기계, 주식 발행 및 현금 지급을 통해 Jiangxi Jinhui Renewable Resources의 30% 지분을 인수 계획",
        summarizeLongKor:
          "안산중흥기계는 주식 발행 및 현금 지급을 통해 Jiangxi Jinhui Renewable Resources의 30% 지분을 인수 계획을 발표했다. 회사는 법적 절차의 완전성과 준수, 제출된 법적 문서의 유효성을 철저히 검토했다. 회사는 관련 법령에서 요구하는 법적 절차를 준수하였으며, 법적으로 유효한 법적 문서를 제출했다. 회사는 내부자 명단을 Shenzhen Stock Exchange에 제출하였으며, 관련 법령을 준수했다.",
      },
    },
    {
      id: 8,
      dataDate: "2024-05-09T22:52:00",
      korName: "심천 셀트리온",
      details: {
        secCode: "068270",
        secName: "셀트리온 주식",
        categoryId: "0115",
      },
      analysisDetails: {
        topicKor: ["주식 발행", "지분 인수", "현금 지급"],
        summarizeTinyKor:
          "안산중흥기계, 주식 발행 및 현금 지급을 통해 Jiangxi Jinhui Renewable Resources의 30% 지분을 인수 계획",
        summarizeLongKor:
          "안산중흥기계는 주식 발행 및 현금 지급을 통해 Jiangxi Jinhui Renewable Resources의 30% 지분을 인수 계획을 발표했다. 회사는 법적 절차의 완전성과 준수, 제출된 법적 문서의 유효성을 철저히 검토했다. 회사는 관련 법령에서 요구하는 법적 절차를 준수하였으며, 법적으로 유효한 법적 문서를 제출했다. 회사는 내부자 명단을 Shenzhen Stock Exchange에 제출하였으며, 관련 법령을 준수했다.",
      },
    },
    {
      id: 9,
      dataDate: "2024-05-10T22:52:00",
      korName: "심천 한국전력공사",
      details: {
        secCode: "015760",
        secName: "한국전력공사 주식",
        categoryId: "0102",
      },
      analysisDetails: {
        topicKor: ["주식 발행", "지분 인수", "현금 지급"],
        summarizeTinyKor:
          "안산중흥기계, 주식 발행 및 현금 지급을 통해 Jiangxi Jinhui Renewable Resources의 30% 지분을 인수 계획",
        summarizeLongKor:
          "안산중흥기계는 주식 발행 및 현금 지급을 통해 Jiangxi Jinhui Renewable Resources의 30% 지분을 인수 계획을 발표했다. 회사는 법적 절차의 완전성과 준수, 제출된 법적 문서의 유효성을 철저히 검토했다. 회사는 관련 법령에서 요구하는 법적 절차를 준수하였으며, 법적으로 유효한 법적 문서를 제출했다. 회사는 내부자 명단을 Shenzhen Stock Exchange에 제출하였으며, 관련 법령을 준수했다.",
      },
    },
  ],
  홍콩: [
    {
      id: 0,
      dataDate: "2024-05-01T22:52:00",
      korName: "삼성전자 홍콩",
      details: {
        secCode: "005930",
        secName: "삼성전자 주식",
        categoryId: "Announcements and Notices",
      },
      analysisDetails: {
        topicKor: ["주식 발행", "현금 지급"],
        summarizeTinyKor:
          "안산중흥기계, 주식 발행 및 현금 지급을 통해 Jiangxi Jinhui Renewable Resources의 30% 지분을 인수 계획",
        summarizeLongKor:
          "안산중흥기계는 주식 발행 및 현금 지급을 통해 Jiangxi Jinhui Renewable Resources의 30% 지분을 인수 계획을 발표했다. 회사는 법적 절차의 완전성과 준수, 제출된 법적 문서의 유효성을 철저히 검토했다. 회사는 관련 법령에서 요구하는 법적 절차를 준수하였으며, 법적으로 유효한 법적 문서를 제출했다. 회사는 내부자 명단을 Shenzhen Stock Exchange에 제출하였으며, 관련 법령을 준수했다.",
      },
    },
    {
      id: 1,
      dataDate: "2024-05-02T22:52:00",
      korName: "현대자동차 홍콩",
      details: {
        secCode: "005380",
        secName: "현대자동차 주식",
        categoryId: "Circulars",
      },
      analysisDetails: {
        topicKor: ["주식 발행", "지분 인수", "현금 지급"],
        summarizeTinyKor:
          "안산중흥기계, 주식 발행 및 현금 지급을 통해 Jiangxi Jinhui Renewable Resources의 30% 지분을 인수 계획",
        summarizeLongKor:
          "안산중흥기계는 주식 발행 및 현금 지급을 통해 Jiangxi Jinhui Renewable Resources의 30% 지분을 인수 계획을 발표했다. 회사는 법적 절차의 완전성과 준수, 제출된 법적 문서의 유효성을 철저히 검토했다. 회사는 관련 법령에서 요구하는 법적 절차를 준수하였으며, 법적으로 유효한 법적 문서를 제출했다. 회사는 내부자 명단을 Shenzhen Stock Exchange에 제출하였으며, 관련 법령을 준수했다.",
      },
    },
    {
      id: 2,
      dataDate: "2024-05-03T22:52:00",
      korName: "홍콩 SK하이닉스",
      details: {
        secCode: "000660",
        secName: "SK하이닉스 주식",
        categoryId: "Listing Documents",
      },
      analysisDetails: {
        topicKor: ["주식 발행"],
        summarizeTinyKor:
          "안산중흥기계, 주식 발행 및 현금 지급을 통해 Jiangxi Jinhui Renewable Resources의 30% 지분을 인수 계획",
        summarizeLongKor:
          "안산중흥기계는 주식 발행 및 현금 지급을 통해 Jiangxi Jinhui Renewable Resources의 30% 지분을 인수 계획을 발표했다. 회사는 법적 절차의 완전성과 준수, 제출된 법적 문서의 유효성을 철저히 검토했다. 회사는 관련 법령에서 요구하는 법적 절차를 준수하였으며, 법적으로 유효한 법적 문서를 제출했다. 회사는 내부자 명단을 Shenzhen Stock Exchange에 제출하였으며, 관련 법령을 준수했다.",
      },
    },
    {
      id: 3,
      dataDate: "2024-05-04T22:52:00",
      korName: "홍콩 LG전자",
      details: {
        secCode: "066570",
        secName: "LG전자 주식",
        categoryId: "Financial Statements/ESG Information",
      },
      analysisDetails: {
        topicKor: ["주식 발행", "지분 인수", "현금 지급"],
        summarizeTinyKor:
          "안산중흥기계, 주식 발행 및 현금 지급을 통해 Jiangxi Jinhui Renewable Resources의 30% 지분을 인수 계획",
        summarizeLongKor:
          "안산중흥기계는 주식 발행 및 현금 지급을 통해 Jiangxi Jinhui Renewable Resources의 30% 지분을 인수 계획을 발표했다. 회사는 법적 절차의 완전성과 준수, 제출된 법적 문서의 유효성을 철저히 검토했다. 회사는 관련 법령에서 요구하는 법적 절차를 준수하였으며, 법적으로 유효한 법적 문서를 제출했다. 회사는 내부자 명단을 Shenzhen Stock Exchange에 제출하였으며, 관련 법령을 준수했다.",
      },
    },
    {
      id: 4,
      dataDate: "2024-05-05T22:52:00",
      korName: "홍콩 NAVER",
      details: {
        secCode: "035420",
        secName: "NAVER 주식",
        categoryId: "Circulars",
      },
      analysisDetails: {
        topicKor: ["주식 발행", "지분 인수", "현금 지급"],
        summarizeTinyKor:
          "안산중흥기계, 주식 발행 및 현금 지급을 통해 Jiangxi Jinhui Renewable Resources의 30% 지분을 인수 계획",
        summarizeLongKor:
          "안산중흥기계는 주식 발행 및 현금 지급을 통해 Jiangxi Jinhui Renewable Resources의 30% 지분을 인수 계획을 발표했다. 회사는 법적 절차의 완전성과 준수, 제출된 법적 문서의 유효성을 철저히 검토했다. 회사는 관련 법령에서 요구하는 법적 절차를 준수하였으며, 법적으로 유효한 법적 문서를 제출했다. 회사는 내부자 명단을 Shenzhen Stock Exchange에 제출하였으며, 관련 법령을 준수했다.",
      },
    },
    {
      id: 5,
      dataDate: "2024-05-06T22:52:00",
      korName: "홍콩 카카오",
      details: {
        secCode: "035720",
        secName: "카카오 주식",
        categoryId: "Circulars",
      },
      analysisDetails: {
        topicKor: ["주식 발행", "지분 인수", "현금 지급"],
        summarizeTinyKor:
          "안산중흥기계, 주식 발행 및 현금 지급을 통해 Jiangxi Jinhui Renewable Resources의 30% 지분을 인수 계획",
        summarizeLongKor:
          "안산중흥기계는 주식 발행 및 현금 지급을 통해 Jiangxi Jinhui Renewable Resources의 30% 지분을 인수 계획을 발표했다. 회사는 법적 절차의 완전성과 준수, 제출된 법적 문서의 유효성을 철저히 검토했다. 회사는 관련 법령에서 요구하는 법적 절차를 준수하였으며, 법적으로 유효한 법적 문서를 제출했다. 회사는 내부자 명단을 Shenzhen Stock Exchange에 제출하였으며, 관련 법령을 준수했다.",
      },
    },
    {
      id: 6,
      dataDate: "2024-05-07T22:52:00",
      korName: "홍콩 POSCO",
      details: {
        secCode: "005490",
        secName: "POSCO 주식",
        categoryId: "Circulars",
      },
      analysisDetails: {
        topicKor: ["주식 발행", "지분 인수", "현금 지급"],
        summarizeTinyKor:
          "안산중흥기계, 주식 발행 및 현금 지급을 통해 Jiangxi Jinhui Renewable Resources의 30% 지분을 인수 계획",
        summarizeLongKor:
          "안산중흥기계는 주식 발행 및 현금 지급을 통해 Jiangxi Jinhui Renewable Resources의 30% 지분을 인수 계획을 발표했다. 회사는 법적 절차의 완전성과 준수, 제출된 법적 문서의 유효성을 철저히 검토했다. 회사는 관련 법령에서 요구하는 법적 절차를 준수하였으며, 법적으로 유효한 법적 문서를 제출했다. 회사는 내부자 명단을 Shenzhen Stock Exchange에 제출하였으며, 관련 법령을 준수했다.",
      },
    },
    {
      id: 7,
      dataDate: "2024-05-08T22:52:00",
      korName: "홍콩 KB금융",
      details: {
        secCode: "105560",
        secName: "KB금융 주식",
        categoryId: "Circulars",
      },
      analysisDetails: {
        topicKor: ["주식 발행", "지분 인수", "현금 지급"],
        summarizeTinyKor:
          "안산중흥기계, 주식 발행 및 현금 지급을 통해 Jiangxi Jinhui Renewable Resources의 30% 지분을 인수 계획",
        summarizeLongKor:
          "안산중흥기계는 주식 발행 및 현금 지급을 통해 Jiangxi Jinhui Renewable Resources의 30% 지분을 인수 계획을 발표했다. 회사는 법적 절차의 완전성과 준수, 제출된 법적 문서의 유효성을 철저히 검토했다. 회사는 관련 법령에서 요구하는 법적 절차를 준수하였으며, 법적으로 유효한 법적 문서를 제출했다. 회사는 내부자 명단을 Shenzhen Stock Exchange에 제출하였으며, 관련 법령을 준수했다.",
      },
    },
    {
      id: 8,
      dataDate: "2024-05-09T22:52:00",
      korName: "홍콩 셀트리온",
      details: {
        secCode: "068270",
        secName: "셀트리온 주식",
        categoryId: "Circulars",
      },
      analysisDetails: {
        topicKor: ["주식 발행", "지분 인수", "현금 지급"],
        summarizeTinyKor:
          "안산중흥기계, 주식 발행 및 현금 지급을 통해 Jiangxi Jinhui Renewable Resources의 30% 지분을 인수 계획",
        summarizeLongKor:
          "안산중흥기계는 주식 발행 및 현금 지급을 통해 Jiangxi Jinhui Renewable Resources의 30% 지분을 인수 계획을 발표했다. 회사는 법적 절차의 완전성과 준수, 제출된 법적 문서의 유효성을 철저히 검토했다. 회사는 관련 법령에서 요구하는 법적 절차를 준수하였으며, 법적으로 유효한 법적 문서를 제출했다. 회사는 내부자 명단을 Shenzhen Stock Exchange에 제출하였으며, 관련 법령을 준수했다.",
      },
    },
    {
      id: 9,
      dataDate: "2024-05-10T22:52:00",
      korName: "홍콩 한국전력공사",
      details: {
        secCode: "015760",
        secName: "한국전력공사 주식",
        categoryId: "Circulars",
      },
      analysisDetails: {
        topicKor: ["주식 발행", "지분 인수", "현금 지급"],
        summarizeTinyKor:
          "안산중흥기계, 주식 발행 및 현금 지급을 통해 Jiangxi Jinhui Renewable Resources의 30% 지분을 인수 계획",
        summarizeLongKor:
          "안산중흥기계는 주식 발행 및 현금 지급을 통해 Jiangxi Jinhui Renewable Resources의 30% 지분을 인수 계획을 발표했다. 회사는 법적 절차의 완전성과 준수, 제출된 법적 문서의 유효성을 철저히 검토했다. 회사는 관련 법령에서 요구하는 법적 절차를 준수하였으며, 법적으로 유효한 법적 문서를 제출했다. 회사는 내부자 명단을 Shenzhen Stock Exchange에 제출하였으며, 관련 법령을 준수했다.",
      },
    },
  ],
};

// export const totalDummy = {
//   "홍콩": [
//     {
//       "id": "11181328",
//       "dataDate": "2024-04-26T08:47:00Z",
//       "korName": "NATURAL FOOD IH",
//       "details": {
//         "secName": [
//           "NATURAL FOOD IH"
//         ],
//         "secCode": [
//           "01837"
//         ],
//         "categoryId": "Proxy Forms",
//         "fileLink": "https://www1.hkexnews.hk/listedco/listconews/sehk/2024/0426/2024042601288.pdf"
//       },
//       "analysisDetails": {
//         "topicKor": "배당금 분배",
//         "summarizeTinyKor": "홍콩 증권거래소에 대한 중요 정보 (주식 코드, 1837)",
//         "summarizeLongKor": "홍콩 증권거래소에 상장된 Natural Food International Holding Limited (주식 코드 1837)의 연례 주주총회가 2024년 5월 31일 금요일 중국 심천에서 오전 10시에 개최될 예정입니다.\n회사는 2023년 12월 31일 종료된 연도에 주당 0.0323 RMB의 최종 배당금을 지급할 예정입니다."
//       }
//     },
//     {
//       "id": "11181312",
//       "dataDate": "2024-04-26T08:46:00Z",
//       "korName": "헝찌엔건축",
//       "details": {
//         "secName": [
//           "CT VISION SL"
//         ],
//         "secCode": [
//           "00994"
//         ],
//         "categoryId": "Proxy Forms",
//         "fileLink": "https://www1.hkexnews.hk/listedco/listconews/sehk/2024/0426/2024042601272.pdf"
//       },
//       "analysisDetails": {
//         "topicKor": "주주총회, 재무제표, 감사인, 이사, 주식, 보수, 권한",
//         "summarizeTinyKor": "CT Vision S.L. (International) Holdings Limited에 관한 중요 정보",
//         "summarizeLongKor": "CT Vision S.L. (International) Holdings Limited는 각각 0.01 홍콩 달러의 명목 가치를 가진 주식을 보유하고 있습니다.\n연례 주주총회(AGM)는 2024년 6월 20일 목요일 오전 10시에 홍콩 성완의 본햄스트랜드 35-45B 2층 J Plus에서 예정되어 있습니다.\n주식 코드는 994입니다.\n2023년 12월 31일 종료된 연도의 감사 보고된 연결 재무제표가 주주총회에서 검토될 것입니다.\n감사인인 중흥안다 회계법인은 재선임될 것입니다.\n이사들은 보수를 결정하고, 주식을 배정하고 발행하며, 주식을 거래하고, 회사의 주식을 다시 매입하는 권한을 부여받을 것입니다.\n매입된 주식은 주식 배정을 위한 권한에 추가될 것입니다."
//       }
//     },
//     {
//       "id": "11181310",
//       "dataDate": "2024-04-26T08:46:00Z",
//       "korName": "HBM HOLDINGS-B",
//       "details": {
//         "secName": [
//           "HBM HOLDINGS-B"
//         ],
//         "secCode": [
//           "02142"
//         ],
//         "categoryId": "Circulars",
//         "fileLink": "https://www1.hkexnews.hk/listedco/listconews/sehk/2024/0426/2024042601270.pdf"
//       },
//       "analysisDetails": {
//         "topicKor": "HBM Holdings Limited",
//         "summarizeTinyKor": "HBM Holdings Limited (주식 코드 2142)의 미등록 주주를 위한 서한 및 요청서 양식 통지",
//         "summarizeLongKor": "2024년 4월 26일 날짜의 문서는 HBM Holdings Limited (주식 코드 2142)의 미등록 주주를 대상으로 한 서한 및 요청서 양식 통지입니다.\n이 문서는 2023년 연례 보고서, 공고 및 주주총회 공고에 대해 안내합니다.\n서한에는 지점 주식 등록기관인 Tricor Investor Services Limited가 언급되었습니다.\nJingsong Wang 박사는 HBM Holdings Limited의 회장 및 이사로 활동하고 있습니다."
//       }
//     },
//     {
//       "id": "11181306",
//       "dataDate": "2024-04-26T08:46:00Z",
//       "korName": "Q TECH",
//       "details": {
//         "secName": [
//           "Q TECH"
//         ],
//         "secCode": [
//           "01478"
//         ],
//         "categoryId": "Announcements and Notices",
//         "fileLink": "https://www1.hkexnews.hk/listedco/listconews/sehk/2024/0426/2024042601266.pdf"
//       },
//       "analysisDetails": {
//         "topicKor": "주주총회, 주식 코드, 재무제표, 감사인, 이사 보수, 추가 주식, 전환 가능 증권, 옵션, 주식 매입, 정관, 회장, 사외 이사, 등기 사무소, 본사, 이사진, 비직속 이사, 대리인, 회원 명부, 일반 위임권",
//         "summarizeTinyKor": "Q 테크놀로지(그룹) 주식회사 연례 주주총회 안내",
//         "summarizeLongKor": "Q 테크놀로지(그룹) 주식회사(회사)는 2024년 5월 24일 금요일 오전 10시 30분에 중국 심천에서 연례 주주총회(AGM)를 개최할 예정입니다.\n회사의 주식 코드는 1478입니다.\n2023년 12월 31일 종료된 회계연도의 감사 보고서가 AGM에서 제출될 예정입니다.\n회사의 독립 감사인인 KPMG가 재선임되며, 이사들의 2024년 12월 31일 종료 연도의 보수를 결정할 권한이 부여될 예정입니다.\n회사는 발행 주식, 전환 가능 증권 또는 옵션을 총 발행 주식의 20%를 초과하지 않는 범위 내에서 발행할 것을 승인받고자 합니다.\n또한 회사는 총 발행 주식의 10%를 초과하지 않는 범위 내에서 주식을 매입할 것을 승인받고자 합니다.\nAGM에서는 또한 회사의 정관을 개정하는 것을 고려할 것입니다.\n회사의 회장이자 사외 이사는 허닝닝입니다.\n회사의 등기 사무소는 케이맨 제도에 있으며, 홍콩의 본사는 심천에 있습니다.\n현재 회사의 이사진은 허닝닝, 후산무, 판푸창이며, 독립 비직속 이사는 주가향, 고병경, 훼희징입니다.\n주주들은 AGM에서 대리인을 지명하여 투표할 권리가 있으며, 회원 명부는 AGM 준비를 위해 2024년 5월 21일부터 2024년 5월 24일까지 폐쇄될 예정입니다.\n회사는 주식 발행에 대한 일반 위임권을 부여받기 위해 회원들로부터 승인을 받고 있으며, 주식 매입에 대한 의도를 공개했습니다.\nAGM에서는 또한 회사의 정관을 개정하는 투표가 진행될 것입니다."
//       }
//     },
//     {
//       "id": "11181296",
//       "dataDate": "2024-04-26T08:45:00Z",
//       "korName": "중국수업국제",
//       "details": {
//         "secName": [
//           "WATER INDUSTRY"
//         ],
//         "secCode": [
//           "01129"
//         ],
//         "categoryId": "Circulars",
//         "fileLink": "https://www1.hkexnews.hk/listedco/listconews/sehk/2024/0426/2024042601256.pdf"
//       },
//       "analysisDetails": {
//         "topicKor": "연례보고서",
//         "summarizeTinyKor": "중국수업국제그룹리미티드 2023년 연례보고서",
//         "summarizeLongKor": "중국수업국제그룹리미티드는 2023년을 위한 연례보고서를 준비했습니다.\n주주들은 회사로부터 기업 커뮤니케이션의 인쇄본을 요청할 수 있습니다.\n문의 사항이 있을 경우, 홍콩 주식 등록기관에 (852) 2849 3399로 연락할 수 있습니다.\n중국수업국제그룹리미티드의 최고경영자이사 겸 회사 비서는 주인인 츄 인 인, 조지애나입니다.\n중국수업국제그룹리미티드의 주식 코드는 1129입니다."
//       }
//     },
//     {
//       "id": "11181292",
//       "dataDate": "2024-04-26T08:45:00Z",
//       "korName": "천백도",
//       "details": {
//         "secName": [
//           "C.BANNER"
//         ],
//         "secCode": [
//           "01028"
//         ],
//         "categoryId": "Circulars",
//         "fileLink": "https://www1.hkexnews.hk/listedco/listconews/sehk/2024/0426/2024042601252.pdf"
//       },
//       "analysisDetails": {
//         "topicKor": "기업 통신",
//         "summarizeTinyKor": "C.banner International Holdings Limited 2023 연차 보고서 및 주주총회 세부사항",
//         "summarizeLongKor": "C.banner International Holdings Limited는 주식 코드 1028로 상장되어 있으며, 2023 연차 보고서, 주주총회 공고서, 주주총회 안내 및 대리투표 양식을 2024년 4월 29일에 발표했습니다.\n회사는 HKEX에 상장된 증권에 관한 규칙 2.07A에 따라 기업 통신의 전자 배포를 채택했습니다.\n주주들은 기업 통신 및 이용 가능한 통지를 신속히 받기 위해 이메일 주소를 등록할 것을 권장받습니다.\n유효한 이메일 주소가 없는 주주들은 인쇄된 기업 통신 및 이용 가능한 통지를 받게 됩니다.\n인쇄된 기업 통신 요청은 1년간 유효합니다.\n문의 사항이 있을 경우 주주들은 c.banner.ecom@computershare.com.hk로 주주 등록기관에 문의할 수 있습니다."
//       }
//     },
//     {
//       "id": "11181290",
//       "dataDate": "2024-04-26T08:45:00Z",
//       "korName": "신덕그룹",
//       "details": {
//         "secName": [
//           "SHUN TAK HOLD"
//         ],
//         "secCode": [
//           "00242"
//         ],
//         "categoryId": "Circulars",
//         "fileLink": "https://www1.hkexnews.hk/listedco/listconews/sehk/2024/0426/2024042601250.pdf"
//       },
//       "analysisDetails": {
//         "topicKor": "연례 주주총회",
//         "summarizeTinyKor": "신덕그룹 홀딩스 주식회사 주요 주주총회 정보",
//         "summarizeLongKor": "신덕그룹 홀딩스 주식회사는 2024년 6월 5일 오후 4시에 홍콩 중앙 콘노트로드 200번지 신덕센터 4층 아르티젠 클럽 401A에서 연례 주주총회를 개최할 예정입니다.\n신덕그룹 홀딩스 주식회사의 주식 코드는 242입니다.\n주주는 홍콩의 컴퓨터쉐어 홍콩 투자자 서비스 주식 등기부서인 홉웰센터 17층, 완차이 여왕로동 183번지에서 인쇄된 기업 커뮤니케이션의 사본을 요청하거나 shuntak.ecom@computershare.com.hk로 이메일을 통해 요청할 수 있습니다.\n회사는 홍콩증권거래소의 상장 규정을 준수하여 기업 커뮤니케이션의 전자 배포를 채택했습니다.\n주주는 회사 웹사이트와 홍콩증권거래소 웹사이트에서 영어와 중국어로 된 향후 기업 커뮤니케이션에 접근할 수 있습니다.\n주주는 기업 커뮤니케이션의 전자 통지를 받기 위해 중개인에게 이메일 주소를 제공하는 것이 권장됩니다.\n문의 사항이 있는 주주는 홍콩 시간 기준으로 오전 9시부터 오후 6시까지(월요일부터 금요일까지, 홍콩 공휴일 제외) (852) 2862 8688로 주식 등기부서에 문의할 수 있습니다."
//       }
//     },
//     {
//       "id": "11181288",
//       "dataDate": "2024-04-26T08:45:00Z",
//       "korName": "동방망고홀딩스",
//       "details": {
//         "secName": [
//           "ORIENTAL EXPL"
//         ],
//         "secCode": [
//           "00430"
//         ],
//         "categoryId": "Proxy Forms",
//         "fileLink": "https://www1.hkexnews.hk/listedco/listconews/sehk/2024/0426/2024042601248.pdf"
//       },
//       "analysisDetails": {
//         "topicKor": "주주총회",
//         "summarizeTinyKor": "동방망고홀딩스 리미티드(주식코드 430) 주주총회 공고",
//         "summarizeLongKor": "이 문서는 홍콩의 웡축항스트리트 11번지 사우스마크 A타워 25층 22-28호에서 2024년 5월 30일 목요일 오후 3시 30분에 예정된 동방망고홀딩스 리미티드의 주주총회를 위한 대리투표서로, 재무제표, 배당 선언, 이사 재선임, 감사 재선임, 주식 발행, 주식 매입, 그리고 위임 연장에 대한 결의안이 포함되어 있습니다.\n또한, 2023년 12월 31일 종료된 연도의 감사된 연결 재무제표, 이사 선임, 감사위원 임명, 그리고 주식 관련 위임 사항을 다루고 있습니다."
//       }
//     },
//     {
//       "id": "11181274",
//       "dataDate": "2024-04-26T08:45:00Z",
//       "korName": "VIVA BIOTECH",
//       "details": {
//         "secName": [
//           "VIVA BIOTECH"
//         ],
//         "secCode": [
//           "01873"
//         ],
//         "categoryId": "Announcements and Notices",
//         "fileLink": "https://www1.hkexnews.hk/listedco/listconews/sehk/2024/0426/2024042601234.pdf"
//       },
//       "analysisDetails": {
//         "topicKor": "연례 주주총회",
//         "summarizeTinyKor": "2024년 6월 26일 VIVA BIOTECH HOLDINGS 주요 사항",
//         "summarizeLongKor": "VIVA BIOTECH HOLDINGS, 주식 코드 1873,은 2024년 6월 26일 오전 10시에 중국 상하이 푸동 신구 조우푸 타운 집잉로 735번지 A615 회의실에서 연례 주주총회를 개최할 예정입니다.\n이 회의에서는 2023년 12월 31일 종료된 회계연도의 감사 보고서를 제출할 예정이며, Ernst \u0026 Young이 감사인으로 재선임될 것입니다.\n이사회는 이사 보수를 결정할 것이며, 이사들은 현재의 주식 자본의 20%를 배정하는 데 제한이 있으며, 새 주식 발행을 위한 일반 명령이 연장될 것입니다.\n또한 회의에서는 제3차 수정 및 재작성된 기본 조항 및 조항 승인 여부를 검토할 예정입니다.\nMAO Chen Cheney는 회장이자 최고 경영자로, 등기 사무소는 케이맨 제도 그랜드 케이맨에 위치하고 주요 사업장은 중국 상하이에 있습니다."
//       }
//     },
//     {
//       "id": "11181264",
//       "dataDate": "2024-04-26T08:44:00Z",
//       "korName": "연합그룹",
//       "details": {
//         "secName": [
//           "ALLIED GROUP"
//         ],
//         "secCode": [
//           "00373"
//         ],
//         "categoryId": "Circulars",
//         "fileLink": "https://www1.hkexnews.hk/listedco/listconews/sehk/2024/0426/2024042601224.pdf"
//       },
//       "analysisDetails": {
//         "topicKor": "증권거래소 상장 기업",
//         "summarizeTinyKor": "홍콩 증권거래소 상장 기업에 대한 주요 재무 정보",
//         "summarizeLongKor": "최근 실용 가능한 날짜 기준으로, 리 앤 리 트러스트는 민티 앤 젤러스를 통해 이승희 씨의 개인 이익을 포함한 총 26,351,051,180주의 주식을 보유하고 있으며, 이는 총 주식 수의 약 74.99%에 해당합니다.\n2024년 4월 홍콩 증권거래소에서 연합그룹 리미티드의 주식의 최고 및 최저 가격은 각각 HK$1.56 및 HK$1.38이었습니다.\n회사는 최근 6개월 동안 실용 가능한 날짜 이전에 증권거래소나 기타에서 자사 주식을 재매입하지 않았습니다.\n이사들은 회사의 총 발행 주식 수의 20%에 해당하는 최대 702,736,872주까지 추가 증권을 발행할 일반 위임을 받았습니다.\n또한 이사들은 총 발행 주식 수의 10%에 해당하는 351,368,436주까지 주식을 재매입할 위임을 받았습니다."
//       }
//     },
//     {
//       "id": "11181250",
//       "dataDate": "2024-04-26T08:44:00Z",
//       "korName": "Q TECH",
//       "details": {
//         "secName": [
//           "Q TECH"
//         ],
//         "secCode": [
//           "01478"
//         ],
//         "categoryId": "Proxy Forms",
//         "fileLink": "https://www1.hkexnews.hk/listedco/listconews/sehk/2024/0426/2024042601210.pdf"
//       },
//       "analysisDetails": {
//         "topicKor": "주주총회, 재무 보고서, KPMG, 대리인 양식",
//         "summarizeTinyKor": "Q 테크놀로지(그룹) 주식회사(주식 코드 1478)에 관한 중요 정보",
//         "summarizeLongKor": "Q 테크놀로지(그룹) 주식회사의 연례 주주총회가 중국 심천에서 2024년 5월 24일 금요일 오전 10시 30분에 예정되어 있습니다.\n회의에서는 2023년 12월 31일 종료된 연도의 감사 보고서가 제출될 예정입니다.\nKPMG는 다음 연례 주주총회가 끝날 때까지 회사의 독립 감사인으로 임명될 예정입니다.\n주주들은 총회 전 최소 48시간 전에 회사의 홍콩 지점 주식 등록기관에 대리인 양식을 작성, 서명 및 제출해야 합니다."
//       }
//     },
//     {
//       "id": "11181248",
//       "dataDate": "2024-04-26T08:44:00Z",
//       "korName": "JC GROUP HLDG",
//       "details": {
//         "secName": [
//           "TK NEW ENERGY"
//         ],
//         "secCode": [
//           "08326"
//         ],
//         "categoryId": "Announcements and Notices",
//         "fileLink": "https://www1.hkexnews.hk/listedco/listconews/gem/2024/0426/2024042601208.pdf"
//       },
//       "analysisDetails": {
//         "topicKor": "인수",
//         "summarizeTinyKor": "라이즈 트라이엄프 주식회사에 의한 톤킹 뉴 에너지 그룹 홀딩스 리미티드 인수",
//         "summarizeLongKor": "라이즈 트라이엄프 주식회사는 관련 당사자들과 함께 톤킹 뉴 에너지 그룹 홀딩스 리미티드(주식 코드. 8326)의 모든 주식을 인수하기로 결정했습니다.\nAstrum Capital Management Limited의 자발적 조건부 현금 매수 제안은 2024년 4월 26일에 시작되어 2024년 5월 31일에 마감될 예정입니다.\nTC Capital International Limited는 독립적인 이사회 위원회의 독립적인 금융 자문자로 활동합니다.\n2024년 4월 26일에 발행된 공동 문서는 제안인과 회사가 제공한 제안의 세부 정보를 제공합니다.\n제안 일정에 대한 변경 사항은 공동으로 공개될 것입니다.\n독립 주주들은 결정하기 전에 문서를 신중히 검토할 것을 권고받습니다.\n톤킹 뉴 에너지 그룹 홀딩스 리미티드의 경영진에는 우건농 씨, 심멩홍 여사, 그리고 쉬슈이승 씨가 포함되어 있으며, 독립적인 비경영 이사로는 왕샤오씽 여사, 조위안 씨, 그리고 심푸신 씨가 있습니다."
//       }
//     },
//     {
//       "id": "11181246",
//       "dataDate": "2024-04-26T08:44:00Z",
//       "korName": "CLOUDR",
//       "details": {
//         "secName": [
//           "CLOUDR"
//         ],
//         "secCode": [
//           "09955"
//         ],
//         "categoryId": "Proxy Forms",
//         "fileLink": "https://www1.hkexnews.hk/listedco/listconews/sehk/2024/0426/2024042601206.pdf"
//       },
//       "analysisDetails": {
//         "topicKor": "연례 주주총회",
//         "summarizeTinyKor": "ClouDr Group Limited (주식 코드, 9955) 주총 안내",
//         "summarizeLongKor": "ClouDr Group Limited은 2024년 6월 6일 목요일 오전 9시 홍콩에서 연례 주주총회를 개최할 예정입니다.\n이 회의에서는 2023년 12월 31일 종료된 회계연도의 감사 보고서 발표가 예정되어 있습니다.\n회사는 독립 비임원 이사로 재선임을 제안하며, 감사 보수는 이사회에서 결정할 예정입니다.\nKPMG가 감사인으로 재선임되며, 회사는 총 발행 주식의 10%까지 주식을 재매수할 것을 제안합니다.\n추가 발행 주식에 대한 일반 위임을 요청하며, 총 발행 주식의 20%를 초과하지 않는 추가 주식을 처리하기 위한 위임을 제안하며, 재매수 주식에 의한 위임 기간 연장을 제안합니다.\n주주들은 회의 48시간 전에 대리투표 양식을 제출할 것을 권장합니다.\n의결안의 전문 내용은 2024년 4월 26일자 주총 안내서에서 확인할 수 있습니다."
//       }
//     },
//     {
//       "id": "11181242",
//       "dataDate": "2024-04-26T08:44:00Z",
//       "korName": "BRONCUS-B",
//       "details": {
//         "secName": [
//           "BRONCUS-B"
//         ],
//         "secCode": [
//           "02216"
//         ],
//         "categoryId": "Announcements and Notices",
//         "fileLink": "https://www1.hkexnews.hk/listedco/listconews/sehk/2024/0426/2024042601202.pdf"
//       },
//       "analysisDetails": {
//         "topicKor": "연례 주주총회",
//         "summarizeTinyKor": "2024년 5월 20일 Broncus Holding Corporation 주주총회",
//         "summarizeLongKor": "홍콩 증권거래소에 상장된 Broncus Holding Corporation은 2024년 5월 20일 오전 10시에 중국 항저우에서 연례 주주총회를 개최할 예정입니다.\n이 회의에서는 2023년 12월 31일 종료된 연도의 감사 보고서 발표가 포함될 것입니다.\n안건에는 홍콩 증권거래소의 주식 코드 2216으로 상장된 Broncus Holding Corporation의 이사 재선임, 홍쉬, 장앙, 광얀홍, 데이비드 스콧 림 등의 이사 임금 결정 권한 부여 등이 포함됩니다.\n주주들은 추가 주식 발행, 전환 가능 증권 및 옵션 발행에 대한 제안에 투표할 것이며, 총 발행 주식의 20%까지, 주식 재매입에 대한 제안도 10%를 초과하지 않도록 투표할 것입니다.\nErnst \u0026 Young이 감사로 재선임될 예정입니다.\n조합원과 조합 규약에 대한 제안 개정 사항도 논의될 예정입니다.\n회의는 중국 항저우 비징구역 시샤잉로 88번지 8호 8층 801호에서 개최될 예정이며, 회사의 등기 사무실은 케이맨 제도에 위치해 있으며 본사는 중국 항저우에 있으며 홍콩 완차이 퀸스로 이스트 다싱 파이낸셜 센터 40층에 사무실이 있습니다."
//       }
//     },
//     {
//       "id": "11181234",
//       "dataDate": "2024-04-26T08:43:00Z",
//       "korName": "대성식품",
//       "details": {
//         "secName": [
//           "DACHAN FOOD"
//         ],
//         "secCode": [
//           "03999"
//         ],
//         "categoryId": "Circulars",
//         "fileLink": "https://www1.hkexnews.hk/listedco/listconews/sehk/2024/0426/2024042601194.pdf"
//       },
//       "analysisDetails": {
//         "topicKor": "기업 통신",
//         "summarizeTinyKor": "대찬식품(아시아) 유한회사 주주를 위한 정보 (주식 코드, 3999)",
//         "summarizeLongKor": "영어 또는 중국어로 기업 통신을 받는 옵션, 이메일 통지 선택, 지난 문서 요청에 대해 알아보세요. 양식을 올바르게 작성하여 무효 요청을 피하십시오. 기업 통신에는 연례 보고서, 재무 요약 등이 포함됩니다.\n주주의 인쇄본 요청은 철회되거나 재무 연도 종료까지 유효합니다."
//       }
//     },
//     {
//       "id": "11181228",
//       "dataDate": "2024-04-26T08:43:00Z",
//       "korName": "중국상성",
//       "details": {
//         "secName": [
//           "CHINA UPTOWN"
//         ],
//         "secCode": [
//           "02330"
//         ],
//         "categoryId": "Proxy Forms",
//         "fileLink": "https://www1.hkexnews.hk/listedco/listconews/sehk/2024/0426/2024042601188.pdf"
//       },
//       "analysisDetails": {
//         "topicKor": "연례 주주총회 대리투표서",
//         "summarizeTinyKor": "중국 업타운 그룹 주식회사 연례 주주총회 대리투표서 세부 내용",
//         "summarizeLongKor": "이 문서는 중국 업타운 그룹 주식회사(주식 코드 2330)와 관련이 있으며, 2024년 6월 20일 홍콩에서 오전 11시에 예정된 연례 주주총회를 위한 대리투표서로 작용합니다.\n이 문서에는 재무제표, 이사 선임, 감사위원 선임, 주식 발행 및 주식 재매입 승인 등을 다루는 결의안이 포함되어 있습니다.\n주주들은 제공된 대리투표서에 찬성 또는 반대로 투표 의사를 표시해야 합니다.\n선임된 감사는 맥밀런 우즈 (홍콩) 회계사법인입니다.\n주주들은 회의 48시간 전에 서명하여 대리투표서를 제출해야 합니다.\n또한, 이 문서에는 대리투표 임명을 위한 개인정보 수집에 대한 성명서와 투표 지침이 포함되어 있습니다."
//       }
//     },
//     {
//       "id": "11181226",
//       "dataDate": "2024-04-26T08:43:00Z",
//       "korName": "CSOP BITCON FUTUTRES ETF",
//       "details": {
//         "secName": [
//           "FA CSOP BTC"
//         ],
//         "secCode": [
//           "03066"
//         ],
//         "categoryId": "Listing Documents",
//         "fileLink": "https://www1.hkexnews.hk/listedco/listconews/sehk/2024/0426/2024042601186.pdf"
//       },
//       "analysisDetails": {
//         "topicKor": "CSOP BTC 부속 펀드",
//         "summarizeTinyKor": "홍콩 증권거래소의 CSOP BTC 부속 펀드 개요",
//         "summarizeLongKor": "홍콩 증권거래소의 CSOP BTC 부속 펀드는 거래 가격의 0.00015%에 해당하는 4 AFRC 거래 수수료와 구매자와 판매자가 부담하는 거래 수수료인 0.00565%를 부과합니다.\n부속 펀드의 실시간 추정 순자산가치(NAV)는 실시간 홍콩달러(USD) 환율을 사용하여 홍콩달러로 계산됩니다.\n부속 펀드의 마지막 NAV는 뉴스 에이전시인 로이터가 오후 3시(홍콩 시간)에 인용한 미국달러 환율을 사용하여 미국달러로 계산됩니다.\n부속 펀드의 관리 수수료는 연 1.99%이며, 지속적인 비용은 연 2.00%입니다.\n부속 펀드의 크기가 1천만 미국달러 미만으로 감소하면 조기 종료될 수 있습니다.\n부속 펀드는 홍콩 증권거래소(SEHK)에서 거래되는 가격이 NAV에 프리미엄 또는 디스카운트로 거래될 수 있습니다.\n부속 펀드의 순자산가치의 최소 40%를 현금에 투자하고 현금 결제 선물 월물 및 후물 CME 비트코인 선물에 투자할 수 있습니다.\n부속 펀드의 투자 목표는 CME 비트코인 선물에 주로 투자하여 장기적인 자본 성장을 달성하는 것입니다.\n부속 펀드는 CSOP 자산관리 유한회사가 적극 관리하며 미국달러로 계산된 거래되는 ETF입니다.\n부속 펀드의 지속적인 비용은 연 2.00%이며, NAV와 거래 가격에 영향을 미칩니다.\n부속 펀드의 수탁사 및 등기사는 HSBC 기관 신탁 서비스(아시아) 유한회사이며, 거래 통화는 홍콩달러이며 기준 통화는 미국달러입니다."
//       }
//     },
//     {
//       "id": "11181224",
//       "dataDate": "2024-04-26T08:43:00Z",
//       "korName": "안녕홀딩스",
//       "details": {
//         "secName": [
//           "ENM HOLDINGS"
//         ],
//         "secCode": [
//           "00128"
//         ],
//         "categoryId": "Circulars",
//         "fileLink": "https://www1.hkexnews.hk/listedco/listconews/sehk/2024/0426/2024042601184.pdf"
//       },
//       "analysisDetails": {
//         "topicKor": "주요 주주총회",
//         "summarizeTinyKor": "ENM Holdings Limited 주요 주주총회 안내",
//         "summarizeLongKor": "ENM Holdings Limited은 2024년 6월 6일 목요일 오전 10시에 홍콩 뉴 테리토리즈 증권거래소의 Hill Top Country Club, 10 Hilltop Road, Lo Wai, Tsuen Wan에서 주요 주주총회를 개최할 예정입니다.\n주주들은 회사 웹사이트와 HKEXnews 웹사이트에서 2023년 연례보고서, 주요 주주총회 공고 및 대리투표 양식의 영어 및 중국어 버전에 접근할 수 있습니다.\n주주들은 Computershare Hong Kong Investor Services Limited에 연락하거나 comsec@enmholdings.com으로 이메일을 보내어 기업 커뮤니케이션의 인쇄본을 요청할 수 있습니다.\n회사는 홍콩 증권거래소 상장규정에 따라 향후 기업 커뮤니케이션의 전자 배포를 채택했습니다.\n문의 사항이 있으시면 주주들은 회사 전화 라인인 (852) 2594 0600 또는 comsec@enmholdings.com으로 이메일을 보내주시기 바랍니다."
//       }
//     },
//     {
//       "id": "11181222",
//       "dataDate": "2024-04-26T08:43:00Z",
//       "korName": "SF INTRA-CITY",
//       "details": {
//         "secName": [
//           "SF INTRA-CITY"
//         ],
//         "secCode": [
//           "09699"
//         ],
//         "categoryId": "Circulars",
//         "fileLink": "https://www1.hkexnews.hk/listedco/listconews/sehk/2024/0426/2024042601182.pdf"
//       },
//       "analysisDetails": {
//         "topicKor": "주주총회 항저우 SF 도시내 산업 주식회사 9699",
//         "summarizeTinyKor": "항저우 SF 도시내 산업 주식회사 주주총회 세부사항",
//         "summarizeLongKor": "항저우 SF 도시내 산업 주식회사는 총 9억 3,345만 7,707주의 주식을 발행하였으며, 이 중 1,262만 6,400주의 H주식은 회수되었지만 아직 취소되지 않았습니다.\n주식 코드 9699를 가진 회사는 연례 주주총회를 위한 공고에서 연말인 2023년 12월 31일까지의 감사 보고서 승인, 2023년 최종 배당금 지급하지 않기, 그리고 2024년 중간 배당금을 위임하는 등 여러 안건을 제안했습니다.\n제안된 일반 위임권은 이사들에게 추가 주식 발행 및/또는 발행된 주식의 총 수의 최대 20%까지 자사주를 재판매할 수 있는 권한을 부여합니다.\nH주식 회수를 위한 제안된 일반 위임권은 발행된 H주식의 총 수의 최대 10%까지 회수할 수 있도록 합니다.\n항저우 SF 도시내 산업 주식회사의 주주총회는 2024년 6월 6일 목요일 오전 10시에 가상으로 개최될 예정입니다.\n주주들은 주주총회에서 대리투표를 위임할 수 있습니다.\n주주들은 통신 비디오 회의를 통해 주주총회에 참석할 수 있으며 참석을 위해 사전에 등록하여 참여 링크를 받아야 합니다.\n회사의 주주총회는 실제 참석이 허용되지 않는 방식으로 통신 비디오 회의를 통해 진행될 것입니다.\n주주들은 사전에 이메일을 통해 질문을 제출하거나 제공된 회의 링크를 통해 주주총회 중에 질문을 할 수 있습니다.\n회사의 주주 명부는 2024년 6월 3일 월요일부터 6월 6일 목요일까지 주주총회를 위해 폐쇄될 예정입니다.\n주주들은 주주총회에서 대리투표를 위해 주주총회 의장을 자신의 대리로 지명해야 합니다.\n회사는 주주들에게 주주총회에서 제안된 모든 안건에 찬성표를 투표할 것을 권장합니다."
//       }
//     },
//     {
//       "id": "11181218",
//       "dataDate": "2024-04-26T08:43:00Z",
//       "korName": null,
//       "details": {
//         "secName": [
//           "KS-GEG @EC2410A",
//           "KSCNOOC@EC2502A"
//         ],
//         "secCode": [
//           "24716",
//           "24717"
//         ],
//         "categoryId": "Debt and Structured Products",
//         "fileLink": "https://www1.hkexnews.hk/listedco/listconews/sehk/2024/0426/2024042601178.pdf"
//       },
//       "analysisDetails": {
//         "topicKor": "파생상품 워런트",
//         "summarizeTinyKor": "한국투자증권 아시아 리미티드가 발행한 파생상품 워런트 세부 내역",
//         "summarizeLongKor": "한국투자증권 아시아 리미티드는 주식 코드가 24716 및 24717인 파생상품 워런트를 발행했습니다.\n갤럭시 엔터테인먼트 그룹 리미티드와 CNOOC 리미티드를 위한 워런트는 각각 6,000,000씩의 발행 규모를 갖고 있습니다.\n갤럭시 엔터테인먼트 그룹 리미티드의 워런트 발행 가격은 HK$0.19이며, CNOOC 리미티드의 경우 HK$0.17입니다.\n행사 가격은 갤럭시 엔터테인먼트 그룹 리미티드의 경우 HK$41.88이고, CNOOC 리미티드의 경우 HK$25.05입니다.\n갤럭시 엔터테인먼트 그룹 리미티드의 워런트 당 권리는 10개이며, CNOOC 리미티드의 경우 5개입니다.\n워런트가 관련된 최대 주식 수는 갤럭시 엔터테인먼트 그룹 리미티드의 경우 6,000,000주이고, CNOOC 리미티드의 경우 12,000,000주입니다.\n갤럭시 엔터테인먼트 그룹 리미티드의 내재 변동성은 41.02%이며, CNOOC 리미티드의 경우 40.18%입니다.\n갤럭시 엔터테인먼트 그룹 리미티드의 유효 기어링은 5.68배이며, CNOOC 리미티드의 경우 3.28배입니다.\n갤럭시 엔터테인먼트 그룹 리미티드와 CNOOC 리미티드의 기어링은 각각 18.45배와 22.35배입니다.\n갤럭시 엔터테인먼트 그룹 리미티드의 프리미엄은 24.91%이며, CNOOC 리미티드의 경우 36.32%입니다.\n모든 시리즈의 발행, 발행일 및 상장일은 각각 2024년 4월 25일, 2024년 4월 29일, 2024년 4월 30일입니다.\n만기일은 갤럭시 엔터테인먼트 그룹 리미티드의 경우 2024년 10월 16일이고, CNOOC 리미티드의 경우 2025년 2월 21일입니다.\n정산 통화는 갤럭시 엔터테인먼트 그룹 리미티드와 CNOOC 리미티드 모두 홍콩 달러입니다."
//       }
//     },
//     {
//       "id": "11181216",
//       "dataDate": "2024-04-26T08:43:00Z",
//       "korName": "Q TECH",
//       "details": {
//         "secName": [
//           "Q TECH"
//         ],
//         "secCode": [
//           "01478"
//         ],
//         "categoryId": "Circulars",
//         "fileLink": "https://www1.hkexnews.hk/listedco/listconews/sehk/2024/0426/2024042601176.pdf"
//       },
//       "analysisDetails": {
//         "topicKor": "주주총회 결의안",
//         "summarizeTinyKor": "Q 테크놀로지 (그룹) 회사의 주요 재무 정보",
//         "summarizeLongKor": "2023년 12월 31일 종료된 연도에, 판씨는 총 약 RMB880,000의 급여를 받았으며 회사의 총 주식 중 2,635,000주(총 주식의 0.22%)를 소유했습니다.\n후씨는 약 RMB1,028,000의 총 급여를 받았으며 회사의 총 주식 중 2,995,000주(총 주식의 0.25%)를 소유했습니다.\n회사의 주식 매입 위임은 최대 118,453,847주(총 주식의 10%)까지 매입을 허용하며 발행 위임은 최대 236,907,695주까지 발행을 허용합니다.\n다가오는 주주총회에서는 일반 위임, 이사 재선임 및 조항 개정에 대한 결의안이 검토될 예정입니다."
//       }
//     },
//     {
//       "id": "11181212",
//       "dataDate": "2024-04-26T08:43:00Z",
//       "korName": "몽골리안광업",
//       "details": {
//         "secName": [
//           "MONGOL MINING"
//         ],
//         "secCode": [
//           "00975"
//         ],
//         "categoryId": "Circulars",
//         "fileLink": "https://www1.hkexnews.hk/listedco/listconews/sehk/2024/0426/2024042601172.pdf"
//       },
//       "analysisDetails": {
//         "topicKor": "기업 커뮤니케이션",
//         "summarizeTinyKor": "몽골리안 광업 회사 (주식 코드, 975에 대한 정보)",
//         "summarizeLongKor": "회장 Odjargal Jambaljamts가 이끄는 몽골리안 광업 회사는 기업 커뮤니케이션의 전자적 유포를 채택했습니다.\n주주들은 그러한 커뮤니케이션을 신속하게 받기 위해 이메일 주소를 공유할 것을 권장받습니다.\n회신 양식을 통해 주주들은 미래 기업 커뮤니케이션의 전자적 유포를 위해 이메일 주소를 제공할 수 있는 기회를 얻습니다."
//       }
//     },
//     {
//       "id": "11181210",
//       "dataDate": "2024-04-26T08:43:00Z",
//       "korName": "LITIAN PICTURES",
//       "details": {
//         "secName": [
//           "LITIAN PICTURES"
//         ],
//         "secCode": [
//           "09958"
//         ],
//         "categoryId": "Announcements and Notices",
//         "fileLink": "https://www1.hkexnews.hk/listedco/listconews/sehk/2024/0426/2024042601170.pdf"
//       },
//       "analysisDetails": {
//         "topicKor": "개정안",
//         "summarizeTinyKor": "리티안 픽쳐스 홀딩스 리미티드 제안 개정안 (주식 코드, 9958)",
//         "summarizeLongKor": "리티안 픽쳐스 홀딩스 리미티드 (주식 코드. 9958)은 2023년 12월 31일부터 시행되는 상장 규정 개정에 맞추기 위해 기존 조항을 개정하려고 합니다.\n회사는 2024년 5월 31일에 연례 주주총회에서 주주 승인을 받아 새로운 조항을 채택할 계획입니다.\n회사 이사회는 유안리씨, 티안티안씨, 부지에윈씨를 집행 이사로, 텅빙셩씨, 리우한린씨, 간웨이민씨를 독립 비집행 이사로 구성되어 있습니다."
//       }
//     },
//     {
//       "id": "11181206",
//       "dataDate": "2024-04-26T08:43:00Z",
//       "korName": "WK GROUP",
//       "details": {
//         "secName": [
//           "WK GROUP"
//         ],
//         "secCode": [
//           "02535"
//         ],
//         "categoryId": "Announcements and Notices",
//         "fileLink": "https://www1.hkexnews.hk/listedco/listconews/sehk/2024/0426/2024042601166.pdf"
//       },
//       "analysisDetails": {
//         "topicKor": "재무제표",
//         "summarizeTinyKor": "WK 그룹 (홀딩스) 리미티드에 관한 중요 정보",
//         "summarizeLongKor": "WK 그룹 (홀딩스) 리미티드 및 그 계열사의 2023년 12월 31일 종료 연도에 대한 감사 완료된 연결 재무제표는 주주총회에서 검토될 예정입니다.\nPricewaterhouseCoopers는 감사인으로 재선임될 것이며 이들의 보수는 이사회에서 결정할 것입니다.\n이사회는 또한 이사 보수를 결정할 권한을 부여받을 것입니다.\n관련 기간 동안, WK 그룹 (홀딩스) 리미티드는 총 발행 주식의 20%를 초과하지 않는 주식을 배정하거나 동의할 수 있습니다.\n회사는 홍콩 증권거래소나 다른 인정받는 증권거래소에서 총 발행 주식의 10%까지를 주식을 재매수할 수 있습니다.\n이사들은 총 발행 주식의 10%를 초과하지 않는 미발행 주식을 처리하기 위한 일반 위임을 받았습니다.\n이사회에는 찬감기, 찬감공, 그리고 찬숙만이 이사로, 찬윙홍과 최직장이 비직무 이사로, 차호와, 유춘기, 그리고 류치권 알버트가 독립 비직무 이사로 포함되어 있습니다."
//       }
//     },
//     {
//       "id": "11181204",
//       "dataDate": "2024-04-26T08:43:00Z",
//       "korName": "CANGGANGRAILWAY",
//       "details": {
//         "secName": [
//           "CANGGANGRAILWAY"
//         ],
//         "secCode": [
//           "02169"
//         ],
//         "categoryId": "Financial Statements/ESG Information",
//         "fileLink": "https://www1.hkexnews.hk/listedco/listconews/sehk/2024/0426/2024042601164.pdf"
//       },
//       "analysisDetails": {
//         "topicKor": "재무 성과",
//         "summarizeTinyKor": "2023년 기간 동안 Canggang Railway Limited의 재무 성과 요약",
//         "summarizeLongKor": "Canggang Railway Limited는 총 수익액이 349억 위안으로 기록되어, 2022년의 333.4억 위안 대비 4.7% 증가했습니다.\n철도 화물 운송 서비스로부터의 수익액은 243.5억 위안으로 감소하였으며, 부가 서비스로부터의 수익액은 105.5억 위안으로 증가하였습니다.\n순이익은 13.7% 감소하여 58.6억 위안이 되었습니다.\n이사회는 주당 0.6센트의 최종 배당을 제안했으며, 주주 승인을 받을 예정입니다.\n특정 철도 노선 건설로 인해 운영 비용이 244.3억 위안 증가하였습니다.\n특정 비용을 제외한 총 비용은 25.7억 위안 감소하였습니다.\n거래 및 미수금은 71.4억 위안으로 14.4% 감소하였습니다.\n기타 소득은 4.8억 위안으로 78.1% 감소하였습니다.\n철도 화물 운송 부문 결과는 105.7억 위안으로 감소하였으며, 부가 사업 부문 결과는 10.9억 위안으로 증가하였습니다.\n재무 비용은 24.9억 위안으로 1.9% 증가하였으며, 법인세 비용은 26.1억 위안으로 12.5% 증가하였습니다.\n올해의 순이익은 58.6억 위안으로 13.8% 감소하였으며, 순이익 마진은 16.8%가 되었습니다.\n그룹은 2023년 12월 31일 기준으로 약 82.3억 위안의 순유동자산을 보유하고 있습니다.\n현금 및 현금성 자산은 112.4억 위안으로 감소하였으며, 이자 부담 차입금은 2023년 12월 31일 기준으로 492.8억 위안입니다."
//       }
//     },
//     {
//       "id": "11181198",
//       "dataDate": "2024-04-26T08:43:00Z",
//       "korName": "CLOUDR",
//       "details": {
//         "secName": [
//           "CLOUDR"
//         ],
//         "secCode": [
//           "09955"
//         ],
//         "categoryId": "Announcements and Notices",
//         "fileLink": "https://www1.hkexnews.hk/listedco/listconews/sehk/2024/0426/2024042601158.pdf"
//       },
//       "analysisDetails": {
//         "topicKor": "주주총회",
//         "summarizeTinyKor": "클라우드알 그룹 리미티드 주총 공고",
//         "summarizeLongKor": "클라우드알 그룹 리미티드는 2024년 6월 6일 홍콩, 중국에서 오전 9시에 주총을 개최할 예정입니다.\n2023년 12월 31일 종료된 연도의 감사 보고된 연결 재무제표가 회의에서 제시될 것입니다.\n감사인인 KPMG 씨는 임명될 것이며, 이들의 보수는 이사회에서 결정될 것입니다.\n이사회는 회사의 총 발행 주식의 최대 10%를 매입하기 위한 승인을 구할 것입니다.\n총 발행 주식의 최대 20%를 초과하지 않는 추가 주식 발행을 이사회에 승인할 것입니다.\n이사회는 일부 조건에 따라 주식 배정 및 발행의 일반 위임 권한을 연장하는 것을 고려할 것입니다.\n회사의 15차 수정 및 재작성된 기본 조항 및 조합에 대한 특별 결의안이 제안될 것입니다.\n이사회 의장인 광밍 씨는 클라우드알 그룹 리미티드의 사외 이사이자 최고 경영자로 활동하고 있습니다.\n주주들은 회의에서 대리인을 지명하여 투표할 수 있으며, 투표 결과는 회사 및 홍콩 거래소 및 결제소의 웹사이트에 게시될 것입니다.\n회원 명부는 회의 참석 및 투표 자격을 결정하기 위해 2024년 6월 3일부터 2024년 6월 6일까지 폐쇄될 것입니다.\n클라우드알 그룹 리미티드 이사회에는 이사장인 광밍 씨, 비사외 이사인 리가충 펠릭스 씨, 독립 비사외 이사인 홍위리 박사, 장사이인 씨, 앙 카이 멩 씨가 포함되어 있습니다."
//       }
//     },
//     {
//       "id": "11181196",
//       "dataDate": "2024-04-26T08:42:00Z",
//       "korName": "안녕홀딩스",
//       "details": {
//         "secName": [
//           "ENM HOLDINGS"
//         ],
//         "secCode": [
//           "00128"
//         ],
//         "categoryId": "Proxy Forms",
//         "fileLink": "https://www1.hkexnews.hk/listedco/listconews/sehk/2024/0426/2024042601156.pdf"
//       },
//       "analysisDetails": {
//         "topicKor": "주총",
//         "summarizeTinyKor": "ENM Holdings Limited 주총 안내",
//         "summarizeLongKor": "ENM Holdings Limited은 2024년 6월 6일 목요일 오전 10시에 홍콩 HillTop Country Club에서 주총을 개최할 예정입니다.\n주주들은 이사 재선임 및 이사회에 보수 권한 부여 등 다양한 안건에 대해 투표하기 위해 대리인을 지명해야 합니다.\n또한 주주들은 이사회에 주식 발행 일반 위임권을 부여할 수도 있습니다.\n완료된 대리인 양식은 회의 48시간 전에 Computershare 홍콩 투자자 서비스 리미티드로 반환되어야 합니다.\nENM Holdings Limited의 주식 코드는 00128입니다."
//       }
//     },
//     {
//       "id": "11181192",
//       "dataDate": "2024-04-26T08:42:00Z",
//       "korName": null,
//       "details": {
//         "secName": [
//           "BP#TENCTRP2411N",
//           "BP#HKEX RP2411R",
//           "BP#HSI RP2609Z",
//           "BP#HSI RP2609W",
//           "BP#HSI RP2609G",
//           "BP#HSI RP2609H",
//           "BP#HSI RP2609B",
//           "BP#HSI RP2609P"
//         ],
//         "secCode": [
//           "51035",
//           "52850",
//           "60401",
//           "60403",
//           "60405",
//           "60534",
//           "60535",
//           "60959"
//         ],
//         "categoryId": "Debt and Structured Products",
//         "fileLink": "https://www1.hkexnews.hk/listedco/listconews/sehk/2024/0426/2024042601152.pdf"
//       },
//       "analysisDetails": {
//         "topicKor": "CBBC",
//         "summarizeTinyKor": "홍콩 증권거래소의 CBBC 개요",
//         "summarizeLongKor": "150,000,000 CBBC부터 300,000,000 CBBC까지 다양한 규모의 홍콩 증권거래소의 CBBC를 발견하십시오. 기초자산은 항셍지수, 홍콩거래소 및 Tencent Holdings Ltd. 등이 포함되어 있습니다."
//       }
//     },
//     {
//       "id": "11181190",
//       "dataDate": "2024-04-26T08:42:00Z",
//       "korName": "사환제약",
//       "details": {
//         "secName": [
//           "SIHUAN PHARM"
//         ],
//         "secCode": [
//           "00460"
//         ],
//         "categoryId": "Proxy Forms",
//         "fileLink": "https://www1.hkexnews.hk/listedco/listconews/sehk/2024/0426/2024042601150.pdf"
//       },
//       "analysisDetails": {
//         "topicKor": "연례 주주총회",
//         "summarizeTinyKor": "시환제약 홀딩스 그룹 주식에 관한 중요 정보 (주식 코드, 0460)",
//         "summarizeLongKor": "회사는 2024년 6월 7일 금요일 중국 심천에서 오전 10시에 연례 주주총회를 개최할 예정입니다.\n회의에는 2023년 12월 31일 종료된 회계연도의 감사 보고서 제출이 포함됩니다.\n의제에는 이사 3명 재선임, 회계감사인으로 Ernst \u0026 Young 임명, 추가 주식에 대한 일반 위임을 요청하고 주주에게 대리인 임명을 허용하는 것이 포함됩니다.\n주주는 회의 48시간 전에 완료된 대리인 양식을 홍콩 지점 주식 등록기관에 제출해야 합니다.\n회사의 제안에는 이사 재선임, 감사인 임명, 주식 거래를 위한 일반 위임을 요청하는 것이 포함됩니다."
//       }
//     },
//     {
//       "id": "11181188",
//       "dataDate": "2024-04-26T08:42:00Z",
//       "korName": "중국생명그룹",
//       "details": {
//         "secName": [
//           "SINO-LIFE GROUP"
//         ],
//         "secCode": [
//           "08296"
//         ],
//         "categoryId": "Circulars",
//         "fileLink": "https://www1.hkexnews.hk/listedco/listconews/gem/2024/0426/2024042601148.pdf"
//       },
//       "analysisDetails": {
//         "topicKor": "공고",
//         "summarizeTinyKor": "신오라이프 그룹 리미티드(주식 코드 8296)에 관한 주요 정보",
//         "summarizeLongKor": "2024년 4월 26일 날짜의 공고는 주식 재매수와 발행의 일반 위임, 은퇴 이사 재선임, 새로운 기본 규약 및 조항 채택, 연례 주주총회 공고에 대한 세부 정보를 제공합니다.\n문의 사항은 Tricor Investor Services Limited의 고객 서비스 핫라인(월요일부터 금요일까지 오전 9시부터 오후 5시까지)인 2980 1333으로 연락하십시오. 쉬지 않고 노력하는 쉬지 않는 팀이 있습니다.\n주식회사 신오라이프 그룹의 회장이자 사외이사로서 서빙하고 있습니다."
//       }
//     },
//     {
//       "id": "11181186",
//       "dataDate": "2024-04-26T08:42:00Z",
//       "korName": "CIFI ES SERVICE",
//       "details": {
//         "secName": [
//           "ES SERVICES"
//         ],
//         "secCode": [
//           "01995"
//         ],
//         "categoryId": "Announcements and Notices",
//         "fileLink": "https://www1.hkexnews.hk/listedco/listconews/sehk/2024/0426/2024042601146.pdf"
//       },
//       "analysisDetails": {
//         "topicKor": "주식 코드 1995",
//         "summarizeTinyKor": "에버 선샤인 서비스 그룹 리미티드에 관한 주요 정보",
//         "summarizeLongKor": "에버 선샤인 서비스 그룹 리미티드, 주식 코드 1995,은 2024년 4월 26일 공고를 발표했습니다.\n회사의 이사진에는 LIN Zhong씨, ZHOU Hongbin씨, ZHOU Di씨가 있으며 비직속 이사로는 CUI Xiaoqing씨가 있습니다.\n독립 비직속 이사로는 MA Yongyi씨, YU Tiecheng씨, CHEUNG Wai Chung씨가 있습니다."
//       }
//     },
//     {
//       "id": "11181180",
//       "dataDate": "2024-04-26T08:42:00Z",
//       "korName": "대성식품",
//       "details": {
//         "secName": [
//           "DACHAN FOOD"
//         ],
//         "secCode": [
//           "03999"
//         ],
//         "categoryId": "Circulars",
//         "fileLink": "https://www1.hkexnews.hk/listedco/listconews/sehk/2024/0426/2024042601140.pdf"
//       },
//       "analysisDetails": {
//         "topicKor": "주주",
//         "summarizeTinyKor": "대찬식품(아시아) 주식주들을 위한 중요 정보",
//         "summarizeLongKor": "대찬식품(아시아) 주식주의 주식 코드는 3999입니다.\n2023년 연례 보고서 및 공고문(이하 '공고문')이 발행되었으며, 제안된 총괄 위임, 이사 재선임 및 연례 주주총회를 다루고 있습니다.\n회사 웹사이트와 HKExnews에서 영어 및 중국어로 된 최신 기업 소식을 확인하세요. 회사 웹사이트의 '투자자' 및 '최신 재무정보'에서 2023년 연례 보고서에 접속하세요. '투자자' 및 '공고'에서 공고문 및 대리투표 양식을 확인하거나 HKExnews에서 확인하세요. 회사 웹사이트 또는 HKExnews에서 다운로드할 수 있는 '요청 양식'을 작성하여 인쇄된 또는 온라인 기업 소식을 영어 또는 중국어로 선택하세요. 홍콩 주식 등록기관에 문의하여 기본 설정을 업데이트하세요. 문의 사항이 있을 경우 영업 시간에 홍콩 주식 등록기관 (852) 2980 1333으로 전화하세요. 대찬식품(아시아) 주식회사의 회장은 제임스 춘희선입니다."
//       }
//     },
//     {
//       "id": "11181174",
//       "dataDate": "2024-04-26T08:42:00Z",
//       "korName": "영가그룹",
//       "details": {
//         "secName": [
//           "WIN HANVERKY"
//         ],
//         "secCode": [
//           "03322"
//         ],
//         "categoryId": "Circulars",
//         "fileLink": "https://www1.hkexnews.hk/listedco/listconews/sehk/2024/0426/2024042601134.pdf"
//       },
//       "analysisDetails": {
//         "topicKor": "주식 등록기관",
//         "summarizeTinyKor": "윈한버키 홀딩스 리미티드 주주를 위한 중요 정보 (주식 코드 3322)",
//         "summarizeLongKor": "소중한 주주 여러분, 윈한버키 홀딩스 리미티드의 주식 등록기관은 트리코 인베스터 서비스 리미티드이며 회장은 리궁동 로이입니다.\n주주분들께서는 중개인에게 기능적인 이메일 주소를 제공하는 것을 권장합니다.\n2023년 ESG 보고서는 윈한버키 홀딩스 리미티드와 홍콩 증권거래소의 웹사이트에서 확인하실 수 있습니다.\n2023년 ESG 보고서의 인쇄본을 받기 위해서는 주주분들께서는 영업시간 중 (852) 2980 1333으로 주식 등록기관에 서면 요청을 하시면 됩니다.\n기업 통신을 받기 위한 요청서 양식은 명확하게 작성되어야 하며, 회사는 양식에 특별한 지시사항을 수용할 수 없음을 알려드립니다.\n회사의 개인정보 수집 방침은 홍콩 법률인 개인정보(개인정보 보호) 규정, Cap. 486과 일치합니다."
//       }
//     },
//     {
//       "id": "11181166",
//       "dataDate": "2024-04-26T08:42:00Z",
//       "korName": "초상국부동산",
//       "details": {
//         "secName": [
//           "CHI MER LAND"
//         ],
//         "secCode": [
//           "00978"
//         ],
//         "categoryId": "Announcements and Notices",
//         "fileLink": "https://www1.hkexnews.hk/listedco/listconews/sehk/2024/0426/2024042601126.pdf"
//       },
//       "analysisDetails": {
//         "topicKor": "계약 매출, 판매 가격, 이사회 구성원",
//         "summarizeTinyKor": "중국머천츠랜드리미티드 2024년 제1분기 영업 통계 보고서",
//         "summarizeLongKor": "중국머천츠랜드리미티드는 2024년 3월 31일 종료된 3개월간의 감사되지 않은 영업 통계를 보고했습니다.\n그룹은 약 6,670.76억 위안의 누적 계약 매출을 달성했으며, 전년 동기 대비 32% 감소했습니다.\n누적 계약 매출 면적은 약 297,102㎡로, 전년 동기 대비 37% 감소했습니다.\n해당 기간의 평균 판매 가격은 약 22,453 위안/㎡였습니다.\n중국머천츠랜드리미티드 이사회에는 JIANG Tiefeng씨가 회장으로 포함되어 있습니다."
//       }
//     },
//     {
//       "id": "11181162",
//       "dataDate": "2024-04-26T08:42:00Z",
//       "korName": "몽골리안광업",
//       "details": {
//         "secName": [
//           "MONGOL MINING"
//         ],
//         "secCode": [
//           "00975"
//         ],
//         "categoryId": "Proxy Forms",
//         "fileLink": "https://www1.hkexnews.hk/listedco/listconews/sehk/2024/0426/2024042601122.pdf"
//       },
//       "analysisDetails": {
//         "topicKor": "연례 주주총회",
//         "summarizeTinyKor": "몽골리안 광업회사에 관한 중요 정보 (주식 코드, 975)",
//         "summarizeLongKor": "케이맨 제도에 설립된 몽골리안 광업회사는 2024년 6월 26일 수요일 오전 10시에 홍콩에서 연례 주주총회를 개최할 예정입니다.\n이 회의에서는 2023년 12월 31일 종료된 회계연도의 감사 보고서가 검토될 것입니다.\n회사는 핵심 이사 재선임, 이사 보수 승인, KPMG의 감사 재선임 및 기타 중요한 결의안을 제안합니다.\n주주들은 2024년 4월 29일자 공고서를 검토하여 조합 규정 개정에 대한 세부 정보를 확인할 것을 권고합니다.\n대리 투표용 서식은 회의 48시간 전에 회사의 홍콩 지점 주주 등록기관에 제출되어야 합니다.\n회사의 자사주는 총회에서 투표 권리가 없음을 유의하십시오."
//       }
//     },
//     {
//       "id": "11181160",
//       "dataDate": "2024-04-26T08:42:00Z",
//       "korName": "NATURAL FOOD IH",
//       "details": {
//         "secName": [
//           "NATURAL FOOD IH"
//         ],
//         "secCode": [
//           "01837"
//         ],
//         "categoryId": "Circulars",
//         "fileLink": "https://www1.hkexnews.hk/listedco/listconews/sehk/2024/0426/2024042601120.pdf"
//       },
//       "analysisDetails": {
//         "topicKor": "배당금",
//         "summarizeTinyKor": "내추럴 푸드 인터내셔널 홀딩 리미티드의 최신 개발 내용",
//         "summarizeLongKor": "내추럴 푸드 인터내셔널 홀딩 리미티드는 최근 기준일 현재 발행 주식 수가 21억 8,851만 4,000주이며, 추가로 4억 3,770만 2,800주를 발행하고 2억 1,885만 1,400주를 재매입할 수 있는 잠재력이 있습니다.\n이는 총 발행 주식의 10%에 해당합니다.\n회사의 주식 코드는 1837입니다.\n회사는 주식 발행 및 재매입에 대한 일반 명령을 부여하고, 은퇴한 이사들을 재선출하며, 최종 배당금을 분배하는 등 다양한 결의안을 제안했습니다.\n제안된 최종 배당금은 2023년 12월 31일 종료된 연도에 대해 주당 약 RMB0.0323(약 HK$0.0356)의 보통 주당 배당금으로, 총액은 약 RMB7천만으로, 해당 연도 그룹 순이익의 약 45.70%에 해당합니다.\n배당금은 2024년 6월 21일에 예상되며, 2024년 6월 13일 회원 등록 주주에게 지급될 예정입니다.\n어떤 지점에서는 2024년 5월 31일 중국 심천에서 오전 10시에 예정된 연례 주주 총회에서 회사 감사인으로 엘너스트 앤 영이 재임될 것입니다."
//       }
//     },
//     {
//       "id": "11181154",
//       "dataDate": "2024-04-26T08:42:00Z",
//       "korName": "ZAI LAB",
//       "details": {
//         "secName": [
//           "ZAI LAB"
//         ],
//         "secCode": [
//           "09688"
//         ],
//         "categoryId": "Announcements and Notices",
//         "fileLink": "https://www1.hkexnews.hk/listedco/listconews/sehk/2024/0426/2024042601114.pdf"
//       },
//       "analysisDetails": {
//         "topicKor": "실적 통화",
//         "summarizeTinyKor": "2024년 제1분기 Zai Lab Limited의 중요 업데이트",
//         "summarizeLongKor": "Zai Lab Limited의 감사위원회는 2024년 3월 31일 종료된 3개월간의 감사되지 않은 분기 결과를 미국 증권거래위원회 규정과 미국 증권 거래 위원회 규정에 따라 2024년 5월 8일에 승인할 예정입니다.\n게다가, Zai Lab Limited의 경영진은 2024년 5월 9일 오전 8시에 Q1 2024 결과를 검토하기 위해 라이브 실적 통화 및 웹캐스트를 진행할 예정입니다.\n특히, Zai Lab Limited의 이사회는 Samantha Du 박사, Kai-Xian Chen 박사, John Diekman 박사, Richard Gaynor 박사, Nisa Leung 여사, William Lis 씨, Scott W. Morrison 씨, Leon O. Moulder Jr. 씨, Michel Vounatsos 씨, Peter Wirth 씨 등으로 구성되어 있습니다."
//       }
//     },
//     {
//       "id": "11181151",
//       "dataDate": "2024-04-26T08:42:00Z",
//       "korName": "주강선박",
//       "details": {
//         "secName": [
//           "CHU KONG SHIP"
//         ],
//         "secCode": [
//           "00560"
//         ],
//         "categoryId": "Circulars",
//         "fileLink": "https://www1.hkexnews.hk/listedco/listconews/sehk/2024/0426/2024042601112.pdf"
//       },
//       "analysisDetails": {
//         "topicKor": "배당 제안",
//         "summarizeTinyKor": "주강선박그룹(주) 제안서 요약",
//         "summarizeLongKor": "주강선박그룹(주)는 이사 재선임, 주당 5홍콩센트의 최종 배당 선언 및 주식 발행 및 상환을 위한 일반 명령을 제안하고 있습니다.\n발행 명령에 따른 최대 주식 수는 22,423,377주이며, 상환 명령에 따른 최대 주식 수는 5,605,834주입니다.\n회사의 지배주주는 GDPS(광동성항만운송그룹(주))이며, 최종 지배주주 또한 GDPS입니다.\n회사의 주식은 홍콩거래소에 상장되어 있으며, 주식 등록기관은 Tricor Tengis Limited입니다.\n회원 등록부는 2024년 6월 5일부터 2024년 6월 7일까지 폐쇄되며, 현금 배당에 대한 배당증권은 2024년 6월 28일쯤 주주들에게 일반 우편으로 발송될 예정입니다.\n회사의 등기 사무소 및 본사는 홍콩 중앙 콘나프로드 143번지 주강선박타워에 위치해 있습니다."
//       }
//     },
//     {
//       "id": "11180565",
//       "dataDate": "2024-04-26T08:42:00Z",
//       "korName": "씨엔지그룹",
//       "details": {
//         "secName": [
//           "SUPERACTIVE GP"
//         ],
//         "secCode": [
//           "00176"
//         ],
//         "categoryId": "Announcements and Notices",
//         "fileLink": "https://www1.hkexnews.hk/listedco/listconews/sehk/2024/0426/2024042600561.pdf"
//       },
//       "analysisDetails": {
//         "topicKor": "이사회 회의, 거래 중단, 회계연도, 회장, 이사, 독립 비직속 이사",
//         "summarizeTinyKor": "0176 주식 코드 이사회 회의 및 거래 중단 세부 사항",
//         "summarizeLongKor": "이사회 회의는 2024년 4월 30일 화요일에 예정되어 있으며, 거래 중단은 2024년 4월 2일에 시작됩니다.\n회계연도는 2023년 12월 31일에 종료되었습니다.\n회장은 Yeung So Lai이며, 이사회에는 Yeung So Lai 여사와 Lee Chi Shing Caesar 씨가 있습니다.\n독립 비직속 이사는 Chow Wai Leung William 씨, Leung Man Man 씨, Tse Ting Kwan 씨입니다."
//       }
//     },
//     {
//       "id": "11181141",
//       "dataDate": "2024-04-26T08:41:00Z",
//       "korName": "CLOUDR",
//       "details": {
//         "secName": [
//           "CLOUDR"
//         ],
//         "secCode": [
//           "09955"
//         ],
//         "categoryId": "Circulars",
//         "fileLink": "https://www1.hkexnews.hk/listedco/listconews/sehk/2024/0426/2024042601104.pdf"
//       },
//       "analysisDetails": {
//         "topicKor": "주주총회",
//         "summarizeTinyKor": "ClouDr Group Limited 개요",
//         "summarizeLongKor": "ClouDr Group Limited은 주식 코드 9955로 홍콩 증권거래소 주요 시장에 상장되어 있으며, 최근 실무 날짜 기준으로 총 발행된 보통주은 5억 870만 3,821주입니다.\n회사는 최대 11,740,764주의 추가 발행이 가능하며 최대 5,870,382주의 주식을 재매입할 수 있습니다.\n설립자인 Kuang Ming 씨는 이사, 회장 및 최고 경영자로 재직하고 있습니다.\n다가오는 주주총회에서는 은퇴하는 이사 재선임, 새로운 독립 비직무 이사 임명, 독립 감사인으로서 KPMG 재선임 등의 안건이 포함되어 있습니다.\n회사는 상장 규정에 맞추기 위해 새로운 기념사 및 조항 채택을 제안하고 있습니다.\n주주총회는 2024년 6월 6일에 예정되어 있으며, 투표 자격을 위해 회원 등록은 2024년 6월 3일부터 6월 6일까지 마감됩니다.\n주주는 회의 시작 48시간 전에 대리투표 양식을 제출해야 합니다.\nClouDr Group Limited은 2015년 8월 24일 케이맨 제도에 설립되었으며, 2022년 7월 6일에 증권거래소에 상장되었습니다.\n회사의 홍콩 사무실은 홍콩 구룡탕로 348번지 만라이프 플레이스 5층에 위치해 있습니다."
//       }
//     },
//     {
//       "id": "11181139",
//       "dataDate": "2024-04-26T08:41:00Z",
//       "korName": "중국생명그룹",
//       "details": {
//         "secName": [
//           "SINO-LIFE GROUP"
//         ],
//         "secCode": [
//           "08296"
//         ],
//         "categoryId": "Proxy Forms",
//         "fileLink": "https://www1.hkexnews.hk/listedco/listconews/gem/2024/0426/2024042601102.pdf"
//       },
//       "analysisDetails": {
//         "topicKor": "주주총회",
//         "summarizeTinyKor": "신라이프그룹 리미티드(주식 코드, 8296)에 관한 중요 정보",
//         "summarizeLongKor": "신라이프그룹 리미티드(주식 코드 8296)은 2023년 12월 31일 종료된 회계연도의 감사된 연결 재무제표를 다가오는 주주총회에서 검토할 예정입니다.\n회사의 추가 주식 발행 일반 위임권은 총 발행 주식의 20%로 제한되며, 주식 자사 매입은 총 발행 주식의 10%로 제한됩니다.\n회사의 정관 및 조합서 제안 개정안은 2024년 6월 21일 중국 홍콩 중심부 퀸스로 센트럴 99번지 센터 12층 2부에서 열리는 주주총회에서 논의될 예정입니다.\n회사의 독립 감사인은 크로우(HK) CPA 리미티드입니다.\n회사 주식의 액면가는 각각 0.1 홍콩 달러입니다.\n주주총회에서는 이사 재선임, 새로운 이사 후보인 쉬 젠춘씨와 후 짜오후이씨, 그리고 채충와이씨의 계속 임명이 포함될 예정입니다.\n이사회는 이사 보수를 결정하고 제3차 개정된 정관 및 조합서 채택을 위한 승인을 요청할 권한이 있습니다.\n주주들은 주주총회에서 투표를 위해 대리인을 지명할 것입니다."
//       }
//     },
//     {
//       "id": "11181120",
//       "dataDate": "2024-04-26T08:41:00Z",
//       "korName": "솔로몬시스텍",
//       "details": {
//         "secName": [
//           "SOLOMON SYSTECH"
//         ],
//         "secCode": [
//           "02878"
//         ],
//         "categoryId": "Circulars",
//         "fileLink": "https://www1.hkexnews.hk/listedco/listconews/sehk/2024/0426/2024042601092.pdf"
//       },
//       "analysisDetails": {
//         "topicKor": "주주",
//         "summarizeTinyKor": "솔로몬시스텍(인터내셔널)리미티드(2878) 2023 연차보고서 및 환경, 사회 및 지배구조 보고서 2023",
//         "summarizeLongKor": "솔로몬시스텍(인터내셔널)리미티드(2878)는 2023 연차보고서 및 환경, 사회 및 지배구조 보고서 2023를 회사 웹사이트에 게시했습니다.\n주주들은 회사 웹사이트에서 이러한 보고서에 접근할 수 있습니다.\n주주들은 홍콩의 회사 지점 주주등록기관에 연락하여 이러한 보고서의 인쇄본을 무료로 요청할 수 있습니다.\n주주들은 요청서에 선호하는 방식을 표시하여 향후 기업 의사소통을 인쇄 형태로 받을 수도 있습니다.\n비등기 주주들은 중계인과 협력하여 기업 의사소통을 전자적으로 받아야 합니다.\n추가 문의 사항이 있을 경우, 주주들은 트리코어 인베스터 서비스 리미티드의 고객 서비스 핫라인에 연락할 수 있습니다."
//       }
//     },
//     {
//       "id": "11181118",
//       "dataDate": "2024-04-26T08:41:00Z",
//       "korName": "HBM HOLDINGS-B",
//       "details": {
//         "secName": [
//           "HBM HOLDINGS-B"
//         ],
//         "secCode": [
//           "02142"
//         ],
//         "categoryId": "Circulars",
//         "fileLink": "https://www1.hkexnews.hk/listedco/listconews/sehk/2024/0426/2024042601090.pdf"
//       },
//       "analysisDetails": {
//         "topicKor": "기업 커뮤니케이션",
//         "summarizeTinyKor": "HBM Holdings Limited 주주를 위한 중요 정보",
//         "summarizeLongKor": "HBM Holdings Limited의 주주는 효과적인 기업 커뮤니케이션을 위해 유효한 이메일 주소를 제공해야 합니다.\n이메일이 제공되지 않을 경우, 업데이트 될 때까지 우편으로 통보됩니다.\n기업 커뮤니케이션에는 이사 보고서, 연례 회계, 감사 보고서 등이 포함됩니다.\n실행 가능한 기업 커뮤니케이션은 주주의 지시를 요청합니다.\n주주는 영어와 중국어로 인쇄된 커뮤니케이션을 요청할 수 있습니다.\n데이터 개인 정보 보호가 강조되며, 주주는 데이터 접근 또는 수정을 요청할 수 있습니다.\n개인 데이터 사용은 회신 양식에서 설명되어 있습니다.\n주주는 처리를 위해 Tricor Investor Services Limited에 회신 양식을 반환해야 합니다."
//       }
//     },
//     {
//       "id": "11181116",
//       "dataDate": "2024-04-26T08:41:00Z",
//       "korName": "WK GROUP",
//       "details": {
//         "secName": [
//           "WK GROUP"
//         ],
//         "secCode": [
//           "02535"
//         ],
//         "categoryId": "Proxy Forms",
//         "fileLink": "https://www1.hkexnews.hk/listedco/listconews/sehk/2024/0426/2024042601088.pdf"
//       },
//       "analysisDetails": {
//         "topicKor": "대리인 양식",
//         "summarizeTinyKor": "WK Group (Holdings) Limited - 주주총회 안내",
//         "summarizeLongKor": "이 문서는 WK Group (Holdings) Limited (주식 코드. 2535)에 관한 것으로, 홍콩 중심의 Jardine House, 1 Connaught Place, Central, 31층 3101-3104호에서 2024년 5월 24일 금요일 오전 11시에 예정된 주주총회를 위한 대리인 양식으로 제공됩니다.\n이 문서에는 재무제표, 이사 선출, 감사위원 임명, 주식 발행, 주식 매입, 주식 거래를 위한 권한 연장에 관한 결의안이 포함되어 있으며, 다양한 거버넌스 및 재무 측면을 다룹니다.\n또한, 대리인 지명, 대리인 양식 작성 및 제출에 대한 안내를 제공하며, 대리인 지명 처리를 위한 개인정보 수집에 대한 성명서를 포함하고 있으며, 효과적인 투표 대표를 위해 정확하고 적시에 양식을 작성하는 중요성을 강조합니다."
//       }
//     },
//     {
//       "id": "11181112",
//       "dataDate": "2024-04-26T08:41:00Z",
//       "korName": "BONNY HLDG",
//       "details": {
//         "secName": [
//           "BONNY HLDG"
//         ],
//         "secCode": [
//           "01906"
//         ],
//         "categoryId": "Announcements and Notices",
//         "fileLink": "https://www1.hkexnews.hk/listedco/listconews/sehk/2024/0426/2024042601084.pdf"
//       },
//       "analysisDetails": {
//         "topicKor": "기업 커뮤니케이션",
//         "summarizeTinyKor": "본니 인터내셔널 홀딩 리미티드(주식 코드 1906)의 기업 커뮤니케이션 전자 배포에 대한 새로운 체계",
//         "summarizeLongKor": "본니 인터내셔널 홀딩 리미티드(주식 코드 1906)는 비등록 주주들에게 기업 커뮤니케이션을 배포하기 위한 새로운 시스템을 도입했습니다.\n비등록 주주들은 트리코어 인베스터 서비스 리미티드에 요청 양식을 제출하여 인쇄된 기업 커뮤니케이션의 사본을 요청할 수 있습니다.\n또한, 비등록 주주들은 전자적으로 커뮤니케이션을 받기 위해 이메일 주소를 제공할 수 있습니다.\n궁금한 사항이 있을 경우, 비등록 주주들은 본니 인터내셔널 홀딩 리미티드의 지점 주식 등록기관 전화 라인인 (852) 2980 1333 또는 이메일 1906-ecom@hk.tricorglobal.com로 문의할 수 있습니다.\n이 문서는 본니 인터내셔널 홀딩 리미티드의 회장 진구준에 의해 서명되었습니다."
//       }
//     },
//     {
//       "id": "11181104",
//       "dataDate": "2024-04-26T08:41:00Z",
//       "korName": "안녕홀딩스",
//       "details": {
//         "secName": [
//           "ENM HOLDINGS"
//         ],
//         "secCode": [
//           "00128"
//         ],
//         "categoryId": "Circulars",
//         "fileLink": "https://www1.hkexnews.hk/listedco/listconews/sehk/2024/0426/2024042601076.pdf"
//       },
//       "analysisDetails": {
//         "topicKor": "연례 주요 주주총회",
//         "summarizeTinyKor": "ENM Holdings Limited 주요 주주총회 안내",
//         "summarizeLongKor": "ENM Holdings Limited (주식 코드. 00128)은 2024년 6월 6일 목요일 오전 10시에 홍콩 신지구 츄엔완 로와이 힐탑 컨트리 클럽에서 연례 주요 주주총회를 개최할 예정입니다.\n안건으로는 감사된 연결 재무제표, 이사회 보고서, 및 2023년 12월 31일 종료된 연도에 대한 감사인의 보고서 등이 포함됩니다.\n회의에서는 이사 재선임, 이사 보수 승인, 그리고 감사인으로 RSM 홍콩 재선임이 논의될 예정입니다.\n또한, 이사회에게 회사 발행 주식 총 수의 20%를 초과하지 않는 추가 주식 발행을 제안할 예정이며, 이사회는 주주들이 주주총회에서 제안된 결의안에 찬성표를 행사할 것을 권고합니다.\n독립 비직무 이사의 이사 보수는 연간 HK$175,670으로 설정되며, 위원회 및 회의 참석에 대한 추가 보수가 있습니다.\n이사회는 주주들로부터 주주총회 이전에 제출된 서면 질문에 대답할 것이며, 악천후의 경우 주주총회가 연기될 수 있습니다.\n주주총회 장소와 츄엔완 MTR 역 간에 무료 셔틀 버스 서비스가 제공될 예정입니다.\nENM Holdings의 사장은 Mrs. Penny Soh Peng CROSBIE-WALSH이며, 비직무 이사는 Mr. Hung Han WONG이고, 독립 비직무 이사는 Mr. Kin Wing CHEUNG, Ms. Imma Kit Sum LING, 그리고 Mr. Hin Fun Anthony TSANG입니다."
//       }
//     },
//     {
//       "id": "11181102",
//       "dataDate": "2024-04-26T08:41:00Z",
//       "korName": "주강파이프라인",
//       "details": {
//         "secName": [
//           "CHU KONG PIPE"
//         ],
//         "secCode": [
//           "01938"
//         ],
//         "categoryId": "Announcements and Notices",
//         "fileLink": "https://www1.hkexnews.hk/listedco/listconews/sehk/2024/0426/2024042601074.pdf"
//       },
//       "analysisDetails": {
//         "topicKor": "연례 주주총회",
//         "summarizeTinyKor": "주강석유 및 천연가스 파이프 홀딩스 리미티드 연례 주주총회에 관한 중요 정보",
//         "summarizeLongKor": "주강석유 및 천연가스 파이프 홀딩스 리미티드의 연례 주주총회는 2024년 6월 21일 금요일 오전 10시 30분에 홍콩 중심부 퀸스로드 29번 중국빌딩 1층에서 개최될 예정입니다.\n회사 및 자회사의 감사된 연결재무제표와 2023년 12월 31일 종료 연도에 대한 이사 및 감사인 보고서가 회의에서 검토될 것입니다.\n회사의 감사인인 CCTH CPA 리미티드는 연례 주주총회에서 재선임될 예정입니다.\n이사들이 주식을 배정, 발행 및 거래할 권한을 갖도록 하는 것에 대한 승인을 얻고자 합니다.\n이 권한은 결의문 채택일의 총 발행 주식 수의 20%를 초과하지 않는 한도로 제한됩니다.\n회사는 주식거래소에서 주식을 매입하기 위한 결의안을 제안하며, 결의문 채택일의 총 발행 주식 수를 초과하지 않는 주식의 총 수를 제한합니다.\n회사가 매입한 주식의 총 수를 나타내는 금액으로 회사 이사들에게 주식을 배정, 발행 및 거래할 권한을 부여하는 일반 위임권은 총 발행 주식 수의 10%를 초과하지 않는 한도로 연장될 것입니다.\n주강석유 및 천연가스 파이프 홀딩스 리미티드 이사회는 CHEN Chang 및 CHEN Zhao Nian 씨로 구성된 이사 2명과 CHEN Ping, AU YEUNG Kwong Wah, ZHAN Jian Zhou 씨로 구성된 3명의 독립 비직무 이사로 구성되어 있습니다."
//       }
//     },
//     {
//       "id": "11181098",
//       "dataDate": "2024-04-26T08:41:00Z",
//       "korName": null,
//       "details": {
//         "secName": [
//           "HU#HSI RP2604C",
//           "HU#HSI RP2604D",
//           "HU#HSI RP2604E",
//           "HU#HSI RP2601A",
//           "HU#HSI RP2609E"
//         ],
//         "secCode": [
//           "55990",
//           "55991",
//           "55994",
//           "61248",
//           "64123"
//         ],
//         "categoryId": "Debt and Structured Products",
//         "fileLink": "https://www1.hkexnews.hk/listedco/listconews/sehk/2024/0426/2024042601070.pdf"
//       },
//       "analysisDetails": {
//         "topicKor": "CBBCs",
//         "summarizeTinyKor": "행성 지수 베어형 CBBC의 세부 사항",
//         "summarizeLongKor": "발행인. 화태금융홀딩스(홍콩) 리미티드. 의무 콜 이벤트 날짜. 2024년 4월 26일. 잔존 가치 지급 날짜. 2024년 5월 2일 이전. 주요 행성 지수 베어형 CBBC의 주식 코드는 61248, 55991, 55990, 64123 및 55994입니다.\n주요 세부 사항에는 MCE 시간, 기초자산, 제수, 지수 통화 금액(HKD), 보드 단위, 행사 가격, 최대 지수 수준, CBBC 당 잔존 가치(HKD) 및 보드 단위 당 잔존 가치(HKD)가 포함됩니다."
//       }
//     },
//     {
//       "id": "11181080",
//       "dataDate": "2024-04-26T08:40:00Z",
//       "korName": "짱구식품",
//       "details": {
//         "secName": [
//           "LABIXIAOXIN"
//         ],
//         "secCode": [
//           "01262"
//         ],
//         "categoryId": "Announcements and Notices",
//         "fileLink": "https://www1.hkexnews.hk/listedco/listconews/sehk/2024/0426/2024042601054.pdf"
//       },
//       "analysisDetails": {
//         "topicKor": "주요 주주총회",
//         "summarizeTinyKor": "2024년 6월 18일 LABIXIAOXIN SNACKS GROUP LIMITED 주요 주주총회 세부사항",
//         "summarizeLongKor": "LABIXIAOXIN SNACKS GROUP LIMITED은 2024년 6월 18일 홍콩에서 오전 10시에 주요 주주총회를 소집할 예정입니다.\n주식 코드 1262로 알려진 이 회의에서는 2023년 12월 31일 종료된 회계 연도의 감사된 재무제표 채택, 이사 재선임, 감사인 선임, 이사 보수 결정 권한 부여, 회사 주식의 20% 및 10% 한도 내에서의 배정 및 구매 승인, 주식 구매 일반 위임 확장, 제안된 규칙 변경에 대한 특별 결의 등이 논의될 예정입니다.\n7명의 이사로 구성된 이사회에는 이사와 비이사가 모두 포함되어 있습니다."
//       }
//     },
//     {
//       "id": "11181078",
//       "dataDate": "2024-04-26T08:40:00Z",
//       "korName": "창첩통정보기술",
//       "details": {
//         "secName": [
//           "CHANJET"
//         ],
//         "secCode": [
//           "01588"
//         ],
//         "categoryId": "Announcements and Notices",
//         "fileLink": "https://www1.hkexnews.hk/listedco/listconews/sehk/2024/0426/2024042601052.pdf"
//       },
//       "analysisDetails": {
//         "topicKor": "재무 성과",
//         "summarizeTinyKor": "2024년 제1분기 찬젯정보기술(주)의 재무 성과 개요",
//         "summarizeLongKor": "2024년 제1분기에 홍콩 증권거래소의 상장 코드 1588인 찬젯정보기술(주)은 영업 수익이 2억 1,299만 위안으로 전년대비 9% 증가했습니다.\n클라우드 구독 매출은 1억 4,785만 위안으로 전년대비 32% 증가하여 총 수익의 69%를 차지했습니다.\n분기 말 클라우드 구독 계약 부채는 전년 말 대비 10% 상승한 5억 8,984만 위안이었습니다.\n그룹은 1억 5,347만 위안의 총이익을 달성하여 전년대비 16% 증가했습니다.\n주주에게 속한 순손실은 4,390만 위안이었지만, 이는 전년 대비 73% 향상된 순손실인 1억 6,230만 위안을 기록했습니다.\n2024년 3월 31일 기준 그룹의 총자산은 전년 말 대비 2% 증가한 1,622억 60만 위안이었습니다.\n2024년 제1분기에 그룹의 클라우드 서비스 사업에 신규 유료 기업 사용자 수는 35,000명으로 전년대비 43% 증가하여 누적 유료 기업 사용자 수는 668,000명이 되었습니다."
//       }
//     },
//     {
//       "id": "11181058",
//       "dataDate": "2024-04-26T08:39:00Z",
//       "korName": "CLOUDR",
//       "details": {
//         "secName": [
//           "CLOUDR"
//         ],
//         "secCode": [
//           "09955"
//         ],
//         "categoryId": "Announcements and Notices",
//         "fileLink": "https://www1.hkexnews.hk/listedco/listconews/sehk/2024/0426/2024042601038.pdf"
//       },
//       "analysisDetails": {
//         "topicKor": "주식 코드 9955",
//         "summarizeTinyKor": "ClouDr Group Limited 주식 정보",
//         "summarizeLongKor": "ClouDr Group Limited는 주식 코드 9955로, 주주들에 의한 특별 의결을 거쳐 다가오는 주주총회에서 새로운 기본규약 및 조항의 채택을 제안했습니다.\n이사회는 Kuang Ming 씨를 사내 이사, Lee Kar Chung Felix 씨를 비사내 이사, 그리고 Hong Weili 박사, Zhang Saiyin 씨, Ang Khai Meng 씨를 독립 비사내 이사로 포함하고 있습니다.\nClouDr Group Limited의 발표는 2024년 4월 26일에 이루어졌습니다.\n기존의 기본규약 및 조항에 대한 제안된 개정안은 연례 주주총회를 위한 공고와 함께 주주들에게 회보로 발송될 예정입니다."
//       }
//     },
//     {
//       "id": "11181056",
//       "dataDate": "2024-04-26T08:39:00Z",
//       "korName": "CAPINFO",
//       "details": {
//         "secName": [
//           "CAPINFO"
//         ],
//         "secCode": [
//           "01075"
//         ],
//         "categoryId": "Financial Statements/ESG Information",
//         "fileLink": "https://www1.hkexnews.hk/listedco/listconews/sehk/2024/0426/2024042601036.pdf"
//       },
//       "analysisDetails": {
//         "topicKor": "재무 성과",
//         "summarizeTinyKor": "2023년 Capinfo 회사의 재무 하이라이트",
//         "summarizeLongKor": "Capinfo 회사는 2023년에 강력한 재무 상태를 보고했습니다.\n총 자산은 2,496.82억 위안, 영업 수익은 1,425.58억 위안, 총 손실은 -90.23억 위안이었습니다.\n회사는 41.76억 위안의 세금을 납부했고, 자본금은 1,144.95억 위안이었습니다.\nCapinfo는 연구 및 개발에 243.53억 위안을 투자했으며, 1,624명의 직원을 고용하고 14,072명의 직원에게 교육을 제공했습니다.\n사회보험 가입률은 100%이며, 473.62억 위안의 사회 공헌을 했습니다.\nCapinfo는 2023년 말 기준으로 78개의 상표, 12개의 특허, 429개의 저작권을 보유하고 있었습니다.\n추가로, 150개의 토너 카트리지를 교체하고 재활용했으며, 다양한 파트너 및 공급업체를 보유하고 있었습니다."
//       }
//     },
//     {
//       "id": "11181054",
//       "dataDate": "2024-04-26T08:39:00Z",
//       "korName": "노경인프라스트럭처",
//       "details": {
//         "secName": [
//           "ROAD KING INFRA"
//         ],
//         "secCode": [
//           "01098"
//         ],
//         "categoryId": "Announcements and Notices",
//         "fileLink": "https://www1.hkexnews.hk/listedco/listconews/sehk/2024/0426/2024042601034.pdf"
//       },
//       "analysisDetails": {
//         "topicKor": "재무 성과",
//         "summarizeTinyKor": "2024년 3월 31일 종료된 로드 킹 인프라스트럭처 리미티드의 재무 하이라이트",
//         "summarizeLongKor": "로드 킹 인프라스트럭처 리미티드는 2024년 3월 31일 종료된 3개월간 RMB 3,131억의 계약 매출과 RMB 4,098억의 총 부동산 매출을 보고했습니다.\n동일 기간 동안 고속도로 프로젝트의 톨 수익은 RMB 848억으로, 평균 일일 교통량은 28만 5천 대의 차량입니다.\n또한, 로드 킹(중국) 인프라스트럭처 리미티드의 처분으로 약 RMB 3,970.6억에 해당하는 예비 고려금의 90%를 수령했습니다.\n젠 웨이 퍼, 데릭이 이끄는 로드 킹 인프라스트럭처 리미티드 이사회는 집행 이사와 비집행 이사로 구성되어 있습니다."
//       }
//     },
//     {
//       "id": "11181052",
//       "dataDate": "2024-04-26T08:39:00Z",
//       "korName": null,
//       "details": {
//         "secName": [
//           "CT#MTUANRP2603A",
//           "CT#XIAMIRP2408A"
//         ],
//         "secCode": [
//           "56069",
//           "63380"
//         ],
//         "categoryId": "Debt and Structured Products",
//         "fileLink": "https://www1.hkexnews.hk/listedco/listconews/sehk/2024/0426/2024042601032.pdf"
//       },
//       "analysisDetails": {
//         "topicKor": "콜러블 불/베어 계약, 베어 CBBC, Meituan, Xiaomi Corporation, 주식 코드, 잔존 가치, 보드 로트",
//         "summarizeTinyKor": "홍콩 증권거래소의 콜러블 불/베어 계약과 베어 CBBC 세부 내용",
//         "summarizeLongKor": "Citigroup Global Markets Europe AG는 콜러블 불/베어 계약의 발행인으로, 의무적 콜 이벤트는 2024년 4월 26일로 설정되어 있으며, 잔존 가치 지불은 2024년 5월 2일까지 이루어집니다.\nMeituan은 주식 코드 56069이며, Xiaomi Corporation은 주식 코드 63380으로 베어 CBBC의 기초 자산입니다.\nMeituan의 베어 CBBC는 CBBC 당 0.0070 홍콩 달러의 잔존 가치와 보드 로트 당 70.0000 홍콩 달러의 잔존 가치를 갖고 있으며, Xiaomi Corporation의 베어 CBBC는 CBBC 당 0.0052 홍콩 달러의 잔존 가치와 보드 로트 당 52.0000 홍콩 달러의 잔존 가치를 갖고 있습니다."
//       }
//     },
//     {
//       "id": "11181050",
//       "dataDate": "2024-04-26T08:39:00Z",
//       "korName": "SUNSHINE INS",
//       "details": {
//         "secName": [
//           "SUNSHINE INS"
//         ],
//         "secCode": [
//           "06963"
//         ],
//         "categoryId": "Announcements and Notices",
//         "fileLink": "https://www1.hkexnews.hk/listedco/listconews/sehk/2024/0426/2024042601030.pdf"
//       },
//       "analysisDetails": {
//         "topicKor": "재무 성과",
//         "summarizeTinyKor": "2024년 3월 31일 종료된 Sunshine Life의 재무 하이라이트",
//         "summarizeLongKor": "선도적인 보험사인 Sunshine Life은 2024년 첫 분기에 상당한 재무 활동을 보고했습니다.\n그들은 2021년 3월 26일과 2023년 12월 12일에 각각 RMB 50억과 RMB 70억을 달하는 자본 보충 채권을 발행했습니다.\n2024년 3월 31일 현재의 감사되지 않은 재무 데이터는 총 자산이 RMB 457,324,351,187.75, 총 부채가 RMB 421,329,644,896.30임을 보여주었습니다.\n동기간의 영업이익은 RMB 8,471,972,042.75로, 순이익은 RMB 1,836,382,700.91에 이르렀습니다.\n영업활동으로부터의 현금흐름에는 보험료로부터 RMB 36,331,668,944.77 및 순 현금 유입액으로 RMB 7,674,076,864.89이 포함되었습니다.\n투자활동에서는 RMB 4,122,241,360.12의 현금 유입이 있었으며, 투자로부터 RMB 62,149,311,057.78이 발생했습니다.\n자금 조달 활동은 RMB 9,153,816,194.14의 순 현금 유출로 이어졌습니다.\n2024년 3월 31일 현재의 현금 및 현금 등가물의 종료 잔액은 RMB 23,361,523,291.03입니다."
//       }
//     },
//     {
//       "id": "11181048",
//       "dataDate": "2024-04-26T08:39:00Z",
//       "korName": "몽골리안광업",
//       "details": {
//         "secName": [
//           "MONGOL MINING"
//         ],
//         "secCode": [
//           "00975"
//         ],
//         "categoryId": "Announcements and Notices",
//         "fileLink": "https://www1.hkexnews.hk/listedco/listconews/sehk/2024/0426/2024042601028.pdf"
//       },
//       "analysisDetails": {
//         "topicKor": "연례 주주총회",
//         "summarizeTinyKor": "몽골리안 광업회사 (주식 코드, 975)에 대한 중요 정보",
//         "summarizeLongKor": "몽골리안 광업회사 (주식 코드. 975)는 2024년 6월 26일 수요일 오전 10시에 홍콩에서 연례 주주총회를 개최할 예정입니다.\n이 회의에서는 2023년 12월 31일 종료된 연도의 감사 보고서를 검토할 것입니다.\nKPMG가 감사인으로 재선임될 예정입니다.\n이사들은 총 발행 주식의 20%를 초과하지 않는 추가 주식 발행 및 총 발행 주식의 10%를 초과하지 않는 주식 재매입에 대한 일반적인 권한을 갖게 될 것입니다.\n조합원 명부가 2024년 6월 21일 금요일부터 6월 26일 수요일까지 폐쇄될 예정이며, 조합원 명부가 수정될 것입니다.\n이사회에는 Odjargal Jambaljamts씨, Battsengel Gotov박사, Od Jambaljamts씨, Enkhtuvshin Gombo씨, Myagmarjav Ganbyamba씨, Khashchuluun Chuluundorj박사, Unenbat Jigjid씨, Chan Tze Ching, Ignatius씨가 포함되어 있습니다."
//       }
//     },
//     {
//       "id": "11181046",
//       "dataDate": "2024-04-26T08:39:00Z",
//       "korName": "LITIAN PICTURES",
//       "details": {
//         "secName": [
//           "LITIAN PICTURES"
//         ],
//         "secCode": [
//           "09958"
//         ],
//         "categoryId": "Announcements and Notices",
//         "fileLink": "https://www1.hkexnews.hk/listedco/listconews/sehk/2024/0426/2024042601026.pdf"
//       },
//       "analysisDetails": {
//         "topicKor": "리티안 픽처스 홀딩스 리미티드",
//         "summarizeTinyKor": "리티안 픽처스 홀딩스 리미티드 이사회 및 위원회 개요",
//         "summarizeLongKor": "리티안 픽처스 홀딩스 리미티드 (주식 코드. 9958)는 이사회가 구성되어 있으며, 이사로는 유안 리씨, 티안 티안씨, 부 지에윈씨가 있으며, 비사외 이사로는 텅 빙 셩씨, 리우 한린씨, 간 웨이민씨가 있습니다.\n이사들의 역할과 기능이 명시되어 있으며, 유안 리씨가 회장을 맡고 있습니다.\n이사회에는 감사, 보수, 후보지명 등의 위원회가 있으며, 다양한 이사들이 이 위원회의 의장 또는 구성원으로 활동하고 있습니다.\n이 정보는 2024년 4월 26일에 공개되었습니다."
//       }
//     },
//     {
//       "id": "11181044",
//       "dataDate": "2024-04-26T08:39:00Z",
//       "korName": "중국생명그룹",
//       "details": {
//         "secName": [
//           "SINO-LIFE GROUP"
//         ],
//         "secCode": [
//           "08296"
//         ],
//         "categoryId": "Circulars",
//         "fileLink": "https://www1.hkexnews.hk/listedco/listconews/gem/2024/0426/2024042601024.pdf"
//       },
//       "analysisDetails": {
//         "topicKor": "ESG 보고서",
//         "summarizeTinyKor": "신오라이프 그룹 리미티드의 2023년 환경, 사회 및 지배구조(ESG) 보고서",
//         "summarizeLongKor": "신오라이프 그룹 리미티드, 주식 코드 8296,는 회장 겸 사장인 쉬 지안춘의 이끄는 아래 2023 ESG 보고서를 발간했습니다.\n이 보고서는 회사 및 HKExnews 웹사이트에서 영어와 중국어로 제공됩니다.\n주주는 홍콩에 위치한 회사 등기사무소인 홍콩 성완의 웨스트 77번지 18층에서 인쇄본을 요청할 수 있습니다."
//       }
//     },
//     {
//       "id": "11181042",
//       "dataDate": "2024-04-26T08:39:00Z",
//       "korName": "BRONCUS-B",
//       "details": {
//         "secName": [
//           "BRONCUS-B"
//         ],
//         "secCode": [
//           "02216"
//         ],
//         "categoryId": "Circulars",
//         "fileLink": "https://www1.hkexnews.hk/listedco/listconews/sehk/2024/0426/2024042601022.pdf"
//       },
//       "analysisDetails": {
//         "topicKor": "주요 주주총회",
//         "summarizeTinyKor": "2024년 5월 20일 브롱커스 홀딩스 주식회사 주요 주주총회 세부 내용",
//         "summarizeLongKor": "브롱커스 홀딩스 주식회사 주요 주주총회는 2024년 5월 20일 중국 항저우에서 개최될 예정입니다.\n2023년 12월 31일 종료된 회계연도의 감사된 연결 재무제표가 제시될 예정입니다.\n회의 안건으로는 퇴임 이사 재선임, 감사 선임, 주식 발행 및 자사주 매입을 위한 일반 위임, 정관 및 조항의 제안된 개정, 제10차 개정 및 재작성된 정관 및 조항 채택이 포함됩니다.\n회의는 2024년 5월 20일 중국 항저우 빈장구역 서싱거리 88번지 8동 8층 801호에서 오전 10시에 개최될 예정입니다.\n문서상의 최신 날짜는 2024년 4월 19일입니다.\n브롱커스 홀딩스 주식회사 상장일은 2021년 9월 24일로 홍콩 증권거래소의 본 보드에 상장되었습니다.\n문서에서 홍콩 달러 (HK$)와 미국 달러 (USD)가 통화로 언급되었습니다.\n임 박사의 연간 보수는 HK$400,000입니다.\n자사주를 제외한 총 발행 주식은 5억 2,719만 8076주입니다.\n회사는 발행 총액의 10%에 해당하는 최대 5,271만 9807주를 자사주로 매입할 수 있습니다.\n2024년 4월의 최고 및 최저 주가는 각각 HK$0.60과 HK$0.46이었습니다.\n최근 실무 가능 날짜 이전 6개월 동안 주식 매입이 발생하지 않았습니다."
//       }
//     },
//     {
//       "id": "11181040",
//       "dataDate": "2024-04-26T08:39:00Z",
//       "korName": "천진진영공공사업",
//       "details": {
//         "secName": [
//           "TIANJINJINRAN"
//         ],
//         "secCode": [
//           "01265"
//         ],
//         "categoryId": "Financial Statements/ESG Information",
//         "fileLink": "https://www1.hkexnews.hk/listedco/listconews/sehk/2024/0426/2024042601020.pdf"
//       },
//       "analysisDetails": {
//         "topicKor": "재무 성과 및 운영 효율성",
//         "summarizeTinyKor": "2023년 진란공영의 재무 및 운영 현황",
//         "summarizeLongKor": "2023년에 진란공영의 계열사인 티안진 진란공영공사는 총 615명의 직원을 보고, 여성 직원의 비율은 38%였습니다.\n회사는 어린이 노동 또는 강제 노동 사례가 없었으며, 정규직 직원의 100%가 노동 계약을 체결했습니다.\n그들은 파이프라인 천연가스 523.96백만m³를 판매하고, 2,252.1168km에 이르는 가스 파이프라인 네트워크를 운영하며, 596,100가구에 가스를 공급했습니다.\n진란공영은 주거용 가스 프로젝트 7건과 산업 및 상업용자를 위한 39건, 중압 가스 프로젝트 6건을 완료했습니다.\n회사는 2023년에 138,147명의 주거 고객을 대상으로 실내 가스 시설을 개선하고 리모델링하며, 4,417.9만위안을 투자했습니다.\n진란공영의 재무 데이터는 기능통화로 인민폐(RMB)로 작성되었습니다.\n이사회는 2024년 3월 28일에 2023년 1월 1일부터 12월 31일까지의 8번째 ESG 보고서를 검토하고 승인했습니다.\n회사의 중국 본사는 티안진에 있으며 홍콩에는 완차이에 위치해 있습니다.\n회사는 무결성 및 준수위원회와 공동위원회를 설립하여 무결성과 준수 관리를 강화했습니다.\n진란공영은 2023년에 무결성 약속에 대한 100% 서명율을 달성했습니다.\n회사는 2023년 12월 31일 현재 중요한 리스크 사건이 없었으며 다양한 범주의 계약 템플릿을 30개 업데이트했습니다.\n진란공영은 내부 감사, 반부패 교육을 실시하고 중국 본토의 18개 공급업체와 협력했습니다.\n회사의 환경 보호 협약 체결율은 2023년 12월 31일 현재 100%였습니다.\n재무 성과 측면에서, 2023년에 회사는 휘발유 소비량이 전년대비 21.0% 감소했으며, 경유 소비량은 상대적으로 안정적이었습니다.\n총 전력 소비는 전년대비 5.9% 감소했습니다.\n2022년 총 전력 소비량은 1,098,618.00kWh이었고, 2021년에는 1,167,050.24kWh였습니다.\n2023년에 구매한 열력 소비량은 13,813.44GJ였습니다.\n2023년에 휘발유 소비량은 40,780.82리터이고, 경유 소비량은 1,998.64리터였습니다.\n2023년에 사용된 신수는 14,286.00톤이었습니다.\n2023년에 1만톤의 표준 석탄 통합 에너지 소비는 0.0652270이었고, 표준 석탄/생산 가치 당 통합 에너지 소비는 0.00366370이었습니다.\n2023년의 온실 가스 배출량은 Scope 1에서 이산화탄소 95.21톤, Scope 2에서 2,146.02톤으로, 총 2,241.23톤이었습니다.\n온실 가스 배출 강도는 1,000,000위안 당 이산화탄소 등가량이 1.26톤이었습니다."
//       }
//     },
//     {
//       "id": "11181036",
//       "dataDate": "2024-04-26T08:39:00Z",
//       "korName": "중국범태",
//       "details": {
//         "secName": [
//           "CHINAVTM MINING"
//         ],
//         "secCode": [
//           "00893"
//         ],
//         "categoryId": "Circulars",
//         "fileLink": "https://www1.hkexnews.hk/listedco/listconews/sehk/2024/0426/2024042601016.pdf"
//       },
//       "analysisDetails": {
//         "topicKor": "주주총회, 주식, 재선임",
//         "summarizeTinyKor": "중국 바나듐 티타노-자석광 채굴 회사 유한회사 업데이트 및 주주총회 세부사항",
//         "summarizeLongKor": "2024년 4월 18일 기준 중국 바나듐 티타노-자석광 채굴 회사 유한회사의 발행 주식은 2,249,015,410주였습니다.\n연례 주주총회는 2024년 5월 24일 중국 청두에서 개최될 예정입니다.\n이사인 Teh Wing Kwan씨와 Wu Wen씨는 주주총회에서 은퇴하고 재선거에 나설 예정입니다.\n회사는 주식 발행 및 자사 주식 재매입을 위한 일반 허가를 승인받고 있으며, 재매입은 최대 10%, 발행은 최대 20%까지 가능합니다.\n회사 감사인인 Mazars CPA Limited는 주주총회에서 재선임될 예정입니다.\n후보자 선출 위원회는 Teh Wing Kwan씨와 Wu Wen씨의 성과, 기술, 독립성을 고려하여 재선임을 추천했습니다."
//       }
//     },
//     {
//       "id": "11181034",
//       "dataDate": "2024-04-26T08:39:00Z",
//       "korName": "천백도",
//       "details": {
//         "secName": [
//           "C.BANNER"
//         ],
//         "secCode": [
//           "01028"
//         ],
//         "categoryId": "Announcements and Notices",
//         "fileLink": "https://www1.hkexnews.hk/listedco/listconews/sehk/2024/0426/2024042601014.pdf"
//       },
//       "analysisDetails": {
//         "topicKor": "주주총회",
//         "summarizeTinyKor": "2024년 6월 27일 C.banner International Holdings Limited 주총 세부사항",
//         "summarizeLongKor": "C.banner International Holdings Limited (주식 코드. 1028)의 연례 주주총회(AGM)는 2024년 6월 27일 목요일 오전 10시에 홍콩 중심부 중앙 콘노트로드 8번 랜드마크 차터 2층에서 개최될 예정입니다.\n이 회의에서는 2023년 12월 31일 종료된 회계연도의 감사 보고서, 이사회 및 감사인의 보고서, 그리고 감사인으로서의 ZHONGHUI ANDA CPA Limited의 재선임이 검토될 것입니다.\n이사들에게 추가 주식을 배정, 발행 또는 처리할 권한(현재 발행 주식의 20%까지)과 주식을 재매입할 권한(현재 발행 주식의 10%까지)을 얻기 위한 승인이 요청될 것입니다.\n새 주식을 위한 일반 위임권은 재매입된 주식에 의해 연장되며 발행 주식의 10%를 초과하지 않습니다.\n주총은 C.banner International Holdings Limited의 회장인 첸 이시 씨가 주재할 예정입니다.\n회사의 등기 사무실은 홍콩 어드미럴티 센터 타워 1 빅토리아 스트리트 31번지 5층 1503호에 위치해 있습니다.\n이사회는 첸 이시 씨, 위안 젠화 씨, 우 웨이밍 씨, 장 바오준 씨가 이사이며 비직원 이사는 청 쉔쉔 여사와 묘 빙웬 씨이며 독립 비직원 이사는 권 와이 순 윌슨 씨, 쉬 청밍 씨, 그리고 정 홍량 씨입니다."
//       }
//     },
//     {
//       "id": "11181032",
//       "dataDate": "2024-04-26T08:39:00Z",
//       "korName": "CSOP HONG KONG DOLLAR MONEY MARKET ETF",
//       "details": {
//         "secName": [
//           "A CSOP HKD MM"
//         ],
//         "secCode": [
//           "03053"
//         ],
//         "categoryId": "Listing Documents",
//         "fileLink": "https://www1.hkexnews.hk/listedco/listconews/sehk/2024/0426/2024042601012.pdf"
//       },
//       "analysisDetails": {
//         "topicKor": "CSOP 홍콩 달러 화폐시장 ETF",
//         "summarizeTinyKor": "CSOP 홍콩 달러 화폐시장 ETF에 관한 정보 (주식 코드, 03053은 HKD용, 83053은 RMB용)",
//         "summarizeLongKor": "CSOP 자산관리가 운용하는 이 펀드의 연간 지속적인 비용은 0.31%이며, 재무연도는 12월 31일에 끝납니다.\n배당 정책은 매년 12월에 매니저의 재량에 따라 결정됩니다.\n거래 단위는 HKD와 RMB 카운터 모두 1단위이며, 중개 수수료는 시장 요율에 따릅니다.\n거래세, AFRC 거래세, 거래 수수료는 각각 거래 단위의 거래 가격의 0.0027%, 0.00015%, 0.00565%입니다.\n관리 수수료는 연 0.30%입니다.\n매니저는 중요 뉴스를 영어와 중국어로 CSOP 자산관리 홈페이지에서 전달합니다.\n하위 펀드는 순자산 가치의 최대 15%를 자산 담보 상업어음에 투자할 수 있으며, 헷지 목적으로만 금융 파생상품을 사용할 수 있습니다."
//       }
//     },
//     {
//       "id": "11181030",
//       "dataDate": "2024-04-26T08:39:00Z",
//       "korName": "원생태목업",
//       "details": {
//         "secName": [
//           "YST DAIRY"
//         ],
//         "secCode": [
//           "01431"
//         ],
//         "categoryId": "Proxy Forms",
//         "fileLink": "https://www1.hkexnews.hk/listedco/listconews/sehk/2024/0426/2024042601010.pdf"
//       },
//       "analysisDetails": {
//         "topicKor": "주주총회",
//         "summarizeTinyKor": "YuanShengTai Dairy Farm Limited 주주총회 세부사항",
//         "summarizeLongKor": "버뮤다에 설립된 YuanShengTai Dairy Farm Limited는 주식 코드 1431로, 2024년 6월 25일 화요일 오전 10시에 중국 베이징에서 연례 주주총회를 개최할 예정입니다.\n이 회의에서는 2023년 12월 31일 종료된 회계연도의 감사 보고서를 검토하고 채택할 것입니다.\n이사들 중에는 Liu Gang씨, Leng Youbin씨, Liu Hua씨, Zhang Yuezhou씨, Zhang Yongjiu씨 등이 재선출을 받을 예정입니다.\nErnst \u0026 Young 회계사가 독립 감사인으로 재선임될 것이며, 이사들은 보수를 결정하고 주식을 처리하고 다시매입할 권한을 부여받을 것입니다.\n주주총회는 중국 베이징 시 채양구 주이쉰차오로 22번지 이스트 베이징 2공장에서 개최될 예정입니다."
//       }
//     },
//     {
//       "id": "11181028",
//       "dataDate": "2024-04-26T08:39:00Z",
//       "korName": "영가그룹",
//       "details": {
//         "secName": [
//           "WIN HANVERKY"
//         ],
//         "secCode": [
//           "03322"
//         ],
//         "categoryId": "Proxy Forms",
//         "fileLink": "https://www1.hkexnews.hk/listedco/listconews/sehk/2024/0426/2024042601008.pdf"
//       },
//       "analysisDetails": {
//         "topicKor": "연례 주주총회",
//         "summarizeTinyKor": "윈 한버키 홀딩스 리미티드 (주식 코드, 3322)에 관한 중요 정보",
//         "summarizeLongKor": "윈 한버키 홀딩스 리미티드는 2024년 6월 13일 목요일 오전 10시 30분에 홍콩 쿠란, 캐슬 피크 로드 481-483번지에 위치한 홍콩 스피너즈 산업빌딩 6층에서 연례 주주총회를 개최합니다.\n재무연도는 2023년 12월 31일에 종료되었습니다.\n2024년 12월 31일 종료 연도의 감사인은 프라이스워터하우스쿠퍼스입니다.\n회사 주식의 명목 가치는 각각 HK$0.10입니다.\n주주는 보유한 주식 수를 기입하고 회의에서 동의 또는 반대 의견을 표명할 수 있습니다.\n대리인 양식은 회의 48시간 전까지 회사의 홍콩 주식 등록대리인 및 이전 사무소인 트라이코어 인베스터 서비스 리미티드 17층, 홍콩 하코트 로드 16번지에 제출되어야 합니다.\n주주는 대리인을 지명하여 대신 투표하거나 대리인 양식을 제출했더라도 직접 회의에 참석하여 투표할 수 있습니다."
//       }
//     },
//     {
//       "id": "11181026",
//       "dataDate": "2024-04-26T08:39:00Z",
//       "korName": "WK GROUP",
//       "details": {
//         "secName": [
//           "WK GROUP"
//         ],
//         "secCode": [
//           "02535"
//         ],
//         "categoryId": "Circulars",
//         "fileLink": "https://www1.hkexnews.hk/listedco/listconews/sehk/2024/0426/2024042601006.pdf"
//       },
//       "analysisDetails": {
//         "topicKor": "WK 그룹 (홀딩스) 리미티드",
//         "summarizeTinyKor": "WK 그룹 (홀딩스) 리미티드 개요",
//         "summarizeLongKor": "WK 그룹 (홀딩스) 리미티드는 WK (BVI)가 75% 소유한 회사로, 발행된 주식은 20억 주입니다.\n주주총회에서 제안된 발행 권한은 최대 4억 주의 신주를 발행할 수 있도록 합니다.\n주주총회에서 제안된 자사주 매입 권한은 최대 2억 주의 자사주를 매입할 수 있도록 합니다.\nWK 그룹 (홀딩스) 리미티드 이사회는 Mr. Chan Kam Kei, Mr. Chan Kam Kong, Mr. Chan Wing Hong, Ms. Choi Chick Cheong, Ms. Chan Suk Man, Mr. Cha Ho Wa, Mr. Yu Chun Kit, 그리고 Mr. Liu Chi Kwun Albert로 구성되어 있습니다.\nMr. Chan Wing Hong의 연간 급여는 약 120만 홍콩달러이며, Ms. Choi Chick Cheong의 연간 급여는 약 60만 홍콩달러이며, Mr. Cha Ho Wa, Mr. Yu Chun Kit, 그리고 Mr. Liu Chi Kwun Albert의 각 연간 급여는 15만 홍콩달러입니다."
//       }
//     },
//     {
//       "id": "11181024",
//       "dataDate": "2024-04-26T08:39:00Z",
//       "korName": "DOWELL SERVICE",
//       "details": {
//         "secName": [
//           "DOWELL SERVICE"
//         ],
//         "secCode": [
//           "02352"
//         ],
//         "categoryId": "Announcements and Notices",
//         "fileLink": "https://www1.hkexnews.hk/listedco/listconews/sehk/2024/0426/2024042601004.pdf"
//       },
//       "analysisDetails": {
//         "topicKor": "경영진 변동",
//         "summarizeTinyKor": "DOWELL SERVICE GROUP Co LIMITED의 경영진 변동",
//         "summarizeLongKor": "DOWELL SERVICE GROUP Co LIMITED의 주식 코드는 2352입니다.\n양광 씨는 감사 이사회 의장직에서 사임하고 감사로 계속 일할 예정입니다.\n그는 2024년 4월 26일에 사임했습니다.\n마오 둔 씨가 같은 날 양광 씨를 대신하여 의장으로 선임되었으며 2023년 12월 14일부터 3년간 감사로 일할 예정입니다.\n마오 둔 씨는 이를 위해 추가 서비스 수수료를 받지 않을 것입니다.\n그는 2020년 12월에 감사로 임명되었으며 2023년 12월에 재선출되었습니다.\n45세인 마오 둔 씨는 2001년 7월부터 세무학 학사 학위를 보유하고 있습니다.\n그는 2014년 5월부터 동원 부동산 리미티드의 부감사 총괄 매니저이며 2024년 3월부터 디마 홀딩스 주식회사의 직원 감독자입니다.\n이사회에는 임직원으로 장애방지 씨와 판동 씨, 비임직원 이사로 루오 샤오잉 씨와 이린 씨, 그리고 독립 비임원 이사로 채잉 씨, 왕수생 씨, 송델량 씨가 포함되어 있습니다."
//       }
//     },
//     {
//       "id": "11181022",
//       "dataDate": "2024-04-26T08:39:00Z",
//       "korName": "복성국제",
//       "details": {
//         "secName": [
//           "FOSUN INTL"
//         ],
//         "secCode": [
//           "00656"
//         ],
//         "categoryId": "Financial Statements/ESG Information",
//         "fileLink": "https://www1.hkexnews.hk/listedco/listconews/sehk/2024/0426/2024042601002.pdf"
//       },
//       "analysisDetails": {
//         "topicKor": "재무 성과",
//         "summarizeTinyKor": "2023년도 복성국제 및 그 계열사들의 재무 성과 개요",
//         "summarizeLongKor": "2023년에 복성국제가 29.56%의 지분을 보유한 회사인 만성은 매출액이 285억 위안으로 전년대비 20.03% 감소하고, 상장회사의 주주에게 귀속된 순이익은 18.4억 위안으로 전년대비 49.69% 감소했습니다.\n복성국제의 자산관리 부문은 2023년에 1,529.47억 위안의 매출을 기록했으며, 전년대비 6.3% 감소했습니다.\n그러나 지분주의 손실은 191.08억 위안으로 전년대비 71.1% 증가했습니다.\n또한, 복성국제의 계열사인 복성유나이티드 헬스 인슈어런스는 2023년에 41.25억 위안의 매출을 기록하여 전년대비 6% 증가했습니다.\n회사는 684만 명의 고객을 서비스하며, 공식 클라이언트 애플리케이션 '강유웨이(康有唯)'의 신규 등록 회원이 크게 증가했습니다."
//       }
//     },
//     {
//       "id": "11181016",
//       "dataDate": "2024-04-26T08:39:00Z",
//       "korName": "YADONG GROUP",
//       "details": {
//         "secName": [
//           "YADONG GROUP"
//         ],
//         "secCode": [
//           "01795"
//         ],
//         "categoryId": "Circulars",
//         "fileLink": "https://www1.hkexnews.hk/listedco/listconews/sehk/2024/0426/2024042600996.pdf"
//       },
//       "analysisDetails": {
//         "topicKor": "주식",
//         "summarizeTinyKor": "야동 그룹 홀딩스 리미티드 주식 정보",
//         "summarizeLongKor": "야동 그룹 홀딩스 리미티드는 최근 실무 기준일 기준으로 발행 주식 6억 주를 보유하고 있습니다.\n제안된 주식 자사주 매입 권한은 최대 6천만 주까지 매입을 허용합니다.\n2023년 6월 28일에 연례 주주총회에서 발행 주식의 20%를 초과하지 않는 주식 거래를 위한 이사 일반 위임권이 일반 의결로 승인되었습니다.\n연례 주주총회에서 승인을 받을 예정인 주식 발행 권한은 최대 1억 2천만 주까지 발행을 허용할 수 있으며, 즉시 발행 계획은 없습니다.\n2023년 12월 31일 종료된 연도의 감사 보고서는 샤인윙 (홍콩) 회계사법인이 작성했습니다.\n이사회가 권고한 최종 배당액은 2023년 12월 31일 종료된 연도당 주당 3.0 홍콩 달러입니다."
//       }
//     },
//     {
//       "id": "11181012",
//       "dataDate": "2024-04-26T08:38:00Z",
//       "korName": "BONNY HLDG",
//       "details": {
//         "secName": [
//           "BONNY HLDG"
//         ],
//         "secCode": [
//           "01906"
//         ],
//         "categoryId": "Circulars",
//         "fileLink": "https://www1.hkexnews.hk/listedco/listconews/sehk/2024/0426/2024042600992.pdf"
//       },
//       "analysisDetails": {
//         "topicKor": "기업 커뮤니케이션",
//         "summarizeTinyKor": "보니 인터내셔널 홀딩 리미티드 주주를 위한 통지 서한 및 회신 양식",
//         "summarizeLongKor": "보니 인터내셔널 홀딩 리미티드는 1906로 상장되어 있으며 등록 주주에게 전자 기업 커뮤니케이션을 위한 기능적 이메일 주소 제공을 권고하는 통지 서한과 회신 양식을 발행했습니다.\n주주들은 영어, 중국어 또는 둘 다로 인쇄된 기업 커뮤니케이션을 선택할 수 있으며, 2023년 연례 보고서 발간에 대해 알림을 받습니다.\n회사 및 홍콩 증권거래소의 웹사이트에서 기업 커뮤니케이션에 접근할 것을 권장받습니다.\n주주들은 (852) 2980 1333으로 지사 주식 등록기관에 연락할 수 있습니다.\n향후 기업 커뮤니케이션을 전자적으로 수신하려면, 주주들은 회신 양식을 작성하고 서명한 후 홍콩의 지사 주식 등록기관에 반환하거나 1906-ecom@hk.tricorglobal.com으로 이메일을 보낼 수 있습니다.\n보니 인터내셔널 홀딩 리미티드의 회장은 진구준입니다."
//       }
//     },
//     {
//       "id": "11181008",
//       "dataDate": "2024-04-26T08:38:00Z",
//       "korName": null,
//       "details": {
//         "secName": [
//           "CT#TENCTRP2406A",
//           "CT#HSI RP2611D"
//         ],
//         "secCode": [
//           "52043",
//           "61003"
//         ],
//         "categoryId": "Debt and Structured Products",
//         "fileLink": "https://www1.hkexnews.hk/listedco/listconews/sehk/2024/0426/2024042600988.pdf"
//       },
//       "analysisDetails": {
//         "topicKor": "의무 콜 이벤트",
//         "summarizeTinyKor": "주식 코드 61003 및 52043의 의무 콜 이벤트 및 조기 만료 통지",
//         "summarizeLongKor": "시티그룹 글로벌 마켓 유럽 AG는 2024년 4월 26일 의무 콜 이벤트 및 주식 코드 61003 및 52043의 조기 만료에 관한 공지를 발행했습니다.\n이 이벤트로 인해 유럽식 현금 결제 카테고리 R 콜러블 불/베어 계약이 자동 종료되었습니다.\n주식 코드 61003은 1억 개의 CBBCs 발행 규모를 가졌으며, 주식 코드 52043은 1억 5천만 개의 CBBCs 발행 규모를 가졌으며, 두 계약은 각각 항생 지수와 텐센트 홀딩스 리미티드를 기초 자산으로 합니다.\n보유자들은 결제일에 각 CBBCs 보드 롯 당 잔존 가치를 수령할 것입니다.\n의무 콜 이벤트 후 거래는 거래소에 의해 취소되며, 보유자들은 어떠한 불일치 사항도 신속히 조정해야 합니다.\n잔존 가치 지급 후 발행인인 시티그룹 글로벌 마켓 유럽 AG에 추가적인 의무가 없을 것입니다.\n주식 거래소는 의무 콜 이벤트 후 CBBCs를 중지 및 상장 폐지할 것입니다.\n자세한 정보는 발행인 웹사이트 https.//www.citifirst.com.hk/en/cbbc/residual 및 주식 거래소 웹사이트 https.//www.hkex.com.hk/eng/cbbc/mce/mcetoday.htm에서 확인하십시오."
//       }
//     },
//     {
//       "id": "11181006",
//       "dataDate": "2024-04-26T08:38:00Z",
//       "korName": "BJ ENT URBAN",
//       "details": {
//         "secName": [
//           "BJ ENT URBAN"
//         ],
//         "secCode": [
//           "03718"
//         ],
//         "categoryId": "Circulars",
//         "fileLink": "https://www1.hkexnews.hk/listedco/listconews/sehk/2024/0426/2024042600986.pdf"
//       },
//       "analysisDetails": {
//         "topicKor": "기업 통신",
//         "summarizeTinyKor": "베이징 엔터프라이즈 어반 리소스 그룹 리미티드 정보",
//         "summarizeLongKor": "베이징 엔터프라이즈 어반 리소스 그룹 리미티드, 주식 코드 3718,는 카이만 제도에 한정된 책임 회사로 설립되었습니다.\n회사는 현재의 기업 통신의 영어 및 중국어 버전에 접속하는 것을 권장하며 홍콩 증권거래소의 웹사이트와 회사의 웹사이트에서 확인할 수 있습니다.\n홍콩에 위치한 Tricor Investor Services Limited는 회사의 지점 주식 등록기관으로, (852) 2980 1333으로 연락할 수 있습니다.\n주식이 CCASS에 있는 비등록 주주는 홍콩증권결제소를 통해 회사에 통보해야 합니다.\n회사가 발행한 기업 통신은 주주 및 투자 대중을 위한 정보를 제공합니다.\n회사의 웹사이트는 www.beur.net.cn이며 주식 코드는 3718입니다.\n인쇄 요청을 위해 홍콩 하코트로드 16번지 페어이스트파이낸스센터 17층에 위치한 Tricor Investor Services Limited에 연락하거나 3718-ecom@hk.tricorglobal.com으로 이메일을 보낼 수 있습니다."
//       }
//     },
//     {
//       "id": "11181004",
//       "dataDate": "2024-04-26T08:38:00Z",
//       "korName": "사환제약",
//       "details": {
//         "secName": [
//           "SIHUAN PHARM"
//         ],
//         "secCode": [
//           "00460"
//         ],
//         "categoryId": "Circulars",
//         "fileLink": "https://www1.hkexnews.hk/listedco/listconews/sehk/2024/0426/2024042600984.pdf"
//       },
//       "analysisDetails": {
//         "topicKor": "주식 발행, 주식 매입, 소유권 증가, 주가, 연례 주주총회",
//         "summarizeTinyKor": "사환제약 홀딩스 그룹 주식 발행 및 주식 정보에 대한 세부 내용",
//         "summarizeLongKor": "사환제약 홀딩스 그룹은 발행 권한 하에 최대 1,865,999,841주를 발행하고 주식 매입 권한 하에 최대 932,999,920주를 매입할 계획입니다.\n체 박사의 회사 소유권은 발행 주식의 약 61.13%로 상승할 것으로 예상됩니다.\n지난 12개월 동안 가장 높은 주가는 2023년 4월에 홍콩 달러 0.880에 도달했으며, 가장 낮은 주가는 2024년 4월에 홍콩 달러 0.500에 기록되었습니다.\n회사의 연례 주주총회는 2024년 6월 7일 금요일 중국 심천에서 오전 10시에 예정되어 있습니다."
//       }
//     },
//     {
//       "id": "11181002",
//       "dataDate": "2024-04-26T08:38:00Z",
//       "korName": "MOBI발전",
//       "details": {
//         "secName": [
//           "MOBI DEV"
//         ],
//         "secCode": [
//           "00947"
//         ],
//         "categoryId": "Next Day Disclosure Returns",
//         "fileLink": "https://www1.hkexnews.hk/listedco/listconews/sehk/2024/0426/2024042600982.pdf"
//       },
//       "analysisDetails": {
//         "topicKor": "주식 재매입",
//         "summarizeTinyKor": "2024년 4월 26일 MOBI Development Co, Ltd.의 익일 공시 반환",
//         "summarizeLongKor": "MOBI Development Co, Ltd.은 2024년 4월 26일에 익일 공시 반환을 제출하여 발행 주식 자본의 변화를 상세히 안내했습니다.\n2024년 4월 25일 현재 회사의 발행 주식은 8억 5839만 94주였습니다.\n2024년 4월 동안 MOBI Development Co, Ltd.은 3월 26일, 4월 11일, 4월 19일을 포함한 여러 날짜에 주식을 2,000주부터 60,000주까지 다양한 양으로 다시 매입했습니다.\n다시 매입 비율은 0.00025%에서 0.00745%까지 다양했습니다.\n2024년 4월 26일 현재 발행 주식의 종가는 8억 5839만 94주로 유지되었습니다.\n또한, 2024년 4월 26일에 MOBI Development Co, Ltd.은 주당 0.148 홍콩 달러에 총 592 홍콩 달러에 주식을 거래소에서 4,000주 구매했습니다."
//       }
//     },
//     {
//       "id": "11181000",
//       "dataDate": "2024-04-26T08:38:00Z",
//       "korName": "중국통신서비스",
//       "details": {
//         "secName": [
//           "CHINACOMSERVICE"
//         ],
//         "secCode": [
//           "00552"
//         ],
//         "categoryId": "Circulars",
//         "fileLink": "https://www1.hkexnews.hk/listedco/listconews/sehk/2024/0426/2024042600980.pdf"
//       },
//       "analysisDetails": {
//         "topicKor": "중국통신서비스주식회사",
//         "summarizeTinyKor": "중국통신서비스주식회사 정보",
//         "summarizeLongKor": "중국통신서비스주식회사는 중화인민공화국에서 설립된 주식회사로서 제한된 책임을 갖고 있습니다.\n회사의 주식 코드는 552입니다.\n2023년 연례 보고서 및 주주총회 공고는 2024년 4월 26일에 발표되었습니다.\n회사의 핫라인 번호는 (852) 3699 0000입니다.\n회사의 H 주식 등록기관은 홍콩 완차이 여왕로동 183호 홉웰센터 17층에 위치한 Computershare 홍콩 투자자 서비스 주식회사입니다.\n회사의 웹사이트는 www.chinaccs.com.hk입니다."
//       }
//     },
//     {
//       "id": "11180998",
//       "dataDate": "2024-04-26T08:38:00Z",
//       "korName": "중국생명그룹",
//       "details": {
//         "secName": [
//           "SINO-LIFE GROUP"
//         ],
//         "secCode": [
//           "08296"
//         ],
//         "categoryId": "Financial Statements/ESG Information",
//         "fileLink": "https://www1.hkexnews.hk/listedco/listconews/gem/2024/0426/2024042600978.pdf"
//       },
//       "analysisDetails": {
//         "topicKor": "지속가능성",
//         "summarizeTinyKor": "2023년 신생명그룹 보고서 요약",
//         "summarizeLongKor": "신생명그룹은 2023년에 11명의 직원이 부패방지 교육을 받아 총 110시간의 교육을 완료했으며, 고용 유형에 따라 분류되었습니다.\n그룹은 2023년에 2022년보다 1명 더 많은 35개의 공급업체를 보유하고 있으며, 홍콩, 중국 본토 및 대만에 분포되어 있습니다.\n신생명그룹은 금융업법과 증권 및 선물법을 포함한 다양한 법규를 준수하며, 개인정보(개인정보 보호) 조례를 엄격히 준수하여 개인정보 공개에 관한 불만이 없었습니다.\n2023년에 남성 직원의 평균 교육 시간은 7.9시간이었고, 여성은 8.2시간으로, 관리 수준에 따라 차이가 있었습니다.\n2023년에 직원 이직률은 전체 9%로, 남성은 7%, 여성은 10%였습니다.\n신생명그룹은 2030년까지 2023년 대비 에너지 소비 강도를 5% 감소시키고자 하며, 2023년의 상세한 에너지 및 수도 소비 강도 수치를 제시했습니다.\n이사회 및 ESG 업무 그룹은 재무 성과 및 환경 이니셔티브를 밀접히 모니터링하여 지속가능성 목표에 부합하도록 노력하고 있습니다."
//       }
//     },
//     {
//       "id": "11180996",
//       "dataDate": "2024-04-26T08:38:00Z",
//       "korName": "CAPINFO",
//       "details": {
//         "secName": [
//           "CAPINFO"
//         ],
//         "secCode": [
//           "01075"
//         ],
//         "categoryId": "Financial Statements/ESG Information",
//         "fileLink": "https://www1.hkexnews.hk/listedco/listconews/sehk/2024/0426/2024042600976.pdf"
//       },
//       "analysisDetails": {
//         "topicKor": "재무 성과",
//         "summarizeTinyKor": "2023년 Capinfo 회사의 재무 성과",
//         "summarizeLongKor": "홍콩 증권거래소의 본 보드에 상장된 Capinfo 회사는 2023년에 운영 수익액이 1,425.58억 위안으로 보고되었으며, 전년대비 0.18%의 약간한 증가를 기록했습니다.\n2023년에 Capinfo 회사의 주주에게 귀속된 손실은 전년 대비 156.70% 감소하여 72.91억 위안으로 크게 감소했습니다.\n2023년 Capinfo 회사의 총 자산은 2,496.82억 위안이며, 순자산은 1,144.95억 위안입니다.\n2023년 Capinfo 회사의 유동부채는 1,261.97억 위안이며, 유동비율은 1.26입니다."
//       }
//     },
//     {
//       "id": "11180994",
//       "dataDate": "2024-04-26T08:38:00Z",
//       "korName": "중국광대국제",
//       "details": {
//         "secName": [
//           "EB ENVIRONMENT"
//         ],
//         "secCode": [
//           "00257"
//         ],
//         "categoryId": "Circulars",
//         "fileLink": "https://www1.hkexnews.hk/listedco/listconews/sehk/2024/0426/2024042600974.pdf"
//       },
//       "analysisDetails": {
//         "topicKor": "주주 의사 소통 선호",
//         "summarizeTinyKor": "중국 광대 환경 그룹 주식회사 (주식 코드 257)의 주주 의사 소통 선호 옵션",
//         "summarizeLongKor": "중국 광대 환경 그룹 주식회사 (주식 코드 257)은 주주들이 기업 의사 소통을 받는 데 친환경 옵션을 선택하도록 장려합니다.\n주주들은 기업의 다가오는 의사 소통을 영어, 중국어 또는 양 언어로 물리적 혹은 전자 형식으로 회사 웹사이트를 통해 받을 수 있는 선택권이 있습니다.\n선호도를 표시하기 위해, 주주들은 답신 양식에서 적절한 상자에 표시하고 2024년 5월 24일까지 주주 등록기관에 우편이나 이메일로 보내야 합니다.\n마감일까지 응답하지 않은 주주들은 자동으로 모든 향후 기업 의사 소통을 전자적으로 받게 됩니다.\n기업 의사 소통의 인쇄본을 요청할 수 있으며, 영어와 중국어 버전 모두 회사 웹사이트에서 접근할 수 있습니다.\n주주들은 통지 서한과 답신 양식에 관한 모든 문의 사항을 주주 등록기관에 문의할 수 있습니다."
//       }
//     },
//     {
//       "id": "11180990",
//       "dataDate": "2024-04-26T08:38:00Z",
//       "korName": "MOG DIGITECH",
//       "details": {
//         "secName": [
//           "MOG DIGITECH"
//         ],
//         "secCode": [
//           "01942"
//         ],
//         "categoryId": "Circulars",
//         "fileLink": "https://www1.hkexnews.hk/listedco/listconews/sehk/2024/0426/2024042600970.pdf"
//       },
//       "analysisDetails": {
//         "topicKor": "기업 커뮤니케이션",
//         "summarizeTinyKor": "MOG 디지텍 홀딩스 리미티드의 기업 커뮤니케이션 전자 배포",
//         "summarizeLongKor": "MOG 디지텍 홀딩스 리미티드는 1942로 상장되어 있으며 홍콩 증권거래소의 규정에 따라 연례 보고서와 같은 기업 커뮤니케이션의 전자 배포를 채택했습니다.\n주주들은 통보를 신속히 받기 위해 이메일 주소를 제공할 것을 권장받으며, 그렇지 않으면 인쇄된 통보를 받게 됩니다.\n주주들은 동봉된 회신 양식을 작성하거나 주식 등록기관에 문의하여 인쇄된 통보를 요청할 수 있습니다.\n인쇄된 통보를 받는 지침은 1년간 유효합니다.\n통보 서한과 회신 양식은 MOG 디지텍 홀딩스 리미티드의 이사인 조우예가 보냈습니다."
//       }
//     },
//     {
//       "id": "11180986",
//       "dataDate": "2024-04-26T08:38:00Z",
//       "korName": "중국범태",
//       "details": {
//         "secName": [
//           "CHINAVTM MINING"
//         ],
//         "secCode": [
//           "00893"
//         ],
//         "categoryId": "Financial Statements/ESG Information",
//         "fileLink": "https://www1.hkexnews.hk/listedco/listconews/sehk/2024/0426/2024042600966.pdf"
//       },
//       "analysisDetails": {
//         "topicKor": "환경 및 사회 성과",
//         "summarizeTinyKor": "2023년 중국 바나듐 티타노-자석 광산 회사의 환경 및 사회 성과 개요",
//         "summarizeLongKor": "2023년, 중국 바나듐 티타노-자석 광산 회사는 휘발유 소비량이 2022년의 13.61 kL에서 10.18 kL로 감소했으며, 디젤 소비량은 39.87 kL에서 52.38 kL로 증가했습니다.\n회사는 2022년의 6,236.88 MWh에서 9,899.10 MWh로 청정 에너지를 구매했습니다.\n생산 가치 당 에너지 소비는 RMB10,000 당 0.89 kgce에서 0.97 kgce로 상승했습니다.\n지역 개발 투자는 2022년의 약 RMB517,068에서 약 RMB90,400로 감소했으며, 2023년에는 380시간에서 350시간이 지역 개발에 투입되었습니다.\n회사는 2023년에 작업 중 상실된 인력 일수가 125일에서 269일로 크게 증가했습니다.\nRMB10,000 당 담수 소비는 2022년의 1.36톤에서 1.25톤으로 감소했습니다.\n2023년에는 휘발유와 디젤로부터의 직접 온실가스 배출량은 164.33 tCO2e였습니다."
//       }
//     },
//     {
//       "id": "11180984",
//       "dataDate": "2024-04-26T08:37:00Z",
//       "korName": "수도금융홀딩스",
//       "details": {
//         "secName": [
//           "CAPITAL FIN"
//         ],
//         "secCode": [
//           "08239"
//         ],
//         "categoryId": "Circulars",
//         "fileLink": "https://www1.hkexnews.hk/listedco/listconews/gem/2024/0426/2024042600964.pdf"
//       },
//       "analysisDetails": {
//         "topicKor": "주주 정보",
//         "summarizeTinyKor": "홍콩 증권거래소 상장 기업 주주를 위한 중요 정보",
//         "summarizeLongKor": "2023년 연례 보고서, 공고 및 주주총회 공고가 회사 웹사이트에서 이제 이용 가능합니다.\n홍콩의 회사 지점 주주등록기관이 2024년 12월 31일에 만료될 예정임을 유의하십시오. 비등록 주주는 영어 및 중국어로 기업 통신의 인쇄본을 요청할 수 있습니다.\n제공된 개인 데이터는 지시 처리 및 계열사, 주주등록기관 및 제3자 서비스 제공업체에 공개될 수 있습니다.\n개인 데이터에 대한 접근 및 정정 요청은 Tricor Tengis Limited의 데이터 개인 정보 보호 책임자에게 서면으로 해야 합니다."
//       }
//     },
//     {
//       "id": "11180978",
//       "dataDate": "2024-04-26T08:37:00Z",
//       "korName": "BJ ENT URBAN",
//       "details": {
//         "secName": [
//           "BJ ENT URBAN"
//         ],
//         "secCode": [
//           "03718"
//         ],
//         "categoryId": "Circulars",
//         "fileLink": "https://www1.hkexnews.hk/listedco/listconews/sehk/2024/0426/2024042600958.pdf"
//       },
//       "analysisDetails": {
//         "topicKor": "기업 통신",
//         "summarizeTinyKor": "베이징 엔터프라이즈 어반 리소스 그룹 리미티드 (주식 코드, 3718) 주주를 위한 중요 정보",
//         "summarizeLongKor": "베이징 엔터프라이즈 어반 리소스 그룹 리미티드 (주식 코드. 3718)은 총권한, 이사 재선임 및 최종 배당 공표를 포함한 2023년 연례 보고서를 발표했습니다.\n주주는 회사 및 홍콩 증권거래소 웹사이트에서 현재 기업 통신의 영어 및 중국어 버전에 액세스할 수 있습니다.\n인쇄된 기업 통신의 경우, 주주는 홍콩 하코트로드 16번지 패스트 이스트 파이낸스 센터 17층에 위치한 트리코어 인베스터 서비스 리미티드에 회신 양식을 제출할 수 있습니다.\n주주는 전자 기업 통신을 받기 위해 기능적인 이메일 주소를 제공하는 것이 좋습니다.\n이는 발표 공지 및 실질적인 기업 통신을 포함합니다.\n문의 사항이 있는 주주는 (852) 2980 1333번으로 지점 주식 등록기관에 문의할 수 있습니다.\n주주는 인쇄된 기업 통신에 대해 영어, 중국어 또는 두 언어 중 선택할 수 있습니다.\n앞으로의 기업 통신 및 실질적인 기업 통신을 전자적으로 받기 위해 주주는 회신 양식의 영어 대문에 이메일 주소를 제공할 수 있습니다."
//       }
//     },
//     {
//       "id": "11180976",
//       "dataDate": "2024-04-26T08:37:00Z",
//       "korName": "만사창국제홀딩스",
//       "details": {
//         "secName": [
//           "MULTIFIELD INTL"
//         ],
//         "secCode": [
//           "00898"
//         ],
//         "categoryId": "Proxy Forms",
//         "fileLink": "https://www1.hkexnews.hk/listedco/listconews/sehk/2024/0426/2024042600956.pdf"
//       },
//       "analysisDetails": {
//         "topicKor": "대리투표서",
//         "summarizeTinyKor": "다중영역국제홀딩스 주식회사(주식 코드 898) 연례 주주총회 공고",
//         "summarizeLongKor": "본 문서는 다중영역국제홀딩스의 예정된 연례 주주총회를 위한 대리투표서 양식으로, 2024년 5월 30일 목요일 오후 4시 30분에 홍콩 웡축항 이합가 11번지 사우스마크 A타워 25층 22-28호에서 개최됩니다.\n회의 안건으로는 재무제표, 배당 선언, 이사 재선임, 감사 재선임, 주식 발행, 주식 자사주 취득, 주식 배정이 포함되어 있습니다.\n엘리트 파트너스 CPA 리미티드가 감사로 제안되었습니다.\n주주들은 각 안건에 대한 투표 의사를 표시하고 대리투표 양식을 제출하기 위한 지침을 따라야 합니다.\n대리 임명을 위해 개인 정보 수집 성명서가 포함되어 있습니다."
//       }
//     },
//     {
//       "id": "11180972",
//       "dataDate": "2024-04-26T08:37:00Z",
//       "korName": "영가그룹",
//       "details": {
//         "secName": [
//           "WIN HANVERKY"
//         ],
//         "secCode": [
//           "03322"
//         ],
//         "categoryId": "Announcements and Notices",
//         "fileLink": "https://www1.hkexnews.hk/listedco/listconews/sehk/2024/0426/2024042600952.pdf"
//       },
//       "analysisDetails": {
//         "topicKor": "연례 주주총회",
//         "summarizeTinyKor": "윈한버키 홀딩스 주식회사(주식 코드 3322) 연례 주주총회 세부사항",
//         "summarizeLongKor": "윈한버키 홀딩스 주식회사(주식 코드 3322)는 2024년 6월 13일 목요일 오전 10시 30분에 홍콩 공단 6층에 위치한 홍콩 스피너즈 산업빌딩 6층에서 연례 주주총회를 개최할 예정입니다.\n이 회의에는 2023년 12월 31일까지의 감사한 연결 재무제표의 발표 및 승인, 이사 및 감사인의 보고서, 이사 보수 승인, 2024년 12월 31일까지의 감사인으로서 PricewaterhouseCoopers의 재선임, 주식 배정 및 발행에 대한 결의, 주식 회수 승인, 주식 배정을 위한 일반 위임장 연장, 회원 등록부 폐쇄 등이 포함될 것입니다.\n회장은 모든 결의안이 익명투표로 투표될 것을 확인했습니다.\n이사회는 LI Kwok Tung Roy씨, LAI Ching Ping씨, LEE Kwok Leung씨, WONG Chi Keung씨가 참여하며, 독립 비임원 이사는 KWAN Kai Cheong씨, MA Ka Chun씨, CHAN Kit Fun Fanny씨입니다.\n회사 비서는 LAM Choi Ha입니다."
//       }
//     },
//     {
//       "id": "11180970",
//       "dataDate": "2024-04-26T08:37:00Z",
//       "korName": "CIFI ES SERVICE",
//       "details": {
//         "secName": [
//           "ES SERVICES"
//         ],
//         "secCode": [
//           "01995"
//         ],
//         "categoryId": "Financial Statements/ESG Information",
//         "fileLink": "https://www1.hkexnews.hk/listedco/listconews/sehk/2024/0426/2024042600950.pdf"
//       },
//       "analysisDetails": {
//         "topicKor": "매출",
//         "summarizeTinyKor": "2023년 ES Services 그룹의 재무 성과 개요",
//         "summarizeLongKor": "ES Services 그룹은 2023년에 2022년과 비교하여 매출이 4.2% 증가한 6,537.4억 위안을 보고했습니다.\n부동산 관리 서비스로부터의 수익은 14.8% 증가하여 약 4,463.2억 위안에 이르렀으며, 커뮤니티 부가가치 서비스로부터의 수익은 약 890.3억 위안으로 12.7% 감소했습니다.\n비부동산 소유자를 대상으로 한 부가가치 서비스로부터의 수익도 약 777.6억 위안으로 19.4% 감소했습니다.\n그러나 도시 서비스로부터의 수익은 약 406.0억 위안으로 상승했습니다.\n2023년에 총 이익은 약 3.1% 감소하여 약 1,253.0억 위안이었습니다.\n소유주에게 귀속된 이익은 2023년에 약 9.5% 감소하여 약 434.5억 위안이었습니다.\n영업활동으로부터의 순현금유입은 약 913.1억 위안이었고, 투자활동으로부터의 순현금유입은 약 120.8억 위안이었습니다.\n계약된 총 층적면적(GFA)은 2023년 12월 31일 기준으로 303.4백만 제곱미터에서 308.3백만 제곱미터로 증가했으며, 관리 중인 GFA는 2023년 12월 31일 기준으로 210.0백만 제곱미터에서 221.4백만 제곱미터로 성장했습니다."
//       }
//     },
//     {
//       "id": "11180968",
//       "dataDate": "2024-04-26T08:37:00Z",
//       "korName": "중국생명그룹",
//       "details": {
//         "secName": [
//           "SINO-LIFE GROUP"
//         ],
//         "secCode": [
//           "08296"
//         ],
//         "categoryId": "Financial Statements/ESG Information",
//         "fileLink": "https://www1.hkexnews.hk/listedco/listconews/gem/2024/0426/2024042600948.pdf"
//       },
//       "analysisDetails": {
//         "topicKor": "재무 성과",
//         "summarizeTinyKor": "2023년 12월 31일 종료된 중국생명그룹의 재무 하이라이트",
//         "summarizeLongKor": "2023년 12월 31일 기준 중국생명그룹의 직원은 202명으로, 전년도 218명에서 감소했습니다.\n7,424,000주의 주식 옵션이 소멸되어 18,532,000주가 남았습니다.\n그룹은 전년대비 약 RMB33,481,000의 총이익을 기록했으며, 이는 전년대비 15.9% 감소한 수치이며 총이익률은 약 46.1%로 전년대비 4.9% 하락했습니다.\n기타소득 및 순이익은 각각 약 RMB2,571,000으로 전년대비 14.5% 감소했습니다.\n판매비용은 약 9.3% 증가한 RMB2,122,000로, 행정비용은 약 28.3% 증가한 RMB41,044,000으로 매출의 약 56.6%를 차지했습니다.\n재무비용은 약 RMB1,681,000으로 감소했습니다.\n법인세비용은 전년보다 낮은 RMB2,143,000이었으며, 소유주에게 귀속된 연간 손실은 약 RMB7,173,000으로, 전년의 약 RMB847,000 대비 증가했습니다.\n그룹의 유동성은 약 RMB125,019,000의 예금 및 현금을 포함합니다.\n연간 매출은 약 RMB72,570,000으로, 6.9% 감소했습니다.\n중국 및 대만 시장에서의 매출은 각각 약 RMB65,838,000 및 RMB2,014,000이었습니다.\n홍콩의 장례 서비스 매출은 약 14.8% 감소한 약 RMB1,089,000이었으며, 생명과학 사업 매출은 약 RMB3,069,000이었습니다."
//       }
//     },
//     {
//       "id": "11180966",
//       "dataDate": "2024-04-25T08:37:00Z",
//       "korName": "원생태목업",
//       "details": {
//         "secName": [
//           "YST DAIRY"
//         ],
//         "secCode": [
//           "01431"
//         ],
//         "categoryId": "Announcements and Notices",
//         "fileLink": "https://www1.hkexnews.hk/listedco/listconews/sehk/2024/0426/2024042600946.pdf"
//       },
//       "analysisDetails": {
//         "topicKor": "연례 주주총회",
//         "summarizeTinyKor": "2023년 12월 31일 종료 연도를 위한 원생태목업 농장 유한회사 주주총회 정보",
//         "summarizeLongKor": "2023년 12월 31일 종료 연도를 위한 원생태목업 농장 유한회사와 그 계열사의 감사된 연결 재무제표가 연례 주주총회에서 검토될 예정이며, 이에 따라 이사회 및 독립 감사인의 보고서도 함께 검토될 것입니다.\n이사들은 2024년 12월 31일 종료 연도에 대한 보수 승인을 요청할 것입니다.\nErnst \u0026 Young 회계법인은 회사의 다음 연도 독립 감사인으로 임명될 예정입니다.\n이사들은 회사의 주식 자본에서 미발행 주식을 할당하고 발행하며 거래할 수 있는 권한을 일부 조건에 따라 승인을 요청할 것입니다.\n또한 회사 주식을 주식 거래소나 다른 인정받는 주식 거래소에서 구입하고 일부 조건에 따라 회사가 다시 구입한 발행 주식의 총 수를 포함하는 권한을 연장할 수 있는 승인을 요청할 것입니다.\n회사의 연례 주주총회는 2024년 6월 25일 화요일 오전 10시에 중국 베이징에서 개최될 예정입니다.\n회사의 주식 코드는 1431입니다.\n원생태목업 농장 유한회사의 회장은 조홍량입니다.\n회사는 버뮤다에서 유한 책임 회사로 설립되었으며, 등록 사무소는 버뮤다에 있고 홍콩 본사는 북포인트 일렉트릭로 148번지 31층입니다.\n회사 이사회는 4명의 이사, 3명의 비직무 이사 및 4명의 독립 비직무 이사로 구성되어 있습니다."
//       }
//     },
//     {
//       "id": "11180962",
//       "dataDate": "2024-04-25T08:37:00Z",
//       "korName": "FEIYANG GROUP",
//       "details": {
//         "secName": [
//           "FEIYANG GROUP"
//         ],
//         "secCode": [
//           "01901"
//         ],
//         "categoryId": "Circulars",
//         "fileLink": "https://www1.hkexnews.hk/listedco/listconews/sehk/2024/0426/2024042600942.pdf"
//       },
//       "analysisDetails": {
//         "topicKor": "기업 커뮤니케이션",
//         "summarizeTinyKor": "페이양 인터내셔널 홀딩스 그룹 리미티드 주주를 위한 정보",
//         "summarizeLongKor": "페이양 인터내셔널 홀딩스 그룹 리미티드는 주식 코드 1901로 다양한 기업 커뮤니케이션을 제공하며, 이에는 이사 보고서, 연례 회계 및 대리 투표 양식이 포함됩니다.\n주주는 회사 웹사이트와 홍콩 증권거래소 웹사이트에서 문서에 액세스할 수 있습니다.\n문의 사항은 (852) 2980 1333번으로 연락하여 지점 주식 등록기관에 문의하십시오. 회장, 사내 이사 및 CEO는 허빈펑입니다.\n주주는 인쇄된 문서를 요청하고 전자 통지를 위한 이메일 주소를 업데이트할 수 있습니다."
//       }
//     },
//     {
//       "id": "11180960",
//       "dataDate": "2024-04-24T08:37:00Z",
//       "korName": "신덕그룹",
//       "details": {
//         "secName": [
//           "SHUN TAK HOLD"
//         ],
//         "secCode": [
//           "00242"
//         ],
//         "categoryId": "Proxy Forms",
//         "fileLink": "https://www1.hkexnews.hk/listedco/listconews/sehk/2024/0426/2024042600940.pdf"
//       },
//       "analysisDetails": {
//         "topicKor": "주주총회",
//         "summarizeTinyKor": "신덕홀딩스 주식회사 주주총회에 관한 중요 정보",
//         "summarizeLongKor": "신덕홀딩스 주식회사(주식 코드 242)는 2024년 6월 5일 수요일 오후 4시에 홍콩 중앙 콘노트로드 200번지 신덕센터 4층 아륀클럽 401A에서 2024년 주주총회를 개최할 예정입니다.\n이번 주주총회에서는 2023년 12월 31일 종료된 회계연도의 재무제표를 검토할 예정이며 감사인은 프라이스워터하우스쿠퍼스입니다.\n이사회는 주식 자사주 매입과 신주 발행에 대한 승인을 요청할 것입니다.\n주주는 주주총회를 위해 대리인을 지정할 수 있으며, 대리인 지명서는 회의 48시간 전에 제출되어야 합니다.\n지명서에는 서명과 날짜가 포함되어야 하며, 회원이 주주총회에 참석하고 투표할 경우 철회할 수 있습니다."
//       }
//     },
//     {
//       "id": "11180958",
//       "dataDate": "2024-04-24T08:37:00Z",
//       "korName": "YE XING GROUP",
//       "details": {
//         "secName": [
//           "YE XING GROUP"
//         ],
//         "secCode": [
//           "01941"
//         ],
//         "categoryId": "Circulars",
//         "fileLink": "https://www1.hkexnews.hk/listedco/listconews/sehk/2024/0426/2024042600938.pdf"
//       },
//       "analysisDetails": {
//         "topicKor": "이사회 구성원",
//         "summarizeTinyKor": "Ye Xing Group 및 이사회 구성원 개요",
//         "summarizeLongKor": "홍콩 증권거래소에 상장된 Ye Xing Group Holdings Limited은 주식 코드 1941로 상장되어 있으며 조직은 조위하오 씨, 우꽈칭 여사, 리인핑 여사, 장춘잉 여사, 리이판 씨, 첸창닷 씨, 장와이훙 씨, 첸웨이지 여사, 그리고 런가워 씨로 구성된 이사회를 보유하고 있습니다.\n장춘잉 여사는 매년 24만 홍콩 달러의 이사 보수를 받으며, 리이판 씨는 18만 홍콩 달러, 런가워 씨는 18만 홍콩 달러를 받습니다.\n연례 주주총회는 2024년 5월 31일 금요일 중국 베이징에서 오전 10시에 예정되어 있으며, 장춘잉 여사, 리이판 씨, 그리고 런가워 씨가 은퇴하고 런가워 씨가 재선출을 권장받을 것으로 예상됩니다."
//       }
//     },
//     {
//       "id": "11180956",
//       "dataDate": "2024-04-24T08:37:00Z",
//       "korName": "BONNY HLDG",
//       "details": {
//         "secName": [
//           "BONNY HLDG"
//         ],
//         "secCode": [
//           "01906"
//         ],
//         "categoryId": "Announcements and Notices",
//         "fileLink": "https://www1.hkexnews.hk/listedco/listconews/sehk/2024/0426/2024042600936.pdf"
//       },
//       "analysisDetails": {
//         "topicKor": "연례 주주총회",
//         "summarizeTinyKor": "본니 인터내셔널 홀딩 리미티드 (주식 코드 1906) 연례 주주총회 세부사항",
//         "summarizeLongKor": "본니 인터내셔널 홀딩 리미티드는 2024년 5월 30일 오후 2시에 연례 주주총회를 개최할 예정입니다.\n이 회의에서는 2023년 12월 31일 종료된 회계연도의 감사 보고서를 검토할 것입니다.\n양일 회계법인인 양일이어느는 감사인으로 재선임될 예정입니다.\n회사는 주식 자본의 20%까지 추가 주식 발행을 승인하고, 10%까지 주식을 재매입할 권한이 있습니다.\n회장은 진구준이며, 이사회에는 집행 이사와 비집행 이사가 포함되어 있습니다.\n회원 등록부는 2024년 5월 27일부터 2024년 5월 30일까지 폐쇄될 예정입니다.\n주주는 회의에 참석하고 투표하기 위해 2024년 5월 24일까지 양도 양식을 제출해야 합니다.\n이사회는 재선출될 예정이며, 2023년 연례 보고서와 함께 제안된 결의안에 대한 설명문이 주주에게 발송될 것입니다."
//       }
//     },
//     {
//       "id": "11180950",
//       "dataDate": "2024-04-23T08:37:00Z",
//       "korName": "CUTIA-B",
//       "details": {
//         "secName": [
//           "CUTIA-B"
//         ],
//         "secCode": [
//           "02487"
//         ],
//         "categoryId": "Financial Statements/ESG Information",
//         "fileLink": "https://www1.hkexnews.hk/listedco/listconews/sehk/2024/0426/2024042600930.pdf"
//       },
//       "analysisDetails": {
//         "topicKor": "재무 성과",
//         "summarizeTinyKor": "2023년 12월 31일 종료 Cutia Therapeutics의 재무 하이라이트",
//         "summarizeLongKor": "2023년에 Cutia Therapeutics는 매출이 113억 6623만 위안에서 137억 623만 위안으로 상당히 증가하여 놀라운 해를 보냈습니다.\n회사는 또한 2022년의 79억 380만 위안에서 710억 8008만 위안의 총이익을 달성했으며, 이는 이전 연도의 7억 938만 위안에서 상당한 개선을 보였습니다.\n2022년의 180억 7560만 위안에서 215억 7110만 위안으로 증가한 연구 및 개발 비용에도 불구하고, Cutia Therapeutics는 2022년의 55억 5836만 위안에서 196억 3758만 위안으로 상당한 증가를 겪었으며, 부모 회사의 보통 주주에게 귀속된 주당 손실은 2022년의 6.94 위안에서 2023년에 9.60 위안으로 상승했습니다.\n2023년의 Cutia Therapeutics의 총 종합 손실은 196억 3758만 위안이었습니다.\nCutia Therapeutics는 전년도보다 상당히 증가한 1,452억 9009만 위안의 총자산으로 연도를 마무리했습니다.\n2023년에 부모 회사의 소유주에게 귀속된 자본은 1,348억 9960만 위안이었으며, 2022년의 1,246억 3270만 위안의 적자와 비교되었습니다.\n그룹은 2022년에 총 매출액이 39.4% 증가했습니다.\n2023년에 그룹의 최상위 다섯 공급업체로부터의 구매는 총 구매 금액의 약 27.0%를 대표하며, 가장 큰 공급업체가 약 8.5%를 기여했습니다.\nCutia Therapeutics는 고객이나 공급업체와의 중대한 분쟁 없이 원활한 해를 보냈습니다.\n이사회는 2023년 최종 배당을 권장하지 않았으며, 회사는 2023년 12월 31일 현재 분배 가능한 유보금이 없었습니다.\n또한, 그룹은 2023년에 자선 기부나 사채 발행을 하지 않았습니다."
//       }
//     },
//     {
//       "id": "11180948",
//       "dataDate": "2024-04-23T08:37:00Z",
//       "korName": "CHEN XING",
//       "details": {
//         "secName": [
//           "CHEN XING"
//         ],
//         "secCode": [
//           "02286"
//         ],
//         "categoryId": "Proxy Forms",
//         "fileLink": "https://www1.hkexnews.hk/listedco/listconews/sehk/2024/0426/2024042600928.pdf"
//       },
//       "analysisDetails": {
//         "topicKor": "연례 주주총회",
//         "summarizeTinyKor": "첸 싱 개발 홀딩스 리미티드 주주를 위한 중요 정보",
//         "summarizeLongKor": "2023년 12월 31일 종료된 회계연도의 감사된 연결 재무제표가 2024년 5월 30일 오전 10시에 연례 주주총회에서 제출될 예정입니다.\n주주들은 이사들에게 추가 주식 발행, 발행 및 처리할 주식의 총 발행 주식의 20%를 초과하지 않는 주식을 할당할 일반 위임권 및 총 발행 주식의 10%를 초과하지 않는 주식을 재매입할 위임권을 부여할 것을 고려할 것입니다.\n추가 주식 발행 권한은 매입된 주식 수에 의해 연장될 수 있습니다.\nBDO 리미티드가 감사로 재선임될 예정입니다.\n주주들은 2024년 5월 28일 회의 전 최소 48시간 전에 홍콩의 회사 지점 주식 등록기관에 완료된 대리인 양식을 제출할 것을 상기시킵니다.\n회의는 중국 선시성 시 진중시 유치구 영빈서거리 131호 첸 싱 타워 6층 회의실에서 개최될 예정입니다."
//       }
//     },
//     {
//       "id": "11180942",
//       "dataDate": "2024-04-23T08:37:00Z",
//       "korName": "주강파이프라인",
//       "details": {
//         "secName": [
//           "CHU KONG PIPE"
//         ],
//         "secCode": [
//           "01938"
//         ],
//         "categoryId": "Circulars",
//         "fileLink": "https://www1.hkexnews.hk/listedco/listconews/sehk/2024/0426/2024042600922.pdf"
//       },
//       "analysisDetails": {
//         "topicKor": "주식 매입 권한",
//         "summarizeTinyKor": "주강 석유 및 천연가스 파이프 홀딩스 리미티드 개요",
//         "summarizeLongKor": "주강 석유 및 천연가스 파이프 홀딩스 리미티드는 최근 실무일 기준으로 발행된 주식 자본이 1,011,142,000주 있었습니다.\n제안된 주식 매입 권한은 총 발행된 주식 자본의 10%에 해당하는 최대 101,114,200주까지 매입할 수 있습니다.\n회사의 2023년 홍콩증시에서의 최고 및 최저 주가는 각각 HK$0.280 및 HK$0.156이었고, 2024년에는 각각 HK$0.205 및 HK$0.140이었습니다.\n주식 매입 권한 행사 전에, Bournam Profits Limited와 Chen Chang은 각각 발행된 주식 자본의 69.42% 및 69.85%를 보유하고 있었습니다.\n잠재적인 매입 후, 그들의 지분은 각각 77.13% 및 77.61%까지 증가할 수 있습니다.\n회사의 집행이사인 천조년 여사는 경제학 박사 학위를 보유하고 그룹의 일상 경영을 담당하고 있습니다.\n그녀는 다가오는 주주총회에서 재선임을 제안받았습니다.\n주주총회는 2024년 6월 21일 금요일 오전 10시 30분에 홍콩 중심 퀸스로드 29번 중국빌딩 1층에서 예정되어 있습니다.\n주주총회에서의 의결 사항은 발행 권한, 매입 권한, 연장 권한 및 이사 재선임을 포함하고 있습니다.\n이사들이 회사와 주주들의 이익을 고려하여 발행 권한, 매입 권한, 연장 권한 및 이사 재선임을 포함한 주주총회에서의 제안된 의결 사항을 권고했습니다.\n주주총회는 투표 방식으로 진행되며, 투표 결과는 회의 이후에 발표될 것입니다."
//       }
//     },
//     {
//       "id": "11180936",
//       "dataDate": "2024-04-22T08:37:00Z",
//       "korName": "짱구식품",
//       "details": {
//         "secName": [
//           "LABIXIAOXIN"
//         ],
//         "secCode": [
//           "01262"
//         ],
//         "categoryId": "Financial Statements/ESG Information",
//         "fileLink": "https://www1.hkexnews.hk/listedco/listconews/sehk/2024/0426/2024042600916.pdf"
//       },
//       "analysisDetails": {
//         "topicKor": "라비샤오신 2023년 성과",
//         "summarizeTinyKor": "라비샤오신 2023년 성과 개요",
//         "summarizeLongKor": "라비샤오신은 2023년에 총 15회의 내부 교육 세션을 실시했으며, 총 10,616시간의 교육을 제공하였고, 4,470명의 참가자가 참여했으며, 인당 평균 2.38시간을 달성했습니다.\n회사는 2023년 말 기준으로 총 1,244명의 직원을 보고하였으며, 618명의 남성 직원과 626명의 여성 직원으로 성별 분포가 균형을 이루었습니다.\n직원 중 32%가 30-40세 그룹에 속하며, 생산 직원이 전체 직원의 62%를 차지하였습니다.\n라비샤오신의 2023년 퇴직율은 경영진 직원이 약 18%, 영업 및 생산 직원이 약 24%였습니다.\n회사는 2023년에 생산 장비 및 절차를 개선하기 위해 약 9.90백만 위안을 투자하였으며, 총 1,200명의 직원이 있는 세 개의 생산 기지를 운영하였습니다.\n성별 및 직원 범주별 직원 당 평균 교육 시간은 개발 및 교육 부문에서 7.4시간이었습니다."
//       }
//     },
//     {
//       "id": "11180932",
//       "dataDate": "2024-04-22T08:37:00Z",
//       "korName": "YADONG GROUP",
//       "details": {
//         "secName": [
//           "YADONG GROUP"
//         ],
//         "secCode": [
//           "01795"
//         ],
//         "categoryId": "Financial Statements/ESG Information",
//         "fileLink": "https://www1.hkexnews.hk/listedco/listconews/sehk/2024/0426/2024042600912.pdf"
//       },
//       "analysisDetails": {
//         "topicKor": "재무 성과",
//         "summarizeTinyKor": "2023년 Yadong Group Holdings Limited의 재무 성과 개요",
//         "summarizeLongKor": "Yadong Group Holdings Limited은 2023년 12월 31일 종료된 연도의 매출을 RMB 1,078.6백만으로 보고했으며, 이는 전년대비 약 RMB 18.4백만 또는 약 1.7% 증가했습니다.\n회사의 2023년 총 이익은 약 RMB 138.9백만으로, 이는 2022년 대비 약 RMB 4.0백만 또는 약 2.8% 감소한 수치이며, 총 이익률은 약 12.9%입니다.\n2023년의 순이익은 약 RMB 34.5백만으로, 이는 2022년 대비 약 RMB 15.4백만 또는 약 30.9% 감소한 수치입니다.\n총 자산은 약 RMB 768.4백만으로, 총 부채는 약 RMB 509.3백만이며, 소유주에게 귀속된 자본은 약 RMB 259.1백만입니다.\nYadong Group의 총 직원 수는 482명이며, 퇴직율은 14.94%이며 여성의 퇴직율은 20.38%입니다.\n2023년에는 480명의 직원이 교육을 받았으며, 총 교육 시간은 6,036시간입니다.\n그룹은 안전 사고 없이 87건의 안전 위험 검사를 완료하였으며, 검사 및 교정률은 100%입니다."
//       }
//     },
//     {
//       "id": "11180930",
//       "dataDate": "2024-04-22T08:37:00Z",
//       "korName": "HAITONG UT",
//       "details": {
//         "secName": [
//           "HAITONG UT"
//         ],
//         "secCode": [
//           "01905"
//         ],
//         "categoryId": "Announcements and Notices",
//         "fileLink": "https://www1.hkexnews.hk/listedco/listconews/sehk/2024/0426/2024042600910.pdf"
//       },
//       "analysisDetails": {
//         "topicKor": "재무 성과",
//         "summarizeTinyKor": "2024년 제1사분기 해통유니트러스트국제금융리스 주식회사의 재무 요약",
//         "summarizeLongKor": "2024년 제1사분기에 해통유니트러스트국제금융리스 주식회사의 현금 이자 지급액은 각각 6억 8227만 6172.06위안, 6억 5834만 3531.55위안, 6억 6217만 279.20위안, 5억 9151만 2250.75위안이었습니다.\n또한, 기타 자본 상품의 상환액은 각각 19억 위안, 6억 위안이었습니다.\n기타 자본 상품의 이자 분배에 대한 현금 지급액은 각각 8천 664만 1864.87위안, 6천 278만 613위안이었습니다.\n기타 자금 조달 활동에 대한 현금 지급액은 각각 5천 544만 312.08위안, 7천 959만 850.42위안, 5천 199만 19.79위안, 7천 404만 746.83위안이었습니다.\n자금 조달 활동으로 인한 순 현금 유입액은 각각 56억 4243만 335.80위안, 21억 4403만 605.36위안이었습니다.\n현금 및 현금성 자산의 외환 환율 변동 효과는 각각 1천 581만 259위안, 2천 673만 339.08위안, 2천 770만 693.43위안, 1천 434만 170.36위안이었습니다.\n현금 및 현금성 자산의 순 증가액은 각각 10억 6564만 7028.27위안, 32억 2895만 2144.97위안, 2억 2019만 2814.90위안, 32억 6720만 955.25위안이었습니다.\n기간 종료 시점의 현금 및 현금성 자산은 각각 94억 3969만 8286.54위안, 86억 3843만 5441.87위안, 62억 9492만 2279.30위안, 69억 9503만 3632.73위안이었습니다."
//       }
//     },
//     {
//       "id": "11180924",
//       "dataDate": "2024-04-21T08:36:00Z",
//       "korName": "춘천산업신탁",
//       "details": {
//         "secName": [
//           "SPRING REIT"
//         ],
//         "secCode": [
//           "01426"
//         ],
//         "categoryId": "Announcements and Notices",
//         "fileLink": "https://www1.hkexnews.hk/listedco/listconews/sehk/2024/0426/2024042600904.pdf"
//       },
//       "analysisDetails": {
//         "topicKor": "점유율",
//         "summarizeTinyKor": "2024년 3월 31일 종료 기간의 재무 하이라이트",
//         "summarizeLongKor": "2024년 첫 분기에 CCP 부동산은 평균 월 통행 임대료가 약 RMB348로 보고되었으며, 이는 이전 분기 대비 약 0.6% 감소한 수치로, 평균 점유율은 약 89%를 기록했습니다.\n84개의 부동산으로 구성된 영국 포트폴리오는 100%의 완전한 점유율과 연간 계약 임대 수입으로 약 £4.76백만을 자랑합니다.\n휘주 부동산은 약 RMB178의 평균 월 임대료를 기록했으며, RMB152의 고정 구성 요소와 RMB26의 가변 구성 요소가 있으며, 이는 이전 분기 대비 약 2.9% 증가한 수치로, 평균 점유율은 약 99%입니다.\n2024년 3월 31일 기준 휘주 부동산의 총 임대 가능 면적은 103,883제곱미터입니다."
//       }
//     },
//     {
//       "id": "11180922",
//       "dataDate": "2024-04-21T08:36:00Z",
//       "korName": "중유가스홀딩스",
//       "details": {
//         "secName": [
//           "ZHONGYU ENERGY"
//         ],
//         "secCode": [
//           "03633"
//         ],
//         "categoryId": "Proxy Forms",
//         "fileLink": "https://www1.hkexnews.hk/listedco/listconews/sehk/2024/0426/2024042600902.pdf"
//       },
//       "analysisDetails": {
//         "topicKor": "연례 주주총회",
//         "summarizeTinyKor": "2024년 6월 3일 중유가스홀딩스 주식회사 주요 정보",
//         "summarizeLongKor": "중유가스홀딩스 주식회사의 연례 주주총회가 2024년 6월 3일 월요일 오전 11시에 홍콩 중심부의 중국머천츠타워 24층 02-06호에서 개최될 예정입니다.\n주주들은 회의에 참석하고 투표하기 위해 대리인을 지명해야 합니다.\n회사 및 자회사의 감사한 연결재무제표와 2023년 12월 31일 종료된 연도에 대한 이사 및 독립 감사인의 보고서가 회의에서 검토될 예정입니다.\n이사 및 독립 비직무 이사 재선임, 이사 보수 승인, 감사인 재선임, 주식 관련 활동을 위한 일반 위임 사항에 대한 결의안이 투표될 예정입니다.\n주주들은 대리인 지명서에 선호하는 선택사항을 표시하여 결의안에 찬성 또는 반대할 수 있습니다.\n대리인 지명서는 회의 48시간 전까지 홍콩 회사의 지점 주식 등록부 및 이전 사무소인 트리코어 비서 리미티드에 제출되어야 합니다.\n주주들은 자신이 선택한 대리인을 지명할 수 있으며, 대리인 지명에 대한 변경 사항은 인증되어야 합니다.\n회의에서 제안될 결의안은 2024년 4월 26일에 회사 웹사이트에서 확인할 수 있습니다."
//       }
//     },
//     {
//       "id": "11180920",
//       "dataDate": "2024-04-21T08:36:00Z",
//       "korName": "중국통신서비스",
//       "details": {
//         "secName": [
//           "CHINACOMSERVICE"
//         ],
//         "secCode": [
//           "00552"
//         ],
//         "categoryId": "Circulars",
//         "fileLink": "https://www1.hkexnews.hk/listedco/listconews/sehk/2024/0426/2024042600900.pdf"
//       },
//       "analysisDetails": {
//         "topicKor": "중국통신서비스주식회사",
//         "summarizeTinyKor": "중국통신서비스주식회사 정보",
//         "summarizeLongKor": "주식 코드 552를 가진 중국통신서비스주식회사는 (852) 3699 0000으로 연락하거나 www.chinaccs.com.hk 웹사이트를 통해 접근할 수 있습니다.\nH주식 관련 문의는 홍콩컴퓨터쉐어 홍콩투자자서비스주식회사에게 하십시오. 주소는 홍콩 완차이 퀸즈로드동 183호 홉웰센터 17층입니다.\n회사 비서는 정위충 테렌스입니다."
//       }
//     }
//   ],
//   "심천": [
//     {
//       "id": "9a21576c-ab69-439a-9e27-a3f2cdeabcc7",
//       "dataDate": "2024-04-26T08:43:59Z",
//       "korName": "즈터신소재",
//       "details": {
//         "secName": [
//           "志特新材"
//         ],
//         "secCode": [
//           "300986"
//         ],
//         "categoryId": [
//           "0129"
//         ]
//       },
//       "analysisDetails": {
//         "topicKor": "주식 정보",
//         "summarizeTinyKor": "장시 지테 신소재 주식 정보 개요",
//         "summarizeLongKor": "장시 지테 신소재는 처음 공개 공모 전에 총 87,800,000주의 자본을 보유했으며, 공모 후에는 117,066,667주로 늘어났습니다.\n이후의 자본 증가로 총 주식수는 246,371,227주가 되었으며, 배당금 및 주주 및 인센티브 대상에 대한 주식 배분이 이루어졌습니다.\n회사의 주식은 거래 가능 주식과 비거래 가능 주식, 제한 주식, 임원 락업 주식을 포함하고 있습니다.\n최근 발행된 140,678,545주의 제한 주식은 총 주식 자본의 57.1002%를 차지했습니다."
//       }
//     },
//     {
//       "id": "875664c0-fb5e-4e67-9820-dc8918b9a056",
//       "dataDate": "2024-04-26T08:43:24Z",
//       "korName": "베이루지능제어",
//       "details": {
//         "secName": [
//           "北路智控"
//         ],
//         "secCode": [
//           "301195"
//         ],
//         "categoryId": [
//           "0129"
//         ]
//       },
//       "analysisDetails": {
//         "topicKor": "난징 북로 지능형 제어 기술 주식회사",
//         "summarizeTinyKor": "2023년도 난징 북로 지능형 제어 기술 주식회사 연례 추적 보고서",
//         "summarizeLongKor": "2023년도 난징 북로 지능형 제어 기술 주식회사의 연례 추적 보고서에 따르면, 주최사는 전화번호 025-83387757로 연락할 수 있는 첸 샤오펑과 중 차오를 대표로 하는 화타이 통합 증권 주식회사입니다.\n회사의 정보 공개 검토는 시일적절하며, 미검토 문서는 0건입니다.\n회사는 건전한 규칙과 규정 수립을 감독하며 매월 모금된 자금에 대해 조사하여 프로젝트 진행이 공시 문서와 일치함을 보장합니다.\n회사는 직접 회의에 참석하지 않지만 회의 문서를 확인합니다.\n주요 문제 없이 1차 현장 조사가 실시되었습니다.\n13건의 특별 의견이 발행되었으며 비찬성 의견은 없습니다.\n심천 증권 거래소에 보고된 사항은 없습니다.\n주식 락업 및 감소 약정, 주가 안정화, 주식 매입, 배상 책임 약정이 이행되었습니다.\n주요 계약의 성과는 안정적이며 주요 위험은 없습니다.\n중국 증권 감독위원회나 심천 증권 거래소에서 주최사 대표자나 규제 조치에 변동 사항은 보고되지 않았습니다."
//       }
//     },
//     {
//       "id": "ea370b79-eca7-4c34-b8a0-75f205f24fa4",
//       "dataDate": "2024-04-26T08:39:26Z",
//       "korName": "킹시그널테크",
//       "details": {
//         "secName": [
//           "金信诺"
//         ],
//         "secCode": [
//           "300252"
//         ],
//         "categoryId": [
//           "0119"
//         ]
//       },
//       "analysisDetails": {
//         "topicKor": "주주총회",
//         "summarizeTinyKor": "2024년 킹시그널 회사 제3차 임시주주총회 요약",
//         "summarizeLongKor": "2024년 4월 26일 오후 2시, 심천 난산구 과학기술 생태공원 10동 B동 27층 회의실에서 킹시그널 회사 제4대 이사회가 제3차 임시주주총회를 개최했습니다.\n총 12명의 주주가 참석하여 총 213,923,937주(총 주식의 32.3073%)를 대표했습니다.\n2명의 주주가 현지에서 165,730,771주(총 주식의 25.0290%)로 투표하였고, 10명의 주주가 온라인으로 48,193,166주(총 주식의 7.2782%)로 투표했습니다.\n9명의 소규모 주주가 참석하여 1,968,860주(총 주식의 0.2973%)를 대표했으며, 이들 모두 온라인으로 투표했습니다.\n참석한 모든 주주 중 213,890,237주가 자금 조달 및 투자 사업 제안을 승인했으며(참석한 주주의 총 주식의 99.9842%), 반대는 33,700주(0.0158%)였습니다.\n소규모 주주 중 1,935,160주가 찬성(소규모 주주의 총 주식의 98.2884%)하였고, 33,700주가 반대(1.7116%)했습니다."
//       }
//     },
//     {
//       "id": "be485cae-dcd9-474b-8e3a-9bbe0381c373",
//       "dataDate": "2024-04-26T08:37:36Z",
//       "korName": "둥팡리성신에너지",
//       "details": {
//         "secName": [
//           "东方日升"
//         ],
//         "secCode": [
//           "300118"
//         ],
//         "categoryId": [
//           "0123"
//         ]
//       },
//       "analysisDetails": {
//         "topicKor": "주주 담보 해제",
//         "summarizeTinyKor": "둥팡리성신에너지 주식 담보 해제 공지",
//         "summarizeLongKor": "둥팡리성신에너지 주식 담보 해제 공지의 공시 번호는 2024-030입니다.\n주주 린하이펑은 2024년 4월 25일에 1,800만 주를 해제하여 자사 주식의 6.36% 및 회사 총 주식 자본의 1.58%를 나타냅니다.\n린하이펑의 누적 담보 주식 수는 1억 3,477만 6,900주로, 그는 자사 주식의 47.62% 및 회사 총 주식 자본의 11.82%를 보유하고 있습니다."
//       }
//     },
//     {
//       "id": "ac4500af-08ef-4776-84c8-4b823fb200a0",
//       "dataDate": "2024-04-26T08:37:34Z",
//       "korName": "보스커",
//       "details": {
//         "secName": [
//           "博世科"
//         ],
//         "secCode": [
//           "300422"
//         ],
//         "categoryId": [
//           "0129"
//         ]
//       },
//       "analysisDetails": {
//         "topicKor": "재무 성과",
//         "summarizeTinyKor": "2023년 보쉬의 재무 개요",
//         "summarizeLongKor": "2023년 보쉬는 예상순손실이 15억 위안에서 20억 위안 범위에 있을 것으로 예상되며, 비반복적 이익과 손실을 차감한 순손실은 23억 5000만 위안에서 28억 5000만 위안에 이를 것으로 예상됩니다.\n세 번째 연속적인 적자를 맞이한 회사는 계속된 영업 적자 위험에 직면하고 있습니다.\n지배주주인 닝구오 국유 자본 홀딩 그룹은 보쉬와의 경쟁에 직면하고 있으며, 경쟁 문제에 대처하기로 약속했습니다.\n스폰서는 지배주주에게 경쟁에 관한 약속을 이행할 것을 권고했습니다."
//       }
//     },
//     {
//       "id": "0be58c8b-48dc-4e45-a305-bab84ebff40c",
//       "dataDate": "2024-04-26T08:37:33Z",
//       "korName": "리야더광전",
//       "details": {
//         "secName": [
//           "利亚德"
//         ],
//         "secCode": [
//           "300296"
//         ],
//         "categoryId": [
//           "0119"
//         ]
//       },
//       "analysisDetails": {
//         "topicKor": "주주총회",
//         "summarizeTinyKor": "2023 리야드광전자 주식회사 주주총회 안내",
//         "summarizeLongKor": "리야드광전자 주식회사는 2023년 주주총회를 2024년 5월 6일에 개최하며 현장 및 온라인 투표 방법을 제공할 예정입니다.\n현장 회의는 2024년 5월 6일 오후 2시 30분에 베이징 하이디안 지구에서 진행되며, 온라인 투표는 동일한 날 오전 9시 15분부터 오후 3시까지 심천 증권 거래소 거래 시스템 및 인터넷 투표 시스템을 통해 이루어질 예정입니다.\n회의에서는 2023년 재무제표 보고서를 비롯한 다양한 안건을 심의할 것이며, 특별결의안은 참석한 주주들의 2/3 이상의 승인을 필요로 합니다.\n자본 등록일은 2024년 4월 25일이며, 등록 방법으로는 현장, 서한, 팩스 또는 이메일 등이 포함됩니다.\n주주들은 2024년 4월 26일 오전 9시부터 11시 30분까지 오후 1시 30분부터 5시까지 리야드광전자 주식회사에서 등록할 수 있습니다.\n현장 회의는 반나절 동안 진행되며, 주주들은 숙박, 식사 및 교통비를 부담해야 합니다.\n코드 350296 및 약어 리야드 투표를 사용한 온라인 투표가 가능하며, 반복 투표의 경우 첫 번째 유효 투표가 우선됩니다."
//       }
//     },
//     {
//       "id": "f1ec8028-3014-40b4-9667-800931d41c66",
//       "dataDate": "2024-04-26T08:35:27Z",
//       "korName": "잉리전기",
//       "details": {
//         "secName": [
//           "英力股份"
//         ],
//         "secCode": [
//           "300956"
//         ],
//         "categoryId": [
//           "0117"
//         ]
//       },
//       "analysisDetails": {
//         "topicKor": "재무 성과",
//         "summarizeTinyKor": "영리 주식 및 재무 성과 개요",
//         "summarizeLongKor": "영리 주식은 증권 코드 300956으로 안후이 영리전자기술 주식회사를 대표하며, 변액채권은 채권 코드 123153으로 13억 위안의 보증액을 갖고 있습니다.\n등록 자본금이 1억 위안인 충칭 영리는 컴퓨터 소프트웨어 및 하드웨어 제조, 자동차 부품 연구 및 개발 등을 영위하고 있습니다.\n2023년 말 기준으로 충칭 영리의 총자산은 5억 6796만 7200위안, 총부채는 3억 1179만 2300위안이며 순이익은 -1천 399만 6600위안입니다.\n회사 및 자회사는 총 2천억 위안의 보증 한도를 갖고 있으며, 보증액은 최근 감사된 순자산의 16.29%에 해당하는 1억 8311만 5500위안입니다.\n연체된 외부 보증, 소송 중인 보증, 법적 판결로 인한 보증 채무는 없습니다."
//       }
//     },
//     {
//       "id": "56f05f19-46ee-4e88-bef2-c136e4f6083e",
//       "dataDate": "2024-04-26T08:34:02Z",
//       "korName": "헝보홀딩스",
//       "details": {
//         "secName": [
//           "恒勃股份"
//         ],
//         "secCode": [
//           "301225"
//         ],
//         "categoryId": [
//           "0123"
//         ]
//       },
//       "analysisDetails": {
//         "topicKor": "연례 보고서",
//         "summarizeTinyKor": "헝보홀딩스 주식회사의 재무 데이터",
//         "summarizeLongKor": "증권 코드. 301225. 공고 번호. 2024-031. 2024년 4월 22일, 2023년 연례 보고서의 전문 및 요약이 주차오 정보망에 공개되었습니다.\n2024년 5월 7일(화) 15:00부터 17:00까지 파노라마 네트워크가 2023년 연례 온라인 성과 브리핑을 개최했습니다.\n파노라마 네트워크의 투자자 관계 상호작용 플랫폼인 https://ir.p5w.net 및 헝보홀딩스 주식회사 로드쇼 홀인 https://ir.p5w.net/c/301225.shtml을 방문하세요. 참석자로는 조우쑤종, 청진밍, 왕싱빈, 루안징핑, 루윈이 포함되었습니다.\n2024년 5월 6일(월) 17:00에 질문을 수집하려면 https://ir.p5w.net/zj/을 방문하세요. 2024년 4월 26일, 헝보홀딩스 주식회사 이사회가 공고를 발표했습니다."
//       }
//     },
//     {
//       "id": "09db6b44-3e0f-432b-ac86-b40b4414aeca",
//       "dataDate": "2024-04-26T08:27:25Z",
//       "korName": "카이룽하이테크",
//       "details": {
//         "secName": [
//           "凯龙高科"
//         ],
//         "secCode": [
//           "300912"
//         ],
//         "categoryId": [
//           "0115"
//         ]
//       },
//       "analysisDetails": {
//         "topicKor": "주식 매입",
//         "summarizeTinyKor": "카이룽하이테크 주식회사 이사회 회의에서의 주식 매입 및 자본 변경 결정",
//         "summarizeLongKor": "2024년 4월 24일 제4차 이사회 11차 회의에서, 카이룽하이테크 주식회사는 24만 주의 제한 주식을 매입 및 취소하는 것을 승인했으며, 총 주식 자본을 115,222,000주에서 114,982,000주로, 등록 자본을 115,222,000위안에서 114,982,000위안으로 감소시켰습니다.\n채권자는 통지를 받은 날로부터 30일 또는 공고일로부터 45일 이내에 채무 또는 보증을 청구할 수 있습니다.\n청구는 현장, 서한 또는 팩스로 제출할 수 있으며, 공고일로부터 45일까지 마감됩니다."
//       }
//     },
//     {
//       "id": "aa48e3d3-bd01-4afd-9087-7a8d8921b2f4",
//       "dataDate": "2024-04-26T08:25:25Z",
//       "korName": "한루이코발트",
//       "details": {
//         "secName": [
//           "寒锐钴业"
//         ],
//         "secCode": [
//           "300618"
//         ],
//         "categoryId": [
//           "0117"
//         ]
//       },
//       "analysisDetails": {
//         "topicKor": "금융 보증",
//         "summarizeTinyKor": "강저우 한루이 신에너지 기술 유한회사의 금융 보증 및 대출 신청 세부 내역",
//         "summarizeLongKor": "강저우 한루이 신에너지 기술 유한회사는 중국 수출입은행의 장수 지점으로부터 최대 2억 7000만 위안의 고정자산 대출을 신청했습니다.\n난징 한루이 코발트 유한회사는 3년간 2억 7000만 위안의 대출에 대해 공동 및 several 보증을 제공했습니다.\n난징 한루이 코발트 유한회사 및 그 소속의 완전 소유 자회사가 제공하는 총 보증액은 감사된 순자산의 100%를 초과하지 않습니다.\n회사 및 그 소속사는 자산부채 비율이 70%를 초과하는 단위에 대해 감사된 순자산의 50%를 초과하는 금액을 보증하지 않습니다.\n강저우 한루이 신에너지 기술 유한회사는 2023년에 3051만 9176.20 위안의 순이익, 214억 5965만 5533.16 위안의 총자산, 136억 4409만 2289.96 위안의 총부채, 78억 1556만 3242.20 위안의 순자산을 보고했습니다.\n난징 한루이 코발트 유한회사 및 그 소속사의 총 보증 한도는 2023년에 회사의 감사된 순자산의 96.05%에 해당하는 5천억 위안이며, 제공된 총 보증액은 2023년에 회사의 감사된 순자산의 29.20%에 해당하는 1억 5198만 위안입니다."
//       }
//     },
//     {
//       "id": "cf7d6c45-e674-4518-a8f1-d399f0ddc92f",
//       "dataDate": "2024-04-26T08:21:30Z",
//       "korName": "사이토바이오",
//       "details": {
//         "secName": [
//           "赛托生物"
//         ],
//         "secCode": [
//           "300583"
//         ],
//         "categoryId": [
//           "0123"
//         ]
//       },
//       "analysisDetails": {
//         "topicKor": "데소나이드 API",
//         "summarizeTinyKor": "산동 시루이 제약 주식회사, 데소나이드 API 상장 승인 획득",
//         "summarizeLongKor": "산동 시루이 제약 주식회사는 사이토바이오의 자회사로서 화학 API 상장 신청 승인 통지를 받았습니다(통지 번호 2024YS00322). 데소나이드 API의 등록 기준 번호는 YBY64082024이며, 포장 사양은 500g/통, 1kg/통, 2kg/통입니다.\nAPI의 유효 기간은 2029년 4월 24일까지이며, 크림, 로션 및 기타 용량 형태를 생산하는 데 적합합니다.\n현재 데소나이드 API에 대해 등록된 기업은 7개이며, 그 중 5개가 A등급이며 중국 의약품 검토 기술 기준을 충족합니다.\n시루이 제약의 승인은 화학 API 부문에서의 시장 경쟁력을 향상시키지만, API 품종의 상장 및 판매는 시장 요인으로 인해 불확실성을 안고 있습니다."
//       }
//     },
//     {
//       "id": "ccf6ed5f-aa47-42ea-9d41-ef141eccecb6",
//       "dataDate": "2024-04-26T08:19:32Z",
//       "korName": "장펑전자소재",
//       "details": {
//         "secName": [
//           "江丰电子"
//         ],
//         "secCode": [
//           "300666"
//         ],
//         "categoryId": [
//           "0123"
//         ]
//       },
//       "analysisDetails": {
//         "topicKor": "주식 담보",
//         "summarizeTinyKor": "요리준의 장펑전자소재 주식 담보 세부 내용",
//         "summarizeLongKor": "장펑전자소재의 주주인 요리준은 총 3,224,000주를 담보로 제공했으며, 이는 그의 주식의 5.46%와 회사 총 주식 자본의 1.21%에 해당합니다.\n2024년 4월 24일부터 시작되어 2025년 4월 24일까지 유효한 이 담보는 자금 조달 목적으로 CITIC Securities Co, Ltd.에 제공되었습니다.\n추가로 요리준은 자금 조달을 위해 별도로 124,000주를 담보로 제공했습니다.\n담보 이후, 그는 30,991,200주를 보유하고 있으며, 이는 그의 주식의 54.59%와 회사 총 주식 자본의 11.68%를 차지합니다.\n앞으로 6개월 내에 4,520,000주가 만료되며, 이는 그의 주식의 7.96%와 회사 총 주식 자본의 1.70%를 나타냅니다.\n다음 1년 동안 20,391,200주가 만료되며, 이는 그의 주식의 35.92%와 회사 총 주식 자본의 7.68%를 차지합니다.\n요리준은 자금 상환 수단을 보유하고 있으며, 자체 및 자체 조달 자금에서 출처된 자금을 상환할 능력이 있으며, 담보 위험은 통제 가능하다고 판단됩니다.\n회사의 지배주주인 요리준의 주식 담보는 자본 점유, 불법 보증, 생산, 운영 또는 기업 지배에 부정적인 영향을 미치지 않으며, 회사의 지배나 성과 보상 의무에 변화를 일으키지 않음을 보장합니다."
//       }
//     },
//     {
//       "id": "03e4bffa-85dd-455f-b2c7-7f28bcc60e64",
//       "dataDate": "2024-04-26T08:17:55Z",
//       "korName": "저쾅중공업",
//       "details": {
//         "secName": [
//           "浙矿股份"
//         ],
//         "secCode": [
//           "300837"
//         ],
//         "categoryId": [
//           "0129"
//         ]
//       },
//       "analysisDetails": {
//         "topicKor": "처음 공개 발행",
//         "summarizeTinyKor": "심천 증권 거래소에서 제주 광산 중공업 주식회사의 처음 공개 발행 세부 내역",
//         "summarizeLongKor": "제주 광산 중공업 주식회사(Zhejiang Mining Heavy Industry Co, Ltd.)은 주당 액면가 1위안 및 발행가 17.57위안으로 2,500만 주를 처음 발행했습니다.\n총 모금액은 4억 3925만위안이며 순 모금액은 3억 8130만 7007위안입니다.\n발행인인 제주 광산 중공업 주식회사는 주식 코드 300837로, 등록 자본금은 1억위안이며, 주소는 제주성 지역 창신군 합평읍 산업단지에 위치하고 본사도 동일한 주소에 있습니다.\n법정 대표자는 천리화입니다.\n이 발행은 2020년 5월 26일 국내 상장된 위안 보통주(A주식)를 포함하였으며, 2020년 6월 5일 심천 증권 거래소에 상장되었습니다."
//       }
//     },
//     {
//       "id": "8a5c7875-e0ac-4a4a-bd2b-774c12546728",
//       "dataDate": "2024-04-26T08:15:34Z",
//       "korName": "디푸테크",
//       "details": {
//         "secName": [
//           "迪普科技"
//         ],
//         "secCode": [
//           "300768"
//         ],
//         "categoryId": [
//           "0115"
//         ]
//       },
//       "analysisDetails": {
//         "topicKor": "직원 주식 소유 계획",
//         "summarizeTinyKor": "2024년 딥 테크놀로지의 직원 주식 소유 계획 상세 내역",
//         "summarizeLongKor": "2024년 딥 테크놀로지의 직원 주식 소유 계획에서 3.74백만 주가 거래 없는 이전을 통해 양도되었으며, 이는 회사의 총 주식 자본인 643,829,039주 중 0.5809%를 나타냅니다.\n또한 회사는 6,906,327주를 99,886,768.67위안의 총 비용으로 회수하여 총 주식 자본의 1.07%를 차지했습니다.\n계획에 가입한 총 자금은 27,040,200.00위안이며, 이를 144명의 납부자가 구독한 27,040,200.00주로 나타냈습니다.\n계획의 상한 주식 한도는 직원의 법적 급여, 자기 조달 자금 및 기타 법적으로 허용된 수단으로 자금을 조달하여 273.6555백만 주를 지원합니다.\n주당 양도 가격은 7.23위안입니다."
//       }
//     },
//     {
//       "id": "47f8e327-2622-418d-9cfe-aa2c103708e6",
//       "dataDate": "2024-04-26T08:15:31Z",
//       "korName": "신레이압축기",
//       "details": {
//         "secName": [
//           "鑫磊股份"
//         ],
//         "secCode": [
//           "301317"
//         ],
//         "categoryId": [
//           "01239910"
//         ]
//       },
//       "analysisDetails": {
//         "topicKor": "감사위원회 회의",
//         "summarizeTinyKor": "신레이 주식회사 제3차 감사위원회 제6차 회의 주요 내용",
//         "summarizeLongKor": "신레이 주식회사 제3차 감사위원회 제6차 회의(stock code. 301317)에서 2023 감사위원회 업무보고서, 2023 연례보고서, 2023 이익 분배 계획, 2024년 회사 감사대행사로 Lixin 회계사 사무소 재선임, 2024 감사위원 보수 계획, 2023 내부통제 평가 보고서, 2023년 자금 조달 및 사용에 대한 특별 보고서, 그리고 2024년 제1분기 보고서 등 다양한 제안을 검토하고 승인했습니다."
//       }
//     },
//     {
//       "id": "013f3cff-4fef-44ba-8753-8600f243e92b",
//       "dataDate": "2024-04-26T08:15:31Z",
//       "korName": "톈이의료기",
//       "details": {
//         "secName": [
//           "天益医疗"
//         ],
//         "secCode": [
//           "301097"
//         ],
//         "categoryId": [
//           "0129"
//         ]
//       },
//       "analysisDetails": {
//         "topicKor": "재무 성과",
//         "summarizeTinyKor": "2024년 상장 기업의 재무 성과 개요",
//         "summarizeLongKor": "2024년, 비영업적 이익과 손실을 제외한 상장 기업의 주주에게 귀속된 순이익은 3억 3,397만 위안으로, 전년 대비 49.22% 감소했습니다.\n이 감소는 주로 다양한 요인으로 인한 것입니다.\n1) 회사의 수출 모델로 인해 미 달러 대 위안화율의 큰 변동으로 환차익과 환차손이 등장했습니다.\n2023년, 회사는 미 달러 금융상품을 구매하여 위험을 완화시켰으며, 비영업적 투자 소득을 얻었습니다.\n2022년에 외화가 회사의 재무제표에 미친 영향은 주로 환차익과 환차손이었습니다.\n2) 국가의 고가 의료 소비재 집중 구매와 해외 고객의 구매 변동으로 인해 매출이 감소했습니다.\n회사는 비용 절감과 효율 향상에 집중하여 안정적인 매출총이익을 유지했습니다.\n3) 자금 조달 프로젝트와 사업 개발을 지원하기 위해 영업, 경영 및 연구·개발 인력을 확대했으며, 이는 높은 영업, 경영 및 연구·개발 비용을 야기했습니다.\n4) 고정자산 투자가 증가하여 단기적으로 감가상각비 및 기타 비용이 증가했습니다."
//       }
//     },
//     {
//       "id": "744c679a-66fe-4396-9cae-1df1155f3d44",
//       "dataDate": "2024-04-26T08:09:29Z",
//       "korName": "보시소프트웨어",
//       "details": {
//         "secName": [
//           "博思软件"
//         ],
//         "secCode": [
//           "300525"
//         ],
//         "categoryId": [
//           "0117"
//         ]
//       },
//       "analysisDetails": {
//         "topicKor": "투자 합자기업",
//         "summarizeTinyKor": "푸젠 보시 소프트웨어 주식회사와 전문 투자 기관의 합작 투자 발표",
//         "summarizeLongKor": "푸젠 보시 소프트웨어 주식회사와 전문 투자 기관이 협력하여 총 규모 110.01 억 위안의 푸젠 쑤충 바민 1호 자본 투자 합자기업을 설립했습니다.\n회사는 55 억 위안을 출자하여 자본 출자 비율 49.9955%를 보유하고 있습니다.\n합자기업은 2024년 4월 25일에 설립되었으며 등록 자본금은 110.01 억 위안이며, 푸젠성 안시 현 청향응 타운 2호 환남로 1번 금융행정 서비스 센터 5동 A동 1307호에 위치해 있습니다.\n기업의 통합 사회 신용 코드는 91350524MADK2QNA9K이며, 유한책임회사로 운영됩니다.\n푸젠 보시 소프트웨어 주식회사는 증권 거래소에 상장되어 있으며, 주식 코드는 300525이며, 보시 소프트웨어로 약칭되며, 발표 번호는 2024-037입니다.\n푸젠 보시 소프트웨어 주식회사 이사회는 2024년 4월 26일에 합작 투자를 통해 산업 투자 기금을 설립하는 진행 상황에 대한 발표를 했습니다."
//       }
//     },
//     {
//       "id": "ebbf2acb-d576-40a9-9ab9-757cb33de254",
//       "dataDate": "2024-04-26T08:03:25Z",
//       "korName": "중저우특수합금",
//       "details": {
//         "secName": [
//           "中洲特材"
//         ],
//         "secCode": [
//           "300963"
//         ],
//         "categoryId": [
//           "0123"
//         ]
//       },
//       "analysisDetails": {
//         "topicKor": "재무 공시",
//         "summarizeTinyKor": "2024-018 공시번호, 증권 코드 300963 2023년 연례 보고서 공개일, 2024년 4월 22일 2023년 연례 실적 브리핑 일자, 2024년 5월 10일 2023년 연례 실적 브리핑 시간, 오후 3시부터 오후 5시까지 회사 웹사이트, www.ir-online.cn 실적 브리핑 웹사이트, https,//eseb.cn/1dXu3iJnlBu 참석자, 회장 Mr. Feng Mingming, 이사 및 총괄 매니저 Mr. Jiang Jun, 이사 및 부 총괄 매니저 Mr. Feng Xiaohang, 독립 이사 Mr. Song Changfa, 이사회 비서 및 부 총괄 매니저 Mr. Zhu Hongzhi, 재무 이사 및 부 총괄 매니저 Ms. Pan Qian, 스폰서 대표 Ms. Sun Sushu 공시 일자, 2024년 4월 26일",
//         "summarizeLongKor": "이 문서에는 2023년 연례 보고서 공개 및 실적 브리핑 일정, 회사 및 브리핑 웹사이트, 주요 참석자 및 공시 일자와 같은 중요한 세부 정보가 포함되어 있습니다."
//       }
//     },
//     {
//       "id": "a941e08f-62d2-4f50-b3d8-7ac5371cfbdf",
//       "dataDate": "2024-04-26T07:59:34Z",
//       "korName": "완성인텔리전트",
//       "details": {
//         "secName": [
//           "万胜智能"
//         ],
//         "secCode": [
//           "300882"
//         ],
//         "categoryId": [
//           "0123"
//         ]
//       },
//       "analysisDetails": {
//         "topicKor": "사임",
//         "summarizeTinyKor": "제주한국은행 지능기술 주식회사 사임 및 임명 공고",
//         "summarizeLongKor": "회사 주식 코드. 300882. 공고 번호. 2024-026. 샤오 주파 씨의 사임 유효일. 회사 최고 재무 책임자 및 이사회 비서로의 사임 신청은 회사 이사회에 전달된 날짜부터 유효합니다.\n샤오 주파 씨의 임명 날짜. 원래 날짜는 2024년 6월 14일까지입니다.\n샤오 주파 씨의 회사 주식 보유 현황. 회사 주식 없음, 배우자 또는 기타 관련자도 없음. 회사가 새로운 최고 재무 책임자 및 이사회 비서를 임명하지 않은 기간 동안 대리인. 회사의 회장이자 총괄 매니저인 우용장 씨. 샤오 주파 씨의 임기 동안의 업적. 성실하고 성실합니다.\n샤오 주파 씨의 공헌. 회사 및 이사회는 그의 공헌에 진심으로 감사의 뜻을 표합니다."
//       }
//     },
//     {
//       "id": "6530bed1-579a-44c1-b4f7-a07d6b0b5097",
//       "dataDate": "2024-04-26T07:57:33Z",
//       "korName": "태격제약",
//       "details": {
//         "secName": [
//           "泰格医药"
//         ],
//         "secCode": [
//           "300347"
//         ],
//         "categoryId": [
//           "0115"
//         ]
//       },
//       "analysisDetails": {
//         "topicKor": "보유 현황",
//         "summarizeTinyKor": "2024년 4월 25일 타이거메드의 상위 10개 A주식 주요 주주 보유 현황",
//         "summarizeLongKor": "2024년 4월 25일에 이루어진 주주총회의 지분 등록일에 타이거메드(주식 코드. 300347)는 상위 10개 A주식 주요 주주들의 보유 현황을 공개했습니다.\n예효핑이 총 A주식 자본의 23.89%에 해당하는 17,723,9541주를 보유하며 선두를 달렸으며, 이어서 조소춘이 5,166,1774주(6.96%)를 보유하고 있습니다.\n명단에는 홍콩 중앙청산회사, 중국공상은행, 중국은행 등이 포함되어 있습니다.\n타이거메드는 또한 판매 제한이 없는 상위 10개 A주식 주요 주주의 보유 현황도 공개했는데, 예효핑이 4,430,9885주(전체 A주식 제한 없는 유통 자본의 7.77%)를 보유하고 있습니다.\n이 데이터는 타이거메드 기술(주)의 공고에서 가져왔습니다."
//       }
//     },
//     {
//       "id": "67d6c49f-9140-4ac4-aa46-6b65ff5c9bfc",
//       "dataDate": "2024-04-26T07:57:24Z",
//       "korName": "바이촨창인환경에너지",
//       "details": {
//         "secName": [
//           "百川畅银"
//         ],
//         "secCode": [
//           "300614"
//         ],
//         "categoryId": [
//           "0123"
//         ]
//       },
//       "analysisDetails": {
//         "topicKor": "신용평가",
//         "summarizeTinyKor": "바이촨창인환경에너지의 인사 발표 및 평가 업데이트 (주식 코드, 300614.SZ)",
//         "summarizeLongKor": "바이촨창인환경에너지의 채무 주요 등급은 A+이며, 부채 등급도 A+입니다.\n장펑 씨는 개인적인 이유로 총괄 매니저 및 법정 대표직에서 사임했지만, 이사 및 전략위원회의 구성원으로 남아 있습니다.\n이사회는 천공해 씨를 새 총괄 매니저로 승인했습니다.\n장펑 씨는 더 이상 회사 주식을 보유하지 않으며, 천공해 씨는 총 주식 자본의 35.31%를 보유하고 있습니다.\n중국 증권 신용평가는 이 변경이 일상 영업 및 재무에 큰 영향을 미치지 않았지만, 총괄 매니저 변경이 신용평가에 미치는 잠재적인 영향을 모니터링할 것으로 판단합니다."
//       }
//     },
//     {
//       "id": "2dfad4d5-759e-4b1f-9885-838dcc254357",
//       "dataDate": "2024-04-26T07:55:35Z",
//       "korName": "하이랜더디지털",
//       "details": {
//         "secName": [
//           "海兰信"
//         ],
//         "secCode": [
//           "300065"
//         ],
//         "categoryId": [
//           "0109"
//         ]
//       },
//       "analysisDetails": {
//         "topicKor": "변환사채",
//         "summarizeTinyKor": "심천 증권 거래소에 상장된 하일란신 데이터 기술 주식회사 개요",
//         "summarizeLongKor": "하일란신 데이터 기술 주식회사는 주식 코드 300065.SZ로 2021년 2월 8일 변환사채를 상장하였으며, 2020년에 알 수 없는 대상에게 7,233,291,100 위안을 발행하였습니다.\n법정 대표자는 션완치우이며, 이사회 비서는 양예이며, 실질적인 통제자 또한 션완치우입니다.\n이사회는 2023년 12월 5일 자금 조달 및 투자 프로젝트를 승인하였으며, 운영 자본을 위해 1억 6,668만 3,800 위안을 재배정하였습니다.\n궁태준안증권 주식회사는 2022년 11월에 후원사가 되었으며, 후원사 대표로 장둘과 왕리쿠안이 있습니다.\n하일란신 데이터 기술 주식회사에 문의하려면 010-59738832로, 궁태준안증권 주식회사에 문의하려면 010-83939268 또는 010-83939266으로 연락하십시오."
//       }
//     },
//     {
//       "id": "749e0402-a60c-44da-8ef8-6f4d522ffa23",
//       "dataDate": "2024-04-26T07:53:59Z",
//       "korName": "베시다커",
//       "details": {
//         "secName": [
//           "贝仕达克"
//         ],
//         "secCode": [
//           "300822"
//         ],
//         "categoryId": [
//           "0129"
//         ]
//       },
//       "analysisDetails": {
//         "topicKor": "베스텍",
//         "summarizeTinyKor": "베스텍 재무정보 개요",
//         "summarizeLongKor": "베스텍은 인프라 비용으로 새로운 세대의 지능형 컨트롤러 산업 기지 프로젝트에 1억 6430만 위안을 투자했으며, 남은 3천만 위안은 R\u0026D 센터 건설 프로젝트에 사용했습니다.\n프로젝트 완료일은 2024년 6월 30일로 연장되었습니다.\n2023년 12월 31일 현재 일부 모금된 자금이 사용되지 않은 채 남아 있습니다.\n베스텍의 등록 자본금은 2억 4000만 7500만 위안이며, 주식 코드는 300822입니다.\n장 나샤는 법정 대표이며, 스폰서 대표는 구오 젠구오와 왕 판입니다.\n베스텍은 0755-84834822로 연락하실 수 있습니다.\n구오센증권은 2024년 4월 26일 베스텍을 위해 스폰서십 요약 보고서를 발행했습니다."
//       }
//     },
//     {
//       "id": "e66c8753-a476-4725-84b9-e5fe585f22d1",
//       "dataDate": "2024-04-26T07:50:02Z",
//       "korName": "진링스포츠장비",
//       "details": {
//         "secName": [
//           "金陵体育"
//         ],
//         "secCode": [
//           "300651"
//         ],
//         "categoryId": [
//           "0129"
//         ]
//       },
//       "analysisDetails": {
//         "topicKor": "진릉스포츠",
//         "summarizeTinyKor": "2023년과 2024년 진릉스포츠 개요",
//         "summarizeLongKor": "2023년에는, Jiangsu Jinling Sports Equipment Co, Ltd.는 회사의 특별 계좌에 대한 자금 조달에 대해 12차례의 조사를 실시했습니다.\n2023년 12월 12일, 진릉스포츠는 주식 소각의 추가 규제에 대한 주제를 다룬 1차례의 교육 세션을 진행했습니다.\n진릉스포츠는 2023년에 6건의 특별 의견을 발행했습니다.\n진릉스포츠의 주최자는 국태준안증권이며, 주최자로는 구위한과 쉬웨이가 포함되어 있습니다.\n더불어, 진릉스포츠는 2023년에 1차례의 현지 조사를 실시했습니다.\n주최자는 2024년 4월 26일에 회사에 대한 후속 보고서를 발행했습니다."
//       }
//     },
//     {
//       "id": "73487427-5bd2-4d32-89d1-2fc15463e49e",
//       "dataDate": "2024-04-26T07:49:34Z",
//       "korName": "보시소프트웨어",
//       "details": {
//         "secName": [
//           "博思软件"
//         ],
//         "secCode": [
//           "300525"
//         ],
//         "categoryId": [
//           "0123"
//         ]
//       },
//       "analysisDetails": {
//         "topicKor": "담보",
//         "summarizeTinyKor": "보시 소프트웨어 지배주주 첸항이 국진증권에 주식 담보",
//         "summarizeLongKor": "보시 소프트웨어(주식 코드. 300525)은 지배주주인 첸항이 국진증권에 6,678,000주를 담보로 제공했다고 발표했습니다.\n이는 그의 지분의 5.28%와 회사 총 주식 자본의 0.89%에 해당합니다.\n2024년 4월 24일에 시작된 이 담보는 2027년 4월 22일에 종료되며 대출 상환을 목적으로 합니다.\n첸항은 2024년 4월 25일 국진증권 자산관리(주)에게 담보를 해제했습니다.\n담보로 제공된 주식은 그의 지분의 16.81%와 회사 총 주식 자본의 6.80%를 차지하며, 보유 주식 총 126,447,904주 중 51,123,700주가 담보되었습니다."
//       }
//     },
//     {
//       "id": "3bde35de-2264-4982-864c-8b2df60a6557",
//       "dataDate": "2024-04-26T07:49:33Z",
//       "korName": "위퉁광학",
//       "details": {
//         "secName": [
//           "宇瞳光学"
//         ],
//         "secCode": [
//           "300790"
//         ],
//         "categoryId": [
//           "0123"
//         ]
//       },
//       "analysisDetails": {
//         "topicKor": "투자 활동",
//         "summarizeTinyKor": "2023년 10월과 11월에 대한 유통광학의 투자 활동",
//         "summarizeLongKor": "2023년 10월 25일에 제3차 이사회 17차 회의 및 제3차 감사위원회 16차 회의 중, 유통광학은 유휴된 자금 중 최대 3억 위안을 현금 관리에 사용하기로 승인했습니다.\n이로써 투자 프로젝트나 정상적인 운영에 영향을 미치지 않도록 보장했습니다.\n이 자금은 안전성과 유동성이 높은 저위험 현금 관리 상품 구매에 사용되었습니다.\n투자 활동에는 다양한 투자 금액과 연환산 예상 수익률이 다른 다양한 상품의 매입 및 상환이 포함되었으며, 모든 자금은 유치된 자금에서 출처를 찾았습니다."
//       }
//     },
//     {
//       "id": "adb28e4e-3856-4f1d-a492-517569032eec",
//       "dataDate": "2024-04-26T07:49:28Z",
//       "korName": "위퉁광학",
//       "details": {
//         "secName": [
//           "宇瞳光学"
//         ],
//         "secCode": [
//           "300790"
//         ],
//         "categoryId": [
//           "0109"
//         ]
//       },
//       "analysisDetails": {
//         "topicKor": "전환사채",
//         "summarizeTinyKor": "장핑광이 유통광학(주식 코드, 300790) 보유한 전환사채 세부사항",
//         "summarizeLongKor": "유통광학(주식 코드. 300790)은 주주 장핑광이 322,160장의 전환사채를 보유하고 있으며, 이는 그의 총 전환사채 중 40% 및 회사의 전환사채 중 5.37%를 나타냅니다.\n이 사채는 2023년 9월 15일부터 2024년 4월 25일까지 싱잉재무투자(주)에 담보로 제공되었습니다.\n담보 해제 시, 장핑광의 전환사채는 483,240장으로 증가하여, 그의 전환사채 중 60% 및 회사의 전환사채 중 8.05%를 구성할 것입니다."
//       }
//     },
//     {
//       "id": "812449ed-67b3-474b-b3c8-ae0e789a930c",
//       "dataDate": "2024-04-26T07:49:26Z",
//       "korName": "둬루이제약",
//       "details": {
//         "secName": [
//           "多瑞医药"
//         ],
//         "secCode": [
//           "301075"
//         ],
//         "categoryId": [
//           "0123"
//         ]
//       },
//       "analysisDetails": {
//         "topicKor": "제약회사",
//         "summarizeTinyKor": "2023년 두오루이제약의 실적 개요",
//         "summarizeLongKor": "2023년, 두오루이제약은 영업이익으로 약 3억 3,400만 위안을 기록했으며 순이익은 약 1억 8,850만 위안 정도였습니다.\n회사의 연구 및 개발 투자는 영업이익의 7.18%를 차지하여 약 2,399만 5,300만 위안에 이르렀습니다.\n두오루이제약은 2023년에 주력 제품인 아세트산 나트륨 링거 주사제를 주도로 약 3억 3,400만 2,994만 위안의 영업이익을 달성했습니다.\n회사는 22개의 의약품 승인 번호를 확보하고 13개의 발명 특허를 포함한 53개 특허를 보유하고 있습니다.\n2023년에 매출 구조 변화와 신규 사업의 낮은 마진으로 인한 총이익 감소에도 불구하고, 회사는 ESG 노력을 강화하는 데 주력하고 있습니다.\n2024년 4월 25일 두오루이제약의 투자자 관계 활동은 실적 업데이트와 ESG 노력을 강조했습니다.\n회사의 전략적 초점은 ESG 실천 강화, 지속가능성을 개발 전략에 통합, 기술 혁신 및 다양한 수익원을 통한 지속 가능한 성장을 강조하는 데 있습니다.\n특히, 회사의 에이전트 제품인 아모시실린 나트륨 클라블루산 칼륨 주사제는 약 3억 4,900만 위안의 매출을 올렸습니다.\n두오루이제약은 중앙 및 국영 기업의 경영 관행에서 통찰을 얻어 성과와 시장 가치를 증진하기 위해 헌신하고 있습니다."
//       }
//     },
//     {
//       "id": "1f40fc1b-b5ef-401b-b212-7710cef7ee80",
//       "dataDate": "2024-04-26T07:48:00Z",
//       "korName": "중칭바오",
//       "details": {
//         "secName": [
//           "中青宝"
//         ],
//         "secCode": [
//           "300052"
//         ],
//         "categoryId": [
//           "0123"
//         ]
//       },
//       "analysisDetails": {
//         "topicKor": "재무 개요",
//         "summarizeTinyKor": "파워리더 홀딩스, 파워리더 테크놀로지, 및 바오드 홀딩스의 재무 개요",
//         "summarizeLongKor": "최신 공시에 따르면, 파워리더 홀딩스와 파워리더 테크놀로지의 총 대출액은 1,569.75억 위안이며, 파워리더 홀딩스는 다음 6개월에 75.85억 위안과 내년에 31.2억 위안을 상환해야 합니다.\n파워리더 테크놀로지는 다음 6개월에 41.625억 위안과 내년에 41.625억 위안을 상환할 예정입니다.\n두 회사 모두 중요한 연체 부채, 신용등급 하락, 또는 주요 부채 관련 소송이 없는 좋은 재무 상태를 유지하고 있습니다.\n전체 담보 위험은 통제되어 있어 청산 위험이 없습니다.\n추가로, 바오드 홀딩스의 2022년과 2023년 첫 3분기에 회사와의 재무 상호작용, 그리고 2023년 9월 30일 현재의 바오드 홀딩스의 재무 수치는 다음과 같습니다.\n2022년에 일일 거래액은 20.826백만 위안, 대출은 0 위안, 보증은 8천만 위안이었으며, 2023년 첫 3분기에 일일 거래액은 22.804백만 위안, 대출은 0 위안, 보증은 6.5억 위안이었습니다.\n바오드 홀딩스의 총 자산은 1,723,286.83억 위안, 총 부채는 975,970.80억 위안, 총 영업이익은 879,546.71억 위안이며, 순이익은 45,063.27억 위안입니다."
//       }
//     },
//     {
//       "id": "73d68ee6-eb1e-48f3-9b7d-e39abd995b62",
//       "dataDate": "2024-04-26T07:47:35Z",
//       "korName": "톈룽광전",
//       "details": {
//         "secName": [
//           "ST天龙"
//         ],
//         "secCode": [
//           "300029"
//         ],
//         "categoryId": [
//           "0119"
//         ]
//       },
//       "analysisDetails": {
//         "topicKor": "주주총회",
//         "summarizeTinyKor": "장쑤 화생 천룽 광전 장비 주식회사 주주총회 세부사항",
//         "summarizeLongKor": "주식 코드 300029를 보유한 장쑤 화생 천룽 광전 장비 주식회사는 2024년 5월 17일, 장쑤성 장쑤 시 창저우시 진탄 경제개발구 건물 2층 회의실에서 주주총회를 개최할 예정입니다.\n2023년 이사회 업무 보고서 및 2023년 이익 분배 계획 등 6개 안건에 대한 논의가 포함된 회의는 2024년 5월 16일 오전 9시부터 오후 4시까지 이사회 사무실에서 주주총회 등록이 이루어지며, 회의는 현장 및 온라인 투표의 결합으로 진행될 예정입니다.\n자세한 내용은 0519-82686000으로 연락하시기 바랍니다."
//       }
//     },
//     {
//       "id": "c89f8b27-00c2-4d11-a206-216845067eaf",
//       "dataDate": "2024-04-26T07:47:34Z",
//       "korName": "진잉중장비",
//       "details": {
//         "secName": [
//           "金鹰重工"
//         ],
//         "secCode": [
//           "301048"
//         ],
//         "categoryId": [
//           "0123"
//         ]
//       },
//       "analysisDetails": {
//         "topicKor": "Golden Eagle Heavy Industry 2023년 실적 브리핑",
//         "summarizeTinyKor": "2024년 5월 17일에 개최되는 Golden Eagle Heavy Industry (주식 코드, 301048) 2023년 연례 실적 브리핑",
//         "summarizeLongKor": "Golden Eagle Heavy Industry (주식 코드. 301048)은 2024년 5월 17일에 2023년 연례 실적 브리핑을 개최할 예정입니다.\n회사 이사회의 모든 구성원인 장위 회장, 샤오쉰밍 총괄 매니저, 레이젠 재무 이사, 그리고 츄이준 이사비서가 참석할 예정입니다.\n투자자들은 Panorama.net에서 온라인 비디오 중계에 참여할 수 있습니다.\n투자자들은 2024년 5월 17일 이전에 http.//ir.p5w.net/zj/을 방문하거나 QR 코드를 스캔하여 사전에 회사에 질문을 공개적으로 요청할 수 있습니다.\n[Golden Eagle Heavy Industry. 2023년 온라인 실적 브리핑 개최 공고-주식 코드. 301048 주식 약어. Golden Eagle Heavy Industry 공고 번호. 2024-037]"
//       }
//     },
//     {
//       "id": "899eba13-d527-49f8-8088-8032f5c547ce",
//       "dataDate": "2024-04-26T07:47:26Z",
//       "korName": "산유롄유",
//       "details": {
//         "secName": [
//           "三友联众"
//         ],
//         "secCode": [
//           "300932"
//         ],
//         "categoryId": [
//           "0123"
//         ]
//       },
//       "analysisDetails": {
//         "topicKor": "투자자 관계",
//         "summarizeTinyKor": "2024년 5월 10일 산유연중그룹 주식회사의 온라인 성과 브리핑",
//         "summarizeLongKor": "2024년 5월 10일 온라인 성과 브리핑에 참여하십시오. 회사의 회장이자 총괄 매니저인 송채양 씨, 부총괄 매니저인 왕멩준 씨, 재무 이사 고샤오리 여사, 기술 이사 유롱아이 씨, 독립 이사 주푸동 씨, 그리고 후원사 대표이사 증웨이지아 여사가 참석할 예정입니다.\n투자자들은 2024년 5월 9일 오후 5시 이전에 웹사이트 https.//eseb.cn/1dYkJ65XzPy를 방문하거나 위챗 미니 프로그램 코드를 스캔하여 질문하고 참여할 수 있습니다."
//       }
//     },
//     {
//       "id": "0d0dabc9-70a2-49ea-a6e5-26cf06b66953",
//       "dataDate": "2024-04-26T07:47:25Z",
//       "korName": "주창바이오",
//       "details": {
//         "secName": [
//           "九强生物"
//         ],
//         "secCode": [
//           "300406"
//         ],
//         "categoryId": [
//           "0123"
//         ]
//       },
//       "analysisDetails": {
//         "topicKor": "발명 특허",
//         "summarizeTinyKor": "주장바이오, 응고 분석기 및 분석 방법에 대한 두 가지 발명 특허 획득",
//         "summarizeLongKor": "주장바이오는 최근 두 가지 발명 특허를 획득했습니다.\n특허 번호는 ZL202110766615.5 및 ZL202110767439.7입니다.\n이러한 특허는 응고 분석기 및 응고 분석 방법이라는 이름으로 2021년 7월 7일에 신청되었으며, 각각 2024년 4월 19일에 허가되었습니다.\n이러한 특허의 획득은 회사의 지적 재산권 강점을 활용하고 기술 혁신을 주도하며 핵심 경쟁력을 강화하며 지속적인 혁신 문화를 정착시킬 것입니다."
//       }
//     },
//     {
//       "id": "20507834-d8cb-484b-a6b1-ea51d0dd1678",
//       "dataDate": "2024-04-26T07:45:34Z",
//       "korName": "천이인텔리전트",
//       "details": {
//         "secName": [
//           "辰奕智能"
//         ],
//         "secCode": [
//           "301578"
//         ],
//         "categoryId": [
//           "0123"
//         ]
//       },
//       "analysisDetails": {
//         "topicKor": "자격",
//         "summarizeTinyKor": "광동 천이 인텔리전트 테크놀로지 주식회사 독립 이사 후보자 이충의 자격",
//         "summarizeLongKor": "광동 천이 인텔리전트 테크놀로지 주식회사 독립 이사 후보인 이충은 법률, 경제, 경영, 회계 및 금융 분야에서 5년 이상의 관련 업무 경험을 보유하고 있습니다.\n자격 심사를 통과했으며 최고 주주 중 한 명이 아니며 지배주주와 관련이 없거나 회사에 서비스를 제공하고 있지 않습니다.\n이충은 증권 위반과 관련된 금지, 공개 식별 또는 처벌 사항이 없습니다.\n그는 신뢰 위반, 직무 해제, 또는 독립 이사로서 6년 이상의 연임 기록이 없습니다."
//       }
//     },
//     {
//       "id": "930ea020-6e05-48b7-93a1-1e3139d65f30",
//       "dataDate": "2024-04-26T03:44:18Z",
//       "korName": "헝솨이",
//       "details": {
//         "secName": [
//           "恒帅股份"
//         ],
//         "secCode": [
//           "300969"
//         ],
//         "categoryId": [
//           "0127"
//         ]
//       },
//       "analysisDetails": {
//         "topicKor": "투자자 참여",
//         "summarizeTinyKor": "2024년 031호 공고, 증권 코드 300969, 회사명 닝보 헝쉬와이 주식회사, 공고일 2024년 4월 26일",
//         "summarizeLongKor": "2023년 연례 온라인 실적 브리핑 수정 전 투자자 참여 시간. 2024년 4월 29일(월), 15:00-16:30, 2023년 연례 온라인 실적 브리핑 수정 전 URL. https://eseb.cn/1887dgGsAgg, 2023년 연례 온라인 실적 브리핑 수정 후 투자자 참여 시간. 2024년 4월 29일(월), 15:00-16:30, 2023년 연례 온라인 실적 브리핑 수정 후 URL. https://eseb.cn/1dC9PFoDDFe"
//       }
//     },
//     {
//       "id": "e2f2dd1d-8e45-40fc-8592-b54e84b320ce",
//       "dataDate": "2024-04-26T03:44:15Z",
//       "korName": "지린진관전기",
//       "details": {
//         "secName": [
//           "金冠股份"
//         ],
//         "secCode": [
//           "300510"
//         ],
//         "categoryId": [
//           "0119"
//         ]
//       },
//       "analysisDetails": {
//         "topicKor": "2023년 주주총회",
//         "summarizeTinyKor": "진관주식(주식 코드, 300510) 2023년 주주총회 공고",
//         "summarizeLongKor": "진관주식(주식 코드 300510)은 2024년 5월 16일 오후 2시에 허난성 루양시에서 개최될 2023년 주주총회 공고를 발표했습니다.\n주주총회에서는 2023년 연례보고서, 이사회 업무보고서, 감사위원회 업무보고서, 재무결산보고서, 이익배분계획 등 14개 안건을 심의할 예정입니다.\n이 중 9, 10, 11, 12, 13번 안건은 주주총회에서 2/3 이상의 특별결의로 통과되어야 하며, 소액 주주의 투표는 별도로 집계되어 공개될 예정입니다.\n주주총회에서는 또한 독립이사들의 2023년 업무보고를 듣게 될 것입니다.\n투표는 심천 증권 거래소 거래 시스템과 인터넷 투표 시스템을 통해 진행될 예정이며, 구체적인 운영 절차는 부록 1을 참조하시기 바랍니다.\n연락처는 우쇼이, 전화 0379-63998696, 팩스 0431-84155588, 이메일 jilinjinguan@163.com입니다.\n주주총회 투표 시간은 2024년 5월 16일 오전 9시 15분부터 9시 25분, 9시 30분부터 11시 30분, 오후 1시부터 3시까지입니다.\n주주는 심천 증권 거래소 거래 시스템과 인터넷 투표 시스템을 통해 투표할 수 있습니다.\n인터넷 투표 시스템을 통해 온라인 투표하는 시간은 2024년 5월 16일 오전 9시 15분부터 오후 3시까지 언제든지 가능합니다.\n주주는 증권사 거래 클라이언트에 로그인하여 거래 시스템을 통해 투표할 수 있습니다.\n주주는 인터넷 투표 시스템에 로그인하여 투표해야 하며, 2016년 개정된 심천 증권 거래소 투자자 네트워크 서비스 신원인증 사업 지침에 따라 신원 인증을 거쳐야 합니다.\n진관전기 주식회사의 2023년 주주총회 주주 등록서에는 주주명/상호, 주주 신분증 번호/사업자등록번호, 주주 계좌번호, 보유 주식 수 등이 포함되어 있습니다.\n진관전기 주식회사의 2023년 주주총회 안건에는 회사의 2023년 연례보고서 및 요약안건, 회사의 2023년 이사회 업무보고서, 회사의 2023년 감사위원회 업무보고서 등 14개 안건이 포함되어 있습니다.\n주주총회 안건 중 9, 10, 11, 12, 13번 안건은 주주총회에서 특별결의로 통과되어야 합니다.\n주주총회에서는 소액 주주의 투표를 별도로 집계하고 공개할 예정입니다.\n주주총회에서는 또한 회사의 독립이사들의 2023년 연간 실적보고를 듣게 될 것입니다."
//       }
//     },
//     {
//       "id": "4821d4c2-1fc3-4d2f-8b4c-152e12802091",
//       "dataDate": "2024-04-26T03:44:15Z",
//       "korName": "톈위안환경",
//       "details": {
//         "secName": [
//           "天源环保"
//         ],
//         "secCode": [
//           "301127"
//         ],
//         "categoryId": [
//           "0129"
//         ]
//       },
//       "analysisDetails": {
//         "topicKor": "정보 공개",
//         "summarizeTinyKor": "2023년 중국 중국 국부 증권이 실시한 우한 티안위안 환경보호 주식회사의 재무 검토",
//         "summarizeLongKor": "2023년 연속 감독 및 추적 보고서에서 중국 국부 증권이 우한 티안위안 환경보호 주식회사의 후원 업무를 검토했으며, 정보 공개 검토와 적시의 문서 검토를 언급했습니다.\n모금된 자금 및 프로젝트 진행 상황의 감독은 정보 공개 문서와 일치했습니다.\n중국 국부 증권은 13개의 특별 의견을 발행하고 2회의 교육 세션을 실시했으며, 정보 공개 및 내부 시스템 구축을 포함한 확인된 문제 및 조치를 기록했습니다.\n회사에서는 문제가 발견되지 않았으며, 약속은 문제없이 이행되었습니다.\n회사는 규제 조치를 수용하고 내부 통제 감사 및 임무 독립성을 개선했습니다."
//       }
//     },
//     {
//       "id": "82516ee7-b0ca-454d-8273-9d82e72bd039",
//       "dataDate": "2024-04-26T03:44:14Z",
//       "korName": "진강태양광",
//       "details": {
//         "secName": [
//           "金刚光伏"
//         ],
//         "secCode": [
//           "300093"
//         ],
//         "categoryId": [
//           "0119"
//         ]
//       },
//       "analysisDetails": {
//         "topicKor": "주주총회",
//         "summarizeTinyKor": "킹콩태양광 주식회사 주주총회의 중요 일정",
//         "summarizeLongKor": "2024년 4월 26일, 킹콩태양광 주식회사는 2023년 주주총회 공고에 대한 공지를 수정했습니다.\n2023년 5월 30일, 회사는 주주총회를 개최하며, 그 날 온라인 투표 시간이 있습니다.\n2023년 5월 24일은 회의의 자본 등록일입니다.\n주주는 2023년 5월 28일까지 서한이나 팩스로 회의에 등록할 수 있습니다.\n2023년 5월 30일의 온라인 투표 구체적인 시간은 오전 9시 15분부터 9시 25분까지, 오전 9시 30분부터 11시 30분까지, 오후 1시부터 3시까지입니다.\n심천 증권 거래소 인터넷 투표 시스템을 통한 투표 구체적인 시간은 오전 9시 15분부터 오후 3시까지입니다.\n2024년 5월 30일, 회사는 다른 주주총회를 개최할 예정이며, 그 날 온라인 투표가 있습니다.\n2024년 5월 24일은 2024년 회의의 자본 등록일입니다.\n주주는 2024년 5월 28일까지 서한이나 팩스로 회의에 등록할 수 있습니다.\n2024년 5월 30일의 온라인 투표 구체적인 시간은 오전 9시 15분부터 9시 25분까지, 오전 9시 30분부터 11시 30분까지, 오후 1시부터 3시까지입니다.\n심천 증권 거래소 인터넷 투표 시스템을 통한 투표 구체적인 시간은 오전 9시 15분부터 오후 3시까지입니다."
//       }
//     },
//     {
//       "id": "7aa252ab-ed4a-4c35-88aa-b560f1af5c71",
//       "dataDate": "2024-04-26T03:44:14Z",
//       "korName": "지린진관전기",
//       "details": {
//         "secName": [
//           "金冠股份"
//         ],
//         "secCode": [
//           "300510"
//         ],
//         "categoryId": [
//           "0119"
//         ]
//       },
//       "analysisDetails": {
//         "topicKor": "주주총회",
//         "summarizeTinyKor": "진관전기 주식회사(300510)가 2023년 주주총회 소집에 대한 정정 공고를 발표",
//         "summarizeLongKor": "지린진관전기는 2024년 4월 26일에 2023년 주주총회에 관한 정보의 정확성과 완전성을 보장하기 위해 정정 공고를 발표했습니다.\n2024년 5월 9일 시장 종료까지 중국증권예탁결제(주) 심천지점에 등록된 주주들이 회의에 참석할 자격이 있습니다.\n수정된 공고에 대해서는 주초정보망의 '2023년 주주총회 소집 공고(정정)'를 참조하십시오."
//       }
//     },
//     {
//       "id": "541436e8-6d44-469f-8616-0f0fa9087a8d",
//       "dataDate": "2024-04-26T03:44:14Z",
//       "korName": "커위안지후이",
//       "details": {
//         "secName": [
//           "科远智慧"
//         ],
//         "secCode": [
//           "002380"
//         ],
//         "categoryId": [
//           "0123"
//         ]
//       },
//       "analysisDetails": {
//         "topicKor": "감사위원회",
//         "summarizeTinyKor": "난징 케이윈 스마트 기술 그룹의 감사위원회 변경사항",
//         "summarizeLongKor": "난징 케이윈 스마트 기술 그룹의 제6대 이사회 감사위원회는 조향련, 왕페이홍, 후시메이의 구성원을 조정 이전에 포함하고 있었으며, 현재는 조향련, 왕페이홍, 리우밍하오를 포함하고 있습니다."
//       }
//     },
//     {
//       "id": "d42d1c7a-45e5-4d12-b5e8-d664f1bd4a90",
//       "dataDate": "2024-04-26T03:43:42Z",
//       "korName": "선도지능장비",
//       "details": {
//         "secName": [
//           "先导智能"
//         ],
//         "secCode": [
//           "300450"
//         ],
//         "categoryId": [
//           "0115"
//         ]
//       },
//       "analysisDetails": {
//         "topicKor": "보유주식, 심천 증권 거래소, 왕얀칭",
//         "summarizeTinyKor": "왕얀칭 씨의 주식 보유 계획 및 보유 요약",
//         "summarizeLongKor": "실제 통제자이자 회사의 회장 및 총괄 경영자인 왕얀칭 씨는 2023년 10월 30일부터 6개월 동안 적어도 1억 5천만 위안에서 3억 위안까지 회사 주식을 증가할 의사를 가지고 있습니다.\n2024년 4월 25일 현재, 그는 심천 증권 거래소 시스템을 통해 5,925,477주를 취득하여 주당 평균 25.32위안에 총 1억 5천 9백 3십 6만 6백 위안의 증가를 달성했습니다.\n직접 보유 주식은 총 주식 자본의 0.5682%에 해당하는 8,835,657주이며, 그의 통제하에 있는 회사들은 회사 총 주식 자본의 21.6118%에 해당하는 3억 3만 6천 3백 9십 6만 6백 주를 보유하고 있습니다."
//       }
//     },
//     {
//       "id": "48f37c66-0c17-4657-ad99-6488e675436f",
//       "dataDate": "2024-04-26T03:42:23Z",
//       "korName": "커위안지후이",
//       "details": {
//         "secName": [
//           "科远智慧"
//         ],
//         "secCode": [
//           "002380"
//         ],
//         "categoryId": [
//           "0123"
//         ]
//       },
//       "analysisDetails": {
//         "topicKor": "고위 경영진 임명",
//         "summarizeTinyKor": "난징 케이윈 스마트 기술 그룹 주식회사 부사장으로의 팡 정 씨 임명",
//         "summarizeLongKor": "난징 케이윈 스마트 기술 그룹 주식회사는 2024년 4월 24일에 제6차 이사회 제10차 회의를 개최하고, 회사 부사장으로 팡 정 씨의 임명을 만장일치로 승인했습니다.\n1973년생 중국 국적자인 팡 정 씨는 회사 내에서 다양한 직책을 맡아오며 현재는 부사장 겸 에너지 산업 총괄 매니저 및 제어 시스템 공학 센터 총괄 매니저로 활동하고 있습니다."
//       }
//     },
//     {
//       "id": "7613dbd4-d5e8-4c6f-bcc1-4135cf9b0826",
//       "dataDate": "2024-04-26T03:40:23Z",
//       "korName": "사유도신과기",
//       "details": {
//         "secName": [
//           "四维图新"
//         ],
//         "secCode": [
//           "002405"
//         ],
//         "categoryId": [
//           "0117"
//         ]
//       },
//       "analysisDetails": {
//         "topicKor": "전략적 파트너십",
//         "summarizeTinyKor": "다주오 인텔리전트 테크놀로지 주식회사 파트너십 발표",
//         "summarizeLongKor": "다주오 인텔리전트 테크놀로지 주식회사는 6억 2,500만 위안의 등록 자본금을 보유하고, 지능형 주행 기술과 제품 경쟁력을 향상시키기 위한 5년간의 전략적 파트너십에 참여했습니다.\n이 협력은 지능형 주행 알고리즘 및 시스템을 공동으로 개선하고, 최종 사용자에게 포괄적인 솔루션을 제공하는 것을 목표로 합니다.\n이번 파트너십은 회사의 자동차 지능 분야의 핵심 업무 능력과 경쟁력을 강화하며, 개발 전략 및 주주 이익과 일치합니다.\n합의서는 틀 문서이며, 구체적인 협력 내용은 미래의 공식 합의서에서 최종 확정되며, 실행 진행 상황은 불확실합니다."
//       }
//     },
//     {
//       "id": "0a720e82-614f-42cc-807b-7e295fa6cd5c",
//       "dataDate": "2024-04-25T23:44:23Z",
//       "korName": "화다지노믹스",
//       "details": {
//         "secName": [
//           "华大基因"
//         ],
//         "secCode": [
//           "300676"
//         ],
//         "categoryId": [
//           "0129"
//         ]
//       },
//       "analysisDetails": {
//         "topicKor": "주식 발행 및 상장 정보",
//         "summarizeTinyKor": "BGIs 주식 발행 및 상장 정보 개요",
//         "summarizeLongKor": "BGI는 등록 자본금이 4억 1,391만 4,325위안으로, 주당 145위안에 13,814,325주의 보통주를 발행하여 총 20억 3,077만 1,125위안을 조달했습니다.\n경비를 제외한 순 자금은 19억 7,664만 4,733.63위안입니다.\nBGI는 기업 지배구조 개선을 포함한 발행자 의무를 감독합니다.\nBGI에 문의하려면 0755-36307065로 연락하십시오. 2021년 2월 9일 심천 증권 거래소에 상장되었으며 주식 코드는 300676.SZ입니다.\n심천시 BGI 종합 공원 7동 14층에 등록 주소가 있으며, 사무실 주소는 심천시 BGI 스페이스 센터 B동 8층입니다.\n법정 대표자는 조리지안입니다.\n특정 대상에게 주식 발행은 2024년 4월에 계획되어 있습니다.\n이사회 비서는 쉬찐입니다."
//       }
//     },
//     {
//       "id": "92b59fb5-3954-4434-9a96-d347cbc32fec",
//       "dataDate": "2024-04-25T23:44:18Z",
//       "korName": "푸린운수그룹",
//       "details": {
//         "secName": [
//           "富临运业"
//         ],
//         "secCode": [
//           "002357"
//         ],
//         "categoryId": [
//           "0129"
//         ]
//       },
//       "analysisDetails": {
//         "topicKor": "재무 성과",
//         "summarizeTinyKor": "2023년 푸린운수의 재무 하이라이트",
//         "summarizeLongKor": "2023년, 푸린운수는 이자비용이 21,840,704.23 RMB, 이자소득이 793,750.67 RMB, 투자수익이 200,108,937.70 RMB, 자산손상비용이 12,998,865.11 RMB, 순이익이 141,339,500.03 RMB로 보고했습니다.\n통합 현금흐름표에 따르면 영업활동으로부터의 순현금흐름은 235,916,386.60 RMB, 투자활동으로부터의 순현금흐름은 -31,402,746.84 RMB, 자금조달활동으로부터의 순현금흐름은 -56,107,502.56 RMB, 현금 및 현금성자산의 순 증가는 148,406,137.20 RMB입니다.\n본사의 현금흐름표에 따르면 영업활동으로부터의 순현금흐름은 -18,135,795.99 RMB, 투자활동으로부터의 순현금흐름은 97,294,305.54 RMB, 자금조달활동으로부터의 순현금흐름은 -56,107,502.56 RMB입니다.\n게다가, 푸린운수그룹은 총자산이 2,843,484,323.79 RMB, 총유동자산이 410,527,224.05 RMB, 총비유동자산이 2,432,957,099.74 RMB, 총유동부채가 965,802,742.34 RMB, 총비유동부채가 338,113,809.50 RMB, 총자본이 1,539,567,771.95 RMB였습니다.\n회사의 2023년 총 영업수익은 864,878,162.56 RMB이며, 총 영업비용은 895,349,292.49 RMB, 영업이익은 167,097,248.41 RMB, 순이익은 152,668,863.34 RMB, 주당순이익은 0.48 RMB입니다."
//       }
//     },
//     {
//       "id": "0122294c-123a-4be8-9924-280559d2f335",
//       "dataDate": "2024-04-25T23:44:18Z",
//       "korName": "지린대통신설계원",
//       "details": {
//         "secName": [
//           "吉大通信"
//         ],
//         "secCode": [
//           "300597"
//         ],
//         "categoryId": [
//           "0129"
//         ]
//       },
//       "analysisDetails": {
//         "topicKor": "투자 내역",
//         "summarizeTinyKor": "2023년 지다 통신 투자 내역",
//         "summarizeLongKor": "지다 통신은 2023년에 총 2억 7천 1백 8십 9만 위안을 조달했으며, 이 중 6천 2백 1십 6만 7백 위안이 사용되었고, 1억 3천 8백 7십 2만 2백 위안이 사용되지 않았습니다.\n투자 대상 프로젝트로는 정부 및 기업을 위한 디지털 비즈니스 센터 프로젝트, 스마트 급식소 산업화 프로젝트, 스마트 중간 플랫폼 건설 프로젝트 등이 포함되어 있으며, 총 투자 금액은 2억 7천 1백 8십 9만 위안입니다."
//       }
//     },
//     {
//       "id": "2ab9c09f-9016-45a4-ba66-39647646018d",
//       "dataDate": "2024-04-25T23:44:14Z",
//       "korName": "루이제엔지니어링",
//       "details": {
//         "secName": [
//           "深圳瑞捷"
//         ],
//         "secCode": [
//           "300977"
//         ],
//         "categoryId": [
//           "01239910"
//         ]
//       },
//       "analysisDetails": {
//         "topicKor": "연례 회의 결정사항",
//         "summarizeTinyKor": "신진 엔지니어링 컨설팅 주식회사 이사회 감사위원회 제15차 회의 요약",
//         "summarizeLongKor": "신진 엔지니어링 컨설팅 주식회사 이사회 감사위원회 제15차 회의는 2024년 4월 14일에 개최되었습니다.\n3명의 감사위원이 참석했으며, 위원장 왕위펑씨는 통신투표를 통해 참여했습니다.\n회의에서는 2023년 연례 보고서, 재무 최종 계좌 보고서, 이익 분배 계획, 감사위원회 업무 보고서, 내부 통제 자가평가 보고서, 모금 자금 예금 및 사용에 대한 특별 보고서, 모금 프로젝트 완료 등 다양한 제안이 승인되었습니다.\n모든 제안이 찬성 3표, 반대 0표, 기권 0표로 만장일치로 지지되었습니다."
//       }
//     },
//     {
//       "id": "d6c82da7-c530-4113-a326-d9f8f9d4608c",
//       "dataDate": "2024-04-25T23:44:13Z",
//       "korName": "신진파워그룹",
//       "details": {
//         "secName": [
//           "新锦动力"
//         ],
//         "secCode": [
//           "300157"
//         ],
//         "categoryId": [
//           "0119"
//         ]
//       },
//       "analysisDetails": {
//         "topicKor": "주주총회",
//         "summarizeTinyKor": "신진파워그룹 주식회사 2023년 주주총회 주요 내용",
//         "summarizeLongKor": "신진파워그룹 주식회사의 2023년 주주총회에서 10명의 참석자가 총 173,235,822표의 주식을 대표하여 참석하였으며, 이는 총 표의 23.8752%에 해당합니다.\n6명의 소규모 주주 및 대리인이 1,047,600표를 대표하여 참석하였으며, 이는 총 표의 0.1444%를 차지합니다.\n회의는 이사 보수 계획, 회계사 재선임, 미회수 손실 및 2024년 예상 보증금 등 다양한 제안을 100.0000%의 주주 승인으로 승인하였습니다."
//       }
//     },
//     {
//       "id": "fe9d272f-0066-4bc2-aff2-9ca1834573e5",
//       "dataDate": "2024-04-25T16:52:00Z",
//       "korName": "멍왕그룹",
//       "details": {
//         "secName": [
//           "梦网科技"
//         ],
//         "secCode": [
//           "002123"
//         ],
//         "categoryId": [
//           "0123"
//         ]
//       },
//       "analysisDetails": {
//         "topicKor": "주식 옵션 인센티브 계획",
//         "summarizeTinyKor": "멍왕 기술의 주식 옵션 인센티브 계획 개요",
//         "summarizeLongKor": "멍왕 기술은 적극적으로 주식 옵션 인센티브 계획을 운영해왔습니다.\n2021년에는 다양한 이유로 5,571,488개의 주식 옵션이 취소되었습니다.\n2021년 계획의 행사 가격은 주당 17.48위안 및 15.50위안으로 조정되었습니다.\n2022년에는 주당 15.53위안에 12.78백만 주식 옵션이 부여되었습니다.\n또한 2022년 계획에서 3.00015백만 주식 옵션이 취소되었습니다.\n2022년 계획의 행사 가격은 주당 15.50위안으로 조정되었습니다.\n2022년 계획의 두 번째 단계에서는 3,533,850개의 주식 옵션이 취소되었으며, 첫 번째 보상 대상은 157명이었으며, 4,943,670개의 주식 옵션이 취소되었습니다."
//       }
//     },
//     {
//       "id": "fe96c94e-087a-4de0-b5ad-5bbfe497d9da",
//       "dataDate": "2024-04-25T16:52:00Z",
//       "korName": "멍왕그룹",
//       "details": {
//         "secName": [
//           "梦网科技"
//         ],
//         "secCode": [
//           "002123"
//         ],
//         "categoryId": [
//           "0113"
//         ]
//       },
//       "analysisDetails": {
//         "topicKor": "스톡옵션 인센티브 계획",
//         "summarizeTinyKor": "멍왕 클라우드 기술 그룹 주식회사의 재무 하이라이트",
//         "summarizeLongKor": "2023년, 멍왕 클라우드 기술 그룹 주식회사는 2020년 대비 91.34%의 영업이익 증가를 보고, 2022년 스톡옵션 인센티브 계획과 일치했습니다.\n회사의 영업이익은 2023년에 최소 115% 이상 성장할 것으로 예상됩니다.\n2022년 인센티브 계획의 스톡옵션은 2024년 3월 17일부터 2025년 3월 16일까지 15.50 위안/주당에서 행사할 수 있습니다.\n계획의 인센티브 대상은 핵심 경영진 및 기술 인력입니다.\n행사에 대한 개인소득세는 자체 부담으로 회사가 관리합니다.\n계획의 행사 조건이 성공적으로 충족되었습니다."
//       }
//     },
//     {
//       "id": "fe83a44f-d137-43bf-a0d7-8ac0f73186ac",
//       "dataDate": "2024-04-25T16:52:00Z",
//       "korName": "징한인베스트먼트",
//       "details": {
//         "secName": [
//           "*ST美谷"
//         ],
//         "secCode": [
//           "000615"
//         ],
//         "categoryId": [
//           "0123"
//         ]
//       },
//       "analysisDetails": {
//         "topicKor": "감사 보수",
//         "summarizeTinyKor": "아오위안 메이구 기술 주식회사의 감사 보수 상세 내역",
//         "summarizeLongKor": "2023년, 아오위안 메이구 기술 주식회사의 감사 보수에는 첸 꼬 - 438,500 위안, 조 만 - 271,300 위안, 황 젠웬 - 310,300 위안, 탄 이 - 34,700 위안, 렝 양 - 34,700 위안, 간 쿠안 - 280,700 위안이 포함되었습니다.\n2023년 총 감사 보수는 1.3452 백만 위안에 달했습니다.\n2024년 감사 보수 계획은 2024년 1월 1일부터 2024년 12월 31일까지 적용되며, 내부 감사원은 회사 및 개인 실적을 기반으로 한 월 기본급과 연말 성과 보너스를 받으며, 외부 감사원은 수당을 받습니다.\n이 계획은 2023년 연례 주주총회에 제출되어 승인을 받아야 합니다.\n아오위안 메이구 기술 주식회사의 감사 보수 계획은 2024년 4월 24일에 발표되었습니다."
//       }
//     },
//     {
//       "id": "fc6a75aa-9a6a-40c1-b8a6-3f4db17cfe9e",
//       "dataDate": "2024-04-25T16:52:00Z",
//       "korName": "진링테크",
//       "details": {
//         "secName": [
//           "华软科技"
//         ],
//         "secCode": [
//           "002453"
//         ],
//         "categoryId": [
//           "0123"
//         ]
//       },
//       "analysisDetails": {
//         "topicKor": "자금 조달 제안",
//         "summarizeTinyKor": "진링화룐기술 주식회사 소액 및 신속한 자금 조달 제안",
//         "summarizeLongKor": "2024년 4월 24일, 진링화룐기술 주식회사 이사회는 소액 및 신속한 자금 조달과 관련된 사항을 처리하기 위해 주주총회에 이사회에 권한을 부여할 것을 요청하는 제안을 심의하고 승인했습니다.\n이사회는 특정 대상에게 인민폐 보통주(A주식)를 발행할 권한을 부여받았으며, 총 자금 조달액은 최근 연도 말 기준으로 순자산의 20%를 초과하지 않고 3억 인민폐를 초과하지 않아야 합니다.\n발행 수량은 발행 전 회사의 총 주식 자본의 30%를 초과해서는 안 됩니다."
//       }
//     },
//     {
//       "id": "fd069c52-0be8-4eb2-ba94-2d0748a352fe",
//       "dataDate": "2024-04-25T16:40:01Z",
//       "korName": "CCOOP그룹",
//       "details": {
//         "secName": [
//           "ST大集"
//         ],
//         "secCode": [
//           "000564"
//         ],
//         "categoryId": [
//           "0119"
//         ]
//       },
//       "analysisDetails": {
//         "topicKor": "주주 총회",
//         "summarizeTinyKor": "2023년 중국 공급 마케팅 그룹 주식회사 주주 연례 총회 정보",
//         "summarizeLongKor": "2023년 주주 연례 총회는 2024년 5월 23일, 베이징 서쪽 지역의 선우문외거리에서 개최될 예정입니다.\n온라인 투표는 동일한 날 9:15-9:25, 9:30-11:30, 13:00-15:00에 진행됩니다.\n자본 등록일은 2024년 5월 15일이며, 등록 시간은 2024년 5월 16일로, 서부 지구 신청 도서관 4층, 시안시 신청로 103번에 위치한 이사회 사무실에서 진행됩니다.\n연락처는 029-87481871이며, 이메일은 000564@ccoop.com.cn입니다.\n2024년 5월 23일의 거래 시간은 9:15-9:25, 9:30-11:30, 13:00-15:00입니다.\n온라인 투표 시스템 세부 정보는 http.//wltp.cninfo.com.cn에서 웹사이트, 인증 요구 사항 및 투표 시간을 확인할 수 있습니다."
//       }
//     },
//     {
//       "id": "fedaa594-7fa1-4279-8ae3-5bea34047ac9",
//       "dataDate": "2024-04-25T16:37:00Z",
//       "korName": "중디인베스트먼트",
//       "details": {
//         "secName": [
//           "中迪投资"
//         ],
//         "secCode": [
//           "000609"
//         ],
//         "categoryId": [
//           "010305"
//         ]
//       },
//       "analysisDetails": {
//         "topicKor": "현금흐름과 재무 성과",
//         "summarizeTinyKor": "2024년 제1사분기 중디인베스트먼트 하이라이트 보고서",
//         "summarizeLongKor": "2024년 제1사분기에 중디인베스트먼트는 총 포괄적 손익액이 -33,480,055.69 위안이며, 기본 및 희석 주당순이익은 각각 -0.11 위안입니다.\n현금흐름 내역에는 영업활동으로부터 43,944,262.65 위안, 투자활동으로부터 4,004,000.00 위안, 재무활동으로부터 8,800,693.65 위안의 현금유입이 포함되어 있습니다.\n영업, 투자, 재무활동으로부터의 순 현금흐름은 각각 17,724,540.99 위안, 4,004,000.00 위안, 114,400.00 위안입니다.\n또한, 회사의 현금 및 현금성자산은 21,843,020.98 위안 증가하여, 최종 잔고는 34,243,091.01 위안입니다."
//       }
//     },
//     {
//       "id": "ff2a11ee-e0bb-4ebd-b3be-eb48eda50743",
//       "dataDate": "2024-04-25T16:25:01Z",
//       "korName": "베이컨에너지엔지니어링",
//       "details": {
//         "secName": [
//           "贝肯能源"
//         ],
//         "secCode": [
//           "002828"
//         ],
//         "categoryId": [
//           "0123"
//         ]
//       },
//       "analysisDetails": {
//         "topicKor": "조합원 규정",
//         "summarizeTinyKor": "신장 베이켄 에너지 엔지니어링 주식회사 제15차 이사회 회의 요약",
//         "summarizeLongKor": "신장 베이켄 에너지 엔지니어링 주식회사는 2024년 4월 25일에 제15차 이사회를 개최하여 조합원 규정 개정안을 승인했습니다.\n수정된 규정에는 베이켄 에너지(그룹) 주식회사의 등록 세부 정보가 포함되어 있으며, 통합 사회 신용 코드가 언급되었습니다.\n회사의 소재지는 카라마이시의 백잔탄 구, 평안대로 2500-1호이며, 우편번호는 834007입니다.\n주주들을 위한 회의 장소 또한 동일한 주소에 위치합니다.\n이사회는 총 6명의 이사로 구성되며, 적어도 3명은 독립 이사여야 합니다.\n수정된 규정은 2024년 회사의 제2차 임시 주주총회에서 제시될 예정입니다.\n회사는 규정 요구 사항을 준수하여 명칭 변경을 처리하고 투자자 인식을 위해 적시에 정보 공시를 보장할 것입니다."
//       }
//     },
//     {
//       "id": "fec0cd0f-dbf2-41e9-a861-defe78a08b9f",
//       "dataDate": "2024-04-25T16:25:01Z",
//       "korName": "추장신소재",
//       "details": {
//         "secName": [
//           "楚江新材"
//         ],
//         "secCode": [
//           "002171"
//         ],
//         "categoryId": [
//           "0123"
//         ]
//       },
//       "analysisDetails": {
//         "topicKor": "추장신소재 2023 연례 보고서",
//         "summarizeTinyKor": "추장신소재(002171) 2023 연례 보고서 및 연례 실적 브리핑 세부 내용",
//         "summarizeLongKor": "공고 번호. 2024-051 증권 코드. 002171 증권 약어. 추장신소재 채권 코드. 128109 채권 약어. 추장 전환사채 회사. 안후이 추장 기술 신소재 주식회사 2023 연례 보고서 및 연례 보고서 요약 공개일. 2024년 4월 26일 2023 연례 실적 온라인 브리핑 일자. 2024년 5월 10일 실적 브리핑 시간. 오후 3시-5시 실적 브리핑 형식. 온라인 원격 실적 브리핑 참여 플랫폼. 파노라마 네트워크 투자자 관계 상호작용 플랫폼 (http.//ir.p5w.net) 참석자. 회사의 장 짱천씨, 이사이사장 및 이사회 비사장 왕강씨, 재무이사 이밍량씨, 독립이사 후리펀씨 질문 접수 마감일. 2024년 5월 9일 오후 5시 질문 접수 플랫폼. http.//ir.p5w.net/zj/ 질문 접수 방법. QR 코드를 스캔하거나 웹사이트 방문 공고일. 2024년 4월 26일"
//       }
//     },
//     {
//       "id": "fe8fe2d1-060b-4ef5-ab57-050185892dda",
//       "dataDate": "2024-04-25T16:04:00Z",
//       "korName": "궈언테크",
//       "details": {
//         "secName": [
//           "国恩股份"
//         ],
//         "secCode": [
//           "002768"
//         ],
//         "categoryId": [
//           "010301"
//         ]
//       },
//       "analysisDetails": {
//         "topicKor": "고분자 복합 소재",
//         "summarizeTinyKor": "2023년도 청도 곤 테크놀로지 주식회사 연례 보고서 하이라이트",
//         "summarizeLongKor": "2023년도 연례 보고서에서 청도 곤 테크놀로지 주식회사는 100만 톤의 폴리스티렌(PS) 프로젝트, 20만 톤의 폴리프로필렌(PP) 수지 생산 라인 프로젝트, 그리고 12만 톤의 확장 가능 폴리스티렌(EPS) 프로젝트와 같은 프로젝트에 대한 전략적 투자를 공개했습니다.\n이러한 투자는 수정 재료의 상류 산업 체인을 확대함으로써 회사의 비용 우위와 핵심 경쟁력을 강화하기 위한 것입니다."
//       }
//     },
//     {
//       "id": "ffe6ec36-32ec-43de-9ba7-39c81a2dab05",
//       "dataDate": "2024-04-25T15:46:00Z",
//       "korName": "롭스킹소재",
//       "details": {
//         "secName": [
//           "罗普斯金"
//         ],
//         "secCode": [
//           "002333"
//         ],
//         "categoryId": [
//           "0123"
//         ]
//       },
//       "analysisDetails": {
//         "topicKor": "조달된 자금 관리",
//         "summarizeTinyKor": "LPSK 재무 업데이트",
//         "summarizeLongKor": "2023년 1월 17일, LPSK는 비공개 공모를 통해 22,321,200 RMB의 보통주(A주식)을 발행하여 총 99,998,976 RMB를 조달했으며, 비용 차감 후 순액은 95,826,974.88 RMB였습니다.\n2023년 12월 31일 현재, 회사는 운영 자본에 자금을 사용했으며, 조달된 자금 계좌에는 잔고가 0 RMB 있었습니다.\n중국 중신은행 수주 구수 지점에 개설된 조달된 자금 전용 계좌에는 97,698,976.00 RMB가 예금되어 있었으며, 2023년 3월 24일에 회사의 중국 산업 상업 은행 일반 계좌로 27,817.65 RMB의 이자를 이체한 후 폐쇄되었습니다.\n베이커 틸리 국제 공인 회계사는 2023년에 조달된 자금의 적절한 사용을 확인하였으며, 스폰서 기관은 규정 및 공시와의 일관성을 확인했습니다."
//       }
//     },
//     {
//       "id": "fd7157d4-110b-4a2d-ad92-266801f31862",
//       "dataDate": "2024-04-25T15:43:01Z",
//       "korName": "신카이푸전자",
//       "details": {
//         "secName": [
//           "新开普"
//         ],
//         "secCode": [
//           "300248"
//         ],
//         "categoryId": [
//           "010305"
//         ]
//       },
//       "analysisDetails": {
//         "topicKor": "현금흐름",
//         "summarizeTinyKor": "2024년 제1사분기 신카이푸전자의 재무 성과",
//         "summarizeLongKor": "2024년 제1사분기에 신카이푸전자는 투자 활동으로부터 -103,863,355.03위안의 순현금흐름을 보고하여, 작년 동기 대비 43.03% 감소했습니다.\n추가로, 재무 활동으로부터 -14,922,591.59위안의 순현금흐름을 보여, 작년 동기 대비 9,454,069.49위안 줄었습니다.\n회사는 현금 및 현금성자산의 순 감소액이 -206,630,391.31위안으로, 작년 동기 대비 19,797,059.27위안 줄었습니다.\n기간 종료 시점의 현금 및 현금성자산 잔액은 174,609,303.48위안으로, 작년 동기 대비 73,664,021.32위안 줄었습니다."
//       }
//     },
//     {
//       "id": "fd4fea1b-deb6-4365-99d4-96cc2f41eca8",
//       "dataDate": "2024-04-25T15:43:01Z",
//       "korName": "시안인터내셔널메디컬",
//       "details": {
//         "secName": [
//           "国际医学"
//         ],
//         "secCode": [
//           "000516"
//         ],
//         "categoryId": [
//           "0123"
//         ]
//       },
//       "analysisDetails": {
//         "topicKor": "독립이사 자격",
//         "summarizeTinyKor": "시안인터내셔널메디컬투자회사 독립이사 장바오퉁 임명",
//         "summarizeLongKor": "제13차 이사회의 후보인 장바오퉁은 독립이사 역할을 수행하기 위한 모든 자격을 갖추고 있습니다.\n이에는 관련 업무 경력 5년 이상, 이해관계 없음, 법령 위반 사항 없음 등이 포함됩니다.\n또한 교육 및 자격증 취득을 마치고 가족이 회사나 계열사에서 근무하지 않았습니다.\n장바오퉁은 증권 위반, 주식거래소 비판, 신뢰 위반 사항이 없는 깨끗한 이력을 갖고 있습니다.\n그는 일부 회사에서 독립이사로 활동하였으며 최대 6연임까지 가능합니다.\n장바오퉁은 자신의 진술의 정확성과 완전성을 약속합니다."
//       }
//     },
//     {
//       "id": "fe80fbc1-15e5-489a-aa3f-86421611c0c4",
//       "dataDate": "2024-04-25T15:31:00Z",
//       "korName": "천이인텔리전트",
//       "details": {
//         "secName": [
//           "辰奕智能"
//         ],
//         "secCode": [
//           "301578"
//         ],
//         "categoryId": [
//           "0117"
//         ]
//       },
//       "analysisDetails": {
//         "topicKor": "은행 신용 한도",
//         "summarizeTinyKor": "천이인텔리전트 기술 주식회사, 은행 신용 한도 신청 예정",
//         "summarizeLongKor": "천이인텔리전트 기술 주식회사는 최대 8억 위안의 은행 종합 신용 한도를 신청할 계획입니다.\n주주총회 승인 후 12개월간 유효한 이 신용 한도는 회전 방식으로 사용될 수 있습니다.\n회장인 후위칭 여사는 자금 조달 사항을 처리하며, 이 신용 한도는 자금 조달 금액과 동일하지 않습니다.\n구체적인 금액은 영업 자금 필요에 따라 결정될 것입니다.\n승인된 주주총회로부터의 권한 기간은 12개월입니다.\n회사는 이 조치가 재무 상태를 강화하고 영업 강도를 향상시키며 주주들에게 혜택을 줄 것으로 믿고 있습니다."
//       }
//     },
//     {
//       "id": "ffbbf0d5-36ed-498c-a9a4-ac8a3263aa90",
//       "dataDate": "2024-04-25T15:22:00Z",
//       "korName": "다캉농업",
//       "details": {
//         "secName": [
//           "鹏都农牧"
//         ],
//         "secCode": [
//           "002505"
//         ],
//         "categoryId": [
//           "0123"
//         ]
//       },
//       "analysisDetails": {
//         "topicKor": "감사위원회 보고서",
//         "summarizeTinyKor": "2023년 리안다 회계법인 성과에 대한 감사위원회 보고서",
//         "summarizeLongKor": "펑두 농업 및 축산업 주식회사의 감사위원회는 2023년 리안다 회계법인의 감사 업무 감독 업무에 대한 성과를 보고했습니다.\n리안다 회계법인은 2023년에 총 감사 수익액이 4억 8482만 2000위안으로, 감사 사업 수익이 4억 3662만 2000위안이며 증권 사업 수익이 1억 2550만 2200위안이었습니다.\n리안다는 다양한 산업의 30개 상장 기업을 대상으로 연례 보고서 감사 서비스를 제공했습니다.\n회사는 2023년에 리안다에게 금융 보고서 및 내부 통제 감사 서비스를 위탁했으며, 총 비용은 410만 위안이었습니다.\n감사위원회는 리안다와 철저한 의사 소통을 진행하였으며, 그들의 자격과 성과에 대해 확신을 가졌습니다.\n감사위원회는 연례 감사 업무를 감독하고, 2023년 연례 보고서 및 내부 통제 평가 보고서, 그리고 2024년 4월 24일에 다른 제안을 검토하고 승인했습니다.\n감사위원회는 회계법인의 검토 및 감독 역할을 효과적으로 수행했습니다."
//       }
//     },
//     {
//       "id": "fe48f7e7-a598-4f9c-bbd7-5bc046283f5a",
//       "dataDate": "2024-04-25T15:22:00Z",
//       "korName": "다캉농업",
//       "details": {
//         "secName": [
//           "鹏都农牧"
//         ],
//         "secCode": [
//           "002505"
//         ],
//         "categoryId": [
//           "0117"
//         ]
//       },
//       "analysisDetails": {
//         "topicKor": "관련 당사자 거래",
//         "summarizeTinyKor": "펑두 농업 및 축산 회사의 관련 당사자 거래",
//         "summarizeLongKor": "펑두 농업 및 축산 회사는 2024년에 관련 당사자와의 일일 거래를 예정하며, 예상 총액은 855억 위안입니다.\n이에는 관련 당사자에게 상품을 판매하고 서비스를 제공하는 데 60억 위안, 관련 당사자로부터 상품 및 서비스를 구매하는 데 295억 위안, 자금 차입 거래에 500억 위안이 포함됩니다.\n2023년에 회사와 관련 당사자 간의 일일 거래 총액은 377,323,600위안이었습니다.\n이는 관련 당사자에게 상품 및 서비스를 95,776,500위안에 판매하고 관련 당사자로부터 283,629,800위안에 구매한 것을 포함합니다.\n회사의 2023년 거래액은 실제 수치와 상당히 다를 것으로 예상되지만, 이는 일상 영업에 영향을 미치지 않을 것입니다."
//       }
//     },
//     {
//       "id": "fe18eb50-737b-4521-a08b-a05786c75970",
//       "dataDate": "2024-04-25T15:22:00Z",
//       "korName": "중톈데코레이션",
//       "details": {
//         "secName": [
//           "中天精装"
//         ],
//         "secCode": [
//           "002989"
//         ],
//         "categoryId": [
//           "0123"
//         ]
//       },
//       "analysisDetails": {
//         "topicKor": "실적 브리핑",
//         "summarizeTinyKor": "2024년 5월 8일 중톈진주장 회사 2023년 실적 브리핑",
//         "summarizeLongKor": "중톈진주장 회사는 2024년 5월 8일에 2023년 실적 브리핑을 개최할 예정입니다.\n회사 이사회는 2024년 4월 25일 발표에서 공개된 정보의 정확성과 완전성을 보증했습니다.\n이 브리핑에는 회사 회장 인창지안, 총괄 매니저 장안, 재무 이사 마오아이준이 참석할 예정입니다.\n투자자들은 Panorama.com을 통해 원격으로 브리핑에 참여할 수 있습니다.\n사전 질문을 제출하려는 투자자들은 2024년 5월 7일 이전에 http://ir.p5w.net/zj/를 방문할 수 있습니다."
//       }
//     },
//     {
//       "id": "fe0dda20-bd7d-440f-88d3-5e421167326a",
//       "dataDate": "2024-04-25T15:22:00Z",
//       "korName": "산시에너지투자",
//       "details": {
//         "secName": [
//           "陕西能源"
//         ],
//         "secCode": [
//           "001286"
//         ],
//         "categoryId": [
//           "0123"
//         ]
//       },
//       "analysisDetails": {
//         "topicKor": "임명",
//         "summarizeTinyKor": "산시에너지투자 주식회사 법무총괄 및 최고책임자 임명",
//         "summarizeLongKor": "산시에너지투자 주식회사는 2024년 4월 25일에 제14차 이사회를 개최했습니다.\n이사회는 2024년 4월 26일에 법무총괄 및 최고책임자 임명안을 승인했으며, 안이 씨를 해당 직책에 임명했습니다.\n안이 씨의 임기는 이사회 승인일부터 제2차 이사회 임기만료일까지입니다.\n발표일 기준으로 안이 씨는 회사 주식을 보유하고 있지 않으며, 회사의 중요 주주, 이사 또는 고위 경영진과 관계가 없습니다.\n안이 씨는 법원 또는 규제 기관으로부터의 조사나 처벌 내역이 없으며, 모든 법적 및 규제 요건 및 회사 조직 규정을 준수합니다."
//       }
//     },
//     {
//       "id": "fc98ab09-c039-4e20-8b4a-2c65b1d38f9e",
//       "dataDate": "2024-04-25T15:22:00Z",
//       "korName": "화샹전자",
//       "details": {
//         "secName": [
//           "宁波华翔"
//         ],
//         "secCode": [
//           "002048"
//         ],
//         "categoryId": [
//           "0113"
//         ]
//       },
//       "analysisDetails": {
//         "topicKor": "순이익, 배당, 주식 자본",
//         "summarizeTinyKor": "2023년 닝보 화샹전자 주식회사의 재무 하이라이트",
//         "summarizeLongKor": "2023년, 닝보 화샹전자 주식회사는 모회사의 주주에게 귀속된 1,028,214,000위안의 순이익을 보고했으며, 모회사는 -590,938,700위안의 순이익을 달성했습니다.\n2023년 12월 31일 기준으로 회사의 연결 재무제표 유보금은 619,512,510위안이며, 모회사의 유보금은 349,740,160위안입니다.\n2023년 투자자들에게 제공된 이익은 349,740,160위안이었습니다.\n회사의 총 주식 자본은 814,095,508주이며, 10주당 6.32위안의 현금 배당을 제공하여 총 배당액은 514,342,533.10위안이었습니다.\n남은 유보금은 2,983,059,099.80위안이었습니다.\n현금 배당은 연결 재무제표에 기재된 일반 주주에게 귀속된 순이익의 50.02%를 나타냅니다."
//       }
//     },
//     {
//       "id": "ff2ef38c-476a-4bb5-8266-c5340e3d83a8",
//       "dataDate": "2024-04-25T14:49:02Z",
//       "korName": "GCL에너지기술",
//       "details": {
//         "secName": [
//           "协鑫能科"
//         ],
//         "secCode": [
//           "002015"
//         ],
//         "categoryId": [
//           "0123"
//         ]
//       },
//       "analysisDetails": {
//         "topicKor": "회계 정책 변경",
//         "summarizeTinyKor": "GCL 에너지 기술 주식회사의 회계 정책 변경이 주는 영향",
//         "summarizeLongKor": "2023년 10월 25일, 재무부는 기업 회계 기준 해석 제17호를 발표했습니다.\n2024년 1월 1일, GCL 에너지 기술 주식회사가 이 표준을 시행하기 시작했습니다.\n2024년 4월 26일, 회사 이사회는 회계 정책 변경을 발표했습니다.\n이 표준은 유동부채와 비유동부채의 분류, 공급업체 자금 조달 계약의 공시, 판매 및 임대 백 트랜잭션의 회계 처리를 다룹니다.\n회계 정책 변경은 회사의 재무 상태, 영업 결과 및 현금 흐름에 중요한 영향을 미치지 않았습니다."
//       }
//     },
//     {
//       "id": "ffa718b3-2b3c-4ac8-89df-ab992520cce8",
//       "dataDate": "2024-04-25T13:28:00Z",
//       "korName": "주성전기",
//       "details": {
//         "secName": [
//           "久盛电气"
//         ],
//         "secCode": [
//           "301082"
//         ],
//         "categoryId": [
//           "01239901"
//         ]
//       },
//       "analysisDetails": {
//         "topicKor": "결정, 2023년 연례 보고서, 재무제표, 배당, 자본 증가, 감사 대행사, 신용 한도, 운영 자본, 모금된 자금, 내부 통제, 이사 보수 계획",
//         "summarizeTinyKor": "2024년 4월 25일 주성전기 주식회사 제5차 이사회 제14차 회의에서 내린 결정",
//         "summarizeLongKor": "회의 중에 여러 중요한 결정이 내려졌습니다.\n2023년 총괄 경영자 업무 보고서, 2023년 이사회 업무 보고서, 2023년 연례 보고서의 전문 및 요약, 그리고 2023년 재무제표 보고서가 모두 찬성 9표, 기권 0표, 반대 0표로 승인되었습니다.\n또한 회사는 모든 주주에게 주당 1.80위안의 현금 배당을 결정하여 총 29,096,893.80위안을 지급하기로 했습니다.\n또한 모든 주주에게 10주당 4주를 증가시켜 총 64,659,764주를 발행하기로 결정했습니다.\n또한 리신 회계사 사무소가 회사의 2024년 감사 대행사로 재고용되었으며, 회사는 은행으로부터 종합 신용 한도를 신청하고 자회사의 보증 한도를 추정하며, 초과 모금된 자금의 일부를 영구적으로 운영 자본을 보충하기 위해 사용하기로 결정했습니다.\n또한 2023년 모금된 자금의 예금 및 사용에 대한 특별 보고서, 2023년 내부 통제 자가평가 보고서, 그리고 2024년 회사 이사 보수(수당) 계획을 2023년 주주 연례 총회에 제출하여 심의하기로 결정했습니다."
//       }
//     },
//     {
//       "id": "ff2ead32-3e83-469b-9814-8563783c6893",
//       "dataDate": "2024-04-25T13:28:00Z",
//       "korName": "주성전기",
//       "details": {
//         "secName": [
//           "久盛电气"
//         ],
//         "secCode": [
//           "301082"
//         ],
//         "categoryId": [
//           "0123"
//         ]
//       },
//       "analysisDetails": {
//         "topicKor": "실적 브리핑",
//         "summarizeTinyKor": "주성전기 주식회사 2023년 실적 브리핑 세부 내용",
//         "summarizeLongKor": "주성전기 주식회사는 2024년 5월 8일에 2023년 실적 브리핑을 Value Online(www.ir-online.cn)에서 오후 3시부터 4시까지 인터랙티브 온라인 형식으로 진행할 예정입니다.\n회사는 2024년 4월 26일 주초 정보 네트워크에 2023년 연례 보고서 전문 및 요약을 공개했습니다.\n투자자들은 2024년 5월 8일 미팅 전에 질문을 제출하기 위해 https.//eseb.cn/1dIxmIa3HKE를 방문하거나 위챗 미니 프로그램 코드를 스캔할 것을 권장합니다.\n브리핑은 회사의 운영 실적, 개발 전략 및 투자자 질의에 대해 다룰 예정입니다.\n주요 참석자로는 회장 겸 총괄 매니저 장지안화, 부총괄 매니저 겸 이사회 비서 진싱종, 재무 이사 서장빈, 독립 이사 완팡이 포함됩니다.\n투자자들은 웹사이트를 통해 또는 위챗 미니 프로그램 코드를 스캔하여 인터랙티브 토론에 참여할 수 있습니다.\n문의 사항은 진싱종에게 0572-2228172 또는 jxz@teccable.com으로 연락하십시오. 실적 브리핑 세부 내용은 Value Online(www.ir-online.cn) 또는 이동 앱에서 확인할 수 있습니다."
//       }
//     },
//     {
//       "id": "fd9c7893-5d93-4923-bdbf-72af48619f3c",
//       "dataDate": "2024-04-25T13:28:00Z",
//       "korName": "하오상하오정보",
//       "details": {
//         "secName": [
//           "好上好"
//         ],
//         "secCode": [
//           "001298"
//         ],
//         "categoryId": [
//           "01239901"
//         ]
//       },
//       "analysisDetails": {
//         "topicKor": "이사회 의사결정",
//         "summarizeTinyKor": "회사 이사회 의사결정 요약",
//         "summarizeLongKor": "회사 이사회는 여러 가지 중요한 결정을 내렸습니다.\n이사회의 두 번째 이사회 비독립 이사 후보로 이진밍 씨를 임기가 만료될 때까지 선출하기로 결정하고, 2024년 고위 경영진 및 이사 보수 계획을 승인하고, 등록 자본금을 변경하고, 산업 및 상업 등록을 처리했습니다.\n또한, 계열사의 자본 증가, 은행 신용 한도, 외부 보증액, 운영 자금의 유휴 자금 활용, 2023년 자산 가치 손상 준비에 대한 결정도 내렸습니다."
//       }
//     },
//     {
//       "id": "ffb09a92-87cb-43b5-82ae-fdb7994f914b",
//       "dataDate": "2024-04-25T13:10:01Z",
//       "korName": "PKU헬스케어",
//       "details": {
//         "secName": [
//           "北大医药"
//         ],
//         "secCode": [
//           "000788"
//         ],
//         "categoryId": [
//           "0131"
//         ]
//       },
//       "analysisDetails": {
//         "topicKor": "재무 회의 요약",
//         "summarizeTinyKor": "중국 베이징 대학 제약 주식회사 독립 이사회 회의 요약",
//         "summarizeLongKor": "중국 베이징 대학 제약 주식회사는 10차 이사회 독립 이사들의 제3차 특별 회의에서 다양한 사항을 논의했습니다.\n회의 중에는 11차 이사회 이사 선출 및 후보에 대한 제안이 독립 및 비독립 이사들을 포함하여 만장일치로 지지를 받았습니다.\n2024년 4월 26일에 개최된 회의에는 독립 이사들 Zeng Jianguang, Jin Jingyu, Tao Jianhong이 참석했습니다.\n또한, 회사는 2023년 이익 분배 계획, 내부 통제 평가 보고서, 2024년 재무 제안 등 다양한 안건에 대해 만장일치로 승인을 받았습니다."
//       }
//     },
//     {
//       "id": "fcd8b04c-39d1-40e4-b6a7-cdc6ea4a249c",
//       "dataDate": "2024-04-25T13:10:01Z",
//       "korName": "탕위안전기",
//       "details": {
//         "secName": [
//           "唐源电气"
//         ],
//         "secCode": [
//           "300789"
//         ],
//         "categoryId": [
//           "0123"
//         ]
//       },
//       "analysisDetails": {
//         "topicKor": "자본 배분 계획",
//         "summarizeTinyKor": "기업 공고 및 자본 배분 계획",
//         "summarizeLongKor": "2022년 5월 11일에 회사는 첫 번째 제한 주식의 배당일이 2022년 5월 13일임을 발표했으며, 총 659,340주가 부여되었고, 81명이 배당받았습니다.\n2023년 5월 24일에 회사는 두 번째 제한 주식의 배당일이 2023년 5월 25일임을 발표했으며, 총 702,000주가 부여되었고, 80명이 배당받았습니다.\n또한, 회사는 2023년 4월 25일에 2021년 제한 주식 인센티브 계획의 부여 가격 조정 제안을 승인했습니다.\n연례 자본 배분 계획에는 주당 3.25위안의 현금 배당과 총 주식 자본 84,130,306주를 기준으로 자본 준비금에서 10주당 3주의 양도가 포함됩니다.\n또한, 2024년 4월 24일에 회사는 2021년 제한 주식 인센티브 계획 및 제1 배당 기간의 배당 조건 및 제2 배당 기간의 예비 배당을 검토하고 승인했습니다."
//       }
//     },
//     {
//       "id": "fd1fac8c-e146-4051-b2c9-b0b548641fb5",
//       "dataDate": "2024-04-25T13:01:00Z",
//       "korName": "하한쒀화통용접",
//       "details": {
//         "secName": [
//           "哈焊华通"
//         ],
//         "secCode": [
//           "301137"
//         ],
//         "categoryId": [
//           "0123"
//         ]
//       },
//       "analysisDetails": {
//         "topicKor": "연례 보고서 공개",
//         "summarizeTinyKor": "하얼빈 용접 연구소 화통(창조우) 용접 주식회사 회의 및 연례 보고서 공개",
//         "summarizeLongKor": "하얼빈 용접 연구소 화통(창조우) 용접 주식회사는 2024년 4월 24일에 제4기 이사회 제10차 회의와 제4기 감사위원회 제9차 회의를 개최했습니다.\n회의 중에 회사는 2023년 연례 보고서의 전문과 요약안에 대한 제안을 검토했고 승인했습니다.\n이어서 2024년 4월 26일에 회사는 중국증권감독위원회가 지정한 GEM 정보공시 웹사이트인 주초 정보 네트워크에 2023년 연례 보고서와 요약을 공개했습니다."
//       }
//     },
//     {
//       "id": "fdbf3dc8-0a9b-4397-a4ac-b5d7b4db8680",
//       "dataDate": "2024-04-25T12:51:59Z",
//       "korName": "동아아교",
//       "details": {
//         "secName": [
//           "东阿阿胶"
//         ],
//         "secCode": [
//           "000423"
//         ],
//         "categoryId": [
//           "01239910"
//         ]
//       },
//       "analysisDetails": {
//         "topicKor": "감사위원회 회의",
//         "summarizeTinyKor": "동아아교 주식회사 제10차 감사위원회 제15차 회의 요약",
//         "summarizeLongKor": "2024년 4월 24일에 열린 동아아교 주식회사 제10차 감사위원회 제15차 회의는 4월 21일 이메일 통지를 받은 후 개최되었습니다.\n모든 다섯 명의 감사위원이 회의에 참석했습니다.\n회의는 2024년 제1분기 보고서를 찬성 5표, 반대 0표, 기권 0표로 승인했습니다.\n또한, 주요거래 당사자 거래 제안과 2024년 중간 배당안이 각각 찬성 5표, 반대 0표, 기권 0표로 승인되었습니다."
//       }
//     },
//     {
//       "id": "fda7409d-2671-4642-844e-04b3d32c8dfd",
//       "dataDate": "2024-04-25T12:51:59Z",
//       "korName": "밍파이주얼리",
//       "details": {
//         "secName": [
//           "明牌珠宝"
//         ],
//         "secCode": [
//           "002574"
//         ],
//         "categoryId": [
//           "0117"
//         ]
//       },
//       "analysisDetails": {
//         "topicKor": "자금 대출",
//         "summarizeTinyKor": "밍파이주얼리의 자금 대출 제안 세부 내용",
//         "summarizeLongKor": "밍파이주얼리는 지배주주인 썬문그룹으로부터 최대 1억 위안의 자금 대출을 받기로 계획하고 있습니다.\n이는 회사 총 주식 자본의 31.17%에 해당합니다.\n썬문그룹은 700만 위안의 자본금을 보유하고 있으며 회사의 164,591,494주를 소유하고 있어 지배주주입니다.\n1년 기간의 대출은 회사의 사업 발전을 지원할 것입니다.\n자금 대출 점유료는 월별 자금 점유 일수 및 인민폐 1년 기준 대출 기준 금리 등의 요소에 따라 결정됩니다.\n2024년 4월 24일에 열린 제5차 이사회 제17차 회의에서 거래가 승인되었습니다.\n독립 이사들은 자금 사용을 지지하며 회사의 태양광 사업 및 주주들에게 유익하다고 판단했습니다.\n썬문그룹에 의한 자금 지원은 회사의 신규 사업 및 모든 주주들의 이익을 위한 지원으로 간주됩니다."
//       }
//     },
//     {
//       "id": "fd9024d3-c9f2-4d7f-983f-572612c69db5",
//       "dataDate": "2024-04-25T12:51:59Z",
//       "korName": "밍파이주얼리",
//       "details": {
//         "secName": [
//           "明牌珠宝"
//         ],
//         "secCode": [
//           "002574"
//         ],
//         "categoryId": [
//           "0119"
//         ]
//       },
//       "analysisDetails": {
//         "topicKor": "주주총회",
//         "summarizeTinyKor": "밍파이주얼리 주식회사 2023년 주주총회 안내",
//         "summarizeLongKor": "밍파이주얼리 주식회사는 2024년 5월 17일 오후 2시에 절강성시(浙江省) 샤오싱시(绍兴市) 케차오구(柯桥区) 징쑤이로(京水路) 1016호에서 2023년 주주총회를 개최합니다.\n이 회의는 심천 증권 거래소 거래 시스템 및 인터넷 투표 시스템을 통해 온라인 투표 플랫폼을 제공할 것입니다.\n회의의 주식 등록일은 2024년 5월 10일입니다.\n2024년 5월 10일 오후 3시 이후 중국증권예탁결제(中国证券登记结算有限责任公司) 심천지점에 등록된 주주만 참석 자격이 있습니다.\n이 회의는 회사의 2023년 이사회 업무 보고서, 재무 최종 보고서, 이익 분배 계획 등을 검토할 것이며, 다양한 회사 시스템 및 2024년 감사 기관 재선임에 대한 제안을 논의할 것입니다.\n주주는 심천 증권 거래소 거래 시스템 및 인터넷 투표 시스템을 통해 투표에 참여할 수 있습니다.\n회의 등록 시간은 2024년 5월 13일 밍파이주얼리 주식회사 증권사업부에서 진행됩니다.\n자세한 정보는 0575-84025665로 연락하십시오. 투표 코드는 362574이며 명파이 투표로 알려져 있습니다."
//       }
//     },
//     {
//       "id": "fe017a81-5d53-4377-9b83-39b0616db7fa",
//       "dataDate": "2024-04-25T12:31:02Z",
//       "korName": "제언크리에이티브디자인",
//       "details": {
//         "secName": [
//           "杰恩设计"
//         ],
//         "secCode": [
//           "300668"
//         ],
//         "categoryId": [
//           "0117"
//         ]
//       },
//       "analysisDetails": {
//         "topicKor": "신용 한도 신청",
//         "summarizeTinyKor": "지인 디자인 회사 2024년 신용 한도 신청",
//         "summarizeLongKor": "2024년에 지인 디자인 회사는 은행에 6억 위안을 초과하지 않는 종합 신용 한도를 신청할 계획입니다.\n1년의 신용 기간이 있습니다.\n구체적인 신용 한도는 회사와 신용 은행 간의 공식 협정에 따라 결정될 것입니다.\n회사의 회장인 장펑 씨는 회사를 대신하여 모든 신용 한도 관련 계약에 서명할 권한이 있으며, 회사는 관련 법적 및 재무 책임을 부담합니다."
//       }
//     },
//     {
//       "id": "fce9ee29-8041-42ae-9650-ee2848b53a76",
//       "dataDate": "2024-04-25T12:16:01Z",
//       "korName": "성항해운",
//       "details": {
//         "secName": [
//           "盛航股份"
//         ],
//         "secCode": [
//           "001205"
//         ],
//         "categoryId": [
//           "0131"
//         ]
//       },
//       "analysisDetails": {
//         "topicKor": "전환사채",
//         "summarizeTinyKor": "2023년 난징 성항해운 주식회사의 독립이사 보고서",
//         "summarizeLongKor": "2023년 난징 성항해운 주식회사의 독립이사 보고서는 리우 창이 작성했습니다.\n보고 기간 동안 리우 창은 이사회 회의 5회와 주주 총회 1회에 참석했으며 감사위원회 회의 3회에도 참석했습니다.\n2023년 11월 30일 제4차 이사회 둘째 회의에서 리우 창은 독립적인 의견을 표명하고 전환사채를 발행하여 불특정 대상으로부터 자금을 모금하기 위한 특별계좌를 개설하는 제안에 동의했습니다.\n2023년 12월 1일 제4차 이사회 셋째 회의와 2023년 12월 15일 제4차 이사회 넷째 회의에서도 리우 창은 회사의 전환사채 계획에 대한 제안에 동의하고 독립적인 의견을 표명했습니다.\n2023년 12월 20일 제4차 이사회 다섯 번째 회의에서 리우 창은 2023년 일부 일일 관련 거래의 예상 금액을 증가시키는 제안에 동의했습니다."
//       }
//     },
//     {
//       "id": "fdf29e98-b1ea-4293-b2ca-9192d7cde150",
//       "dataDate": "2024-04-25T11:37:01Z",
//       "korName": "아오웨이통신",
//       "details": {
//         "secName": [
//           "奥维通信"
//         ],
//         "secCode": [
//           "002231"
//         ],
//         "categoryId": [
//           "0119"
//         ]
//       },
//       "analysisDetails": {
//         "topicKor": "주주총회",
//         "summarizeTinyKor": "아오웨이통신 2023년 주주총회",
//         "summarizeLongKor": "아오웨이통신(주식 코드. 002231)은 2023년 주주총회를 2024년 5월 24일 오후 2시 30분에 신양시 후난신구 가오거리 6번지 회사 5층 회의실에서 개최할 예정입니다.\n이번 총회에서는 2023년 연례보고서, 이익배분계획, 재무결산보고서, 이사회 업무보고서, 감사위원회 업무보고서, 감사기관 재선임, 이사 보수평가계획, 감사 보수평가계획, 회사 정관 개정안 등 다양한 안건이 검토될 예정입니다.\n특별결의안으로는 다음 3년간의 주주반환계획과 회사 정관 개정안이 포함되어 있습니다.\n총회는 현장 투표와 온라인 투표를 병행하며, 온라인 투표는 2024년 5월 24일 특정 시간에 진행될 예정입니다.\n아오웨이통신의 투표 코드는 362231이며, 투표 절차는 아오웨이 투표로 알려져 있습니다.\n주주총회의 안건은 비누적 투표를 채택하며, 찬성, 반대, 기권의 선택지가 제공됩니다.\n복수투표의 경우 첫 번째 유효투표가 우선됩니다.\n심천 증권 거래소 거래 시스템을 통한 투표는 2024년 5월 24일 특정 시간에 이루어지며, 심천 증권 거래소 인터넷 시스템을 통한 투표는 동일한 날 오전 9시 15분부터 오후 3시까지 진행될 예정입니다.\n총회용 위임장은 서명일부터 회의 종료까지 유효합니다.\n2023년 연례보고서와 이익배분계획을 포함한 안건에 대한 투표는 찬성, 반대, 기권의 선택지가 제공되며, 법인은 공식 인감과 법인 대표 서명을 날인해야 합니다.\n총회 안건은 일반 안건을 제외하고 다양한 측면을 다루며, 단일 투표 선택지를 제공합니다.\n찬성, 반대, 기권 중 하나를 선택하실 수 있습니다."
//       }
//     },
//     {
//       "id": "fdd731b9-1d98-4b39-b573-af049eecf402",
//       "dataDate": "2024-04-25T11:37:01Z",
//       "korName": "이밍시야제약",
//       "details": {
//         "secName": [
//           "易明医药"
//         ],
//         "secCode": [
//           "002826"
//         ],
//         "categoryId": [
//           "0131"
//         ]
//       },
//       "analysisDetails": {
//         "topicKor": "주주총회",
//         "summarizeTinyKor": "티베트 이밍시야제약, 중소 투자자를 위한 별도 투표 집계 관리 조치 - 티베트 이밍시야제약기술 주식회사",
//         "summarizeLongKor": "티베트 이밍시야제약기술 주식회사는 정관을 수립했습니다.\n회사 주식 5% 이상을 보유한 주주는 중소 투자자가 아닌 투자자로 정의됩니다.\n중소 투자자에 영향을 미치는 주요 사항에는 이사 임명 및 해임, 고위 경영진, 보수, 회계사 사무소, 회계 정책, 감사 의견, 내부 통제 평가, 현금 배당 정책, 주요 자산 재편 등이 포함됩니다.\n주주총회는 현장 및 온라인 투표를 사용합니다.\n중소 투자자를 위한 별도 투표 집계에 대한 구체적인 규정이 있습니다.\n회의록과 의결안은 중소 투자자에 영향을 미치는 주요 사항을 명확히 다루어야 합니다.\n통지와 의결안은 별도 투표 집계 사항, 투표 방법, 중소 투자자 참석 사항을 상세히 기술해야 합니다.\n법률 자문은 별도 투표 집계에 대한 변호사의 견해를 포함해야 합니다.\n이 규정의 개정 및 해석은 주주 승인 후 효력을 발휘합니다."
//       }
//     },
//     {
//       "id": "fdcf31ea-634c-4c3d-9f3c-01a1808959c2",
//       "dataDate": "2024-04-25T11:34:02Z",
//       "korName": "퉁관동박",
//       "details": {
//         "secName": [
//           "铜冠铜箔"
//         ],
//         "secCode": [
//           "301217"
//         ],
//         "categoryId": [
//           "0123"
//         ]
//       },
//       "analysisDetails": {
//         "topicKor": "매출",
//         "summarizeTinyKor": "안후이 퉁관동박 구리 호일 그룹 주식회사의 재무 개요",
//         "summarizeLongKor": "2022년, 안후이 퉁관동박 구리 호일 그룹 주식회사는 총 매출액이 2,662,877,400 위안을 기록했습니다.\n감사 사업 매출은 2,540,190,700 위안이며, 증권 및 선물 사업 매출은 1,351,681,300 위안에 이릅니다.\n총 연례 보고서 감사 사업은 428,880,600 위안을 차지했습니다.\n2023년을 전망할 때, 감사 수수료는 600,000 위안으로 설정되었으며, 연례 보고서 감사 수수료에는 500,000 위안, 내부 통제 감사 수수료에는 100,000 위안이 할당되었습니다.\n2024년 감사 기관은 롱청 회계사법인이며, 회사 경영진과 롱청 회계사법인 간의 협상을 거친 주주총회를 통해 감사 기관 수수료가 결정될 것입니다.\n회사 이사회는 2024년 감사 기관으로 롱청 회계사법인을 재고용하는 제안을 2024년 4월 24일에 8표로 승인했으며, 이 제안은 2023년 연례 주주총회에서 검토될 것입니다."
//       }
//     },
//     {
//       "id": "fc9a0bf7-299d-4964-8166-c8f1b5688a17",
//       "dataDate": "2024-04-25T11:34:02Z",
//       "korName": "신시왕유업",
//       "details": {
//         "secName": [
//           "新乳业"
//         ],
//         "secCode": [
//           "002946"
//         ],
//         "categoryId": [
//           "0113"
//         ]
//       },
//       "analysisDetails": {
//         "topicKor": "주식 자본, 제한 주식, 인센티브 계획",
//         "summarizeTinyKor": "신시왕유업의 주식 자본과 제한 주식 개요",
//         "summarizeLongKor": "2024년 4월 23일, 신시왕유업의 총 주식 자본은 865,712,801주였으며, 5,040,000주의 제한 주식을 다시 매입하고 취소한 후 860,672,801주로 감소했습니다.\n2020년 제한 주식 인센티브 계획에 따른 잔여 제한 주식은 504만 주이며, 이 중 29명의 인센티브 대상자를 위한 5,028,000주와 1명 퇴직한 직원을 위한 12,000주가 포함됩니다.\n해당 계획은 2021년 5월 12일에 상장된 13.56만 주의 제한 주식을 초기 부여했습니다.\n2022년에 이사회는 4명의 인센티브 대상자를 위해 47만 주의 제한 주식을 다시 매입하고 취소하고, 34명의 인센티브 대상자를 위해 3,876만 주의 제한을 해제하고, 매입 가격을 주당 9.21위안으로 조정했습니다."
//       }
//     },
//     {
//       "id": "ff0d4c92-6db8-4575-bd01-a387f4f09f50",
//       "dataDate": "2024-04-25T11:16:00Z",
//       "korName": "지청전자",
//       "details": {
//         "secName": [
//           "积成电子"
//         ],
//         "secCode": [
//           "002339"
//         ],
//         "categoryId": [
//           "0123"
//         ]
//       },
//       "analysisDetails": {
//         "topicKor": "자산손상충당",
//         "summarizeTinyKor": "2023년 지청전자의 자산손상충당 공시",
//         "summarizeLongKor": "2023년 지청전자는 총 3억 9,826만 위안의 자산손상충당을 발표했습니다.\n특히 매출채권, 재고자산, 장기지분투자, 기타채권, 계약자산, 매출채권유동화, 무기명어음, 장기매출채권에 대한 충당이 상세히 안내되었으며, 이는 회사의 순이익에 영향을 미쳤습니다.\n충당기간은 2023년 1월 1일부터 12월 31일까지이며, 이에 대해 이사회, 감사위원회, 감사위원회, 회계사가 검토를 거쳤으며, 이로써 2023년 회사의 순이익과 주주자본이 감소했습니다."
//       }
//     },
//     {
//       "id": "fd5cba06-8877-4f76-8888-05c8488ec5b3",
//       "dataDate": "2024-04-25T11:16:00Z",
//       "korName": "스촨신에너지",
//       "details": {
//         "secName": [
//           "川能动力"
//         ],
//         "secCode": [
//           "000155"
//         ],
//         "categoryId": [
//           "0107"
//         ]
//       },
//       "analysisDetails": {
//         "topicKor": "자산 매입 및 자금 조달",
//         "summarizeTinyKor": "중요 정보: 스촨 에너지 파워 컴퍼니 (주식 코드, 000155)",
//         "summarizeLongKor": "스촨 에너지 파워 컴퍼니는 중국 증권 감독 위원회로부터 자산 매입 및 자금 조달을 위해 주식 발행 승인을 받았습니다.\n관련 거래에서 모든 관련 당사자는 정확한 정보 제공, 법률 준수 및 법적 책임을 다하는 데 헌신하고 있습니다.\n회사와 경영진은 정보의 정확성과 규정 준수를 보장하기로 약속했습니다.\n최근 규제 당국으로부터 벌금이 부과된 사례는 없으며, 회사의 주요 경영진은 깨끗한 기록을 가지고 있습니다.\n동방전기도 투명성과 법적 준수를 약속합니다."
//       }
//     },
//     {
//       "id": "fcecd138-c83f-4dad-827e-e35b3fafc518",
//       "dataDate": "2024-04-25T11:16:00Z",
//       "korName": "화리테크",
//       "details": {
//         "secName": [
//           "华立科技"
//         ],
//         "secCode": [
//           "301011"
//         ],
//         "categoryId": [
//           "010305"
//         ]
//       },
//       "analysisDetails": {
//         "topicKor": "재무 성과",
//         "summarizeTinyKor": "2024년 제1사분기 화리기술의 재무 하이라이트",
//         "summarizeLongKor": "2024년 제1사분기에 화리기술은 순이익 19,976,197.44위안, 총포괄이익 20,013,470.77위안, 주당순이익 0.14위안, 영업활동으로 인한 현금유입 224,474,154.88위안, 영업활동으로 인한 현금유출 206,635,797.15위안, 현금 및 현금성자산의 순 증가액 -31,788,906.44위안, 기간 종료시 현금 및 현금성자산 잔액 123,653,971.85위안을 보고했습니다.\n회사는 총 유동자산 731,275,630.89위안, 총 비유동자산 440,739,630.07위안, 총 자산 1,172,015,260.96위안을 보유했습니다.\n총 유동부채는 396,463,477.22위안, 총 비유동부채는 64,924,033.80위안, 총 부채는 461,387,511.02위안, 총 자본은 710,627,749.94위안이었습니다.\n총 영업이익은 215,233,546.05위안, 총 영업비용은 188,302,958.93위안이며, 영업이익은 24,185,519.95위안이었습니다."
//       }
//     },
//     {
//       "id": "fedd5ba8-5827-4638-82e5-34402af4e65b",
//       "dataDate": "2024-04-25T10:49:00Z",
//       "korName": "아오푸광전",
//       "details": {
//         "secName": [
//           "奥普光电"
//         ],
//         "secCode": [
//           "002338"
//         ],
//         "categoryId": [
//           "0119"
//         ]
//       },
//       "analysisDetails": {
//         "topicKor": "2023년 주주총회",
//         "summarizeTinyKor": "AOP 옵토일렉트로닉스 주식회사의 2023년 주주총회 정보",
//         "summarizeLongKor": "AOP 옵토일렉트로닉스 주식회사(주식 코드. 002338)가 2023년 주주총회 세부 내용을 공개했습니다.\n회의는 2024년 5월 22일 오후 2시에 창춘 경제기술개발구의 회사 3층 회의실(영커우로 588번지)에서 예정되어 있습니다.\n회의 안건에는 2023년 재무 최종 보고서, 이익 분배 계획, 2023년 연례 보고서, 2024년 재무 예산, 2024년 이사 및 감사의 보수 계획 등이 포함되어 있습니다.\n주목할 만한 제안으로는 2023년 일일 관련 당사자 거래 금액 확인 및 2024년 추정액, 회사 정관 개정, 소액 신속 자금 조달을 위한 이사회 승인 등이 있습니다.\n주주는 현장 및 온라인으로 투표할 수 있으며, 온라인 투표는 2024년 5월 22일에 가능합니다.\n회의 세부 사항은 중국증권신문, 증권시간, 상해증권보, 주초정보망에 게시될 예정입니다."
//       }
//     },
//     {
//       "id": "fd7841b5-de45-4a07-8dc1-3cc8071d57ee",
//       "dataDate": "2024-04-25T10:37:04Z",
//       "korName": "타이안탕제약",
//       "details": {
//         "secName": [
//           "*ST太安"
//         ],
//         "secCode": [
//           "002433"
//         ],
//         "categoryId": [
//           "0121"
//         ]
//       },
//       "analysisDetails": {
//         "topicKor": "상장 폐지 위험",
//         "summarizeTinyKor": "타이안탕제약(*ST타이안) 주식 가격 하락 경보",
//         "summarizeLongKor": "2024년 4월 23일, 4월 24일 및 4월 25일 세 연속 거래일 동안 타이안탕제약(*ST타이안)의 주식 거래 가격이 누적 12% 이상 하락하여, 심천 증권 거래소 규정에 따라 주식 거래에서 이상한 변동을 유발했습니다.\n회사의 주식은 액면 가치 아래로 거래되어 12개 연속 거래일 동안 종가가 1위안 미만으로 유지되어 상장 폐지 위험에 직면하고 있습니다."
//       }
//     },
//     {
//       "id": "fc846c00-9846-4493-b827-03ce8d450506",
//       "dataDate": "2024-04-25T10:37:04Z",
//       "korName": "루이신테크",
//       "details": {
//         "secName": [
//           "锐新科技"
//         ],
//         "secCode": [
//           "300828"
//         ],
//         "categoryId": [
//           "0129"
//         ]
//       },
//       "analysisDetails": {
//         "topicKor": "등록 자본금",
//         "summarizeTinyKor": "루이신테크의 등록 자본금",
//         "summarizeLongKor": "루이신테크는 1억 6,659.48만 위안의 등록 자본금을 보유하고 있습니다."
//       }
//     },
//     {
//       "id": "ff2f7079-97dc-4e87-b853-ce500112f771",
//       "dataDate": "2024-04-24T10:22:00Z",
//       "korName": "워아이워자",
//       "details": {
//         "secName": [
//           "我爱我家"
//         ],
//         "secCode": [
//           "000560"
//         ],
//         "categoryId": [
//           "0123"
//         ]
//       },
//       "analysisDetails": {
//         "topicKor": "회계 정책 변경",
//         "summarizeTinyKor": "워아이워자 홀딩 그룹 주식회사 회계 정책 변경 발표",
//         "summarizeLongKor": "워아이워자 홀딩 그룹 주식회사 (주식 코드. 000560)은 재무부의 2022년 제31호 '기업회계기준 해석 16'에 기초하여 회계 정책 변경을 발표했습니다 (발표 번호. 2024-025). 2023년 1월 1일부터 시행되는 이 변경은 단일 거래의 이연법인세 회계 처리에 초점을 맞추고 있습니다.\n이 조정은 회사의 재무 상태와 실적을 더 정확하게 반영하고, 재무 상태, 결과 및 현금흐름에는 중요한 영향을 미치지 않도록 목표로 합니다.\n감사위원회, 이사회 및 감사인이 이 정책 변경을 지지하며, 규정을 준수하고 회사와 주주에게 이로운 것으로 간주합니다."
//       }
//     },
//     {
//       "id": "fe05b206-d8f1-44cc-9406-7767f7f63615",
//       "dataDate": "2024-04-24T10:01:01Z",
//       "korName": "선바센서",
//       "details": {
//         "secName": [
//           "森霸传感"
//         ],
//         "secCode": [
//           "300701"
//         ],
//         "categoryId": [
//           "010301"
//         ]
//       },
//       "analysisDetails": {
//         "topicKor": "재무 성과",
//         "summarizeTinyKor": "2023년 센바센싱테크놀로지 주식회사의 재무 하이라이트",
//         "summarizeLongKor": "2023년에 센바센싱테크놀로지 주식회사는 인상적인 재무 결과를 보고했습니다.\n회사의 총자산은 1,216,815,956.16 위안으로, 전년 대비 43.43% 증가했습니다.\n주주에게 귀속된 순자산은 813,216,918.18 위안으로 상승하여 7.46% 증가했습니다.\n올해 영업이익은 294,958,084.14 위안으로, 18.03% 증가했습니다.\n주주에게 귀속된 순이익은 56,444,131.01 위안으로 급증하여 31.33% 성장했습니다.\n비반복적이익 및 손실을 제외한 순이익은 35,130,875.41 위안으로 2.84% 감소했습니다.\n영업활동으로 인한 순현금흐름은 52,614,521.68 위안으로 21.82% 감소했습니다.\n기본 및 희석 주당순이익은 모두 0.21 위안으로 31.25% 증가했습니다.\n회사의 가중평균순자산수익률은 7.19%로 유지되었습니다."
//       }
//     },
//     {
//       "id": "ff68a8c4-078b-43e4-96f4-fa4869bcb364",
//       "dataDate": "2024-04-24T09:55:01Z",
//       "korName": null,
//       "details": {
//         "secName": [
//           "冰山B"
//         ],
//         "secCode": [
//           "200530"
//         ],
//         "categoryId": [
//           "010301"
//         ]
//       },
//       "analysisDetails": {
//         "topicKor": "재무 성과",
//         "summarizeTinyKor": "2023년 Iceberg B 회사의 재무 성과 하이라이트",
//         "summarizeLongKor": "Iceberg B 회사의 2023년 연례 보고서는 긍정적인 재무 성과를 보여줍니다.\n회사의 총 자산은 5,544,072,583.68 위안으로 증가했고, 총 부채는 2,086,521,830.81 위안으로 상승했으며, 자본은 3,457,550,752.87 위안에 이르렀습니다.\n총 매출액은 4,815,941,467.70 위안으로 급증했으며, 상당한 순이익인 54,174,539.75 위안과 164,185,717.71 위안의 연구 및 개발 비용이 있었습니다.\n냉장고 및 에어컨 제품의 매출액이 영업이익의 97.78%를 차지했습니다."
//       }
//     },
//     {
//       "id": "fea2f96e-3cc0-4232-8738-b65b1376ace6",
//       "dataDate": "2024-04-23T09:55:01Z",
//       "korName": "쿠이화제약",
//       "details": {
//         "secName": [
//           "葵花药业"
//         ],
//         "secCode": [
//           "002737"
//         ],
//         "categoryId": [
//           "01239901"
//         ]
//       },
//       "analysisDetails": {
//         "topicKor": "감사 수수료",
//         "summarizeTinyKor": "썬플라워제약그룹 주식회사 재무 하이라이트",
//         "summarizeLongKor": "썬플라워제약그룹 주식회사는 리신회계법인을 2024년 회사 감사 대행사로 재선임하였으며, 예상 감사 수수료는 1.35 억 위안이다.\n이 중 1.25 억 위안은 재무 보고서 감사를 위한 것이며, 10만 위안은 내부 통제 보고서 감사를 위한 것이다.\n회사의 2023년 내부 통제 자가평가 보고서, 이사 및 경영진 보수계획, 이익 분배 계획은 모두 만장일치 투표로 검토 및 승인되었다.\n2023년 연례 재무 보고서와 재무 최종 보고서가 공개되었다.\n회사는 2023년 주주총회를 개최하여 제안을 검토할 계획이다.\n2024년 일일 관련 거래의 예상 거래액은 20 억 위안을 초과하지 않는다.\n또한 회사는 2024년에 2 억 위안을 초과하지 않는 종합 신용 한도를 신청하고, 12개월 이내에 자체 보유 자금을 사용하여 2 억 위안을 초과하지 않는 현금 관리를 할 계획이다.\n2024년 감사 수수료는 1.35 억 위안으로 예상된다."
//       }
//     },
//     {
//       "id": "fef16530-d17c-49ea-b1cf-97c3734b57e1",
//       "dataDate": "2024-04-23T08:58:00Z",
//       "korName": "화투산딩디자인",
//       "details": {
//         "secName": [
//           "华图山鼎"
//         ],
//         "secCode": [
//           "300492"
//         ],
//         "categoryId": [
//           "0113"
//         ]
//       },
//       "analysisDetails": {
//         "topicKor": "이익 분배 계획",
//         "summarizeTinyKor": "2023년 화투산딩디자인 주식회사의 재무 성과",
//         "summarizeLongKor": "2023년에 화투산딩디자인 주식회사는 순이익이 -91,968,662.29 위안을 기록했으며, 모회사의 순이익은 -6,414,374.86 위안이었습니다.\n연결재무제표에 따른 주주에게 배당 가능한 이익은 15,413,072.53 위안이며, 모회사의 배당 가능 이익은 88,538,609.16 위안이었습니다.\n이익 분배를 하지 않은 결정은 회사의 정상적인 운영, 지속 가능한 발전, 위험에 대한 저항 능력을 향상시키고 주주의 장기적 이익을 보호하기 위해 내려졌습니다.\n2023년 이익 분배 계획은 제4차 이사회 17차 회의 및 제4차 감사위원회 15차 회의에서 승인되었으며, 회사의 일상 영업, 투자 요구 및 장기 발전 전략을 지원하는 데 목적을 두고 있습니다."
//       }
//     },
//     {
//       "id": "fe5d2eb6-1c7c-4661-805d-30450c680ba4",
//       "dataDate": "2024-04-23T08:58:00Z",
//       "korName": "중뎬강",
//       "details": {
//         "secName": [
//           "中电港"
//         ],
//         "secCode": [
//           "001287"
//         ],
//         "categoryId": [
//           "01239901"
//         ]
//       },
//       "analysisDetails": {
//         "topicKor": "재무 성과",
//         "summarizeTinyKor": "2023년 중국 파워 포트의 재무 성과 및 의사 결정",
//         "summarizeLongKor": "2023년, 중국 파워 포트는 주요 영업 지표를 보고했습니다.\n영업이익은 3,450,370,498.98 위안으로 20.32% 감소하였고, 주주에게 귀속된 순이익은 236,625,838.66 위안으로 40.93% 감소하였으며, 총자산은 22,704,419,913.37 위안으로 15.09% 증가하였고, 주주에게 귀속된 순자산은 5,056,011,006.87 위안으로 82.67% 상승하였습니다.\n회사의 내부통제 자가진단 보고서, 폐기충당금, 일일 관련 당사자 거래 예측, 신용 한도 신청, 자회사 보증 한도 및 기타 제안 사항은 모두 찬성 투표로 승인되었습니다."
//       }
//     },
//     {
//       "id": "fd178620-fb00-4e72-bea2-7db7f9423493",
//       "dataDate": "2024-04-22T08:58:00Z",
//       "korName": "중뎬강",
//       "details": {
//         "secName": [
//           "中电港"
//         ],
//         "secCode": [
//           "001287"
//         ],
//         "categoryId": [
//           "0123"
//         ]
//       },
//       "analysisDetails": {
//         "topicKor": "지분 정보",
//         "summarizeTinyKor": "회사 이사의 지분 정보",
//         "summarizeLongKor": "회사 이사인 리 웬지 씨는 회사법 및 기타 관련 법률, 규정에 규정된 임명 요건을 충족합니다.\n회사 주주 중 회사 주식을 보유하지 않는 사람들로는 리 준씨, 양 홍씨, 차오 베이씨, 채 위안칭씨, 왕밍장씨가 있습니다.\n리 웬지 씨는 회사 주식을 보유하고 있지 않습니다."
//       }
//     },
//     {
//       "id": "fd63caa5-38fb-4ac6-bdc4-ef54423b5c25",
//       "dataDate": "2024-04-22T08:39:59Z",
//       "korName": "산둥고속도로교량",
//       "details": {
//         "secName": [
//           "山东路桥"
//         ],
//         "secCode": [
//           "000498"
//         ],
//         "categoryId": [
//           "0129"
//         ]
//       },
//       "analysisDetails": {
//         "topicKor": "후원",
//         "summarizeTinyKor": "2023년 산둥고속도로교량그룹 주식회사 연례 후원 업무 보고서",
//         "summarizeLongKor": "삼성증권은 산둥고속도로교량그룹 주식회사의 2023년 연례 후원 업무 보고서를 제공했습니다.\n회사의 정보공시 문서는 적시에 검토되었습니다.\n자금 모금 특별계좌에 대한 10건의 조회가 있었으며, 정보공시 문서와 일관된 진전이 있었습니다.\n회사의 주주총회, 이사회, 감사회에 대한 현장 참석은 없었습니다.\n한 건의 현장 검사가 실시되었으며, 심천 증권 거래소 규정에 따라 제출된 보고서가 있습니다.\n12건의 특별 의견이 발행되었습니다.\n회사는 경쟁 회피, 관련 당사자 거래, 독립 유지, 주식 제한 등 다른 약속을 이행했습니다.\n후원 대표자에 변경 사항이 없었습니다.\n2018년 후원 업무를 성실히 수행하지 않아 규제 조치를 받은 삼성증권입니다.\n2023년 12월 28일에 연속 감독, 업무 요구사항 및 전형적인 사례에 대한 교육 세션을 한 차례 실시했습니다."
//       }
//     },
//     {
//       "id": "fedddd81-547a-47ab-b950-f7e959f20581",
//       "dataDate": "2024-04-22T08:28:00Z",
//       "korName": "런신신소재",
//       "details": {
//         "secName": [
//           "仁信新材"
//         ],
//         "secCode": [
//           "301395"
//         ],
//         "categoryId": [
//           "010305"
//         ]
//       },
//       "analysisDetails": {
//         "topicKor": "재무 성과",
//         "summarizeTinyKor": "2024년 제1사분기 런신신소재의 재무 하이라이트",
//         "summarizeLongKor": "2024년 제1사분기에 런신신소재는 총 종합 소득이 7,543,826.87 위안으로 보고되었으며, 동액이 모회사 소유주에게 귀속되었습니다.\n주당 기본 순이익은 0.052 위안이었습니다.\n영업활동으로부터의 순현금흐름은 -20,025,277.42 위안이었고, 투자활동으로부터의 순현금흐름은 415,522,048.23 위안이었으며, 재무활동으로부터의 순현금흐름은 -805,304.36 위안이었습니다.\n현금 및 현금성자산의 순 증가액은 394,691,466.45 위안이었고, 기간 종료 시 잔액은 619,135,058.65 위안이었습니다.\n순이익은 7,543,826.87 위안이었으며, 비비례손익을 차감한 후 순이익은 3,316,770.96 위안이었습니다.\n총 유동자산은 1,467,572,861.15 위안, 고정자산은 391,154,750.48 위안, 총 자산은 1,971,963,658.05 위안이었습니다.\n총 유동부채는 305,705,435.22 위안, 총 부채는 305,979,986.98 위안, 자본금은 144,920,000.00 위안, 자본잉여금은 967,615,772.55 위안, 미배당이익은 484,773,121.19 위안이었습니다.\n순자산수익률은 총 자산이 1,971,963,658.05 위안이고 소유자자본이 1,665,983,671.07 위안일 때 0.45%였습니다."
//       }
//     },
//     {
//       "id": "fda79f62-4344-445e-93cf-6e57ccecf7fc",
//       "dataDate": "2024-04-21T08:28:00Z",
//       "korName": "톈진모터다이스",
//       "details": {
//         "secName": [
//           "天汽模"
//         ],
//         "secCode": [
//           "002510"
//         ],
//         "categoryId": [
//           "010301"
//         ]
//       },
//       "analysisDetails": {
//         "topicKor": "주주, 채권, 재무 지표",
//         "summarizeTinyKor": "티안치 몰드와 티안진 오토 몰드의 재무 하이라이트",
//         "summarizeLongKor": "보고 기간 종료 시점에서 티안치 몰드는 86,230명의 일반 주주를 보유하고 있었습니다.\n이들 중 상위 10명의 주주로는 후진생이 45,144,546.00주, 창시핑이 34,600,800.00주 등이 포함되어 있습니다.\n티안진 오토 몰드 또한 86,230명의 일반 주주를 보유하고 있습니다.\n티안치 몰드는 채권 세부 정보를 공개했으며, 티안진 오토 몰드는 65.41%의 자산 대부채 비율과 순이익에서 59.88%의 감소와 같은 주요 재무 데이터를 공유했습니다.\n티안진 오토 몰드의 주식 코드는 002510이며, 회사의 전체 명칭은 티안진 오토 몰드 주식회사입니다."
//       }
//     },
//     {
//       "id": "fcbe93fc-58c9-4c87-a693-ec89340cdab8",
//       "dataDate": "2024-04-21T08:22:00Z",
//       "korName": "리후",
//       "details": {
//         "secName": [
//           "蠡湖股份"
//         ],
//         "secCode": [
//           "300694"
//         ],
//         "categoryId": [
//           "010305"
//         ]
//       },
//       "analysisDetails": {
//         "topicKor": "재무 성과",
//         "summarizeTinyKor": "2024년 리후 주식 제1분기 보고서의 재무 하이라이트",
//         "summarizeLongKor": "2024년 제1분기에 리후 주식은 총 영업이익이 395,726,510.84 위안, 총 영업 비용이 368,410,014.08 위안, 영업이익이 24,777,573.32 위안, 순이익이 23,164,092.79 위안, 모회사 소유주에게 귀속된 순이익이 23,455,414.56 위안, 순이익 증가율이 122.71%를 기록했습니다.\n주당 순이익은 0.11 위안이며, 증가율은 120.00%입니다.\n총 포괄이익은 23,164,092.79 위안으로, 모회사 소유주에게 귀속된 총 포괄이익은 23,455,414.56 위안입니다.\n영업활동으로부터의 순현금흐름은 -100,088,652.62 위안이었고, 기간 종료시 총 자산은 2,177,959,394.18 위안이며, 모회사에 귀속된 자본은 1,359,509,584.38 위안입니다.\n주목할만한 수치로는 현금 및 현금성 자산이 149,965,883.49 위안, 미수금이 123,500.00 위안, 매출채권 금융이 208,121,837.17 위안이 있습니다.\n직원 급여 지급액은 28,758,706.24 위안, 납부 세금은 3,777,991.31 위안, 경영 비용은 19,695,609.87 위안, 금융 비용은 -2,481,594.54 위안이었습니다.\n투자 수익은 -404,274.20 위안, 신용 손실액은 235,014.13 위안, 자산 가치 손실액은 -3,709,086.98 위안, 자산 처분 소득은 -161,934.06 위안이었습니다.\n기간 종료시의 일반 주주 수는 15,023주입니다."
//       }
//     },
//     {
//       "id": "fe5cf7ad-7123-4122-b978-072f12a12682",
//       "dataDate": "2024-04-21T08:15:59Z",
//       "korName": "화안신촹",
//       "details": {
//         "secName": [
//           "华安鑫创"
//         ],
//         "secCode": [
//           "300928"
//         ],
//         "categoryId": [
//           "010305"
//         ]
//       },
//       "analysisDetails": {
//         "topicKor": "재무 보고서",
//         "summarizeTinyKor": "2024년 화안신촹 홀딩스(베이징) 유한공사의 제1분기 보고서",
//         "summarizeLongKor": "2024년 제1분기에 화안신촹은 자산 처분 소득액 5,749.7백만 위안, 영업이익 139,573.76백만 위안, 총이익 139,594.0967백만 위안, 순이익 95,654.0621백만 위안, 모회사 소유주에게 귀속된 순이익 97,101.4294백만 위안, 기타 포괄손익의 순세후금액 16,408.9079백만 위안, 총포괄이익 112,062.97백만 위안, 주당순이익 -0.1214위안을 보고했습니다.\n영업활동으로부터의 순현금흐름은 29,052,761.58위안, 투자활동으로부터는 -82,613,981.41위안, 자금조달활동으로부터는 -3,600,395.22위안이었고, 현금및현금성자산의 순 증가액은 -56,456,107.05위안이었습니다.\n또한, 회사의 유동자산은 809,910,691.78위안, 비유동자산은 522,271,783.60위안, 총자산은 1,332,182,475.38위안, 유동부채는 58,749,562.09위안, 비유동부채는 35,157,147.80위안, 총부채는 93,906,709.89위안, 자본금은 80,000,000.00위안, 자본잉여금은 960,181,594.50위안, 기타포괄손익은 2,209,334.71위안, 모회사에 귀속된 자본총액은 1,229,591,356.20위안, 총자본은 1,238,275,765.49위안입니다."
//       }
//     }
//   ]
// };

export const totalTestDummy = {
  "홍콩" : {
    "data": {
      "getDisclosure": [
        {
          "id": "11181328",
          "dataDate": "2024-05-01T08:47:00Z",
          "korName": "NATURAL FOOD IH",
          "details": {
            "secName": [
              "NATURAL FOOD IH"
            ],
            "secCode": [
              "01837"
            ],
            "categoryId": "Proxy Forms",
            "fileLink": "https://www1.hkexnews.hk/listedco/listconews/sehk/2024/0426/2024042601288.pdf"
          },
          "analysisDetails": {
            "topicKor": "배당금 분배",
            "summarizeTinyKor": "홍콩 증권거래소에 대한 중요 정보 (주식 코드, 1837)",
            "summarizeLongKor": "홍콩 증권거래소에 상장된 Natural Food International Holding Limited (주식 코드 1837)의 연례 주주총회가 2024년 5월 31일 금요일 중국 심천에서 오전 10시에 개최될 예정입니다.\n회사는 2023년 12월 31일 종료된 연도에 주당 0.0323 RMB의 최종 배당금을 지급할 예정입니다."
          }
        },
        {
          "id": "11181312",
          "dataDate": "2024-05-02T08:46:00Z",
          "korName": "헝찌엔건축",
          "details": {
            "secName": [
              "CT VISION SL"
            ],
            "secCode": [
              "00994"
            ],
            "categoryId": "Proxy Forms",
            "fileLink": "https://www1.hkexnews.hk/listedco/listconews/sehk/2024/0426/2024042601272.pdf"
          },
          "analysisDetails": {
            "topicKor": "주주총회, 재무제표, 감사인, 이사, 주식, 보수, 권한",
            "summarizeTinyKor": "CT Vision S.L. (International) Holdings Limited에 관한 중요 정보",
            "summarizeLongKor": "CT Vision S.L. (International) Holdings Limited는 각각 0.01 홍콩 달러의 명목 가치를 가진 주식을 보유하고 있습니다.\n연례 주주총회(AGM)는 2024년 6월 20일 목요일 오전 10시에 홍콩 성완의 본햄스트랜드 35-45B 2층 J Plus에서 예정되어 있습니다.\n주식 코드는 994입니다.\n2023년 12월 31일 종료된 연도의 감사 보고된 연결 재무제표가 주주총회에서 검토될 것입니다.\n감사인인 중흥안다 회계법인은 재선임될 것입니다.\n이사들은 보수를 결정하고, 주식을 배정하고 발행하며, 주식을 거래하고, 회사의 주식을 다시 매입하는 권한을 부여받을 것입니다.\n매입된 주식은 주식 배정을 위한 권한에 추가될 것입니다."
          }
        },
        {
          "id": "11181310",
          "dataDate": "2024-04-26T08:46:00Z",
          "korName": "HBM HOLDINGS-B",
          "details": {
            "secName": [
              "HBM HOLDINGS-B"
            ],
            "secCode": [
              "02142"
            ],
            "categoryId": "Circulars",
            "fileLink": "https://www1.hkexnews.hk/listedco/listconews/sehk/2024/0426/2024042601270.pdf"
          },
          "analysisDetails": {
            "topicKor": "HBM Holdings Limited",
            "summarizeTinyKor": "HBM Holdings Limited (주식 코드 2142)의 미등록 주주를 위한 서한 및 요청서 양식 통지",
            "summarizeLongKor": "2024년 4월 26일 날짜의 문서는 HBM Holdings Limited (주식 코드 2142)의 미등록 주주를 대상으로 한 서한 및 요청서 양식 통지입니다.\n이 문서는 2023년 연례 보고서, 공고 및 주주총회 공고에 대해 안내합니다.\n서한에는 지점 주식 등록기관인 Tricor Investor Services Limited가 언급되었습니다.\nJingsong Wang 박사는 HBM Holdings Limited의 회장 및 이사로 활동하고 있습니다."
          }
        },
        {
          "id": "11181306",
          "dataDate": "2024-04-26T08:46:00Z",
          "korName": "Q TECH",
          "details": {
            "secName": [
              "Q TECH"
            ],
            "secCode": [
              "01478"
            ],
            "categoryId": "Announcements and Notices",
            "fileLink": "https://www1.hkexnews.hk/listedco/listconews/sehk/2024/0426/2024042601266.pdf"
          },
          "analysisDetails": {
            "topicKor": "주주총회, 주식 코드, 재무제표, 감사인, 이사 보수, 추가 주식, 전환 가능 증권, 옵션, 주식 매입, 정관, 회장, 사외 이사, 등기 사무소, 본사, 이사진, 비직속 이사, 대리인, 회원 명부, 일반 위임권",
            "summarizeTinyKor": "Q 테크놀로지(그룹) 주식회사 연례 주주총회 안내",
            "summarizeLongKor": "Q 테크놀로지(그룹) 주식회사(회사)는 2024년 5월 24일 금요일 오전 10시 30분에 중국 심천에서 연례 주주총회(AGM)를 개최할 예정입니다.\n회사의 주식 코드는 1478입니다.\n2023년 12월 31일 종료된 회계연도의 감사 보고서가 AGM에서 제출될 예정입니다.\n회사의 독립 감사인인 KPMG가 재선임되며, 이사들의 2024년 12월 31일 종료 연도의 보수를 결정할 권한이 부여될 예정입니다.\n회사는 발행 주식, 전환 가능 증권 또는 옵션을 총 발행 주식의 20%를 초과하지 않는 범위 내에서 발행할 것을 승인받고자 합니다.\n또한 회사는 총 발행 주식의 10%를 초과하지 않는 범위 내에서 주식을 매입할 것을 승인받고자 합니다.\nAGM에서는 또한 회사의 정관을 개정하는 것을 고려할 것입니다.\n회사의 회장이자 사외 이사는 허닝닝입니다.\n회사의 등기 사무소는 케이맨 제도에 있으며, 홍콩의 본사는 심천에 있습니다.\n현재 회사의 이사진은 허닝닝, 후산무, 판푸창이며, 독립 비직속 이사는 주가향, 고병경, 훼희징입니다.\n주주들은 AGM에서 대리인을 지명하여 투표할 권리가 있으며, 회원 명부는 AGM 준비를 위해 2024년 5월 21일부터 2024년 5월 24일까지 폐쇄될 예정입니다.\n회사는 주식 발행에 대한 일반 위임권을 부여받기 위해 회원들로부터 승인을 받고 있으며, 주식 매입에 대한 의도를 공개했습니다.\nAGM에서는 또한 회사의 정관을 개정하는 투표가 진행될 것입니다."
          }
        },
        {
          "id": "11181296",
          "dataDate": "2024-04-26T08:45:00Z",
          "korName": "중국수업국제",
          "details": {
            "secName": [
              "WATER INDUSTRY"
            ],
            "secCode": [
              "01129"
            ],
            "categoryId": "Circulars",
            "fileLink": "https://www1.hkexnews.hk/listedco/listconews/sehk/2024/0426/2024042601256.pdf"
          },
          "analysisDetails": {
            "topicKor": "연례보고서",
            "summarizeTinyKor": "중국수업국제그룹리미티드 2023년 연례보고서",
            "summarizeLongKor": "중국수업국제그룹리미티드는 2023년을 위한 연례보고서를 준비했습니다.\n주주들은 회사로부터 기업 커뮤니케이션의 인쇄본을 요청할 수 있습니다.\n문의 사항이 있을 경우, 홍콩 주식 등록기관에 (852) 2849 3399로 연락할 수 있습니다.\n중국수업국제그룹리미티드의 최고경영자이사 겸 회사 비서는 주인인 츄 인 인, 조지애나입니다.\n중국수업국제그룹리미티드의 주식 코드는 1129입니다."
          }
        }
      ]
    }
  }, 
  "심천" : {
    "data": {
      "getDisclosure" : [
        {
          "id": "9a21576c-ab69-439a-9e27-a3f2cdeabcc7",
          "dataDate": "2024-05-01T08:43:59Z",
          "korName": "즈터신소재",
          "details": {
            "secName": [
              "志特新材"
            ],
            "secCode": [
              "300986"
            ],
            "categoryId": [
              "0129"
            ], 
            "fileLink": "",
          },
          "analysisDetails": {
            "topicKor": "주식 정보",
            "summarizeTinyKor": "장시 지테 신소재 주식 정보 개요",
            "summarizeLongKor": "장시 지테 신소재는 처음 공개 공모 전에 총 87,800,000주의 자본을 보유했으며, 공모 후에는 117,066,667주로 늘어났습니다.\n이후의 자본 증가로 총 주식수는 246,371,227주가 되었으며, 배당금 및 주주 및 인센티브 대상에 대한 주식 배분이 이루어졌습니다.\n회사의 주식은 거래 가능 주식과 비거래 가능 주식, 제한 주식, 임원 락업 주식을 포함하고 있습니다.\n최근 발행된 140,678,545주의 제한 주식은 총 주식 자본의 57.1002%를 차지했습니다."
          }
        },
        {
          "id": "875664c0-fb5e-4e67-9820-dc8918b9a056",
          "dataDate": "2024-05-02T08:43:24Z",
          "korName": "베이루지능제어",
          "details": {
            "secName": [
              "北路智控"
            ],
            "secCode": [
              "301195"
            ],
            "categoryId": [
              "0129"
            ], 
            "fileLink": "",
          },
          "analysisDetails": {
            "topicKor": "난징 북로 지능형 제어 기술 주식회사",
            "summarizeTinyKor": "2023년도 난징 북로 지능형 제어 기술 주식회사 연례 추적 보고서",
            "summarizeLongKor": "2023년도 난징 북로 지능형 제어 기술 주식회사의 연례 추적 보고서에 따르면, 주최사는 전화번호 025-83387757로 연락할 수 있는 첸 샤오펑과 중 차오를 대표로 하는 화타이 통합 증권 주식회사입니다.\n회사의 정보 공개 검토는 시일적절하며, 미검토 문서는 0건입니다.\n회사는 건전한 규칙과 규정 수립을 감독하며 매월 모금된 자금에 대해 조사하여 프로젝트 진행이 공시 문서와 일치함을 보장합니다.\n회사는 직접 회의에 참석하지 않지만 회의 문서를 확인합니다.\n주요 문제 없이 1차 현장 조사가 실시되었습니다.\n13건의 특별 의견이 발행되었으며 비찬성 의견은 없습니다.\n심천 증권 거래소에 보고된 사항은 없습니다.\n주식 락업 및 감소 약정, 주가 안정화, 주식 매입, 배상 책임 약정이 이행되었습니다.\n주요 계약의 성과는 안정적이며 주요 위험은 없습니다.\n중국 증권 감독위원회나 심천 증권 거래소에서 주최사 대표자나 규제 조치에 변동 사항은 보고되지 않았습니다."
          }
        },
        {
          "id": "ea370b79-eca7-4c34-b8a0-75f205f24fa4",
          "dataDate": "2024-05-03T08:39:26Z",
          "korName": "킹시그널테크",
          "details": {
            "secName": [
              "金信诺"
            ],
            "secCode": [
              "300252"
            ],
            "categoryId": [
              "0119"
            ], 
            "fileLink": "",
          },
          "analysisDetails": {
            "topicKor": "주주총회",
            "summarizeTinyKor": "2024년 킹시그널 회사 제3차 임시주주총회 요약",
            "summarizeLongKor": "2024년 4월 26일 오후 2시, 심천 난산구 과학기술 생태공원 10동 B동 27층 회의실에서 킹시그널 회사 제4대 이사회가 제3차 임시주주총회를 개최했습니다.\n총 12명의 주주가 참석하여 총 213,923,937주(총 주식의 32.3073%)를 대표했습니다.\n2명의 주주가 현지에서 165,730,771주(총 주식의 25.0290%)로 투표하였고, 10명의 주주가 온라인으로 48,193,166주(총 주식의 7.2782%)로 투표했습니다.\n9명의 소규모 주주가 참석하여 1,968,860주(총 주식의 0.2973%)를 대표했으며, 이들 모두 온라인으로 투표했습니다.\n참석한 모든 주주 중 213,890,237주가 자금 조달 및 투자 사업 제안을 승인했으며(참석한 주주의 총 주식의 99.9842%), 반대는 33,700주(0.0158%)였습니다.\n소규모 주주 중 1,935,160주가 찬성(소규모 주주의 총 주식의 98.2884%)하였고, 33,700주가 반대(1.7116%)했습니다."
          }
        },
        {
          "id": "be485cae-dcd9-474b-8e3a-9bbe0381c373",
          "dataDate": "2024-04-26T08:37:36Z",
          "korName": "둥팡리성신에너지",
          "details": {
            "secName": [
              "东方日升"
            ],
            "secCode": [
              "300118"
            ],
            "categoryId": [
              "0123"
            ], 
            "fileLink": "",
          },
          "analysisDetails": {
            "topicKor": "주주 담보 해제",
            "summarizeTinyKor": "둥팡리성신에너지 주식 담보 해제 공지",
            "summarizeLongKor": "둥팡리성신에너지 주식 담보 해제 공지의 공시 번호는 2024-030입니다.\n주주 린하이펑은 2024년 4월 25일에 1,800만 주를 해제하여 자사 주식의 6.36% 및 회사 총 주식 자본의 1.58%를 나타냅니다.\n린하이펑의 누적 담보 주식 수는 1억 3,477만 6,900주로, 그는 자사 주식의 47.62% 및 회사 총 주식 자본의 11.82%를 보유하고 있습니다."
          }
        },
        {
          "id": "ac4500af-08ef-4776-84c8-4b823fb200a0",
          "dataDate": "2024-04-26T08:37:34Z",
          "korName": "보스커",
          "details": {
            "secName": [
              "博世科"
            ],
            "secCode": [
              "300422"
            ],
            "categoryId": [
              "0129"
            ], 
            "fileLink": "",
          },
          "analysisDetails": {
            "topicKor": "재무 성과",
            "summarizeTinyKor": "2023년 보쉬의 재무 개요",
            "summarizeLongKor": "2023년 보쉬는 예상순손실이 15억 위안에서 20억 위안 범위에 있을 것으로 예상되며, 비반복적 이익과 손실을 차감한 순손실은 23억 5000만 위안에서 28억 5000만 위안에 이를 것으로 예상됩니다.\n세 번째 연속적인 적자를 맞이한 회사는 계속된 영업 적자 위험에 직면하고 있습니다.\n지배주주인 닝구오 국유 자본 홀딩 그룹은 보쉬와의 경쟁에 직면하고 있으며, 경쟁 문제에 대처하기로 약속했습니다.\n스폰서는 지배주주에게 경쟁에 관한 약속을 이행할 것을 권고했습니다."
          }
        }
      ]
    }
  }

}



const getDummyCategoryIdJSON = () => {
  // totaldummyCategoryIdJSON 을 객체로 변환시키고 싶어 
  
  console.log("getDummyCategoryIdJSON 변환", JSON.stringify(totalDummyJSON, null, 2))

  
}





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

// export const dummyDisclosures = [
//   {
//     id: 0,
//     dataDate: "2024-05-01T22:52:00",
//     korName: "삼성전자",
//     details: {
//       secCode: "005930",
//       secName: "삼성전자 주식",
//       categoryId: "010301",
//     },
//     analysisDetails: {
//       topicKor: "투자 발표",
//       summarizeTinyKor: "안산중흥기계, 주식 발행 및 현금 지급을 통해 Jiangxi Jinhui Renewable Resources의 30% 지분을 인수 계획 ",
//       summarizeLongKor:
//         "안산중흥기계는 주식 발행 및 현금 지급을 통해 Jiangxi Jinhui Renewable Resources의 30% 지분을 인수 계획을 발표했다. 회사는 법적 절차의 완전성과 준수, 제출된 법적 문서의 유효성을 철저히 검토했다. 회사는 관련 법령에서 요구하는 법적 절차를 준수하였으며, 법적으로 유효한 법적 문서를 제출했다. 회사는 내부자 명단을 Shenzhen Stock Exchange에 제출하였으며, 관련 법령을 준수했다.",
//     },
//   },
//   {
//     id: 1,
//     dataDate: "2024-05-02T22:52:00",
//     korName: "현대자동차",
//     details: {
//       secCode: "005380",
//       secName: "현대자동차 주식",
//       categoryId: "010303",
//     },
//     analysisDetails: {
//       topicKor: "재무 결과 발표",
//       summarizeTinyKor: "안산중흥기계, 주식 발행 및 현금 지급을 통해 Jiangxi Jinhui Renewable Resources의 30% 지분을 인수 계획 현대자동차, 분기 재무 결과 발표",
//       summarizeLongKor:
//         "안산중흥기계는 주식 발행 및 현금 지급을 통해 Jiangxi Jinhui Renewable Resources의 30% 지분을 인수 계획을 발표했다. 회사는 법적 절차의 완전성과 준수, 제출된 법적 문서의 유효성을 철저히 검토했다. 회사는 관련 법령에서 요구하는 법적 절차를 준수하였으며, 법적으로 유효한 법적 문서를 제출했다. 회사는 내부자 명단을 Shenzhen Stock Exchange에 제출하였으며, 관련 법령을 준수했다.  현대자동차는 이번 분기에 대한 재무 결과를 발표하였습니다. 순이익은...",
//     },
//   },
//   {
//     id: 2,
//     dataDate: "2024-05-03T22:52:00",
//     korName: "SK하이닉스",
//     details: {
//       secCode: "000660",
//       secName: "SK하이닉스 주식",
//       categoryId: "010305",
//     },
//     analysisDetails: {
//       topicKor: "인수 합병",
//       summarizeTinyKor: "안산중흥기계, 주식 발행 및 현금 지급을 통해 Jiangxi Jinhui Renewable Resources의 30% 지분을 인수 계획 SK하이닉스, 인수 합병 계획 발표",
//       summarizeLongKor:
//         "안산중흥기계는 주식 발행 및 현금 지급을 통해 Jiangxi Jinhui Renewable Resources의 30% 지분을 인수 계획을 발표했다. 회사는 법적 절차의 완전성과 준수, 제출된 법적 문서의 유효성을 철저히 검토했다. 회사는 관련 법령에서 요구하는 법적 절차를 준수하였으며, 법적으로 유효한 법적 문서를 제출했다. 회사는 내부자 명단을 Shenzhen Stock Exchange에 제출하였으며, 관련 법령을 준수했다.  SK하이닉스는 새로운 기업 인수 합병 계획을 발표하였습니다. 이번 인수로...",
//     },
//   },
//   {
//     id: 3,
//     dataDate: "2024-05-04T22:52:00",
//     korName: "LG전자",
//     details: {
//       secCode: "066570",
//       secName: "LG전자 주식",
//       categoryId: "010307",
//     },
//     analysisDetails: {
//       topicKor: "배당 발표",
//       summarizeTinyKor: "안산중흥기계, 주식 발행 및 현금 지급을 통해 Jiangxi Jinhui Renewable Resources의 30% 지분을 인수 계획 LG전자, 배당 발표",
//       summarizeLongKor:
//         "안산중흥기계는 주식 발행 및 현금 지급을 통해 Jiangxi Jinhui Renewable Resources의 30% 지분을 인수 계획을 발표했다. 회사는 법적 절차의 완전성과 준수, 제출된 법적 문서의 유효성을 철저히 검토했다. 회사는 관련 법령에서 요구하는 법적 절차를 준수하였으며, 법적으로 유효한 법적 문서를 제출했다. 회사는 내부자 명단을 Shenzhen Stock Exchange에 제출하였으며, 관련 법령을 준수했다.  LG전자는 이번 분기 배당에 대한 발표를 진행했습니다. 배당율은...",
//     },
//   },
//   {
//     id: 4,
//     dataDate: "2024-05-05T22:52:00",
//     details: {
//       secCode: "035420",
//       secName: "NAVER 주식",
//       categoryId: "0102",
//     },
//     analysisDetails: {
//       topicKor: "신제품 출시",
//       summarizeTinyKor: "안산중흥기계, 주식 발행 및 현금 지급을 통해 Jiangxi Jinhui Renewable Resources의 30% 지분을 인수 계획 NAVER, 신제품 출시 발표",
//       summarizeLongKor:
//         "안산중흥기계는 주식 발행 및 현금 지급을 통해 Jiangxi Jinhui Renewable Resources의 30% 지분을 인수 계획을 발표했다. 회사는 법적 절차의 완전성과 준수, 제출된 법적 문서의 유효성을 철저히 검토했다. 회사는 관련 법령에서 요구하는 법적 절차를 준수하였으며, 법적으로 유효한 법적 문서를 제출했다. 회사는 내부자 명단을 Shenzhen Stock Exchange에 제출하였으며, 관련 법령을 준수했다.  NAVER는 최신 검색 기술을 활용한 신제품을 출시합니다. 주요 기능은...",
//     },
//   },
//   {
//     id: 5,
//     dataDate: "2024-05-06T22:52:00",
//     korName: "카카오",
//     details: {
//       secCode: "035720",
//       secName: "카카오 주식",
//       categoryId: "0111",
//     },
//     analysisDetails: {
//       topicKor: "사업 확장",
//       summarizeTinyKor: "안산중흥기계, 주식 발행 및 현금 지급을 통해 Jiangxi Jinhui Renewable Resources의 30% 지분을 인수 계획 카카오, 사업 확장 계획 발표",
//       summarizeLongKor:
//         "안산중흥기계는 주식 발행 및 현금 지급을 통해 Jiangxi Jinhui Renewable Resources의 30% 지분을 인수 계획을 발표했다. 회사는 법적 절차의 완전성과 준수, 제출된 법적 문서의 유효성을 철저히 검토했다. 회사는 관련 법령에서 요구하는 법적 절차를 준수하였으며, 법적으로 유효한 법적 문서를 제출했다. 회사는 내부자 명단을 Shenzhen Stock Exchange에 제출하였으며, 관련 법령을 준수했다.  카카오는 글로벌 시장을 겨냥한 사업 확장 계획을 발표했습니다. 핵심 내용은...",
//     },
//   },
//   {
//     id: 6,
//     dataDate: "2024-05-07T22:52:00",
//     korName: "POSCO",
//     details: {
//       secCode: "005490",
//       secName: "POSCO 주식",
//       categoryId: "0111",
//     },
//     analysisDetails: {
//       topicKor: "시장 전략",
//       summarizeTinyKor: "안산중흥기계, 주식 발행 및 현금 지급을 통해 Jiangxi Jinhui Renewable Resources의 30% 지분을 인수 계획 POSCO, 새로운 시장 전략 발표",
//       summarizeLongKor:
//         "안산중흥기계는 주식 발행 및 현금 지급을 통해 Jiangxi Jinhui Renewable Resources의 30% 지분을 인수 계획을 발표했다. 회사는 법적 절차의 완전성과 준수, 제출된 법적 문서의 유효성을 철저히 검토했다. 회사는 관련 법령에서 요구하는 법적 절차를 준수하였으며, 법적으로 유효한 법적 문서를 제출했다. 회사는 내부자 명단을 Shenzhen Stock Exchange에 제출하였으며, 관련 법령을 준수했다.  POSCO는 글로벌 시장에 진출하기 위한 전략적 계획을 발표했습니다. 세부 내용은...",
//     },
//   },
//   {
//     id: 7,
//     dataDate: "2024-05-08T22:52:00",
//     korName: "KB금융",
//     details: {
//       secCode: "105560",
//       secName: "KB금융 주식",
//       categoryId: "010301",
//     },
//     analysisDetails: {
//       topicKor: "주식 발행",
//       summarizeTinyKor: "안산중흥기계, 주식 발행 및 현금 지급을 통해 Jiangxi Jinhui Renewable Resources의 30% 지분을 인수 계획 KB금융, 주식 발행 발표",
//       summarizeLongKor:
//         "안산중흥기계는 주식 발행 및 현금 지급을 통해 Jiangxi Jinhui Renewable Resources의 30% 지분을 인수 계획을 발표했다. 회사는 법적 절차의 완전성과 준수, 제출된 법적 문서의 유효성을 철저히 검토했다. 회사는 관련 법령에서 요구하는 법적 절차를 준수하였으며, 법적으로 유효한 법적 문서를 제출했다. 회사는 내부자 명단을 Shenzhen Stock Exchange에 제출하였으며, 관련 법령을 준수했다.  KB금융은 자본 구조 조정을 위해 주식을 새로 발행할 계획입니다. 세부 내용은...",
//     },
//   },
//   {
//     id: 8,
//     dataDate: "2024-05-09T22:52:00",
//     korName: "셀트리온",
//     details: {
//       secCode: "068270",
//       secName: "셀트리온 주식",
//       categoryId: "0115",
//     },
//     analysisDetails: {
//       topicKor: "재무 분석",
//       summarizeTinyKor: "안산중흥기계, 주식 발행 및 현금 지급을 통해 Jiangxi Jinhui Renewable Resources의 30% 지분을 인수 계획 셀트리온, 재무 분석 결과 발표",
//       summarizeLongKor:
//         "안산중흥기계는 주식 발행 및 현금 지급을 통해 Jiangxi Jinhui Renewable Resources의 30% 지분을 인수 계획을 발표했다. 회사는 법적 절차의 완전성과 준수, 제출된 법적 문서의 유효성을 철저히 검토했다. 회사는 관련 법령에서 요구하는 법적 절차를 준수하였으며, 법적으로 유효한 법적 문서를 제출했다. 회사는 내부자 명단을 Shenzhen Stock Exchange에 제출하였으며, 관련 법령을 준수했다.  셀트리온은 향후 성장 전망을 바탕으로 재무 분석 결과를 발표하였습니다. 요점은...",
//     },
//   },
//   {
//     id: 9,
//     dataDate: "2024-05-10T22:52:00",
//     korName: "한국전력공사",
//     details: {
//       secCode: "015760",
//       secName: "한국전력공사 주식",
//       categoryId: "0102",
//     },
//     analysisDetails: {
//       topicKor: "시장 보고서",
//       summarizeTinyKor: "안산중흥기계, 주식 발행 및 현금 지급을 통해 Jiangxi Jinhui Renewable Resources의 30% 지분을 인수 계획 한국전력공사, 시장 보고서 발표",
//       summarizeLongKor:
//         "안산중흥기계는 주식 발행 및 현금 지급을 통해 Jiangxi Jinhui Renewable Resources의 30% 지분을 인수 계획을 발표했다. 회사는 법적 절차의 완전성과 준수, 제출된 법적 문서의 유효성을 철저히 검토했다. 회사는 관련 법령에서 요구하는 법적 절차를 준수하였으며, 법적으로 유효한 법적 문서를 제출했다. 회사는 내부자 명단을 Shenzhen Stock Exchange에 제출하였으며, 관련 법령을 준수했다.  한국전력공사는 국내 전력 시장 동향에 대한 새로운 보고서를 발표하였습니다. 주요 내용은...",
//     },
//   },
// ];
