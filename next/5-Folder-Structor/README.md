## Next-JS의 폴더구조 설정

앞에서 보았듯 Next-JS는 다양한 파일 컨벤션등이 이미 만들어져 있어서 기존에 만들었던 폴더 구조를 그대로 따라간다면 문제가 생길 수 있습니다.

따라서 Next-JS만의 폴더구조가 필요합니다.

백엔드()와 프론트엔드의 로직이 분리가 되어야하고. 관련된 폴더들은 근처에 있어 쉽게 찾을 수 있게 생각을 해보았습니다.

```sass
폴더구조
📁docs
    📝README.md : 프로젝트에 대해 개발자들끼리 정의한 글을 작성합니다. 컨벤션, 목적, 중간에 투입한 사람도 보고 알 수 있게 폴더 구조에 대해서도 작성합니다.
📁public
    📁imgs : 이미지 파일들을 관리합니다.
        📁jpg : jpg 확장자를 가진 파일들을 관리합니다.
        📁png : png 확장자를 가진 파일들을 관리합니다.
        📁svg : svg 확장자를 가진 파일들을 관리합니다.
📁src
    📁app -> 페이지에 관련된 파일들만 존재합니다.
        📁(auth) -> 로그인, 회원가입과 같은 로그인과 관련된 페이지들입니다.
        📁(beer)
            📁(info) -> 맥주의 정보를 얻어갈 수 있는 페이지들입니다.
            📁(recommend) -> 맥주를 추천해주는 페이지들입니다.
        📁(community)
            📁board -> 커뮤니티 할 수 있는 게시판 페이지들입니다.
        📁(user) -> 로그인을 했을 때 들어갈 수 있는 페이지들입니다.
            📁(community) -> 글쓰기, 글수정하기와 같이 로그인을 했을 때 들어갈 수 있는 페이지입니다.
            📁mypage -> 내 정보를 불러오고 관리하는 페이지입니다. 
    📁components -> 두 개 이상의 분류(ex: beer, community)에서 사용시 해당 폴더로 컴포넌트가 나눠집니다.
    📁constants
        📁api -> api와 관련된 상수들이 담겨져있습니다. (ex : PATH, END_POINTS)
        📁policy -> 사이트에 관한 상수들이 담겨져 있습니다. (ex : SIDE_MENUS)
    📁lib
        📁action -> api를 호출해 실행하는 함수들이 담겨져 있습니다. (axios, fetch..) 
        📁data -> 프론트엔드에서 백엔드 로직을 처리하기위해 만들어진 폴더로 prisma와 같은 sql 로직들이 작성됩니다.
    📁mock
        📁data -> mock data, place data들을 관리합니다.
        📁handlers -> msw를 이용하여 해당 mock data들이 요청을 가로채서 확인할 수 있게 관리합니다.
    📁storage
        📁cookie -> 로그인된 정보와 같이 들어간 사이트에서 관리할 것들을 저장하고 관리합니다.
    📁store -> 사이트 ui와 관련된 전역변수들을 관리합니다.
        📘use-modal.ts
    📁stories -> storybook을 이용하여 디자이너나 다른 개발자들에게 해당하는 컴포넌트나 페이지의 흐름을 보여줍니다.
        📁auth 
        📁beer
        ...
    📁style
        📁font -> 사용하는 font들을 관리합니다.
    📁types -> 사이트 전체의 type을 관리합니다.
        📘auth.type.ts
        📘beer.type.ts
        ...
    📁util -> 여러곳에서 사용할 수 있는 format 함수들을 관리합니다.
        📕array-helper...
```