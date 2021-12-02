const user = {
    firstName: "fail",
    lastName: "1337",
    role: "adm",
    loginCount: 37,
    facebookSignedIn: true,
    courseList: [],

    //metodos dentro de um objeto
    buyCourse: function (courseName){
        this.courseList.push(courseName)
    },

    getCourseCount: function (){
        return `${this.firstName} is enrolled in total of ${this.courseList.length} courses.`;
    },
    getInfo: function () {
        console.log(`
        frist name: ${this.firstName}
        last name: ${this.lastName}
        role: ${this.role}
        loginCount: ${this.loginCount}
        facebookSignedIn: ${this.facebookSignedIn}
        `);
        console.table(this.courseList)
    }
};

user.buyCourse("blockchaim")
user.buyCourse("mathematics")

console.log(user.courseList);
console.log(user.getCourseCount());
console.log(user.getInfo());