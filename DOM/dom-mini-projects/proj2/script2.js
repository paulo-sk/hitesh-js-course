//meu codigo modificado do curso original, mais curto e legivel =)
const colorsDocument = [
    document.querySelector(".red"),
    document.querySelector(".cyan"),
    document.querySelector(".violet"),
    document.querySelector(".orange"),
    document.querySelector(".pink"),
]

const center = document.querySelector(".center");

const getBackGroundColor = (selectedColor) => {
    return window.getComputedStyle(selectedColor).backgroundColor;
}
const color = []
for (const c of colorsDocument){
    color.push(getBackGroundColor(c))
}

//porque usando var i = 0 nao funciona?
for(let i = 0; i < colorsDocument.length; i++){
    colorsDocument[i].addEventListener('mouseenter', () => {
        center.style.backgroundColor = color[i];
    })
}
 