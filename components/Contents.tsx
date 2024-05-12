"use client";

import React, { useState } from "react";
import ListView from "@/app/(site)/components/ListView";
import { fetchDisClosureData } from "@/api/api";
import { useInfiniteQuery } from "@tanstack/react-query";
import FilterCondition from "@/app/(site)/components/FilterCondition";

const Contents = () => {
  // const filterKeyword = "test"; // 이건 필터 값이 변경되면 -> 동적으로 useInfiniteQuery를 실행시키겠다는 것
  // const request = "test";

  // 📛 default 값 설정 이슈 | 📛 넘길 때도 왜 이렇게
  const [queryParameters, setQueryParameters] = useState({
    startDate: "2024-05-01",
    endDate: "2024-05-06",
    exchangeType: "심천",
  });

  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    status,
  } = useInfiniteQuery({
    queryKey: ["getClosureData", queryParameters],
    queryFn: async ({ pageParam = 0 }) =>
      fetchDisClosureData({
        ...queryParameters,
        // cursor: pageParam // 이렇게 gpt 가 안내 했는데, page 로 해야 백엔드랑 맞음 📛📛📛
        page: pageParam,
      }),
    getNextPageParam: (lastPage) => lastPage?.nextCursor,
    initialPageParam: undefined, // react-query V5 이후 추가된 옵션✅
  });

  const flatData = data ? data.pages.flatMap((page) => page) : [];

  return (
    <>
      <div className="max-w-[772px] w-full   h-screen mx-auto flex gap-[10px] flex-col ">
        {<div>현재 상태 : {status}</div>}

        {/* {status === "success" &&
          data.pages
            .flatMap((page) => page)
            .map((item, index) => (
              <div key={index}>{JSON.stringify(item)}</div> // JSON.stringify 사용하여 객체 내용을 문자열로 변환하여 표시
            ))} */}
        {/* 데이터 확인을 위해 평탄화된 데이터 간단히 출력 */}
        {status === "success" &&
          flatData.map((item, index) => (
            <div key={index}>{JSON.stringify(item)}</div>
          ))}



        {/* 데이터 로딩 중인 경우 표시 */}
        {isFetchingNextPage && <div>Loading more...</div>}

        {/* 다음 페이지 로드 버튼 */}
        { (
          <button
            className="bg-gray-800 w-[100px] h-[30px] rounded-lg text-white"
            onClick={fetchNextPage}
            disabled={isFetchingNextPage}
          >
            다음 페이지 
          </button>
        )}
        {/* <button
        className="bg-gray-800 w-[100px] h-[30px] rounded-lg text-white" 
        onClick={fetchNextPage}>
          다음 페이지
        </button> */}

        <FilterCondition />

        <ListView />
      </div>
    </>
  );
};

export default Contents;
