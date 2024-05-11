import { DatePicker } from "@/components/DatePicker";
import OptionSelect from "@/components/OptionSelect";
import ArrowSmall from "@/components/elements/ArrowSmall";
import React from "react";

const QueryCondition = () => {
  return (
    <>
      <section className="flex flex-row justify-start items-center gap-[20px] px-[12px] bg-[#FFFFFF] rounded-[3px]  h-[48px]">
        <div className="w-full max-w-[238px] h-[40px] flex flex-row items-center justify-center gap-[12px] py-[4px] px-[12px] ">
          <h3 className="font-[600] text-[15px] w-full max-w-[45px] h-[18px]">거래소</h3>
          <OptionSelect />
        </div>

        {/* 시작일 picker 와 종료일 picker 가 필요 | props 로 이름만 다르게 해서 전달 
            ✅ 현재, dummyData 임 주의!!! 📛📛📛
        */}
        <div className="w-full max-w-[344px] h-[44px] py-[4px] px-[12px] gap-[10px] flex flex-row  items-center justify-center ">
          <DatePicker defaultValue="2023-05-01" />


          <ArrowSmall />
          <DatePicker defaultValue="2024-05-01" />

        </div>
      </section>
    </>
  );
};

export default QueryCondition;
