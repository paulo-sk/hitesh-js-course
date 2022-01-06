class User {
    //propriedade privada, coloca um "#" antes.
    #cousesList = [];

    constructor(name, email){
        this.userName = name;
        this.email = email;
    }

    getInfo(){
        return {name: this.userName, email: this.email}
    }

    setCourseList(name){
        //tem que colocar o "#" para poder manipular a propriedade
        //mesmo dentro da classe onde ela foi declarada
        this.#cousesList.push(name)
    }

    getCouseList(){
        return this.cousesList;
    }
    /**Caso vc queira criar um metodo de classe, basta colocar static antes do metodo ou atributo, assim
     * ele será exclusivo da classe, ex>
     * static logged(){
     *      return "you're logged in."
     * }
     */
    logged(){
        return "you're logged in."
    }
}

module.exports = User;





//inheritance
class SubAdmin extends User {
    constructor(name, email){
        super(name, email);
    }

    getAdminInfo(){
        return "i'm a SubAdmin"
    }

    //override no metodo da superclasse
    logged(){
        return "SubAdmin is logged in."
    }
}

const frajola = new SubAdmin("frajola", "frajola@gtx.com")
console.log(frajola.getAdminInfo());
console.log(frajola.getInfo());
console.log(frajola.logged());

