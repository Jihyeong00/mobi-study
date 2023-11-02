{
  interface UserType {
    name: string;
    age: number;
    isMale: boolean;
    haveDream: boolean;
    isHappy: boolean;
  }

  interface AnimalType {
    name: string;
    age: number;
    isMale: boolean;
    haveDream: undefined;
  }

  const data: (UserType | AnimalType)[] = [
    {
      name: 'John',
      age: 25,
      isMale: true,
      haveDream: true,
      isHappy: true,
    },
    {
      name: 'Lucy',
      age: 30,
      isMale: false,
      haveDream: true,
      isHappy: true,
    },
    {
      name: 'Max',
      age: 10,
      isMale: true,
      haveDream: undefined,
    },
    {
      name: 'Charlie',
      age: 5,
      isMale: false,
      haveDream: undefined,
    },
  ];

  const typeGuard1 = (item: UserType | AnimalType): item is UserType => {
    return typeof item.haveDream === 'boolean';
  };

  for (let i in data) {
    if (typeGuard1(data[i])) {
      const humanData = data[i] as UserType;
      console.log(humanData.isHappy);
    } else {
      console.log(data[i].name);
    }
  }

  const typeGuard2 = (item: UserType | AnimalType): item is UserType => {
    return 'isHappy' in item;
  };

  for (let i in data) {
    if (typeGuard2(data[i])) {
      const humanData = data[i] as UserType;
      console.log(humanData.isHappy);
    } else {
      console.log(data[i].name);
    }
  }

  const typeGuard3 = (item: UserType | AnimalType): item is UserType => {
    return (item as UserType).isHappy !== undefined;
  };

  for (let i in data) {
    if (typeGuard3(data[i])) {
      const humanData = data[i] as UserType;
      console.log(humanData.isHappy);
    } else {
      console.log(data[i].name);
    }
  }
}
