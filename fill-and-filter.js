const testArray = [0,1,2,3,4,5,6,7,8]

//fill, enche o array completamente com o elemento passado como argumento nesse metodo
/* console.log(testArray.fill("hs")); */

//no terceiro e quarto argumento, diz o de onde começa e até onde vai (sempre contando do zero)
console.log(testArray.fill("hs", 2, 5));

//filter recebe um callback function como argumento, retorna tudo que for verdadeiro.
//nesse caso, testei cada elemento de testArray, aqui ele retorna todos os elementos que nao sao strings
console.log(testArray.filter( (n) => (typeof n != "string" ) ));