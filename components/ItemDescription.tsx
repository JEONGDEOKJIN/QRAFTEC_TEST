import React from "react";

const ItemDescription = ({ description }: { description: string }) => {
  return (
    // <div className="w-full max-w-[664px] h-full font-[500] text-[18px] leading-[28.17px] text-[#2F3B43]">
    <div className="  w-full  h-full  sm:font-[400]  sm:text-[14px] sm:leading-[26.6px]  lg:font-[500] lg:text-[18px] leading-[28.17px] sm:text-[#000000]  lg:text-[#2F3B43]">
      {description}
    </div>
  );
};

export default ItemDescription;
