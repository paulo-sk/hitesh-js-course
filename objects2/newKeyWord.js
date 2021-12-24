const User = function (firstName, courseCount){
    this.firstName = firstName,
    this.courseCount = courseCount,

    this.getCousecount = function(){
        console.log(`Couse count is ${this.courseCount}`);
    }
}

User.prototype.getFirstName = function (){
    console.log(`Your first name is ${this.firstName}`);
}

//a funcao User e uma funcao comum, mas com o uso do new, cada instancia é um objeto dessa funcao
//sendo assim, o this nessa funcao "comum", nao aponta para o objeto global, e sim para dentro do
//escopo da funcao
const fail = new User("fail", 1337)
fail.getCousecount()

//hasOwnProperty e um metodo de prototype, mas vc nao precisa colocar prototype antes
if (fail.hasOwnProperty("firstName")) {
    fail.getFirstName()
}