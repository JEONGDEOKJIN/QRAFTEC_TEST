import Contents from "@/components/Contents";
import MobileContents from "@/components/MobileContents";
import PagePadding from "@/components/PagePadding";
import React from "react";

const page = () => {
  return (
    <>
      <PagePadding>
        {/* <Contents /> */}
        <MobileContents />
      </PagePadding>
    </>
  );
};

export default page;
