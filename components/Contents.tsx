"use client";

import React, { useEffect, useRef, useState } from "react";
import ListView from "@/app/(site)/components/ListView";
import { useInfiniteQuery } from "@tanstack/react-query";
import FilterCondition from "@/app/(site)/components/FilterCondition";
import { getDisClosureData } from "@/lib/dummyBackend";
import InfiniteScroll from "react-infinite-scroller";
import DisclosureItem from "@/app/(site)/components/DisclosureItem";
import { getCurrentDate, getOneYearAgoDate } from "@/lib/utils";
// yarn add react-infinite-scroller
// yarn add --dev @types/react-infinite-scroller // ⭐ 타입 설치 필수

// -----------------이전 타입 -----------------
// interface Details {
//   secCode: string;
//   secName: string;
//   categoryId: string;
// }

// interface AnalysisDetails {
//   topicKor: string[];
//   summarizeTinyKor: string;
//   summarizeLongKor: string;
// }

// interface ClosureDataItem {
//   id: string;
//   dataDate: string;
//   korName?: string;
//   details: Details;
//   analysisDetails: AnalysisDetails;
// }

// interface ClosureDataResponse {
//   nextCursor: number;
//   pages: ClosureDataItem[];
// }

// interface QueryParameters {
//   startDate: string;
//   endDate: string;
//   exchangeType: "심천" | "홍콩";
//   pageParams: any[];
//   pages: ClosureDataItem[];
// }
// -------------------이전 타입 -----------------

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
  id: string; // 수정
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

  const [currentPage, setCurrentPage] = useState(0); // 📛[✅ 리팩토링] 이전, 다음 페이지를 위한 변수 추가 [✅ 리팩토링

  // 📛 default 값 설정 이슈 | 📛 넘길 때도 왜 이렇게
  const [queryParameters, setQueryParameters] = useState<QueryParameters>({
    startDate: getOneYearAgoDate(), // "2024-05-06"
    endDate: getCurrentDate(), // "2025-05-06" 이런 형식으로 했을 때 데이터 들어갔음
    exchangeType: "심천",
    pageParams: [], // 초기 페이지 매개변수 배열 (#📛꼭필요?)
    pages: [], // 초기 페이지 데이터 배열 (#📛꼭필요?)
  });

  const fetchDisClosureData = async ({
    pageParam,
  }: any): Promise<ClosureDataResponse> => {
    console.log("---------------fetchDisClosureData ---------------");
    console.log("@fetchDisClosureData pageParam💎💎", pageParam);
    console.log("@fetchDisClosureData queryParameters💎💎", queryParameters);

    const closureData = await getDisClosureData(pageParam, queryParameters);
    console.log("closureData📌", closureData);

    return closureData;
  };

  const {
    data,
    error,

    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    status,
    isFetching,
  } = useInfiniteQuery({
    queryKey: ["getClosureData", queryParameters],
    queryFn: ({ pageParam }) => fetchDisClosureData({ pageParam }),
    // getNextPageParam: (lastPage, pages) => lastPage.pageParams[0] + 1, // 출처 : https://velog.io/@cnsrn1874/react-query-useInfiniteQuery

    // 다음 페이지를 return 해야 함. 다음 페이지는 백엔드에서 담고 넘겨줘야만 함. 그러면, 여기에 담은게 fetchDisClosureData 의 pageParam 으로 넘어감
    getNextPageParam: (lastPage, allpages) => {
      console.log(
        "------------- Contents 컴포넌트 | getNextPageParam() ------------------"
      );
      console.log("lastPage📚📚", lastPage);
      console.log("allpages📚📚", allpages);

      const nextCursor = lastPage?.nextCursor;
      console.log("nextCursor :", nextCursor);

      // ✅✅✅ 여기를 이렇게 변경하니까, 다음 페이지가 왔어
      // nextCursor === -1 일 때의 로직을 점검해야
      return nextCursor === -1 ? undefined : nextCursor;
      // return nextCursor === -1 ? 10 : nextCursor;
      // return nextCursor
    },
    // [이게 진짜⭐⭐⭐] https://velog.io/@bnb8419/React-Query-%EB%AC%B4%ED%95%9C%EC%8A%A4%ED%81%AC%EB%A1%A4%EC%A0%95%EB%A6%AC#getnextpageparam-getpreviouspageparam

    initialPageParam: 0, // react-query V5 이후 추가된 옵션✅
  });

  // const handleLoadMore = (page: number) => {
  //   fetchNextPage();
  // };

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
      <div className="max-w-[772px] w-full   h-screen mx-auto flex gap-[10px] flex-col ">
        {<div>현재 상태 : {status}</div>}

        {isFetchingNextPage && <div>Loading more...</div>}

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

        <InfiniteScroll
          pageStart={0}
          // loadMore={fetchNextPage}

          loadMore={() => {
            // if (!isFetching) fetchNextPage();
            fetchNextPage();
          }}
          hasMore={hasNextPage}
          loader={
            <div className="loader" key={0}>
              {status === "loading" && <div>Loading...</div>}
            </div>
          }
          threshold={100}
        >
          {/* 가장 업데이트된 pages 들이 제일 끝에있으므로, 제일 끝 인덱스로만 돌림*/}
          <section className="h-[966px] overflow-y-auto rounded-[3px] bg-[#FFFFFF] py-[10px] px-[14px] flex flex-col gap-[10px]">
            {data?.pages.map((page, pageIndex) => {
              console.log("⭐InfiniteScroll 페이지 데이터", page);
              if (pageIndex === data.pages.length - 1) {
                return page.pages.map((item, itemIndex) => {
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
        </InfiniteScroll>
        {/* 

        <ListView
          // disClosureData={data?.pages}
          disClosureData={data && data}
          lastElementRef={lastElementRef && lastElementRef}
        /> */}

        {/* ⭐ 마지막 요소를 참조하기 위한 div */}
        {/* <div ref={lastElementRef} className="h-[100px] w-full bg-blue-300" /> */}

        {/* 여기 페이지가 변수로 업데이트 되어야 자동으로 바뀜 */}
        {/* <ListView disClosureData={data?.pages[1].pages} /> */}
      </div>
    </>
  );
};

export default Contents;
