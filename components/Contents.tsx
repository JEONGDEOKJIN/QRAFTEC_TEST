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
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    status,
    isFetching,
  } = useInfiniteQuery({
    queryKey: ["getClosureData", queryParameters],
    queryFn: ({ pageParam }) => fetchDisClosureData({ pageParam }),

    getNextPageParam: (lastPage, allpages) => {
      const nextCursor = lastPage?.nextCursor;

      return nextCursor === -1 ? undefined : nextCursor;
    },

    initialPageParam: 0, // react-query V5 이후 추가
  });

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
          <section className="h-[966px] overflow-y-auto rounded-[3px] bg-[#FFFFFF] py-[10px] px-[14px] flex flex-col gap-[10px]">
            {data?.pages.map((page, pageIndex) => {
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
        </InfiniteScroll>
      </div>
      {!isFetching && !isFetchingNextPage && hasNextPage && (
        <div ref={lastElementRef} className="h-[100px] w-full bg-transparent" />
      )}
    </>
  );
};

export default Contents;
