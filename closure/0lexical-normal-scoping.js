/**Nessa funcao, todos sabemos que firstName nao e acessivel fora da funcao.
 * Esse e o jeito comum de como o scopo funciona, mas muda quando se usa clousure.
  */
function init(){

    var firstName = "fail/?"

    function sayFirstName(){
        console.log(firstName);
    }
    sayFirstName()
}

init();
//console.log(firstName); isso nao funciona
//mas se fizermos let name = init(); as coisas mudam