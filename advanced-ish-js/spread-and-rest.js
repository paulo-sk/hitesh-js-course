//spread operator, (espalhar valores, é como uma desconstrucao de um array/objeto)
//pode ser usado tanto na declaracao da funcao/metodo (parametro),
//como tambem na chamada da funcao/metodo (argumento).
const myA = [5,3,2];

function sum3(a, b, c) {
    return a + b + c;
}

console.log(`Resutado de sum3, recebendo array com 3 elementos: ${sum3(...myA)}`);
//como nessa funcao sum3 ela so tem 3 parametros, apenas 3 elementos de uma estrutura de dados sera convertida e considerada
myA.push(4)
console.log(`Adicionando mais um elemento ao array...${myA}
Quando o array/objetos tem mais elementos que parametros da funcao ou metodo,
esses elementos a mais do array serão desconsiderados.`);
console.log(`Veja o que reultado da funcao sum3 é o mesmo, recebendo o mesmo array como argumento ${sum3(...myA)}`);

//rest operator, ao contrario do spread, ele junta varios argumentos em uma unica estrutura
//basicamente, transforma os argumentos passados em array.

function sumAll(...args) {
    let sum = 0;
    for (const arg of args) {
        sum += arg;
    }
    return sum
}

console.log(`\nJa no rest operator, ele transforma todos os elementos passados no argumento,
em um array, daí vc pode usar for of ou forEach:`);
console.log("Resultado de sumAll, vai ser a soma de todos os valores passados como argumento:",sumAll(2,3,5,7));

//caso vc queira receber e fazer operacoes com parametros antes do ...args, vc deve colocar esses parametros primeiro
//o ...args sempre deve ser o ultimo paremetro a ser colocado na funcao
function multiABPlusArgs(a, b, ...args) {
    let multiAB = a * b;
    let sum = 0;
    for (const arg of args) {
        sum += arg;
    }
    return [multiAB, sum]
}
console.log(`\nMultiplicando os 2 primeiros parametros a e b definidos antes do args na funcao,
resultado é a multiplicacao dos 2 e a soma do resto dos argumentos`);
console.log(multiABPlusArgs(2,5,1,1,1,4)); //[10,7]
//Acho* que o spread geralmente é usado como argumento e o rest como parametro