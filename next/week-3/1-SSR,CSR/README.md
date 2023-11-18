## SSR과 CSR의 차이를 이해하고 정리하기

### 목차

1. [SSR에 대한 정리](#SSR)
2. [CSR에 대한 정리](#CSR)
3. [SSR과 CSR 비교하기](#SSR과-CSR-비교하기)

## SSR

<p align="center">
    <img src ="./img/ssr.png" width=400 height=300>
</p>

### SSR (Server Side Rendering)이란?

SSR이란 서버에서 해당 사이트를 만드는 데 필요한 HTML을 전부 만들어 준상태가 아닌 각각의 도메인 주소를 렌더링을 해주는 것으로 전통적인 웹 페이지가 만들어지는 과정이라고 할 수 있습니다.

여기서 말하는 전통적인 웹 페이지, SSR의 처리과정이란 다음과 같습니다.

1. 사용자가 특정 URL을 입력하거나 클릭하여 웹 사이트에 접속합니다.
2. 웹 브라우저는 DNS를 통해 도메인 이름을 해당하는 IP 주소로 변환하고, 프론트엔드 서버가 백엔드 서버에 HTTP 요청을 전송합니다.
3. 서버는 받은 HTTP 요청을 처리하고, 필요한 응답 값(HTML, CSS)을 찾아서 클라이언트에게 전송합니다.
4. 필요한 경우 서버는 동적으로 웹 페이지를 생성하기 위해 데이터를 검색합니다.
   서버는 정적 파일(HTML, CSS 등)을 포함한 응답을 브라우저에게 전달합니다.
5. 브라우저는 받은 HTML과 CSS를 이용하여 웹 페이지의 뼈대를 그리고 렌더링합니다. 이후 JS를 이용하여 이벤트 바인딩을 해줌으로서 페이지의 이벤트를 주어 생동감 있는 페이지로 만들 수 있습니다.

## CSR

<p align="center">
    <img src ="./img/csr.png" width=400 height=300>
</p>

### CSR (Client Side Rendering)이란?

CSR이란 서버에서 해당 사이트를 만드는 것이 아닌 Client에서 만드는 방식입니다. 페이지를 만드는데 필요한 파일들을 모두 한 번에 받은 후에 이후 Client에서 렌더링하는 방식입니다.

CSR의 과정은 다음과 같습니다.

1. 사용자가 특정 URL을 입력하거나 클릭하여 웹 사이트에 접속합니다.
2. 웹 브라우저는 DNS를 통해 도메인 이름을 해당하는 IP 주소로 변환하고, 서버에 HTTP 요청을 전송합니다.
3. 서버는 받은 HTTP 요청을 처리하고, 필요한 파일들(HTML, CSS, JavaScript 등)을 클라이언트에 응답으로 전송합니다.
4. 브라우저는 받은 파일들을 다운로드하고, HTML을 파싱하여 DOM을 생성하고 CSS를 적용하여 페이지를 렌더링합니다.
5. JavaScript가 포함된 경우, 브라우저는 해당 스크립트를 다운로드하고 실행하여 동적인 기능을 추가하고 이벤트를 처리합니다.

## SSR과-CSR-비교하기

<p align="center">
<table>
    <tr style="text-align: center;">
        <th>
        비교
        </th>
        <th>
        CSR
        </th>
        <th>
        SSR
        </th>   
    </tr>
    <tr>
        <td>렌더링 속도</td>
        <td></td>
        <td></td>
    </tr>
    <tr>
        <td></td>
        <td></td>
        <td></td>
    </tr>
    <tr>
        <td></td>
        <td></td>
        <td></td>
    </tr>
    <tr>
        <td></td>
        <td></td>
        <td></td>
    </tr>
    <tr>
        <td></td>
        <td></td>
        <td></td>
    </tr>
</table>
</p>