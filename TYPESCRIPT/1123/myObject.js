var User = {
    name: "john",
    email: "john.doe@mail.com",
    isActive: true
};
function createUser(_a) {
}
createUser({ name: "jane", isPaid: false });
function createCourse() {
    return { name: "reactJS", price: 99 };
}
function createUser2(user) {
    return { name: "", email: "", isActive: true };
}
createUser2({ name: "", email: "", isActive: false });
var myUser = {
    _id: "12345",
    name: "jane",
    email: "jane.doe@gmail.com",
    isActive: false
};
myUser.email = "jance@mail.com";
