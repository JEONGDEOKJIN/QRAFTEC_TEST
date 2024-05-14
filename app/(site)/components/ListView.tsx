import React from "react";
import DisclosureItem from "./DisclosureItem";

const ListView = ({ disClosureData, lastElementRef }: any) => {
  console.log("------------- ListView 컴포넌트 ------------------");
  console.log("2️⃣ @ListView | disClosureData : ", disClosureData);
  console.log(
    "2️⃣ @ListView | disClosureData?.[1] : ",
    disClosureData?.pages && disClosureData?.pages
  );

  // 현재 cursor 정보 가져오기
  const pageParamsLength = disClosureData?.pageParams?.length || 0; // pageParams의 길이
  const currentCursor = disClosureData?.pageParams?.[pageParamsLength - 1] || 0; // pageParams의 가장 끝값 가져옴
  console.log("현재 currentCursor 정보 : ", currentCursor);

  // 현재 page 가져오기
  const currentPage = disClosureData?.pages?.[currentCursor] || [];
  console.log("currentPage 보여줘야 하는 페이지 : ", currentPage);
  console.log("lastElementRef ", lastElementRef);

  return (
    <>
      <section className="h-[966px] overflow-y-scroll rounded-[3px] bg-[#FFFFFF] py-[10px] px-[14px] flex flex-col gap-[10px]">
        {currentPage.pages?.map((item: any, itemIndex: number) => {
          const isLastItem = itemIndex === currentPage.length - 1;
          return (
            <>
              <DisclosureItem
                // ref={isLastItem ? lastElementRef : null}
                key={item.id}
                disClosureData={item}
              />
              <div
                ref={lastElementRef}
                className="h-[100px] w-full bg-blue-300"
              />
            </>
          );
        })}
      </section>

      {/* <section className="h-[966px] overflow-y-scroll rounded-[3px] bg-[#FFFFFF] py-[10px] px-[14px] flex flex-col gap-[10px]">
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
    </section> */}

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
