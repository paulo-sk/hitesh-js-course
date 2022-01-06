const um = () => {
    return "One"
}

//colocando o assync, vira um promise??
/* const dois = async () => {
    setTimeout(() => {
        return 'Two';
    }, 30)
}
 */

const dois = () => {
    //tem que colocar um return para cada situacao (resolve ou reject)
    return new Promise( (resolve, reject) => {
        setTimeout(() => {
            resolve("Two");
        }, 3000)
    });
}

const tres = () => {
    return "Tree"
}

//para fazer o codigo esperar o promise da funcao dois (esperar executala completamente)
//tem que colocar o await onde a funcao esta sendo chamada.
//o await so funciona dentro de funcoes async, entao tambem tem que colocar o async no call
const call = async () => {
    let valueUm = um();
    console.log(valueUm);

    let valueDois = await dois();
    console.log(valueDois);

    let valueTres = tres();
    console.log(valueTres);
}

call();