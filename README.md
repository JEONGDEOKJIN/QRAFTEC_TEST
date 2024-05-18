# 🟦 개요

- [일정] 2024-05-10 ~ 2024-05-15  
- [과제 목표] 해외공시번역 AI 컨텐츠의 목록 표시 화면을 개발
- [요건] 기획요건, 디자인 요건 및 기존 개발 요건 반영하여 신규화면 개발

<br><br>

# 🟦 주요 요건 (요구 사항)

<br>

| 구분        | 구분        |          | 설명                                                                |
| ----------- | ----------- | -------- | ------------------------------------------------------------------- |
| 디자인 요건 |             |          | 피그마 참고                                                         |
| 기획 요건   | 조건 조회   | 거래소   | `심천 거래소` , `홍콩 거래소` 선택 할 수 있어야 함                  |
|             |             | 조회기간 | `시작일 기본값 : 현재일 - 1년`                                      |
|             |             |          | `종료일은 기본값은 현재일`                                          |
|             |             |          | `시작일과 종료일은 선택 가능하며, 시작일은 종료일보다 앞설 수 없음` |
|             | 목록 조회   |          | 목록은 조건에 해당하는 모든 컨텐츠가 표시                           |
|             |             |          | `무한 스크롤` 기능                                                  |
|             |             |          | `한 페이지 10개 구성`                                               |
|             | 콘텐츠 구성 | 시간정보 | 공시일 및 현지시간 표시                                             |
|             |             | 공시대상 | 공시 대상의 종목 코드와 종목명 표시                                 |
|             |             |          | 종목 코드, 종목명은 대표값만 사용                                   |
|             |             |          | 종목명은 한국어 명칭, 영문 명칭 모두 사용                           |
|             |             |          | 공시 제목 및 내용                                                   |
|             |             | 토픽     | 최대 3건                                                            |
|             |             | 카테고리 | 한국어 명칭 변환                                                    |
| 개발팀 요건 | 스택        |          | Next.js, Typescript, Tailwind, Shadcn, React-Query 사용             |
| 추가 과제   |             |          | 모바일 반응형 제작                                                  |

<br><br>

# 🟦 주요 기술 과제 

<br>

[담당역할]  AI 컨텐츠의 목록 PC 및 모바일 버전 화면 제작 

<br>

| 구분     | 설명                                                                                                                                                                                                            |
| ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 조건 조회  | - `드롭다운 필터` 및 `달력 UI` 는 `Shadcn` 라이브러리 사용 <br>- 디자인 커스텀 후 `Interaction` 작업 수행                                                                                                                                 |
| 목록 조회  | - 피그마 토대로 컴포넌트 제작 <br>- useInfiniteQuery 및 React-infinite-scroll 사용하여, 스크롤이 특정 ref 에 도착하면 -> loadMore 이벤트가 발생하여 -> 이벤트 핸들러로써 fetchNextPage 를 실행하여 목록 view data fetch<br>- `PAGE_SIZE` 를 설정하여 한번에 조회 되는 목록을 조절 |
| 콘텐츠 구성 | - 기획 요건 및 피그마 요건 참고하여 제작                                                                                                                                                                                      |
| 모바일 화면 | - Tailwind config.ts 에서 `screens` 를 `300px 미만` 으로 설정하여 제작<br>- `MobileContens` 컴포넌트 , `DisclosureItem` 컴포넌트에서 주로 모바일 반응형 작업을 진행했습니다. <br>- 주석으로 `✅✅✅` 표시하여 설명해두었습니다.                                          |
|        |                                                                                                                                                                                                               |
  
<br><br>


# 🟦 트러블 슈팅 


<details>
  <summary> 무한 스크롤 기능 구현시 useInfiniteQuery 를 사용하여 (dummy) 백엔드에서 filter 처리를 한 이유 </summary>

1. filter 를 클라이언트에서 할지 vs 백엔드에서 할지에 대한 고민 

- 클라이언트에서 filter 메서드로 필터 해주는 경우

```bash
1. 처음에 DB 에서 모든 데이터를 가져옴
2. react-query 에 저장 
3. filter 메소드 적용
4. map 으로 뿌려주기 

- 단점 : 한꺼번에 많은 데이터를 받아오게 된다. -> 받아오는데 느려진다.
- 장점 : 서버 부하가 적음. 통신을 한번만 하면 됨. 
```

- 백엔드 에서 filter 메서드로 필터 해주는 경우

```bash
1. 클라이언트가 특정 쿼리에 대해 요청함 
2. 서버는 DB 에서 데이터를 가져오고
3. 해당 쿼리키를 사용해서 filter 메서드 작업을 함 
4. 그래서, 필터링 된 데이터만! 클라이언트에 전달함 
5. 클라이언트는 뿌려주기만 하면 됨. 

- 장점 
1. 브라우저보다 서버에서 자원이 더 많음 ex) 멀티스레드 기능도 있음 
 -> 동일 계산을 빠르게 처리할 수 있음. 
2. 클라이언트 부담이 적음. 

- 단점
1. 서버 작업을 요청 빈도가 많아짐 -> 사용자 속도 저하될 수 있음. 

- 단점 보완
1. useInfiniteQuery 를 사용할 경우, '전체 page 중 slice 된 페이지' 만 보내면 
-> 빠르게 응답 가능 -> 사용자 속도가 생각보다 많이 저하되지 않을 수 있음. 
```

- 결론

```bash
서버에서 처리할 때, useInfiniteQuery 를 사용하면 
페이지를 slice 해서 보내기 때문에 -> 통신 횟수가 많아지는 단점을 보완할 수 있음. 
클라이언트는 받게 되는 데이터 양이 적기 때문에 빠르게 렌더할 수 있음. 

클라에서 filter 작업을 하게 되면 '렌더에 굳이 필요없는 데이터' 까지 들고 있게 됨 -> 비용 발생

따라서 
'렌더에 필요한 데이터' 를 '즉각적으로 받기' 를 통해 '자원을 효율적' 으로 쓸 수 있는 
useInfiniteQuery 를 사용한 백엔드 filter 방안으로 선택
```

</details>



<br>


# 🟦 시연 

<details>
  <summary> 1. 조건 조회  </summary>

![조건조회](https://i.imgur.com/7jYzD0J.png)(https://youtu.be/5uHmTbK1HbA)
</details>

<details>
  <summary> 2. 목록 조회  </summary>

![목록 조회](https://i.imgur.com/zblYDK8.png)(https://youtu.be/zhgtRtnNCQc)



</details>

<details>
  <summary> 3. 모바일 화면  </summary>

<img src="https://i.imgur.com/MpvxdIg.png" alt="모바일 화면" width="500">

</details>
  
<br><br>

# 🟦 프로젝트 시작하기 
```bash
# QRAFTEC_TEST/ai-content 디렉토리에서 
yarn install    # 의존성 설치
yarn dev    # 프로젝트 시작
