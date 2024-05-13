"use client";

import React, { useEffect, useRef, useState } from "react";
import ListView from "@/app/(site)/components/ListView";
import { fetchDisClosureData } from "@/api/api";
import { useInfiniteQuery } from "@tanstack/react-query";
import FilterCondition from "@/app/(site)/components/FilterCondition";
import { is } from "date-fns/locale";
import { Concert_One } from "next/font/google";

const Contents = () => {
  const observer = useRef<IntersectionObserver | null>(null);; // Intersection Observer 인스턴스를 저장할 ref
  const lastElementRef = useRef<HTMLDivElement>(null);; // 관찰할 마지막 요소를 참조

  const [currentPage, setCurrentPage] = useState(0); // 📛[✅ 리팩토링] 이전, 다음 페이지를 위한 변수 추가 [✅ 리팩토링

  // 📛 default 값 설정 이슈 | 📛 넘길 때도 왜 이렇게
  const [queryParameters, setQueryParameters] = useState({
    startDate: "2024-05-01",
    endDate: "2024-05-06",
    exchangeType: "심천",
    pageParams: [], // 초기 페이지 매개변수 배열 (#📛꼭필요?)
    pages: [], // 초기 페이지 데이터 배열 (#📛꼭필요?)
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
    // getNextPageParam: (lastPage, pages) => lastPage.pageParams[0] + 1, // 출처 : https://velog.io/@cnsrn1874/react-query-useInfiniteQuery
      getNextPageParam: (lastPage, pages) => lastPage.nextCursor, // https://velog.io/@bnb8419/React-Query-%EB%AC%B4%ED%95%9C%EC%8A%A4%ED%81%AC%EB%A1%A4%EC%A0%95%EB%A6%AC#getnextpageparam-getpreviouspageparam


    // getNextPageParam: (lastPage) => lastPage?.pageParams[0] + 1 , // 반환객체가 page 값이 한개만 나옴??
    /* 페이지 2를 했을 때, 예상되는 반환객체가 
        {
          data = {
            pageParams : [0,1],
            pages : [{data0},{data1}]
          } 이거라면 -> 뒤로 가기, 페이지 기억, 등을 할 수 있지 않을까
      */

    initialPageParam: undefined, // react-query V5 이후 추가된 옵션✅
  });

  useEffect(() => {
    console.log("1️⃣ queryFn 에서 바로 찍힘 data 🙏🙏 : ", data);
    console.log("1️⃣ queryFn 에서 바로 찍힘 data?.pages 🙏🙏 : ", data?.pages);
  }),
    [data];
  // console.log("data ✅ : ", data);
  // console.log("data ✅ : ", typeof data);


  // 마지막 요소 관찰 시킬지 말지를 판단 -> 관찰여부 결정
  useEffect(() => {

    console.log("⭐⭐⭐ 첫번째 effect")

    const currentObserver = observer.current;
    const currentElement = lastElementRef.current; //

    if (isFetchingNextPage || !hasNextPage || !currentObserver || !currentElement) return; // 다음 페이지를 가져오는 중(isFetchingNextPage)이거나 다음 페이지가 없다(!hasNextPage)면 아무것도 하지 않음

    // 마지막 요소를 관찰함 
    if (currentElement) {
      currentObserver.observe(currentElement); 
    }

    return () => {
      if (currentElement && currentObserver) {
        currentObserver.unobserve(currentElement); // 컴포넌트가 언마운트 될 때, 관찰을 중지
      }
    };
  } , [isFetchingNextPage, hasNextPage]);


   // IntersectionObserver 초기화
   useEffect(() => {
    
    console.log("⭐⭐⭐ 두번째 effect") 

    // IntersectionObserver 콜백 함수로 초기화
    observer.current = new IntersectionObserver(
      
      (entries) => {
        console.log('Observer triggered', entries[0].isIntersecting);
        console.log('hasNextPage', hasNextPage);

        // 마지막 요소가 화면에 보이고 있고 더 로드할 페이지가 있으면 다음 페이지 로드
        // if (entries[0].isIntersecting && hasNextPage) {
        if (entries[0].isIntersecting && hasNextPage) {
          fetchNextPage();
        }
      },
      { threshold: 0.1 } // 마지막 요소가 10% 보일 때 콜백 트리거
    );
  }, []);


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
            onClick={fetchNextPage}
            disabled={isFetchingNextPage}
          >
            다음 페이지
          </button>
        }

        <FilterCondition />

        <ListView disClosureData={data?.pages} lastElementRef={lastElementRef} />
        {/* 여기 페이지가 변수로 업데이트 되어야 자동으로 바뀜 */}
        {/* <ListView disClosureData={data?.pages[1].pages} /> */}
      </div>
    </>
  );
};

export default Contents;
