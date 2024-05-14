import { DatePicker } from "@/components/DatePicker";
import DropDownSelect from "@/components/DropDownSelect";
import ArrowSmall from "@/components/elements/ArrowSmall";
import React from "react";
import { format, addDays } from "date-fns";


const FilterCondition = ({queryParameters, setQueryParameters} : any) => {

console.log("------------------------FilterCondition------------------------")

  const handleStartDateChange = (date: any) => {
    console.log("✅handleStartDateChange" , date) 
    // 
    setQueryParameters((prevState: any) => {
      return {
        ...prevState,
        // startDate: date,
        startDate: date ? format(addDays(new Date(date), 0), "yyyy-MM-dd") : "", // 📛📛 날짜 변환
      };
    });
  }
  
  const handleEndDateChange = (date: any) => {
    console.log("✅handleEndDateChange" , date)
    setQueryParameters((prevState: any) => {
      return {
        ...prevState,
        // endDate: date,
        endDate: date ? format(addDays(new Date(date), 0), "yyyy-MM-dd") : "",

      };
    });
  }

  const handleExchangeTypeChange = (exchangeType: string) => {
    setQueryParameters((prevState : any) => ({
      ...prevState,
      exchangeType,
    }));
  };



  return (
    <>
      <section className="flex flex-row justify-start items-center gap-[20px] px-[12px] bg-[#FFFFFF] rounded-[3px]  h-[48px]">
        <div className="w-full max-w-[238px] h-[40px] flex flex-row items-center justify-center gap-[12px] py-[4px] px-[12px] ">
          <h3 className="font-[600] text-[15px] w-full max-w-[45px] h-[18px]">
            거래소
          </h3>
          <DropDownSelect onSelect={handleExchangeTypeChange} />
        </div>

        {/* 시작일 picker 와 종료일 picker 가 필요 | props 로 이름만 다르게 해서 전달 
            ✅ 현재, dummyData 임 주의!!! 📛📛📛
        */}
        <div className="w-full max-w-[344px] h-[44px] py-[4px] px-[12px] gap-[10px] flex flex-row  items-center justify-center ">
          <DatePicker defaultValue={queryParameters.startDate && queryParameters.startDate} onChange={handleStartDateChange} />
          <ArrowSmall />
          <DatePicker defaultValue={queryParameters.endDate && queryParameters.endDate} onChange={handleEndDateChange} />
        </div>
      </section>
    </>
  );
};

export default FilterCondition;
