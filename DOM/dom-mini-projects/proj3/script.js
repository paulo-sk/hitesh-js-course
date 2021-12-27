/**Objetivo: adicionar cursos a lista
no html */
const courses = [
    {
        name: "Complete React course",
        price: "2.4"
    },
    {
        name: "Complete Angular course",
        price: "2.1"
    },
    {
        name: "Complete C++  course",
        price: "2.5"
    },
    {
        name: "Complete Rust course",
        price: "2.7"
    }
]

/**Preciso criar um loop para cada elemento no array de cursos
e add cada um na lista do html, vamos la */

function generateList() {
    //vou usar ul para add a li nela
    const ul = document.querySelector(".list-group")
    ul.innerHTML = "" //reset em tudo que esta na ul
    courses.forEach( (course) => {

        //cirando li para ser add na ul
        const li = document.createElement("li")
        //add a classe correta da li
        li.classList.add("list-group-item")
        //criando textNode para add o texto na li
        const name = document.createTextNode(course.name)
        //add text/element na li
        li.appendChild(name)

        //criando span para ser add na li
        const span = document.createElement("span")
        span.classList.add("float-right")
        const price = document.createTextNode("$" + course.price)
        span.appendChild(price)

        li.appendChild(span)
        ul.appendChild(li)

    });
}

generateList()
const btnVerde = document.querySelector(".butao-verde")
const btnAzul = document.querySelector(".butao-azul")

btnVerde.addEventListener("click", () => {
    courses.sort((a, b) => a.price -b.price)
    generateList()
})

btnAzul.addEventListener("click", () => {
    courses.sort((a, b) => b.price - a.price)
    generateList()
})