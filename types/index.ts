



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








// 새로운 타입 
interface Details {
  secCode: string;
  secName: string;
  categoryId: string;
}

interface AnalysisDetails {
  topicKor: string;
  summarizeTinyKor: string;
  summarizeLongKor: string;
}

interface ClosureDataItem {
  id: number;
  dataDate: string;
  korName?: string;
  details: Details;
  analysisDetails: AnalysisDetails;
}

export default  interface ClosureDataResponse {
  nextCursor: number;
  pages: ClosureDataItem[];
}


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
