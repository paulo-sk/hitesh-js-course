var country = ["Brasil", "USA", "Russia", "Japan", "Korea"]
var state = new Array("SP", "DF", "RJ")

console.log(state[0]);
//para colocar ou tirar elementos de um array, use push e pop
/*evite usar shift e unshift, pois isso faz com que todos os elementos do array mude de lugar
fazendo a operação ficar mais lenta*/
country.push("Canada")
console.log(country);

//indexOf me da o index do elemento passado como argumento
console.log(state.indexOf("DF"));

//para transformar uma string em array, use Array.from()
var pirata = "luffy"
console.log(Array.from(pirata));