import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import React from "react";

const OptionSelect = () => {
  return (
    <>
      <div className="w-full  max-w-[160px] h-[32px]">
        <Select>
          <SelectTrigger className="w-full h-full  rounded-[4px]  text-[#5B6266] font-[500]  text-[12px]  border-[0.5px] border-[#9DA6AD] bg-[#FFFFFF] shadow-buttonSmall leading-[14.52px]">
            <SelectValue placeholder="심천"   />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="light">Light</SelectItem>
            <SelectItem value="dark">Dark</SelectItem>
            <SelectItem value="system">System</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </>
  );
};

export default OptionSelect;
