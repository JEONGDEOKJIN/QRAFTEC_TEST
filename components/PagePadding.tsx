import React from "react";

const PagePadding = ({ children }: { children: React.ReactNode }) => {
  return <div className="bg-[#F3F7FA] px-[10px] mx-auto  ">{children}</div>;
  // 여백처리는 px-[**] 으로 처리
};

export default PagePadding;
