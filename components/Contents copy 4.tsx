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

const Contents = () => {
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

  const handleNextPage = () => {
    // if (!isFetching && status !== "pending")
      console.log("loadMore 함수 실행⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐ ");
      
    if (!isFetching && status !== "pending") fetchNextPage();
  };

  return (
    <>
      <div className="max-w-[772px] w-full   h-screen mx-auto flex gap-[10px] flex-col ">
        {
          <div>
            현재 상태 : {status}
            {isFetchingNextPage && <div>Loading more...</div>}{" "}
          </div>
        }

        {/* 다음 페이지 로드 버튼 */}
        {
          <button
            className="bg-gray-800 w-[100px] h-[30px] rounded-lg text-white"
            onClick={() => {
              console.log("Button clicked -> fetchNextPage() 트리거");
              fetchNextPage();
            }}
            disabled={isFetchingNextPage}
          >
            다음 페이지
          </button>
        }

        <FilterCondition
          queryParameters={queryParameters}
          setQueryParameters={setQueryParameters}
        />

        {/* ⭐⭐⭐⭐⭐ 여기까지 */}
        {/* <InfiniteScroll
          pageStart={0}
          // loadMore={fetchNextPage}
          
          loadMore={() => {
            console.log("⭐⭐⭐⭐⭐⭐⭐loadMore 함수 실행");
          }}
          // loadMore={() => {
          //   // if (!isFetching) fetchNextPage();
          //   fetchNextPage();
          // }}
          hasMore={hasNextPage}
          loader={
            <div className="loader" key={0}>
              {status === "pending" && <div>Loading...</div>}
            </div>
          }
          threshold={100}
        >
          <section className="h-[966px] overflow-y-auto rounded-[3px] bg-[#FFFFFF] py-[10px] px-[14px] flex flex-col gap-[10px]">
            {data?.pages.map((page, pageIndex) => {
              console.log("⭐InfiniteScroll 페이지 데이터", page);
              if (pageIndex === data.pages.length - 1) {
                return page.pages.map((item, index) => {
                  console.log("⭐InfiniteScroll 아이템 데이터", item);
                  // ⭐ 좀 못생겼지만, 이렇게 하면 데이터가 꽂힌다.
                  return (
                    <>
                      <DisclosureItem
                        key={item.id}
                        queryParameters={queryParameters}
                        item={item}
                      />
                    </>
                  );
                });
              }
            })}
          </section>
        </InfiniteScroll> */}
        <InfiniteScroll
          pageStart={0}
          loadMore={handleNextPage}
          hasMore={true || false}
          // loader={
          //   <div className="loader" key={0}>
          //     Loading ...
          //   </div>
          // }
          // threshold={1}
        >
          <div>
            {data?.pages.map((item, index) => {
              return (
                <div key={index}>
                  {item.pages.map((item, index) => {
                    return <p key={index}>{JSON.stringify(item)}</p>;
                  })}
                </div>
              );
            })}
          </div>
        </InfiniteScroll>

        {/* 
        <ListView
          // disClosureData={data?.pages}
          disClosureData={data && data}
          lastElementRef={lastElementRef && lastElementRef}
        /> */}

        {/* ⭐ 마지막 요소를 참조하기 위한 div */}
        {/* <div ref={lastElementRef} className="h-[100px] w-full bg-blue-300" /> */}
      </div>
    </>
  );
};

export default Contents;
