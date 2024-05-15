import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { dummyCategoryIdObj } from "./dummyData";
import { ExchangeType } from "@/types";

// tailwind merge
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// 특정 타임존의 현지 시간 구하기
const getLocalTime = (timezoneOffset: any) => {
  const date = new Date();
  const utc = date.getTime() + date.getTimezoneOffset() * 60000;
  const localTime = utc + timezoneOffset * 3600000;
  return new Date(localTime);
};

// 홍콩 현지 시간 구하기
export const getHongKongLocalTime = () => {
  return getLocalTime(8); // 홍콩은 UTC+8
};

// 심천 현지 시간 구하기
export const getShenzhenLocalTime = () => {
  return getLocalTime(8); // 심천은 UTC+8
};

// 달력 disabled 여부 판단
export const disabledDates = (
  date: Date,
  minDate?: Date,
  maxDate?: Date
): boolean => {
  switch (true) {
    case minDate !== undefined && maxDate !== undefined: // 시작일, 종료일 모두 있을 때
      return date < minDate || date >= maxDate; // 시작일보다 작거나 종료일 이상일 때 -> true 반환 == 달력 disabled
    case minDate !== undefined: // 시작일만 있을 때
      return date < minDate; // 시작일보다 작을 때 -> true 반환 == 달력 disabled
    case maxDate !== undefined: // 종료일만 있을 때
      return date >= maxDate; // 종료일 이상일 때 -> true 반환 == 달력 disabled
    default:
      return false;
  }
};

// 현재일 기준으로 1년 전 날짜 구하기
export const getOneYearAgoDate = () => {
  const date = new Date();
  date.setFullYear(date.getFullYear() - 1);

  return date.toISOString().split("T")[0];
};

// 현재일 구하기
export const getCurrentDate = () => {
  const date = new Date();
  return date.toISOString().split("T")[0];
};

// 더미 카테고리 아이디 가져오기
export const getDummyCategoryIdJSON = (exchangeType: ExchangeType) => {
  return JSON.stringify(dummyCategoryIdObj[exchangeType], null, 2);
  // 가독성을 높이기 위해 두 번째 인자인 null과 세 번째 인자인 2를 사용하여 들여쓰기
};

// 한국어 카테고리 아이디 가져오기
export const getKorCategoryId = (exchangeType: ExchangeType, value: string) => {


  // 거래소 별로 다른 DB 프로퍼티 가져오기
  const dummyCategoryIdJSON = JSON.parse(getDummyCategoryIdJSON(exchangeType));
  /* [getDummyCategoryIdJSON 사용 이유] 
    - 혹시, 실제 GPT 로 부터 받게되는 데이터는, string 으로 들어왔던 경험이 있어서.
    - 만약, 자바스크립트 객체로 들어오면, getDummyCategoryIdJSON 에서 json.stringfy 안 하면 됨
  */

  const specificCategoryIdArr = dummyCategoryIdJSON;

  if (!specificCategoryIdArr) return undefined; // 해당 카테고리 없음

  // ex) '홍콩' 중 value(숫자값) 이 input(매개변수)의 value 와 같은 '첫번째' item 을 반환
  const targetProperty = specificCategoryIdArr.find((item: any) => {
    return item.value === value;
  });

  return targetProperty.kor;
};

