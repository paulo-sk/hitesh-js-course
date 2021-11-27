//slice: corta um array com o range especifico, de acordo com os argumentos e o usa
const myArray = ["Tokyo", "NY", "Hollywood", "Toronto", "Paris"]
console.log(myArray.slice(1, 4));
console.log(myArray.slice(1)); //de 1 ate o final (elimina apenas a posicao zero)
//o slice corta elimina o que nao estiver dentro dos valores passados como argumento

//splice: seleciona elementos e tambem substitui. O splice muda o array permanentemente
//ao contrario o slice, o splice elimina o que estiver dentro dos argumentos

//neste exemplo, eu tirei 2 elementos do array começando da posiçao 2, e coloquei no lugar "1" e "2"
//para colocar no lugar,vc pode colocar quantos elementos vc quiser.
const resultSplice = myArray.splice(1,2, "1", "2")
console.log(myArray);