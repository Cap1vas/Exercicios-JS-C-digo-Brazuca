const ordena = (lista, n) => {
    let temp;
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            if (lista[i] > lista[j]) {
                temp = lista[j];
                lista[j] = lista[i];
                lista[i] = temp;
            }
        }

    }
    return lista
}





let lista = [3, 1, 90, 343, 5];
let n = 5;
console.log(ordena(lista, n));