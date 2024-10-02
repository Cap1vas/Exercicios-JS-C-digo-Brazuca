const substituirVogais = (str) => {
    return str.replace(/[aeiouAEIOU]/g, '*');
}

let texto = "Hello World!";
console.log(substituirVogais(texto));  
