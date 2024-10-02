const fatorial = (a) => {
    let resultado = 1;
    for (let i = a; i >= 1; i--) {
        resultado *= i;
    }
    return resultado;
}

let a = 7;
console.log(fatorial(a))