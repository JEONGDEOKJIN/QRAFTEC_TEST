import React from "react";

const ButtonLarge = ({ buttonName }: { buttonName: string }) => {
  return (
    <button className=" rounded-[40px] py-[22px] px-[4px] h-[28px] w-[395.93px]">
      {buttonName}
    </button>
  );
};

export default ButtonLarge;
