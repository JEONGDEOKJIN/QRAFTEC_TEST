import React from "react";

const ItemDescription = ({ description }: { description: string }) => {
  return (
        // ✅✅✅ 모바일 반응형으로 작업한 부분 입니다. sm, lg 키워드를 사용하여 반응형을 구현했습니다.
    <div className="  w-full  h-full  sm:font-[400]  sm:text-[14px] sm:leading-[26.6px]  lg:font-[500] lg:text-[18px] leading-[28.17px] sm:text-[#000000]  lg:text-[#2F3B43]">
      {description}
    </div>
  );
};

export default ItemDescription;
