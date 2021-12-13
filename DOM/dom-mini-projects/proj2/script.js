const red = document.querySelector(".red");
const cyan = document.querySelector(".cyan");
const violet = document.querySelector(".violet");
const orange = document.querySelector(".orange");
const pink = document.querySelector(".pink");

const center = document.querySelector(".center")


//o window oject e enome, com ele vc pode pegar valores de css dos elementos
// um exemplo: window.getComputedStyle(violet).backgroundColor; pega o background-color
//se a propriedade que vc quer tiver ifem, substitua por camelCase


const getBackGroundColor = (selectedColor) => {
    return window.getComputedStyle(selectedColor).backgroundColor;
}
 
console.log(getBackGroundColor(red));