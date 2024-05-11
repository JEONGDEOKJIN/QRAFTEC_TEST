import React from "react";
import ListView from "@/app/(site)/components/ListView";
import QueryCondition from "@/app/(site)/components/QueryCondition";

const Contents = () => {
  return (
    <>
    <div className="max-w-[772px] w-full   h-screen mx-auto flex gap-[10px] flex-col ">

      <QueryCondition />

      <ListView />
    </div>
    </>
  );
};

export default Contents;
