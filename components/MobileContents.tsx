"use client";

import React, { useEffect, useRef, useState } from "react";
import { useInfiniteQuery } from "@tanstack/react-query";
import FilterCondition from "@/app/(site)/components/FilterCondition";
import { getDisClosureData } from "@/lib/dummyBackend";
import InfiniteScroll from "react-infinite-scroller";
import DisclosureItem from "@/app/(site)/components/DisclosureItem";
import { getCurrentDate, getOneYearAgoDate } from "@/lib/utils";

interface Details {
  secCode: string;
  secName: string;
  categoryId: string;
}

interface AnalysisDetails {
  topicKor: string[];
  summarizeTinyKor: string;
  summarizeLongKor: string;
}

interface ClosureDataItem {
  id: string;
  dataDate: string;
  korName?: string;
  details: Details;
  analysisDetails: AnalysisDetails;
}

interface ClosureDataResponse {
  nextCursor: number;
  pages: ClosureDataItem[];
}

interface QueryParameters {
  startDate: string;
  endDate: string;
  exchangeType: "심천" | "홍콩";
  pageParams: any[];
  pages: ClosureDataItem[];
}

const MobileContents = () => {
  const observer = useRef<IntersectionObserver | null>(null); // Intersection Observer 인스턴스를 저장할 ref
  const lastElementRef = useRef<HTMLDivElement>(null); // 관찰할 마지막 요소를 참조

  const [queryParameters, setQueryParameters] = useState<QueryParameters>({
    startDate: getOneYearAgoDate(),
    endDate: getCurrentDate(),
    exchangeType: "심천",
    pageParams: [],
    pages: [],
  });

  const fetchDisClosureData = async ({
    pageParam,
  }: any): Promise<ClosureDataResponse> => {
    const closureData = await getDisClosureData(pageParam, queryParameters);

    return closureData;
  };

  const {
    data,
    error,

    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    status,
    isError,
    isFetching,
  } = useInfiniteQuery({
    queryKey: ["getClosureData", queryParameters],
    queryFn: ({ pageParam }) => fetchDisClosureData({ pageParam }),
    // getNextPageParam: (lastPage, pages) => lastPage.pageParams[0] + 1, // 출처 : https://velog.io/@cnsrn1874/react-query-useInfiniteQuery

    // 다음 페이지를 return 해야 함. 다음 페이지는 백엔드에서 담고 넘겨줘야만 함. 그러면, 여기에 담은게 fetchDisClosureData 의 pageParam 으로 넘어감
    getNextPageParam: (lastPage, allpages) => {
      console.log("lastPage📚📚", lastPage);
      console.log("allpages📚📚", allpages);

      const nextCursor = lastPage?.nextCursor;

      return nextCursor === -1 ? undefined : nextCursor;
    },

    initialPageParam: 0, // react-query V5 이후 추가
  });

  useEffect(() => {
    console.log("------------- Contents 컴포넌트 ------------------");
    console.log("1️⃣ queryFn 에서 바로 찍힘 data 📌📌 : ", data);
    console.log("1️⃣ queryFn 에서 바로 찍힘 data?.pages 📌📌 : ", data?.pages);
    console.log("1️⃣ hasNextPage 📌📌 : ", hasNextPage); // 여기에서는 true 인데, 왜 밑에서는 false?
    console.log("1️⃣ isFetching 📌📌 : ", isFetching);
  }),
    [data, hasNextPage, isFetching];

  return (
    <>
      <div className="lg:max-w-[772px] lg:w-full sm:w-full  h-screen mx-auto flex gap-[10px] flex-col ">


        <FilterCondition
          queryParameters={queryParameters}
          setQueryParameters={setQueryParameters}
        />

        {/* ⭐⭐⭐⭐⭐ 여기까지 */}
        <InfiniteScroll
          pageStart={0}
          loadMore={() => {
            if (!isFetching && !isFetchingNextPage && hasNextPage) {
              fetchNextPage();
            } else {
              return;
            }
          }}
          hasMore={hasNextPage}
          loader={
            <div className="loader" key={0}>
              {status === "pending" && <div>Loading...</div>}
            </div>
          }
          threshold={100}
        >
          <section className="h-[966px]  sm: min-w-[375px] lg:max-w-[772px] overflow-y-auto rounded-[3px] bg-[#FFFFFF] py-[10px] px-[14px] flex flex-col gap-[10px]">
            {data?.pages.map((page, pageIndex) => {
              console.log("⭐InfiniteScroll 페이지 데이터", page);
              if (pageIndex === data.pages.length - 1) {
                return page.pages.map((item, index) => {
                  const isLastElement =
                    pageIndex === data.pages.length - 1 &&
                    index === page.pages.length - 1;
                  return (
                    <>
                      <DisclosureItem
                        key={index + pageIndex}
                        queryParameters={queryParameters}
                        ref={isLastElement ? lastElementRef : null}
                        item={item}
                      />
                    </>
                  );
                });
              }
            })}
          </section>
          {/* <div className="w-full h-[200px]" ref={lastElementRef}>hello</div> */}
        </InfiniteScroll>

        {/* 
        <ListView
          // disClosureData={data?.pages}
          disClosureData={data && data}
          lastElementRef={lastElementRef && lastElementRef}
        /> */}
      </div>
      {!isFetching && !isFetchingNextPage && hasNextPage && (
        <div ref={lastElementRef} className="h-[100px] w-full bg-transparent" />
      )}
    </>
  );
};

export default MobileContents;
