import React from "react";

const ButtonLarge = ({ buttonName }: { buttonName: string }) => {
  return (
    <button className="flex justify-center items-center gap-[40px] w-full max-w-[395.93px] h-[28px] rounded-[40px] py-[4px] px-[20px]  bg-[#F5F9FF]  ">
      <span className="font-[600] text-[12px] leading-[14.52px] mb-[2px] tracking-[-0.36px] text-[#5091FF] ">
        {buttonName}
      </span>
    </button>
  );
};

export default ButtonLarge;
