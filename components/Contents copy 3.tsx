"use client";

import React, { useEffect, useRef, useState } from "react";
import ListView from "@/app/(site)/components/ListView";
import { fetchDisClosureData } from "@/api/api";
import { useInfiniteQuery } from "@tanstack/react-query";
import FilterCondition from "@/app/(site)/components/FilterCondition";
import { is } from "date-fns/locale";
import { Concert_One } from "next/font/google";
import { getDisClosureData } from "@/lib/dummyBackend";

interface AnalysisDetails {
  topicKor: string;
  summarizeTinyKor: string;
  summarizeLongKor: string;
}

interface Details {
  secCode: string;
  secName: string;
  categoryId: string;
}

interface ClosureDataItem {
  id: number;
  dataDate: string;
  korName?: string;
  details: Details;
  analysisDetails: AnalysisDetails;
  nextCursor?: number; // nextCursor 속성 추가
}

const Contents = () => {
  const observer = useRef<IntersectionObserver | null>(null); // Intersection Observer 인스턴스를 저장할 ref
  const lastElementRef = useRef<HTMLDivElement>(null); // 관찰할 마지막 요소를 참조

  const [currentPage, setCurrentPage] = useState(0); // 📛[✅ 리팩토링] 이전, 다음 페이지를 위한 변수 추가 [✅ 리팩토링

  // 📛 default 값 설정 이슈 | 📛 넘길 때도 왜 이렇게
  const [queryParameters, setQueryParameters] = useState({
    startDate: "2024-05-01",
    endDate: "2024-05-06",
    exchangeType: "심천",
    pageParams: [], // 초기 페이지 매개변수 배열 (#📛꼭필요?)
    pages: [], // 초기 페이지 데이터 배열 (#📛꼭필요?)
  });

  const fetchDisClosureData = async ({
    pageParam,
  }: any): Promise<ClosureDataItem[]> => {
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
  } = useInfiniteQuery({
    queryKey: ["getClosureData", queryParameters],
    queryFn: ({pageParam}) => fetchDisClosureData({pageParam})  ,
    // getNextPageParam: (lastPage, pages) => lastPage.pageParams[0] + 1, // 출처 : https://velog.io/@cnsrn1874/react-query-useInfiniteQuery

    // 다음 페이지를 return 해야 함. 다음 페이지는 백엔드에서 담고 넘겨줘야만 함. 그러면, 여기에 담은게 fetchDisClosureData 의 pageParam 으로 넘어감
    getNextPageParam: (lastPage) => {
      console.log(
        "------------- Contents 컴포넌트 | getNextPageParam() ------------------"
      );

      console.log("lastPage📚📚", lastPage);


      const nextCursor = lastPage[0]?.nextCursor;
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

  useEffect(() => {
    console.log("------------- Contents 컴포넌트 ------------------");
    console.log("1️⃣ queryFn 에서 바로 찍힘 data 📌📌 : ", data);
    console.log("1️⃣ queryFn 에서 바로 찍힘 data?.pages 📌📌 : ", data?.pages);
    console.log("1️⃣ hasNextPage 📌📌 : ", hasNextPage); // 여기에서는 true 인데, 왜 밑에서는 false?
  }),
    [data , hasNextPage];

  // 마지막 요소 관찰 시킬지 말지를 판단 -> 관찰여부 결정
  useEffect(() => {
    console.log("------------- Contents 컴포넌트 ------------------");
    console.log("⭐⭐⭐ 첫번째 effect");

    const currentObserver = observer.current;
    const currentElement = lastElementRef.current; //
    console.log("currentElement", currentElement);

    if (
      isFetchingNextPage ||
      !hasNextPage ||
      !currentObserver ||
      !currentElement
    )
      return; // 다음 페이지를 가져오는 중(isFetchingNextPage)이거나 다음 페이지가 없다(!hasNextPage)면 아무것도 하지 않음

    if (currentElement) {
      console.log("currentElement observer에 등록")
      currentObserver.observe(currentElement);
    }

    return () => {
      if (currentElement && currentObserver) {
        currentObserver.unobserve(currentElement); // 컴포넌트가 언마운트 될 때, 관찰을 중지
      }
    };
  }, [isFetchingNextPage, hasNextPage]);

  // IntersectionObserver 초기화
  useEffect(() => {
    console.log("⭐⭐⭐ 두번째 effect");
    console.log("hasNextPage 1 ", hasNextPage); // true 🔵🔵🔵


    // 이 사이에 hasNextPage 가 false 가 되었고 -> useEffect 가 돌았고 -> 그래서 밑에 부분들이 전부 false 가 됨? 

    // IntersectionObserver 콜백 함수로 초기화
    observer.current = new IntersectionObserver(
      (entries) => {
        console.log("entries 3 ", entries);
        console.log("Observer triggered", entries[0].isIntersecting);
        console.log("hasNextPage 2 ", hasNextPage); // false 📛📛📛📛📛 
        
        // 마지막 요소가 화면에 보이고 있고 더 로드할 페이지가 있으면 다음 페이지 로드
        // if (entries[0].isIntersecting && hasNextPage) {
          if (entries[0].isIntersecting && hasNextPage) {
          console.log("hasNextPage 2-1  ", hasNextPage); // false📛📛📛📛📛 
          fetchNextPage();
        } else {
          console.log("hasNextPage 2-2  ", hasNextPage); // false📛📛📛📛📛 
        }
        console.log("hasNextPage4", hasNextPage); // false 📛📛📛📛📛 
      },
      { threshold: 0.1 } // 마지막 요소가 10% 보일 때 콜백 트리거
    );
    
    console.log("hasNextPage5", hasNextPage); // true

    return () => {
      if (observer.current) {
        observer.current.disconnect(); // 📛📛📛 컴포넌트가 언마운트될 때 관찰을 중지
      }
    };
  }, [hasNextPage]);

  return (
    <>
      <div className="max-w-[772px] w-full   h-screen mx-auto flex gap-[10px] flex-col ">
        {<div>현재 상태 : {status}</div>}

        {isFetchingNextPage && <div>Loading more...</div>}

        {/* 잘 나오는지 테스트 */}
        {/* {status === "success" &&
          data.pages.map((item, index) => (
            <div key={index}>{JSON.stringify(item)}</div>
          ))} */}

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

        <FilterCondition />

        <ListView
          // disClosureData={data?.pages}
          disClosureData={data && data}
          lastElementRef={lastElementRef && lastElementRef}
        />
        {/* 여기 페이지가 변수로 업데이트 되어야 자동으로 바뀜 */}
        {/* <ListView disClosureData={data?.pages[1].pages} /> */}
      </div>
    </>
  );
};

export default Contents;
