const contemSubstring = (str, substring) => {
    return str.includes(substring);
}

let texto = "Hello, World!";
let substring = "World";
console.log(contemSubstring(texto, substring)); 
