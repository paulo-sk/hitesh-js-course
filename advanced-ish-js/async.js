/**No front end, o javascript nao deixa de executar uma a proxima funcao
 * por conta da demora de algum codigo da funcao anterior.
 * Por exemplo, quando vc abre um site, uma imagem de banner 
 * pode ainda estar carregando no começo do site, mas o resto do site (textos) ja
 * estar carregado. Isso que eh os eventos de javascript (Event loop)
 * Veja por exemplo aqui, na funcao "dois", esse loading image vem depois.
 */

const um = () => {
    return "One"
}

const dois = () => {
    setTimeout(() => {
        console.log('"Loading image..."');
    }, 30)
    return "Two"
}

const tres = () => {
    return "Tree"
}

console.log(um());
console.log(dois());
console.log(tres());

