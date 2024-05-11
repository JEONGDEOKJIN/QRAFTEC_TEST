import React from "react";

const MetaDataCompany = ({
  companyID,
  companyName,
}: {
  companyID: any;
  companyName: string;
}) => {
  return (
    <>
      <div className="flex flex-col flex-wrap">
        <h3 className="font-[600] text-[13px] leading-[15.73px]   ">
          {companyID}
        </h3>
        <p className="font-[400] text-[13px] leading-[15.73px]   ">
          {companyName}
        </p>
      </div>
    </>
  );
};

export default MetaDataCompany;
