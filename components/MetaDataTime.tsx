import React from "react";

const MetaDataTime = ({ criteria, time }: { criteria: string; time: any }) => {
  return (
    <>
      <div>{criteria}</div>
      <div>{time}</div>
    </>
  );
};

export default MetaDataTime;
