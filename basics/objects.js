const user = {
    firstName: "fail",
    lastName: "1337",
    role: "adm",
    loginCount: 37,
    facebookSignedIn: true
};

//dot notation
console.log(user.firstName);

//array like notation, you need to use "" to acess the property name
//not very used
console.log(user["firstName"]);

console.log(user.loginCount);
user.loginCount = 21;
console.log(user.loginCount);


console.table(user)
