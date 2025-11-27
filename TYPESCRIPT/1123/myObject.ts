const User = {
    name : "john",
    email : "john.doe@mail.com",
    isActive : true
};

function createUser({}){

}

createUser({name: "jane", isPaid: false});

function createCourse():{name: string, price: number}{
    return {name: "reactJS", price: 99};
}


type User2 = {
    name: string;
    email:  string;
    isActive: boolean;
}

function createUser2(user: User2): User2{
    return {name: "", email: "", isActive:  true};
}

createUser2({name: "", email: "", isActive: false});


type User3 = {
    readonly _id: string
    name: string
    email: string
    isActive: boolean
}

let myUser: User3 = {
    _id: "12345",
    name: "jane",
    email: "jane.doe@gmail.com",
    isActive: false
}

myUser.email = "jance@mail.com";