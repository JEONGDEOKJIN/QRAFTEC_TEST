import React from "react";
import DisclosureItem from "./DisclosureItem";

const ListView = ({ disClosureData, lastElementRef }: any) => {
  console.log("2️⃣ @ListView | disClosureData : ", disClosureData);
  // /  const currentPage = disClosureData?.length - 1;
  // console.log("@currentPage ⭐⭐: ", currentPage);

  // const arrLength = disClosureData?[currentPage]?.pages?.length;
  // const arrLength = disClosureData[0]?.length;
  // console.log("2️⃣ @ListView | arrLength : ", arrLength);

  return (
    <>
     <section className="h-[966px] overflow-y-scroll rounded-[3px] bg-[#FFFFFF] py-[10px] px-[14px] flex flex-col gap-[10px]">
      {disClosureData?.flatMap((page: any[], index: number, array: any[]) =>
        page.map((item: any, itemIndex: number) => {
          const isLastItem = index === array.length - 1 && itemIndex === page.length - 1; // Check if it's the last item in the last array
          return (
            <DisclosureItem
              ref={isLastItem ? lastElementRef : null}
              key={index - itemIndex} // Unique key for each item
              disClosureData={item}
            />
          );
        })
      )}
    </section>

      {/* <section className="h-[966px] overflow-y-scroll rounded-[3px] bg-[#FFFFFF] py-[10px] px-[14px] flex flex-col   gap-[10px]">
        {disClosureData &&
          disClosureData[0]?.map((item: any, index: number) => {
            if (arrLength === index + 1) {
              return (
                <DisclosureItem
                  ref={lastElementRef}
                  key={index}
                  disClosureData={item}
                />
              );
            } else {
              return <DisclosureItem key={index} disClosureData={item} />;
            }
          })}
      </section> */}

      {/* <section className="h-[966px] overflow-y-scroll rounded-[3px] bg-[#FFFFFF] py-[10px] px-[14px] flex flex-col   gap-[10px]">
        {disClosureData && disClosureData[currentPage]?.pages?.map(
            (item: any, index: number) => {
              if(arrLength === index + 1) {
              return <DisclosureItem ref={lastElementRef} key={index} disClosureData={item} />;
            } else {
              return <DisclosureItem key={index} disClosureData={item} />;
            }}
          )}
      </section> */}
      {/* [✅ 리팩토링] disClosureData[0] 에서의 0 은 page 0 선택을 의미. 다만, 페이지 이전, 앞, 을 하게 되면, 이 데이터가 필요할 수 있음 -> so, 변수화 시킬 필요 */}
    </>
  );
};

export default ListView;
