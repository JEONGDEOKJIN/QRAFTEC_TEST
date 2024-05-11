import React from "react";

const ButtonSmall = ({ buttonName }: { buttonName: string }) => {
  return (
    <>
      <button className="h-[30px] w-[83.77px] rounded-[4px] border-[0.5px] py-[7px] px-[9px] flex items-center justify-center gap-[10px]  ">
        <p className="font-[600] text-[13px] leading-[15.73px] text-[#546A78]">
          {buttonName}
        </p>
      </button>
    </>
  );
};

export default ButtonSmall;
