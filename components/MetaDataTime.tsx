import React from "react";

const MetaDataTime = ({ criteria, time }: { criteria: string; time: any }) => {
  return (
    <>
    <div className="flex flex-row justify-between w-full mb-[2px]">
      <h3 className="font-[600] text-[11px] leading-[13.31px]  ">{criteria}</h3>
      <p className="font-[600] text-[11px] leading-[13.31px]  ">{time}</p  >
    </div>
    </>
  );
};

export default MetaDataTime;
