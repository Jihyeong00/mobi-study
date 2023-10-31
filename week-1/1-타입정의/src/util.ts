{
    enum booleanValue {
        false,
        true,
    }

    console.log(booleanValue[0]) // false
    console.log(booleanValue['true']) // 1

    type UserType = {
        name: string
        age: number
        isMale: boolean
    }

    const userInfo: UserType = {
        name: "zero",
        age: 20,
        isMale: true
    }

    const userPartial: Partial<UserType>[] = [
        {name: "sugar"},
        {age: 20},
        {isMale: false},
        {}
    ]

    const userOmit: Omit<UserType, "age" | "name"> = {
        isMale: false,
    }

    const userName: Pick<UserType, "name"> = {
        name: "sugar"
    }

    type topWithType = Extract<arrayType, "top" | "left">

    type arrayType = "top" | "left" | "right" | "bottom";
    type topWithOutType = Exclude<arrayType, "top">

    let isNotType: topWithOutType = "bottom";
    isNotType = "right"

    type MakeUserType = ReturnType<(userInfo: UserType) => void>

    function UserMarker(newUser: UserType): MakeUserType {
        console.log(newUser)
        return;
    }

    UserMarker({age: 20, isMale: true, name: "zero"});

    type UserInfoName = ReturnType<(student: StudentType) => string>

    const std_name:UserInfoName = 'zero'

    type StudentType = {
        number?: number,
        name: string,
    }

    const st_zero: StudentType = {
        number: 0, name: "zero"
    }

    const st_one: StudentType = {
        number: 1, name: "sugar"
    }

    const teacher: StudentType = {
        name: "강선생"
    }

    const Human = {
        name: "zero",
        age: "30",
        wishMovieList: ["aboutTime", "noteBook"]
    } satisfies Record<'name' | 'age' | 'wishMovieList', string | string[]>


    type UserGenericType<T, U, C> = {
        name: T
        age: U,
        isMan: C
    }

    const newUser1: UserGenericType<string, number, boolean> = {
        name: "zero",
        age: 20,
        isMan: true
    }
}