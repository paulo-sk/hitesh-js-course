/**=================================REGRA NUMERO UM===================================
 * sempre que for escrito uma funcão comum (não considere metodos), o this sempre
 * vai apontar para window object(no caso de rodar no browser),
 * ou para o global object(objeto vazio, no caso do rodar no node)
 */


//no caso do node
console.log(this);

//lenbrando que o this sempre depende do scopo
//no caso de um objeto, retona metodos ou atributos do mesmo,
//desde que nao seja uma funcao comum
var user = {
    nick: "fail",
    age: 26,
    getThis: function () {
        console.log('Linha 14, dentro de um objeto, o this retorna:', this);
    }

    
}

user.getThis()