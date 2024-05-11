import React from "react";

const ItemDescription = ({ description }: { description: string }) => {
  return (
    <div className="w-full max-w-[664px] h-full font-[500] text-[18px] leading-[28.17px] text-[#2F3B43]">
      {description}
    </div>
  );
};

export default ItemDescription;
