// types.ts
export type ExchangeType = "심천" | "홍콩";

export interface Details {
  secCode: string;
  secName: string;
  categoryId: string;
  fileLink?: string;
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
