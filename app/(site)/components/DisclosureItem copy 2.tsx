// import ItemDescription from "@/components/ItemDescription";
// import MetaDataCompany from "@/components/MetaDataCompany";
// import MetaDataTime from "@/components/MetaDataTime";
// import ButtonLarge from "@/components/elements/ButtonLarge";
// import ButtonSmall from "@/components/elements/ButtonSmall";
// import { getHongKongLocalTime, getShenzhenLocalTime } from "@/lib/utils";
// import React, { forwardRef } from "react";
// import { format } from "date-fns";


// // const DisclosureItem =  ({disClosureData, lastElementRef} : any) => {

// // const DisclosureItem = forwardRef() (props, ref) => {

// //   const { disClosureData } = props

// //   return (
// //     <>
// //       <div ref={ref} className="flex flex-col gap-[10px] max-w-[744px] w-full h-[412px] rounded-[8px] border-[#CED9E1] border-[0.5px] py-[12px] px-[20px]  ">
// //         <section className="flex justify-between max-x-[704px] w-full h-[131px] py-[12px] px-[20px] bg-[#FFFFFF]">
// //           <article className="flex flex-col gap-[20px]  w-[174px] h-[107px] py-[12px]  ">
// //             <div className="w-[174px] h-[31px] text-[#68696B]">
// //               <MetaDataTime criteria="공시일" time={disClosureData.dataDate && disClosureData?.dataDate} />
// //               <MetaDataTime criteria="현지시간" time="2024/05/12 22:52:00" />
// //               <MetaDataTime criteria="현지시간" time="2024/05/12 22:52:00" />

// //               <MetaDataCompany
// //                 companyID={"002667"}
// //                 companyName="레마정밀 (鞍重股份)"
// //               />
// //             </div>
// //           </article>

// //           <article className="flex flex-col gap-[14px] w-[395.93px] h-[78px] p-[4px] bg-[#FFFFFF] ">
// //             <div className="flex flex-row gap-[12px] w-[387.93px] h-[30px]">
// //               <ButtonSmall buttonName="주식 발행" />
// //               <ButtonSmall buttonName="지분 인수" />
// //               <ButtonSmall buttonName="현금 지급" />
// //             </div>

// //             <ButtonLarge buttonName="일반공시" />
// //           </article>
// //         </section>

// //         <section className="flex flex-col gap-[20px] w-full max-w-[704px] h-[247px] py-[12px] px-[20px]">
// //           <ItemDescription description="안산중흥기계, 주식 발행 및 현금 지급을 통해 Jiangxi Jinhui Renewable Resources의 30% 지분을 인수 계획" />
// //           <ItemDescription description="안산중흥기계는 주식 발행 및 현금 지급을 통해 Jiangxi Jinhui Renewable Resources의 30% 지분을 인수 계획을 발표했다. 회사는 법적 절차의 완전성과 준수, 제출된 법적 문서의 유효성을 철저히 검토했다. 회사는 관련 법령에서 요구하는 법적 절차를 준수하였으며, 법적으로 유효한 법적 문서를 제출했다. 회사는 내부자 명단을 Shenzhen Stock Exchange에 제출하였으며, 관련 법령을 준수했다." />
// //         </section>
// //       </div>
// //     </>
// //   );
// // };

// interface DisclosureItemProps {
//   disClosureData: any; //
//   key: number;
// }

// // const DisclosureItem = forwardRef<HTMLDivElement, DisclosureItemProps>((props, ref) => {
// const DisclosureItem = (queryParameters : any , props: any) => {
//   // props에서 disClosureData를 구조 분해 할당 방식으로 추출합니다.
//   const { item } = props;
//   console.log("DisclosureItem item", item);

//   // 2024-05-01T22:52:00 이 날짜형식을  -> 2024/05/12 22:52:00 로 변환 
//   // console.log("item?.dataDate", item.dataDate)

  
//   const formattedDataDate = format(new Date(item.dataDate), "yyyy/MM/dd HH:mm:ss");

//   // let formattedDataDate = "";
//   // if (item?.dataDate) {
//   //   try {
//   //     formattedDataDate = format(new Date(item.dataDate), "yyyy/MM/dd HH:mm:ss");
//   //   } catch (error) {
//   //     console.error("잘못된 date 형식:", item.dataDate);
//   //     formattedDataDate = "잘못된 date 형식";
//   //   }
//   // } else {
//   //   formattedDataDate = "Date not available";
//   // }



//   const HONGKONG_LOCALTIME = getHongKongLocalTime()
//   const SHENZHEN_LOCALTIME = getShenzhenLocalTime()
//   const localtime = queryParameters.exchangeType === "홍콩" ? HONGKONG_LOCALTIME : SHENZHEN_LOCALTIME
//   const formattedLocaltime = format(new Date(localtime), "yyyy/MM/dd HH:mm:ss");


  

//   return (
//     <div className="flex flex-col gap-[10px] max-w-[744px] w-full h-[412px] rounded-[8px] border-[#CED9E1] border-[0.5px] py-[12px] px-[20px]">
//       <section className="flex justify-between max-x-[704px] w-full h-[131px] py-[12px] px-[20px] bg-[#FFFFFF]">
//         <article className="flex flex-col gap-[20px] w-[174px] h-[107px] py-[12px]">
//           <div className="w-[174px] h-[31px] text-[#68696B]">
//             <MetaDataTime
//               criteria="공시일"
//               time={item.dataDate && item.dataDate}
//               // time={formattedDataDate && formattedDataDate}
//             />
//             <MetaDataTime criteria="현지시간" time={formattedLocaltime && formattedLocaltime} />
//             <MetaDataCompany
//               companyID="002667"
//               companyName={item?.korName && item?.korName}
//             />
//           </div>
//         </article>

//         <article className="flex flex-col gap-[14px] w-[395.93px] h-[78px] p-[4px] bg-[#FFFFFF]">
//           <div className="flex flex-row gap-[12px] w-[387.93px] h-[30px]">
//             <ButtonSmall buttonName="주식 발행" />
//             <ButtonSmall buttonName="지분 인수" />
//             <ButtonSmall buttonName="현금 지급" />
//           </div>
//           <ButtonLarge
//             buttonName={
//               item?.analysisDetails.topicKor && item?.analysisDetails.topicKor
//             }
//           />
//         </article>
//       </section>

//       <section className="flex flex-col gap-[20px] w-full max-w-[704px] h-[247px] py-[12px] px-[20px]">
//         <ItemDescription
//           description={
//             item?.analysisDetails.summarizeTinyKor &&
//             item?.analysisDetails.summarizeTinyKor
//           }
//         />
//         <ItemDescription
//           description={
//             item?.analysisDetails.summarizeLongKor &&
//             item.analysisDetails.summarizeLongKor
//           }
//         />
//       </section>
//     </div>
//   );
// };

// // 이게 왜 필요? ❓❓❓❓❓
// DisclosureItem.displayName = "DisclosureItem";

// export default DisclosureItem;
