{
  type UserType = {
    userName: string;
    userAge: number;
  };

  type AnimalType = {
    animalName: string;
    animalAge: number;
  };

  const checkUserType = (userOrAnimal: UserType | AnimalType) => {
    // 객체의 특정 키로 검사하기
    if ('userName' in userOrAnimal) return userOrAnimal;
    return userOrAnimal;
  };
}
