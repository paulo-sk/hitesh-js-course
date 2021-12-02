const names = [
    "Youtube",
    "Instagram",
    "Netflix",
    "Amazon"
]

//for of, usado para loop em array (muito usado no angular)
for(const n of names){
    console.log(n);
}

console.log("=============================");
const symbols = {
    yt: "Youtube",
    fb: "Facebook",
    ig: "Instagram"
}

//for in, usado para loop em objetos
//o i retorna os valores das propriedades (key)
for(const i in symbols){
    console.log(i);
}
console.log("=============================");
//para pegar os valores
for(const i in symbols){
    console.log(symbols[i]);
}