const verifica = (lista, n) => {
    let conta = 0;
    let temp;
    for (let i = 0; i < n; i++) {
        for (j = i + 1; j < n; j++) {
            if (lista[i] > lista[j]) {
                temp = lista[j];
                lista[j] = lista[i];
                lista[i] = temp;
                conta++
            }
        }
    }
    if (conta > 0) {
        return false;
    }
    else {
        return true;
    }

}


let lista = [1, 26, 3, 4];
let n = 4
console.log(verifica(lista, n))