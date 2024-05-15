import ItemDescription from "@/components/ItemDescription";
import MetaDataCompany from "@/components/MetaDataCompany";
import MetaDataTime from "@/components/MetaDataTime";
import ButtonLarge from "@/components/elements/ButtonLarge";
import ButtonSmall from "@/components/elements/ButtonSmall";
import { getHongKongLocalTime, getShenzhenLocalTime } from "@/lib/utils";
import React, { forwardRef } from "react";
import { format } from "date-fns";

interface DisclosureItemProps {
  item: {
    dataDate?: string;
    korName?: string;
    details: {
      secCode: string;
      secName: string;
      categoryId: string;
    };
    analysisDetails: {
      topicKor?: string[];
      summarizeTinyKor?: string;
      summarizeLongKor?: string;
    };
  };
  queryParameters: any;
  ref: any;
}

const DisclosureItem: React.FC<DisclosureItemProps> = ({
  queryParameters,
  item,
  ref,
}) => {
  console.log("🔥🔥🔥 DisclosureItem item", item);

  // item.dataDate 예외처리 및  날짜형식 변환
  let formattedDataDate = "default data";
  if (item?.dataDate) {
    // ✅ dataDate가 존재하는지 확인
    try {
      formattedDataDate = format(
        new Date(item.dataDate),
        "yyyy/MM/dd HH:mm:ss"
      );
    } catch (error) {
      console.error("부정확한 dataDate format:", item.dataDate);
      formattedDataDate = "부정확한 date"; // ✅ 예외 발생 시 기본값 설정
    }
  }

  // 현지시간 가져오기
  const HONGKONG_LOCALTIME = getHongKongLocalTime();
  const SHENZHEN_LOCALTIME = getShenzhenLocalTime();
  const localtime =
    queryParameters.exchangeType === "홍콩"
      ? HONGKONG_LOCALTIME
      : SHENZHEN_LOCALTIME;
  const formattedLocaltime = format(new Date(localtime), "yyyy/MM/dd HH:mm:ss");

  return (
    <div className=" flex flex-col gap-[10px]   lg:max-w-[744px] w-full rounded-[8px] border-[#CED9E1] border-[0.5px] py-[12px] px-[20px]">
      <section
        ref={ref}
        className=" xsm:hidden lg:flex justify-between max-x-[704px] w-full h-[131px] py-[12px] px-[20px] bg-[#FFFFFF]"
      >
        <article className="xsm:hidden sm:hidden lg:flex flex-col gap-[20px] w-[174px] h-[107px] py-[12px]">
          <div className="w-[174px] h-[31px]  text-[#68696B]">
            <MetaDataTime
              criteria="공시일"
              time={formattedDataDate}
              // time={formattedDataDate && formattedDataDate}
            />
            <MetaDataTime
              criteria="현지시간"
              time={formattedLocaltime || "default formattedLocaltime"}
            />

            <MetaDataCompany
              companyID={item?.details.secCode || "default secCode"}
              companyNameKOR={item?.korName || "default korName "}
              companyNameFOREIGN={item?.details.secName || "default korName "}
              // getDisclosure.korName
              // getDisclosure.details.secName
            />
          </div>
        </article>

        <article className="xsm:hidden sm:hidden  lg:flex flex-col gap-[14px] w-[395.93px] h-[78px] p-[4px] bg-[#FFFFFF]">
          <div className="flex flex-row gap-[12px] w-[387.93px] h-[30px]">
            {item?.analysisDetails?.topicKor?.map((item, index) => {
              return (
                <ButtonSmall
                  key={index}
                  buttonName={item || "default topicKor"}
                />
              );
            }) || "default topicKor"}
          </div>
          <ButtonLarge
            buttonName={item?.details?.categoryId || "default categoryId"}
          />
        </article>
      </section>

      {/* ✅✅✅ 여기 section 을 하나 였다가, 2개로 분리시켰음 돌아가려면, ItemDescription 을 하나로 만들면 됨*/}
      <section className="xsm:hidden sm:hidden lg:flex flex-col gap-[20px] w-full max-w-[704px]  py-[12px] px-[20px]">
        <ItemDescription
          description={
            item?.analysisDetails.summarizeTinyKor || "default summarizeTinyKor"
          }
        />
      </section>
      <section className=" flex flex-col gap-[20px] w-full max-w-[704px]  py-[12px] px-[20px]">
        <article className="  xsm:flex xsm:flex-row xsm:gap-3    xsm:w-full xsm:h-[30px] lg:hidden ">
          <h3 className="text-[#FFFFFF] font-[500] text-[13px] leading-[15.51px] bg-[#758A8A] rounded-[40px] py-[8px] px-[10px]">
            {item.details.categoryId}
          </h3>

          <div className="flex flex-row">
            {item.analysisDetails.topicKor?.map((item, index) => {
              return (
                <div
                  key={index}
                  className="ml-1 font-[700] text-[12px] leading-[14.32px] text-[#002C2CB2] flex items-center"
                >
                  <span>#</span>
                  <span className="ml-1">{item}</span>
                </div>
              );
            })}
          </div>
        </article>
        <ItemDescription
          description={
            item?.analysisDetails.summarizeLongKor || "default summarizeLongKor"
          }
        />
        <article className="  xsm:flex xsm:flex-row xsm:gap-3    xsm:w-full xsm:h-[30px] lg:hidden ">
          <p className="font-[500] text-[#A1A2AB] text-[12px] tracking-[0.24px] leading-[26.4px] ">
            {item.dataDate
              ? item.dataDate.split("T")[0].replace(/-/g, "/")
              : "default Date"}
          </p>
          {/* tracking-[0.24px] : Letter : 2% -> 12px 의 2% 로써, 0.24px 로 계산해서 적용 */}

          <p className="font-[500] text-[#A1A2AB] text-[12px] tracking-[0.24px] leading-[26.4px]">
            {item.dataDate
              ? item.dataDate.split("T")[1].replace(/-/g, "/").split("Z")[0]
              : "default Date"}
          </p>
        </article>
      </section>
    </div>
  );
};

DisclosureItem.displayName = "DisclosureItem";

export default DisclosureItem;
