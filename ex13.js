const fibo = (n) => {
    const fibonacci = [0, 1];

    // Gera a sequência até o n-ésimo termo  
    for (let i = 2; i < n; i++) {
        fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
    }

    return fibonacci;
};

const termos = 10;

const resultado = fibo(termos);
console.log(resultado);