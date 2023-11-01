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

  const data: (UserType | AnimalType)[] = [
    {
      name: 'John',
      age: 25,
      isMale: true,
      haveDream: true,
    },
    {
      name: 'Lucy',
      age: 30,
      isMale: false,
      haveDream: true,
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
      console.log(data[i].haveDream, data[i].name);
    } else {
      console.log(data[i].name);
    }
  }
}
