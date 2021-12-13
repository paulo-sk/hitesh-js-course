var counter = document.querySelector(".counter")
var followers = document.querySelector(".followers")

let count = 0;

/*essa funcao recebe um metodo e um timer em milisegundos,
e como uma funcao "loop", a funcao executa 1 vez acada depois de passar o tempo 
de milisegundos representado no segundo argumento da funcao*/
setInterval(() => {
    if(count < 1000){
        count++
        counter.innerText = count;
        
    }
},1)


/**Ja a funcao setTimout, tambem parecida com a anterior, ela executa o metodo
 * porem só uma ver depois do tempo.
 */
setTimeout(() => {
    followers = followers.innerText = "Followers on Instagram."
}, 5100)



