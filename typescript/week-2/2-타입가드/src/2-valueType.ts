{
  interface UserType {
    name: string;
    age: number;
    isMale: boolean;
    haveDream: boolean;
  }

  interface AnimalType {
    name: string;
    age: number;
    isMale: boolean;
    haveDream: undefined;
  }

  class User {}

  class Animal {}

  const CheckUserType1 = (userOrAnimal: UserType | AnimalType) => {
    // 특정 값의 타입으로 검사하기 1. typeof
    if (typeof userOrAnimal.haveDream === 'boolean') return userOrAnimal;
    return userOrAnimal;
  };

  const CheckUserType2 = (userOrAnimal: User | Animal) => {
    // 특정 값의 클래스 타입으로 검사하기 2. instanceof
    if (userOrAnimal instanceof User) return userOrAnimal;
    return userOrAnimal;
  };
}
