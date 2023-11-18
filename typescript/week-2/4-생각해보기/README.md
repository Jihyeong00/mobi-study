### export한 type을 받을 때 import type을 해야하는 이유에 대해서 알아보기

[![Velog's GitHub stats](https://velog-readme-stats.vercel.app/api?name=jihyeong00&slug=TypeScript-개발자처럼-사용하기-2-Type-Only-Imports-and-Exports)](https://velog.io/@jihyeong00/TypeScript-%EA%B0%9C%EB%B0%9C%EC%9E%90%EC%B2%98%EB%9F%BC-%EC%82%AC%EC%9A%A9%ED%95%98%EA%B8%B0-2-Type-Only-Imports-and-Exports)

---

### enum과 as const의 차이에 대해서 알아보기

[![Velog's GitHub stats](https://velog-readme-stats.vercel.app/api?name=jihyeong00&slug=TypeScript-개발자처럼-사용하기-3-Enum-as-const)](https://velog.io/@jihyeong00/TypeScript-%EA%B0%9C%EB%B0%9C%EC%9E%90%EC%B2%98%EB%9F%BC-%EC%82%AC%EC%9A%A9%ED%95%98%EA%B8%B0-3-Enum-as-const)

## 🤔 Enum은 사용하지 않는 것이 좋을까요?

enum은 키워드 자체가 열거형을 나타내고 있으므로 공통된 값들을 묶어주는데 용이합니다. 또한 관련된 값들을 그룹화 할 수 있으면 `key`와 `value`를 통해서 양방향 매핑을 해줍니다.

하지만 문제점도 있습니다. 고정된 값인데 양방향 매핑을 하니 102-3번지 => 롯데리아, 롯데리아 => 102-3번지 와 같은 2가지 주소가 매핑이 된다는 것입니다.

저 같은 경우 사용하지 않을 것 같습니다. 고정된 값을 주기위해서 타입스크립트에서 지원하는 union 이라는 유용한 타입이 있습니다. 이를 이용해 굳이 데이터 저장공간을 낭비하지 않을 것 같습니다.

또 as const를 통해 key를 통해 고정된 value 값을 불러올 수도 있습니다. 타입 안정성을 유지하면서 저장 공간을 확보하는 좋은 방법이 더 있는데 😅굳이?.. 라는 생각이 듭니다.
