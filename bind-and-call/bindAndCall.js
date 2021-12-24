/**Bind and call servem trocar a referencia de um metodo para outro objeto;
 * Basicamente, um methodo que estja referenciando os campos/propriedades do objeto
 * com o this, vc pode fazer esse metodo sem usado em outro objeto, sem a necessidade
 * de copiar e colar essa declaracao
 */

const someStudent = {
    firstName: "hitesh",
    lastName: "tryhard",
    courseCount: 4,

    /**perceba que esse metodo e generico e pode ser usado em qualquer objeto que tenha
    os mesmos atributos */
    getInfo : function (){
        console.log(`
            You first name: ${this.firstName}.
            You last  name: ${this.lastName}.
            Your courses: ${this.courseCount}.
        `);
    }
}

const anotherStudent = {
    firstName: "somethingElse",
    lastName: "dietrying",
    courseCount: 13
}

//bind, precisa de mais um "()" para ser executado
someStudent.getInfo.bind(anotherStudent) //aqui, o getInfo simplesmente aponta para anotherStudent mas nao executa, (closure?)
someStudent.getInfo.bind(anotherStudent)() //aqui ele e executado

console.log("=========================================================");

//call nao precisa de "()" para ser executado.
someStudent.getInfo.call(anotherStudent)

/**eu não sei exatamente os casos de uso para call e bind, mas se eu for chutar
 * isso serve para, alem de reduzir codigo em outros objetos, facilita a mudanca,
 * pois vc so precisara mudar esse metodo no objeto onde ele foi declarado
 * Reducao de codigo e facilidade em modificar, e isso
 */