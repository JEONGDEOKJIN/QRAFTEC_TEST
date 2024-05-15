"use client";

import * as React from "react";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";

import { cn, disabledDates } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import CalendarIconColored from "./elements/CalendarIconColored";

export function DatePicker({ defaultValue, onChange, minDate, maxDate }: any) {
  const [date, setDate] = React.useState<Date | undefined>(
    defaultValue ? new Date(defaultValue) : undefined
  );

  const handleDateChange = (selectedDate: Date | undefined) => {
    setDate(selectedDate);
    if (onChange) {
      onChange(selectedDate);
    }
  };
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          className={cn(
            "relative  w-[132px] h-[28px] rounded-[4.46px] border-[1.12px]  border-[#9DA6AD] bg-[#FFFFFF] py-[5px] px-[10px] gap-[14px] flex items-center justify-between  text-left font-normal",
            !date && "text-muted-foreground"
          )}
        >
          {date ? (
            format(date, "yyyy-MM-dd") // 날짜 형식 변경
          ) : (
            <span className="font-[300] text-[14.5px] leading-[17.55px] text-[#5B6266] ">
              {date && date}
            </span>
          )}

          <CalendarIconColored />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar
          mode="single"
          selected={date}
          onSelect={handleDateChange}
          initialFocus
          disabled={(date) => disabledDates(date, minDate, maxDate)}
        />
      </PopoverContent>
    </Popover>
  );
}
