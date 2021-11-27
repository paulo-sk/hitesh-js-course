let name = "paulo"

//um escopo mai fechado sempre pode pedir algum dado de um escopo mais aberto, mas não o contrario.
function sayName(){
    console.log(name);
}

sayName()