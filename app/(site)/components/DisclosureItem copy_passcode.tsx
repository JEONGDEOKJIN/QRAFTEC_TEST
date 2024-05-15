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
    <div className="flex flex-col gap-[10px] max-w-[744px] w-full rounded-[8px] border-[#CED9E1] border-[0.5px] py-[12px] px-[20px]">
      <section
        ref={ref}
        className="flex justify-between max-x-[704px] w-full h-[131px] py-[12px] px-[20px] bg-[#FFFFFF]"
      >
        <article className="flex flex-col gap-[20px] w-[174px] h-[107px] py-[12px]">
          <div className="w-[174px] h-[31px] text-[#68696B]">
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

        <article className="flex flex-col gap-[14px] w-[395.93px] h-[78px] p-[4px] bg-[#FFFFFF]">
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

      <section className="flex flex-col gap-[20px] w-full max-w-[704px]  py-[12px] px-[20px]">
        <ItemDescription
          description={
            item?.analysisDetails.summarizeTinyKor || "default summarizeTinyKor"
          }
        />
        <ItemDescription
          description={
            item?.analysisDetails.summarizeLongKor || "default summarizeLongKor"
          }
        />
      </section>
    </div>
  );
};

DisclosureItem.displayName = "DisclosureItem";

export default DisclosureItem;
