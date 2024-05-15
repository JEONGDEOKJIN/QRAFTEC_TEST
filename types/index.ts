// types.ts
export type ExchangeType = "심천" | "홍콩";


// types.ts

export interface Details {
  secCode: string;
  secName: string;
  categoryId: string;
  fileLink?: string; // fileLink 필드 추가
}

export interface AnalysisDetails {
  topicKor: string[];
  summarizeTinyKor: string;
  summarizeLongKor: string;
}

export interface DisClosureDataItem {
  id: string;
  dataDate: string;
  korName?: string;
  details: Details;
  analysisDetails: AnalysisDetails;
}

export interface DisClosureDataResponse {
  nextCursor: number;
  pages: DisClosureDataItem[];
}

export interface QueryParameters {
  startDate: string;
  endDate: string;
  exchangeType: "심천" | "홍콩";
  pageParams: any[];
  pages: DisClosureDataItem[];
}


// export interface Details {
//   secCode: string;
//   secName: string;
//   categoryId: string;
//   fileLink?: string; // fileLink 필드 추가
// }

// export interface AnalysisDetails {
//   topicKor: string;
//   summarizeTinyKor: string;
//   summarizeLongKor: string;
// }

// export interface Disclosure {
//   id: string;
//   dataDate: string;
//   korName: string;
//   details: Details;
//   analysisDetails: AnalysisDetails;
// }

// export interface ClosureDataResponse {
//   nextCursor: number;
//   pages: Disclosure[];
// }

// export interface QueryParameters {
//   exchangeType: "홍콩" | "심천";
//   startDate: string;
//   endDate: string;
// }




// // 새로운 타입 시도
// interface Details {
//   secCode: string;
//   secName: string;
//   categoryId: string;
// }

// interface AnalysisDetails {
//   topicKor: string;
//   summarizeTinyKor: string;
//   summarizeLongKor: string;
// }

// interface ClosureDataItem {
//   id: number;
//   dataDate: string;
//   korName?: string;
//   details: Details;
//   analysisDetails: AnalysisDetails;
// }

// export default  interface ClosureDataResponse {
//   nextCursor: number;
//   pages: ClosureDataItem[];
// }




// -----------------이전 타입 -----------------
// interface Details {
//   secCode: string;
//   secName: string;
//   categoryId: string;
// }

// interface AnalysisDetails {
//   topicKor: string[];
//   summarizeTinyKor: string;
//   summarizeLongKor: string;
// }

// interface ClosureDataItem {
//   id: string;
//   dataDate: string;
//   korName?: string;
//   details: Details;
//   analysisDetails: AnalysisDetails;
// }

// interface ClosureDataResponse {
//   nextCursor: number;
//   pages: ClosureDataItem[];
// }

// interface QueryParameters {
//   startDate: string;
//   endDate: string;
//   exchangeType: "심천" | "홍콩";
//   pageParams: any[];
//   pages: ClosureDataItem[];
// }
// -------------------이전 타입 -----------------



// 이전에 사용하던 타입
// interface AnalysisDetails {
//   topicKor: string;
//   summarizeTinyKor: string;
//   summarizeLongKor: string;
// }

// interface Details {
//   secCode: string;
//   secName: string;
//   categoryId: string;
// }

// interface ClosureDataItem {
//   id: number;
//   dataDate: string;
//   korName?: string;
//   details: Details;
//   analysisDetails: AnalysisDetails;
//   nextCursor?: number; // nextCursor 속성 추가
// }


// ---------------------



// interface Details {
//   secCode: string[];
//   secName: string[];
//   categoryId: string;
//   fileLink?: string; // fileLink 필드 추가
// }

// interface AnalysisDetails {
//   topicKor: string;
//   summarizeTinyKor: string;
//   summarizeLongKor: string;
// }

// export interface Disclosure {
//   id: string;
//   dataDate: string;
//   korName: string;
//   details: Details;
//   analysisDetails: AnalysisDetails;
// }










// -----------------------




// // 새로운 타입 시도
// interface Details {
//   secCode: string;
//   secName: string;
//   categoryId: string;
// }

// interface AnalysisDetails {
//   topicKor: string;
//   summarizeTinyKor: string;
//   summarizeLongKor: string;
// }

// interface ClosureDataItem {
//   id: number;
//   dataDate: string;
//   korName?: string;
//   details: Details;
//   analysisDetails: AnalysisDetails;
// }

// export default  interface ClosureDataResponse {
//   nextCursor: number;
//   pages: ClosureDataItem[];
// }




// declare module 'react-infinite-scroller' {
//   import * as React from 'react';

//   interface InfiniteScrollProps {
//     pageStart: number;
//     loadMore: (page: number) => void;
//     hasMore: boolean;
//     loader: React.ReactNode;
//     children?: React.ReactNode;
//     threshold?: number;
//     useWindow?: boolean;
//     isReverse?: boolean;
//     initialLoad?: boolean;
//     getScrollParent?: () => React.ReactNode | null;
//   }

//   export default class InfiniteScroll extends React.Component<InfiniteScrollProps> {}
// }
