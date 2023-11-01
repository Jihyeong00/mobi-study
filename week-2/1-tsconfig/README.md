 # **tsconfig.json** 
 tsconfig 파일은 타입스크립트 파일을 자바스크립트로 컴파일 하는 과정에서의 세부설정이 가능합니다.

<br>

## rootOptions
root옵션은 TypeScript 또는 JavaScript 프로젝트가 설정되는 방식과 관련됩니다.

---

#### ```file``` : 해당 파일을 컴파일 합니다. 없을시에 에러가 발생합니다.
> 보통 파일의 수가 적을 경우 ``*`` ( 와일드 카드 ) 대신해서 사용합니다.
#### ```extends``` : 모듈화한 다른 설정파일을 포함시키거나 확장할 때 사용을 합니다.
```json
// tsconfig.path.json

// 확장하기 위한 경로들을 설정해둔 파일
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["src/*"],
      "@apis/*": ["src/apis/*"],
      "@assets/*": ["src/assets/*"],
      ...
    
```

```json
// tsconfig.json

// tsconfig.path.json파일들이 실제 작성된 것처럼 사용이 가능합니다.
// extends로 받아온 파일보다 실제로 tsconfig.json 파일내의 코드가 우선순위입니다.
{
  "extends": "./tsconfig.path.json",
  "compilerOptions": {
    "target": "esnext",
    "lib": ["esnext", "DOM", "DOM.Iterable"],
    "module": "ESNext",
```
#### ```include``` : 해당 파일내의 작성된 코드들만 타입을 검사할 대상이 됩니다.
```json
// tsconfig.json

// src 폴더내의 ts파일들만 검사를 합니다.
{
  "include": ["src/**/*.ts"]
}
```
#### ```exclude``` : 컴파일에서 제외할 폴더들을 골라줍니다. 만약 include에 포함이 되어있다고 하더라도 exclude에 포함이 되어있으면 제외됩니다. 우선순위가 더 높습니다.


#### ```references``` : 모노레포 프로젝트에서 프로젝트간의 종속성을 명시적으로 정의하고 컴파일 순서를 정의할 수 있습니다. 또한 각 프로젝트는 독립적으로 컴파일 될 수 있습니다.

```sass
my-monorepo/
  ├── tsconfig.json (루트 프로젝트의 설정)
  ├── admin/
  │     ├── tsconfig.json (admin 프로젝트의 설정)
  │     ├── src/
  │     │    ├── ...
  ├── web/
  │     ├── tsconfig.json (web 프로젝트의 설정)
  │     ├── src/
  │     │    ├── ...
  ```

```json
{
  "compilerOptions": {
    "target": "ES6"
  },
  "references": [
    { "path": "./admin" },
    { "path": "./web" }
  ]
}
```

## compilerOptions
컴파일할 때의 세부 설정이 가능합니다.

---

## 타입스크립트 관련 설정 옵션
<br>

#### ```target``` : 타입스크립트 파일을 컴파일할 JS 버전을 선택합니다.
#### ```module``` : `module` 의 타입을 결정할 수 있습니다.
- commonjs : CommonJS 모듈을 사용합니다.
- amd : AMD(Asynchronous Module Definition) 모듈 시스템을 사용합니다.
- es6: ECMAScript 6 (ES6) 모듈 시스템을 사용합니다.
- umd: Universal Module Definition을 사용하며, 다양한 환경에서 사용할 수 있습니다.
- system: SystemJS를 사용합니다.

>  **module Tip**
> 1. IE 호환성을 원한다면 ES5, CommonJS가 좋습니다.
> 2. commonJS는 require 분법 es2015, exnext는 import 문법을 사용합니다.

#### 다양한 module 사용방법
```typescript
// CommonJS

import { valueOfPi } from "./constants";
 
export const twoPi = valueOfPi * 2;
```

```typescript
// CommonJS

import { valueOfPi } from "./constants";
 
export const twoPi = valueOfPi * 2;
```

```typescript
// Umd

(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./constants"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.twoPi = void 0;
    const constants_1 = require("./constants");
    exports.twoPi = constants_1.valueOfPi * 2;
});
```

