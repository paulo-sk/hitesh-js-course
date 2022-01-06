let myMap = new Map()

//map parece objetos mas nao e, tem metodos diferentes
//mas a leitura (chave valor e parecida)
myMap.set(1, "one");
myMap.set(2, "two");
myMap.set(3, "three");
myMap.set(4, "four");

//o loop indicado para maps e o for of, nele, os keys sao considerados primeiro do que os values

//loop por keys
console.log("\nLoop for of representando só a chave:");
for(let key of myMap.keys()){
    console.log(`Key is ${key}`);
}


//loop por values
console.log("\nLoop for of representando só o valor:");
for(let value of myMap.values()){
    console.log(`value is ${value}`);
}


//loop por keys e values
//myMap apenas
console.log("\nLoop for of representando chave e valor:");
for(let [k, v] of myMap){
    console.log(`Key is ${k} and value is ${v}`);
}

console.log("\nCom forEach, que apresenta apenas values:");
//com forEach, apenas os valores sao acessiveis no map
myMap.forEach(element => {
    console.log(`value is ${element}`);
});

console.log(myMap);