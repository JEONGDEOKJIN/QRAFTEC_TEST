import React, { useEffect, useRef } from 'react';
import { useInfiniteQuery, UseInfiniteQueryResult, InfiniteData } from '@tanstack/react-query';
import { fetchItems, FetchItemsResponse, Item } from '@/lib/dummyData';

const InfiniteTest: React.FC = () => {
  const observerElem = useRef<HTMLDivElement | null>(null);

  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    status,
  }: UseInfiniteQueryResult<InfiniteData<FetchItemsResponse>> = useInfiniteQuery<
    InfiniteData<FetchItemsResponse>,
    Error, // 추가된 부분: 오류 타입 지정
    FetchItemsResponse // 추가된 부분: 반환 데이터 타입 지정
  >(
    'items',
    ({ pageParam = 0 }) => fetchItems(pageParam),
    {
      getNextPageParam: (lastPage) => (lastPage.hasMore ? lastPage.nextPage : undefined),
    }
  );

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasNextPage) {
          fetchNextPage();
        }
      },
      { threshold: 1 }
    );

    if (observerElem.current) {
      observer.observe(observerElem.current);
    }

    return () => {
      if (observerElem.current) {
        observer.unobserve(observerElem.current);
      }
    };
  }, [hasNextPage, fetchNextPage]);

  return (
    <div>
      {status === 'loading' && <p>Loading...</p>}
      {status === 'error' && <p>Error fetching data</p>}
      {status === 'success' &&
        data?.pages.map((page, pageIndex) => (
          <React.Fragment key={pageIndex}>
            {page.data.map((item: Item) => (
              <div key={item.id} style={{ padding: 20, border: '1px solid #ddd', margin: '10px 0' }}>
                <p>{item.title}</p>
                <p>{item.body}</p>
              </div>
            ))}
          </React.Fragment>
        ))}
      <div ref={observerElem} style={{ height: 1 }} />
      {isFetchingNextPage && <p>Loading more...</p>}
    </div>
  );
};

export default InfiniteTest;
