const divisores = (n) => {
    let listaDivisores = [];

    for (let i = 1; i <= n; i++) {
        if (n % i === 0) {
            listaDivisores.push(i);
        }
    }

    return listaDivisores;
}


let numero = 12;
console.log(divisores(numero)); 
