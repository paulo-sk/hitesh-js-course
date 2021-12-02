const mystates = [
    "DF",
    "SP",
    "RJ",
    1337,
    "SC",
    "RS"
]

//forEach recebe um callback function como argumento
mystates.forEach( (s) => {
    if(typeof s == 'string'){
        console.log(s);
    }
})