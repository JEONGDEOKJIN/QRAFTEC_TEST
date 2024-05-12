import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import { dummyCategoryIdObj } from "./dummyData"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const getDummyCategoryIdJSON = () => {
  return JSON.stringify(dummyCategoryIdObj, null, 2);
  // 가독성을 높이기 위해 두 번째 인자인 null과 세 번째 인자인 2를 사용하여 들여쓰기
};


export const getKorCategoryId = (exchangeType: string, value: string) => {

  console.log("exchangeType : " , exchangeType)
  console.log("value  : " , value)


  console.log("getDummyCategoryIdJSON : " , JSON.parse(getDummyCategoryIdJSON()))

  const dummyCategoryIdJSON = JSON.parse(getDummyCategoryIdJSON());
  /* [getDummyCategoryIdJSON 사용 이유] 
    - 혹시, 실제 GPT 로 부터 받게되는 데이터는, string 으로 들어왔던 경험이 있어서.
    - 만약, 자바스크립트 객체로 들어오면, getDummyCategoryIdJSON 에서 json.stringfy 안 하면 됨
  */
 console.log("dummyCategoryIdJSON" , dummyCategoryIdJSON)
 /* 

 */
 
 console.log("exchangeType : " , exchangeType)
 console.log("dummyCategoryIdJSON " , dummyCategoryIdJSON[exchangeType])

  const specificCategoryIdArr = dummyCategoryIdJSON[exchangeType];
  console.log("specificCategoryIdArr : " , specificCategoryIdArr)

  if (!specificCategoryIdArr) return undefined; // 해당 카테고리 없음

  // ex) '홍콩' 중 value(숫자값) 이 input(매개변수)의 value 와 같은 '첫번째' item 을 반환
  const targetValue = specificCategoryIdArr.find((item: any) => {
    return item.value === value;
  });
  console.log("targetValue : " , targetValue)
  console.log("targetValue.kor ✅✅: " , targetValue.kor)

  return targetValue.kor;
};



