const multlist = (lista) => {
    let resultado = 1;
    for (let i = 0; i < lista.length; i++) {
        resultado *= lista[i]
    }
    return resultado;
}

let lista = [1, 2, 3, 4];

console.log(multlist(lista));
