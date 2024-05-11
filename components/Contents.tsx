import React from "react";
import ListView from "@/app/(site)/components/ListView";
import QueryCondition from "@/app/(site)/components/QueryCondition";

const Contents = () => {
  return (
    <>
    <div className="bg-yellow-300 max-w-[772px] w-full h-full mx-auto flex gap-[10px] flex-col ">

      <QueryCondition />

      <ListView />
    </div>
    </>
  );
};

export default Contents;