```typescript
// AMD

define(["require", "exports", "./constants"], function (require, exports, constants_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.twoPi = void 0;
    exports.twoPi = constants_1.valueOfPi * 2;
});
```
```typescript
// System

System.register(["./constants"], function (exports_1, context_1) {
    "use strict";
    var constants_1, twoPi;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (constants_1_1) {
                constants_1 = constants_1_1;
            }
        ],
        execute: function () {
            exports_1("twoPi", twoPi = constants_1.valueOfPi * 2);
        }
    };
});
 
```
```typescript
// ESNext

import { valueOfPi } from "./constants";
export const twoPi = valueOfPi * 2;
```
```typescript
// ES2015 / ES6 / ES2020 / ES2022

import { valueOfPi } from "./constants";
export const twoPi = valueOfPi * 2;
```

#### ```lib``` : 세부적으로 어떤 라이브러리를 사용 할 지 결정할 수 있습니다.

<br>


---
## 엄격한 설정을 위한 옵션

<br>

### 유형 확인

#### ``allowUnreachableCode`` : 연결할 수 없는 코드에 대한 설정을 제공합니다.
- ``true`` : 구문에 도달하지 못하는 코드가 있어도 무시합니다.
- ``false`` : 구문에 도달하지 못하는 코드가 있을시에 에러를 나타냅니다.
` ``undefined`` : 구문에 도달하지 못하는 코드가 있을시에 경고를 나타냅니다.
```typescript
function fn(n: number) {
  if (n > 5) {
    return true;
  } else {
    return false;
  }
  // 해당 구문에 도달할 수 없습니다.
  return true;
}
```
#### ``allowUnusedLabels`` : 선언되지 않은 변수에 대한 참조에 대해 설정을 합니다.
- ``true`` : 선언되지 않은 변수가 있어도 무시합니다.
- ``false`` : 선언되지 않은 변수가 있을 시에 에러를 나타냅니다.
` ``undefined`` : 선언되지 않은 변수가 있을시에 경고를 나타냅니다.
```typescript
function verifyAge(age: number) {
  // Forgot 'return' statement
  if (age > 18) {
    verified: true;
  // Unused label.
  }
}
```
#### ``strict`` : 엄격한 검사를 지원합니다. "noImplicit" 관련 옵션들을 전부 활성화 합니다.
#### ``alwaysStrict`` : 파일들을 strict 모드로 검사하고 파일 최상단에 "use strict"를 생성합니다.
```typescript
// strict 모드의 주요 제약사항
 
1. 변수 선언: 모든 변수 선언은 var 키워드 대신 let 또는 const 키워드로 선언되어야 합니다.

2. 선언되지 않은 변수 사용: 선언되지 않은 변수를 사용하려고 하면 

3. 삭제 금지: delete 연산자를 사용하여 변수, 함수, 함수 매개변수 등을 삭제할 수 없습니다.

4. 매개변수 이름 중복 금지: 함수 매개변수의 이름은 중복될 수 없습니다.

5. this 사용: this가 undefined 또는 전역 객체(window)가 아닌 컨텍스트 내에서 사용될 때 오류가 발생합니다.

6. 객체 리터럴 중복 속성 금지: 객체 리터럴 내에서 중복된 속성 이름을 사용할 수 없습니다.

7. eval 사용 금지: eval 함수를 사용할 수 없으며 with 문도 사용할 수 없습니다.

8. 예약어 사용: strict 모드에서 추가로 예약된 키워드들이 있으며, 이러한 예약어를 변수나 함수 이름으로 사용할 수 없습니다.

9. arguments 객체 변경 금지: strict 모드에서 arguments 객체를 변경하는 것이 제한됩니다.

10. 함수의 중복 파라미터 금지: 함수 파라미터 목록에서 중복된 파라미터 이름을 사용할 수 없습니다.
```
#### ``strictNullChecks`` : null 타입과 undefined 타입에 대해 좀 더 엄격하게 검사를 진행합니다.
```typescript
let name: string = null; // 오류: null은 string에 할당할 수 없음
let age: number = undefined; // 오류: undefined는 number에 할당할 수 없음

const greet = (message: string) => {
    console.log(message);
}

greet(null); // 오류: null은 string 매개변수에 할당할 수 없음
```
#### ``strictFunctionTypes`` : 함수 파라미터의 타입체크를 엄격하게 검사합니다.
```typescript
// strictFunctionTypes 활성화
type Animal = { name: string };
type Dog = { name: string; breed: string };

type AnimalHandler = (animal: Animal) => void;

const handleDog: AnimalHandler = (dog: Dog) => {
    // 오류: Dog 타입을 AnimalHandler에 할당할 수 없음
}

// 비활성화시에 작동이 정상적으로 이루어집니다.
```
#### ``exactOptionalPropertyTypes`` : optional property (``?``) 에 대한 정보를 설정합니다.
```typescript
type ExampleType = {
  property?: string;
};
// "exactOptionalPropertyTypes": true로 설정을 하였을 경우 해당 property의 타입은 string | undefined가 아닌 string
```
#### ``strictPropertyInitialization`` : 클래스 프로퍼티의 초기화를 강제할지 설정을 합니다.
#### ``noFallthroughCasesInSwitch`` : switch 문에서 fall-through를 허용할 지 결정합니다.
```typescript
// fall-through란 case 블록을 벗어나서 다음 케이스까지 진행이 되는 것을 의미합니다.

switch (value) {
  case 1:
    console.log("Value is 1");
  case 2:
    console.log("Value is 2");
  case 3:
    console.log("Value is 3");
}

// 활성화 할 경우 다음과 같은 상황에서 경고를 나타내줍니다.
```
#### ``noImplicitThis`` : this의 암시적 any 타입을 사용하거나 방치할지 결정합니다.
#### ``noImplicitAny`` : any 타입을 사용하거나 방치할지 결정합니다.
#### ``noImplicitOverride`` : 클래스를 상속받아 override 메소드를 구현할 때 override 키워드를 강제화할지 결정합니다.
#### ``noImplicitReturns`` : 함수의 리턴문이 없어도 사용이 가능하게 할 지 결정합니다. 리턴을 강제할 수 있습니다.
#### ``noPropertyAccessFromIndexSignature`` : 객체에 접근할 때 점 표기법을 사용할 지 또는 꺽쇠 괄호 표기법을 사용하게 할 지 결정할 수 있습니다.
```typescript
// noPropertyAccessFromIndexSignature : true의 경우

const obj: { [key: string]: number } = {
  propertyName: 42,
};

const value = obj.propertyName; // 이 부분에서 경고 또는 오류 발생
```
#### ``noUncheckedIndexedAccess`` : 배열이나 객체의 접근을 할 때 null 이나 undefined와 같은 상황을 계산하고 진행하였는지 체크합니다.

