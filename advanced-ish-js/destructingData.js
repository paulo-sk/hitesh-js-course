/*=========================Destructing data (separando valores) ==========================*/

//passando valores de array para variaveis
const user = ["fail", 3, "adm"]

//isso funciona, se a quantidade de variaveis for igual a quantidade de dados no array
const [name, courseCount, role] = user;
console.log(name, courseCount, role);

//mas essa separacao de de dados e mais comum usando objetos
/**A forma de separar dados dos objetos e semelhante a do array,
porem, no caso dos objetos, os nomes das variaveis tem que ser igual ao nome das
propriedades do objeto e tem que usar "{}" ao inves de "[]" */

const myUser = {
    nick: "fail",
    courses: 5,
    position: "student"
}

const {nick, courses, position} = myUser;
console.log(nick, courseCount, position);