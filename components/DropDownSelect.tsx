import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import React from "react";

const DropDownSelect = ({ defaultValue, onSelect }: any) => {
  const handleSelectChange = (value: string) => {
    onSelect(value);
  };

  return (
    <>
      <div className="w-full  max-w-[160px] h-[32px]">
        <Select onValueChange={handleSelectChange}>
          <SelectTrigger className="w-full h-full  rounded-[4px]  text-[#5B6266] font-[500]  text-[12px]  border-[0.5px] border-[#9DA6AD] bg-[#FFFFFF] shadow-buttonSmall leading-[14.52px]">
            <SelectValue placeholder={defaultValue} />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="심천">심천</SelectItem>
            <SelectItem value="홍콩">홍콩</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </>
  );
};

export default DropDownSelect;
