import React from "react";

const MetaDataCompany = ({
  companyID,
  companyNameKOR,
  companyNameFOREIGN,
}: {
  companyID: any;
  companyNameKOR: string;
  companyNameFOREIGN: string;
}) => {
  return (
    <>
      <div className="flex flex-col flex-wrap mt-3 gap-1">
        <h3 className="font-[600] text-[13px] leading-[15.73px]   ">
          {companyID}
        </h3>
        <div className="flex flex-row">
          <p className="font-[600] text-[13px] leading-[15.73px]   ">
            {companyNameKOR}
          </p>
          <p className="font-[600] ml-2 text-[13px] leading-[15.73px]   ">
            {companyNameFOREIGN}
          </p>
        </div>
      </div>
    </>
  );
};

export default MetaDataCompany;
