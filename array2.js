function isEven(number){

    /* if(number % 2 === 0){
        return true
    }

    return false */

    return number % 2 === 0
}

console.log("isEven:", isEven(3));

//arrow function
var isEven2 = (number) => {
    return number % 2 === 0
}

console.log("isEven2:",isEven2(4));

//arrow function, em uma linha, vc pode tirar o return, tambem tem que tirar o block"{}" ou usar"()"
var isEven3 = (number) => (number % 2 === 0)
console.log("isEven3:",isEven3(5));

//utilidade de callback function
var result = [2,3,6].every(isEven3)
//callback
var result2 = [2,4,6].every((n) => (n % 2 ===0 ))
console.log("result every:",result);
console.log("result every com callback:",result2);