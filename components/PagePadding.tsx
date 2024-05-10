import React from "react";

const PagePadding = ({ children }: { children: React.ReactNode }) => {
  return <div className="bg-[#F3F7FA] px-[10px] mx-auto lg:px-[100px]">{children}</div>;
};

export default PagePadding;