```typescript
// noUncheckedIndexedAccess : default(true)

function getElementAtIndex(arr: string[], index: number) {
  return arr[index]; // false일 경우 이 부분에서 경고 또는 오류 발생
}
```
#### ``noUnusedLocals`` : 쓰지 않는 지역변수가 있는지 검사를 합니다.
#### ``noUnusedParameters`` : 쓰지 않는 파라미터가 있는지 검사를 합니다.
#### ``strictBindCallApply`` : strict 모드를 활성화 함으로서 ``bind``, ``call``, ``apply``와 같은 메소드의 사용을 엄격하게 제한하며 인수의 개수와 유형을 보다 엄격하게 검사합니다. (엄격한 검사로 인해 코드의 가독성이 저하될 수 있습니다.)
```typescript
// strictBindCallApply가 활성화가 되어있는 경우

function greet(name: string) {
  console.log(`Hello, ${name}!`);
}

greet.call(null, 'John', 42); // 이 부분에서 경고 또는 오류 발생
```
#### ``useUnknownInCatchVariables`` : catch 블록에서 예외(Exception)의 유형을 unknown으로 설정을 합니다. 기존에는 any 타입이었기에 모든 작업을 허용했지만 해당 옵션을 활성화 할 시 타입 안정성을 유지하면서 에러를 처리할 수 있습니다.
```typescript
// useUnknownInCatchVariables : true의 경우

try {
  // 예외를 던지는 코드
} catch (error) {
  console.log(error.message); // 이 부분에서도 오류 발생
}

// message를 사용하고 싶다면 다음과 같이 접근을 해야합니다.

try {
  // 예외를 던지는 코드
} catch (error: unknown) {
  if (error instanceof Error) {
    console.log(error.message); // 예외 객체의 message 프로퍼티를 안전하게 사용
  } else {
    console.log("Unknown error occurred");
  }
}
```
#### ``baseUrl`` : 모듈 해석 및 모듈 경로 해석에 사용되는 기본 기준 경로(base path)를 설정하는 데 사용됩니다. 해당 옵션을 사용할 경우 컴파일러가 상대경로가 아닌 지정경로를 기준으로 찾을 수 있습니다.

