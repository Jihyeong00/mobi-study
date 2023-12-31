### BeChu는 사용자의 개인 취향에 맞게 맥주를 추천해주는 사이트 입니다.

- 페이지별 요구사항
  - MainPage
      - [ ] 상품들을 지정된 갯수(20)에 따라 가져온다.
          - [ ] 해당 메인 페이지에서 처음으로 불러올 페이지의 경우 날마다 바뀐다.
          - [ ] 무한 스크롤 형식으로 나타낸다.
          - [ ] 상품이 끝까지 불러졌으면 1페이지부터 다시 가져온다.
  - DetailPage
      - [ ] 전달받은 주류 아이디(beerId)에 따라 세부 내용들이 보여진다.
  - DailyRecommendPage
      - [ ] 날마다 바뀌는 맥주 추천 페이지입니다. 단 한개의 게시물만 보여진다.
  - RandomRecommendPage
      - [ ] 계속해서 바뀌는 랜덤 맥주 추천 페이지입니다.
      - [ ] 이전에 랜덤으로 값을 가져왔다면 두번 연속 똑같은 값은 나오지 않아야한다.
  

- 공통 요구사항
    - [ ] 해당 내용들은 전부 한국어로 번역이 되어져있어야 한다.


- 프로그래밍 요구사항
    - [ ] 도메인 로직에 단위 테스트를 구현해야 한다.
    - [ ] 함수(또는 메서드)의 길이가 15라인을 넘어가지 않도록 구현한다.
    - [ ] indent(인덴트, 들여쓰기) depth를 3이 넘지 않도록 구현한다. 2까지만 허용한다.
    - [ ] atom 단위의 컴포넌트들은 스토리북 파일이 작성되어야 한다.
    - [ ] api에 관련된 타입들은 interface로 정의한다. 그외에는 type alias로 정의한다.