const somaPar = (lista) => {
    let soma = 0;

    for (let i = 0; i < lista.length; i++) {
        if (lista[i] % 2 === 0) {
            soma += lista[i];
        }
    }
    return soma
}

let lista = [2, 4, 5, 6, 3]
console.log(somaPar(lista))