import MetaDataTime from "@/components/MetaDataTime";
import ButtonLarge from "@/components/elements/ButtonLarge";
import ButtonSmall from "@/components/elements/ButtonSmall";
import React from "react";

const ListView = () => {
  return (
    <>
      <section>
        <div className="flex flex-col">
          <MetaDataTime criteria="공시일" time="2024/05/12 22:52:00" />
          <MetaDataTime criteria="현지시간" time="2024/05/12 22:52:00" />
        </div>
        <div>
          <p>002667</p>
          <p>레마정밀</p>
        </div>
        <div>
          <ButtonSmall buttonName="주식 발행" />
          <ButtonSmall buttonName="지분 인수" />
          <ButtonSmall buttonName="현금 지급" />
          <ButtonLarge buttonName="일반공시" />
        </div>
      </section>
    </>
  );
};

export default ListView;
