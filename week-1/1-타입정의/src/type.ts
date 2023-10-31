{
    const user_age: number = 20;

    const user_name: string = "zero";

    const isMale: boolean = true;

    let isAnyThing: any = "zero";
    isAnyThing = false;
    isAnyThing = "one";
    isAnyThing = undefined;
    isAnyThing = null;
    isAnyThing = "zero";

    const isObject: object = {
        user_name: "zero",
        user_age: 20,
        user_gender: 'male'
    }

    const isArray: string[] = [];
    isArray.push("z")
    isArray.push("e")
    isArray.push("r")
    isArray.push("o")

    let isUnknown: unknown = 2;
    isUnknown = {};

    let union: "top" | "left" | "right" | "bottom";
    union = "right";
    union = "left";
    union = "top";
    union = "right";


    type Man = true
    type Girl = false

    type Gender<T> = T extends boolean & true ? Man : Girl

    type ZeroGender = Gender<true>

    const zeroGender: ZeroGender = true;

    type UserInfoType = {
        userName: string,
        userAge: number,
        userGender: boolean,
        userAddress: string,
    }

    type UserInfoName = {
        user_name: string
    }

    type UserInfoAge = {
        user_age: number
    }

    const userInfo: UserInfoName & UserInfoAge = {
        user_name: "zero",
        user_age: 20,
    }
}