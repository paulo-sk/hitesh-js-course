const red = document.querySelector(".red");
const cyan = document.querySelector(".cyan");
const violet = document.querySelector(".violet");
const orange = document.querySelector(".orange");
const pink = document.querySelector(".pink");

const center = document.querySelector(".center")


//o window oject e enorme, com ele vc pode pegar valores de css dos elementos
// um exemplo: window.getComputedStyle(violet).backgroundColor; pega o background-color
//se a propriedade que vc quer tiver ifem, substitua por escrita camelCase
const getBackGroundColor = (selectedColor) => {
    return window.getComputedStyle(selectedColor).backgroundColor;
}
var redElementColor = getBackGroundColor(red);

/*o metodo addEventListener recebe 2 argumentos, o primeiro é qual evento vc vai usar
o segundo o é uma call back function dizendo que deve ser feito */
red.addEventListener('mouseenter', () => {
    center.style.backgroundColor = redElementColor;
})

cyan.addEventListener('mouseenter', () => {
    center.style.backgroundColor = redElementColor;
})

violet.addEventListener('mouseenter', () => {
    center.style.backgroundColor = redElementColor;
})

orange.addEventListener('mouseenter', () => {
    center.style.backgroundColor = redElementColor;
})

pink.addEventListener('mouseenter', () => {
    center.style.backgroundColor = redElementColor;
})