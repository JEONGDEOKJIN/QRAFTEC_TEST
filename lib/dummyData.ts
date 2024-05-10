// 심천 카테고리 매핑 테이블
const shenzhenCategories = [
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
    { value: "01239910", kor: "감사위원회공시", org: "01239910" }
];

// 홍콩 카테고리 매핑 테이블
const hongkongCategories = [
    { value: "Announcements and Notices", kor: "일반공시", org: "Announcements and Notices" },
    { value: "Circulars", kor: "주요안내보고서", org: "Circulars" },
    { value: "Listing Documents", kor: "보고서", org: "Listing Documents" },
    { value: "Financial Statements/ESG Information", kor: "재무/ESG", org: "Financial Statements/ESG Information" },
    { value: "Next Day Disclosure Returns", kor: "발행주식수변동", org: "Next Day Disclosure Returns" },
    { value: "Monthly Returns", kor: "월간보고서", org: "Monthly Returns" },
    { value: "Proxy Forms", kor: "대리행사", org: "Proxy Forms" },
    { value: "Company Information Sheet", kor: "회사개요", org: "Company Information Sheet" },
    { value: "Trading Information of Exchange Traded Funds", kor: "ETF정보", org: "Trading Information of Exchange Traded Funds" },
    { value: "Trading Information of Leveraged and Inverse Products", kor: "파생상품거래정보", org: "Trading Information of Leveraged and Inverse Products" },
    { value: "Constitutional Documents", kor: "정관수정", org: "Constitutional Documents" },
    { value: "Documents on Display", kor: "기타공시", org: "Documents on Display" },
    { value: "Regulatory Announcement & News", kor: "공지/뉴스", org: "Regulatory Announcement & News" },
    { value: "Takeovers Code - dealing disclosures", kor: "거래공시", org: "Takeovers Code - dealing disclosures" },
    { value: "Debt and Structured Products", kor: "부채/구조화상품", org: "Debt and Structured Products" },
    { value: "Documents on Display (Debt Issuance Programmes)", kor: "채권발행", org: "Documents on Display (Debt Issuance Programmes)" },
    { value: "Documents on Display (Debt Securities)", kor: "채무증권", org: "Documents on Display (Debt Securities)" },
    { value: "Documents on Display (Structured Products)", kor: "구조화상품", org: "Documents on Display (Structured Products)" }
];


/*
[사용예시]
import { mapCategory } from './categories';

// 심천 거래소의 "010301" 카테고리 코드에 해당하는 한국어 명칭 출력
console.log(mapCategory('SHENZHEN', "010301"));  // "연간보고서" 출력됨
mapCategory('HONGKONG', "Announcements and Notices"); // "일반공시" 출력됨
*/


// 거래소에 따른 카테고리 매핑 함수
export function mapCategory(exchangeType: 'SHENZHEN' | 'HONGKONG', categoryId: string): string {
    const categories = exchangeType === 'SHENZHEN' ? shenzhenCategories : hongkongCategories;
    const category = categories.find(item => item.value === categoryId);
    return category ? category.kor : '알 수 없음';
}


