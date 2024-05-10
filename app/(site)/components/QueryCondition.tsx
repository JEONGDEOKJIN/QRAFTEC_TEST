import { DatePicker } from "@/components/DatePicker";
import OptionSelect from "@/components/OptionSelect";
import ArrowSmall from "@/components/elements/ArrowSmall";
import React from "react";

const QueryCondition = () => {
  return (
    <>
      <section className="flex flex-row gap-[20px] py-[20px]">
        <h1>거래소</h1>
        <OptionSelect />
        <DatePicker />
        <ArrowSmall />
        <DatePicker />
      </section>
    </>
  );
};

export default QueryCondition;
