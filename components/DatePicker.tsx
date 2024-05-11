"use client";

import * as React from "react";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import CalendarIconColored from "./elements/CalendarIconColored";

export function DatePicker({ defaultValue }: any) {
  const [date, setDate] = React.useState<Date>();

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          className={cn(
            // "w-[132px] h-[28px] rounded-[4.46px] border-[1.12px] bg-[#FFFFFF] py-[5px] px-[10px] gap-[14px] justify-end text-left font-normal", // 기본 css
            "relative  w-[132px] h-[28px] rounded-[4.46px] border-[1.12px]  border-[#9DA6AD] bg-[#FFFFFF] py-[5px] px-[10px] gap-[14px] flex items-center justify-between  text-left font-normal",
            !date && "text-muted-foreground"
          )}
        >
          {date ? (
            format(date, "PPP")
          ) : (
            <span className="font-[300] text-[14.5px] leading-[17.55px] text-[#5B6266] ">
              {defaultValue}
            </span>
          )}

            {/* #커스텀  */}
            <CalendarIconColored />

          {/* 스타일 변경 참고용  */}
          {/* <CalendarIcon className="mr-2 h-4 w-4 shrink-0 " /> */}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  );
}
