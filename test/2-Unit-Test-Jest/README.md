## 단위 테스트 (Unit Test)

단위 테스트는 응용 프로그램에서 테스트 가능한 가장 작은 소프트웨어를 실행하여 예상대로 동작하는지 확인하는 테스트입니다.

### Jest (testing library)
Jest는 meta팀에서 만든 테스팅 라이브러리 입니다. 기존에 사용하던 Test 방식은 Mocha나 Jasmin을 통해 test runner를 진행하였고 expect, chai를 이용하여 test matcher를 진행하였습니다. 이와 같이 여러가지 일을 하다보니 사용자에게 불편함을 주었고 이에 출시한 Jest는 하나로 통합되어 있기에 프레임워크라고 불리기도 하였습니다.

### Jest의 기본 패턴
```javascript
description("단위 설명" , () => {
    test("테스트 설명", () => {
        expect("검증 대상").toXxx("기대 결과");
    });
    test("테스트 설명", () => {
        expect("검증 대상").toXxx("기대 결과");
    });
})
```

``toXxx``에 해당하는 부분이 test matcher로서 expect에서 반환된 값과 비교를 하여 해당 test의 성공여부를 나타내줍니다.

### 단위 테스트 작성 방법

단위 테스트는 테스트 가능한 가장 작은 소프트 웨어를 사용하는 테스트를 말한다고 얘기하였습니다.

단위 테스트를 작성하는 올바른 방법은 어떤 것이 있을까요?

다음 코드를 예시로 살펴보겠습니다.

```javascript
class Lotto {
   #numbers
   constructor() {
       let number = getRandomLottoNumber(1, 45, 6)
       // getRandomLottoNumber함수는 랜덤한 6개의 숫자 배열을 반환합니다.
       this.#validation(number)
       this.#numbers = number
   }
   
   #validation(number){
    ...
   }
}
---
class LottoMachine {
   execute() {
       const lotto = new Lotto()
   }
}
```

다음 코드는 ``LottoMachine`` 클래스를 이용하여 ``lotto``를 관리하고 있습니다. 여기서 테스트를 할 수 있는 건 만약. 잘못된 값이 만들어진다면?과 같은 예외 상황을 살펴 볼 수 있습니다.

하지만 이건 사용자가 입력한 것이 아닌 개발자가 직접 처리한 것이기에 예외 상황은 없는데요? 라고 물어 볼 수도 있습니다. 애초에 지정된 범위에서 나오게했으면 side-effect는 생기지 않으니까요 하지만 모르기 때문에 코드 분리를 통해 단위 테스트를 할 수 있습니다.

```javascript
class Lotto {
   #numbers

   constructor(numbers) {
       this#.validation(numbers)
       this.#numbers = numbers
   }

   #validation(number){
    ...
   }
}


class LottoMachine {
   execute() {
       const numbers = Randoms.pickUniqueNumbersInRange(1, 45, 6)
       const lotto = new Lotto(numbers)
   }
}
```
그럼 이제 다음과 같이 단위 테스트를 할 수 있습니다.

```javascript
description("Lotto 생성 테스트", () => {

    test("한글이 입력이 되었을 경우", () => {
        // given
        const number_array = [1, 2, 3, 4, 5, 6, 7]

        // when
        const result = new Lotto(given)

        // then
        expect(result).toThrow("[ERROR] 숫자가 아닌 잘못된 문자를 입력을 받았습니다.");
    });

    test("중복된 숫자를 입력을 받았을 경우", () => {
        // given
        const number_array = [1, 2, 3, 4, 4, 6, 7]

        // when
        const result = new Lotto(given)

        // then
        expect(result).toThrow("[ERROR] 중복된 숫자를 입력을 받았습니다.");
    });
})
```

이처럼 단위 테스트를 할 수 있도록 코드를 분리하고 예외 상황을 생각하다보면 코드가 좀 더 완성도가 깊어집니다.

또 ``given``, ``when``, ``then``과 같이 패턴을 적용해주면 작성자나 다른 개발자가 보고 무슨 의도의 테스트인지 작성자의 의도를 파악하기 쉽습니다.

> TIP 에러처리와 같은 테스트를 여러번 반복하고 싶다면 다양한 메소드들을 지원합니다.

```javascript
  describe("Lotto 생성 테스트", () => {
    // given
    const lottoCases = [
      {
        case: [11, 2, 30, 42, 5, 36, 5], 
        expected: "[ERROR] 중복된 값을 입력 받았습니다."
      },
      {
        case: [1, 23, 34, 43, 35, 6, 47],
        expected: "[ERROR] 범위에 맞지 않는 값을 입력 받았습니다"
      },
      {
        case: [23, 22, 23, 24, 35, 36, 43],
        expected: "[ERROR] 중복된 값을 입력 받았습니다."
      }
      {
        case: [10, 20, 30, 40, 15, 26, -1]
        expected: "[ERROR] 범위에 맞지 않는 값을 입력 받았습니다"
      },
      {
        case: [5, 6, 9, 12, 133, 5, 7]
        expected: "[ERROR] 범위에 맞지 않는 값을 입력 받았습니다"
      },
    ]; 
    
    test.each(lottoCases)(

      ({ input, expected }) => {
		// when
        const result = new Lotto(input);
        
        //then
        expect(result).toBe(expected);
      },
    );
  });

```