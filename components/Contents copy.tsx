import React, { useState } from "react";
import ListView from "@/app/(site)/components/ListView";
import QueryCondition from "@/app/(site)/components/FilterCondition";
import { fetchClosureData } from "@/api/api";
import { useInfiniteQuery } from "@tanstack/react-query";
import {
  InfiniteData,
  QueryFunctionContext,
  UseInfiniteQueryOptions,
} from "@tanstack/react-query";

type QueryParams = {
  cursor: number;
  startDate: string;
  endDate: string;
  exchangeType: string;
};

const queryFn = ({
  pageParam = 0,
}: QueryFunctionContext<["getClosureData", string]>) =>
  fetchClosureData({
    cursor: pageParam,
    ...JSON.parse(queryParameters),
  });

const Contents = () => {
  // const filterKeyword = "test"; // 이건 필터 값이 변경되면 -> 동적으로 useInfiniteQuery를 실행시키겠다는 것
  // const request = "test";

  // 📛 default 값 설정 이슈 | 📛 넘길 때도 왜 이렇게 해야 하는거지?
  const [queryParameters, setQueryParameters] = useState({
    startDate: "2022-01-01",
    endDate: "2022-12-01",
    exchangeType: "심천",
  });

  const {
    data: closureData, // closureData 라는 이름으로 data를 받아옴
    error,
    fetchNextPage, // 다음 페이지를 가져옴 | 실행시키면 -> useInfiniteQuery의 getNextPageParam 실행 -> pageParam 에 1 증가
    hasNextPage, // 다음 페이지가 있는지 확인 | 없으면 false 반환
    isFetching, // '현재 페이지' 불러오는지 확인 | true면 불러오는 중
    isFetchingNextPage, // '다음 페이지' 불러오는지 확인 | true면 불러오는 중
    status, // 상태 확인 | 'loading', 'error', 'success' 등
  } = useInfiniteQuery<InfiniteData<YourData>, Error>({
    queryKey: ["getClosureData", JSON.parse(queryParameters)], // 쿼리 키 | filter 키워드가 변경되면 동적호출
    queryFn,
    getNextPageParam: (lastPage, allPages) => lastPage.nextCursor,
  });

  return (
    <>
      <div className="max-w-[772px] w-full   h-screen mx-auto flex gap-[10px] flex-col ">
        <div>현재 상태 : {status}</div>
        <div>closureData 타입 : {typeof closureData}</div>

        <QueryCondition />

        <ListView />
      </div>
    </>
  );
};

export default Contents;