```json
{
  "compilerOptions": {
    "baseUrl": "./src"
  },
  "include": ["./src/**/*.ts"]
}

// 만약 src 폴더안에 있는 todo.ts 파일을 가져온다면 다음과 같이 가져올 수 있습니다.

import { TodoList } from "./todo";
```
#### ``moduleResolution`` : 모듈 해석 방법을 선택하는 옵션입니다. 
- classic : 타입스크립트 1.6 이전 버전에서 사용한 쓰면 안되는 옵션입니다.
- node10 : 이전에는 ``node``라고 하였습니다. CommonJS만 지원을 하고 CommonJS의 require만 지원을 합니다. 
- node16 | nodenext : node 12버전 이상의 경우 import와 export, require를 모두 지원하며 상황에 따라 다른 해결방법을 사용합니다.
- bundler : node16 | nodenext와 마찬가지로 import와 export를 지원하지만 상대경로에는 파일 확장자가 필요하지 않습니다.
#### ``moduleSuffixes`` : 모듈 이름의 파일 확장자를 지정하는데 사용됩니다. 이 옵션을 사용하면 모듈 이름 뒤에 특정 확장자를 자동으로 추가할 수 있습니다.
```json
// CommonJS 모듈 형식을 사용하면서 모듈 이름뒤에 js, ts 확장자를 자동으로 붙입니다.
{
  "compilerOptions": {
    "module": "CommonJS",
    "moduleSuffixes": [".js", ".ts"]
  }
}
```
```typescript
// 다음과 같은 가져오기를 설정할 수 있습니다.
import * as todo from "./todo";
```
#### ``noResolve`` : 모듈 해석을 실행하지 않고 모듈 이름을 해석하지 않도록 해주는 옵션입니다. 설정할 경우, TypeScript 컴파일러는 모듈 이름을 해석하지 않고, 모듈 간의 의존성을 추적하지 않습니다.
#### ``paths`` : 모든 경로를 원하는 경로로 매핑하고 모듈을 더 간단한 이름으로 가져올 수 있습니다. 
```json
"compilerOptions": {
    "baseUrl": "./src",
    "paths": {
      "@type/*": ["type/*"]
    }
  },
```

```typescript
import { SomeModule } from "@type/todo"; // 실제로는 "src/type/todo"을 가져옴
```
#### ``resolveJsonModule`` : JSON파일을 모듈로 가져올 수 있게 해줍니다.
```typescript
// "resolveJsonModule": true

import * as jsonData from "./data.json";

console.log(jsonData.someProperty);
```
#### ``resolvePackageJsonExports``: package.json 파일 내의 exports 필드에 정의된 모듈 경로를 사용하여 모듈을 가져옵니다.

```json
// package.json
{
  "exports": {
    "./foo": "./src/foo.js",
    "./bar": "./src/bar.js"
  }
}

// 컴파일러가 ./foo 모듈을 실제로 ./src/foo.js 파일로 가져오게 만듭니다.
```
#### ``resolvePackageJsonImports`` : package.json 파일의 imports 필드는 모듈의 다양한 경로를 정의하고, TypeScript 컴파일러가 모듈을 어떻게 가져와야 하는지 제어하는 데 사용됩니다.
```json
{
  "imports": {
    "some-library": "./src/some-library.js",
    "another-library": "./src/another-library.js"
  }
}

// 이 설정은 컴파일러가 import { someFunction } from "some-library"를 실제로 ./src/some-library.js 파일로 해석하게 만듭니다.
```
#### ``rootDir`` : 프로젝트 내에서 TypeScript 소스 파일이 위치한 최상위 디렉토리를 지정하는 옵션입니다. TypeScript 컴파일러가 소스 파일이 있는 디렉토리를 명시적으로 설정할 수 있습니다.

```json
//  모든 TypeScript 파일이 ./src 디렉토리 내에 위치한다고 가정합니다. 이렇게 설정하면 컴파일러는 rootDir 내에서 시작하여 모든 TypeScript 파일을 찾고 컴파일합니다.`

{
  "compilerOptions": {
    "rootDir": "./src"
  },
  "include": ["./src/**/*.ts"]
}
```