const somaDigito = (n, casas) => {
    let soma = 0;
    n = Math.abs(n);
    while (casas > 0 && n > 0) {
        soma += n % 10;
        n = Math.trunc(n / 10);
        casas--;
    }
    return soma;
}

let n = 3321;
let casas = 4;

console.log(somaDigito(n, casas)); 
