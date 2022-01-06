const User = require("./classUser.js");

const fail = new User("name", "email")

console.log(fail.getInfo());

fail.setCourseList("React Bootcamp")
fail.setCourseList("Node.js Bootcamp")

console.table(fail.getCouseList());

const courses = fail.getCouseList();

/* courses.forEach(c => {
    console.log(c)
}) */

console.log("Quantidade de cursos:", courses);