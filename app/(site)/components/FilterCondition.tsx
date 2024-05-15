"use client";

import { DatePicker } from "@/components/DatePicker";
import DropDownSelect from "@/components/DropDownSelect";
import ArrowSmall from "@/components/elements/ArrowSmall";
import React, { useState } from "react";
import { format, addDays } from "date-fns";

const FilterCondition = ({ queryParameters, setQueryParameters }: any) => {
  const [currentStartDate, setCurrentStartDate] = useState(
    queryParameters.startDate
  );
  const [currentEndDate, setCurrentEndDate] = useState(queryParameters.endDate);

  console.log(
    "------------------------FilterCondition------------------------"
  );

  const handleStartDateChange = (date: any) => {
    console.log("✅handleStartDateChange", date);

    const newStartDate = date ? new Date(date) : null;
    const endDate = queryParameters.endDate
      ? new Date(queryParameters.endDate)
      : null;

    // 여기에서 endDate 랑 비교했을 때! endDate 가 더 컸을 때!만 변경하고, 그렇지 않으면 변경하지 않는다.
    if (newStartDate && endDate && endDate < newStartDate) {
      alert("종료일이 시작일 보다 앞설 수 없습니다.");
      return;
    }

    setQueryParameters((prevState: any) => {
      return {
        ...prevState,
        // startDate: date,
        startDate: date ? format(addDays(new Date(date), 0), "yyyy-MM-dd") : "", // 📛📛 날짜 변환
      };
    });
  };

  const handleEndDateChange = (date: any) => {
    console.log("✅handleEndDateChange", date);

    const newEndDate = date ? new Date(date) : null;
    const startDate = queryParameters.startDate
      ? new Date(queryParameters.startDate)
      : null;

    // 여기에서 start 랑 비교했을 때! endDate 가 더 컸을 때!만 변경하고, 그렇지 않으면 변경하지 않는다.
    if (newEndDate && startDate && startDate > newEndDate) {
      alert("시작일이 종료일보다 클 수 없습니다.");
      return;
    }

    setQueryParameters((prevState: any) => {
      return {
        ...prevState,
        // endDate: date,
        endDate: date ? format(addDays(new Date(date), 0), "yyyy-MM-dd") : "",
      };
    });
  };

  const handleExchangeTypeChange = (exchangeType: string) => {
    setQueryParameters((prevState: any) => ({
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
          <DropDownSelect
            defaultValue={queryParameters.exchangeType}
            onSelect={handleExchangeTypeChange}
          />
        </div>

        {/* 시작일 picker 와 종료일 picker 가 필요 | props 로 이름만 다르게 해서 전달 
            ✅ 현재, dummyData 임 주의!!! 📛📛📛
        */}
        <div className="w-full max-w-[344px] h-[44px] py-[4px] px-[12px] gap-[10px] flex flex-row  items-center justify-center ">
          {/* 여기에 currentValue 가져와야 겠다 */}
          <DatePicker
            defaultValue={
              queryParameters.startDate && queryParameters.startDate
            }
            onChange={handleStartDateChange}
            maxDate={new Date(queryParameters.endDate)} // 선택 가능한 최대 시작일

          />
          <ArrowSmall />
          <DatePicker
            defaultValue={queryParameters.endDate && queryParameters.endDate}
            onChange={handleEndDateChange}
            minDate={new Date(queryParameters.startDate)} // 선택 가능한 최소 종료일
          />
        </div>
      </section>
    </>
  );
};

export default FilterCondition;
