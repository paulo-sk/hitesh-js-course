function init(){

    var firstName = "fail/?"

    function sayFirstName(){
        console.log(firstName);
    }
    return sayFirstName;
    /**quando vc tira o parenteseis,
     esse nome se torna uma referencia ao metodo, mas ele nao executa.
     podemos dizer qe sayFirstName aponto para o metodo. */

}
/**Por ter uma variavel apontando para sayFirstName, nao e possivel eliminar a funcao init da memoria
 * depois dela ser executada, pois ela ainda nao terminou seu "trabalho".
 * Não e apenas o metodo sayFirstName que se mantem na memoria, mas todo o metodo init, pois se nao fosse assim,
 * o metodo nao teria acesso a variavel firstName, pego a visao?? ;)
 * 
 * Enquanto tiver algo apontando para algum endereco de memoria, esse endereço deve permanecer
 */
var value = init();
console.log(value); //e o mesmo que sayFirstName, apenas aponta para o endereco de memoria
value(); //aqui, e a execuao do codigo que esta dentro desse endereco de memomria.

//tudo isso resume o conceito de closure

//outro exemplo estranho

function doAddition (x){
    return function(y){
        return x + y;
    }
}

let add2 = doAddition(4)
console.log(add2(5));

//vc nao precis primeiro criar a variavel e depois chamar, pode chamar direto com 2 parentsis, veja:
console.log(doAddition(10)(15)) //curring