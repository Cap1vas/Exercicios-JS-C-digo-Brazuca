const verificaExiste = (lista, a) => {
    for (let i = 0; i < lista.length; i++) {
        if (lista[i] === a) {
            console.log(`Achei o numero ${a} na posicao ${i}`);
        }
        else {
            console.log("Nao existe na lista");
            break;
        }
    }
}

let a = 3;
let lista = [1, 2, 3];

verificaExiste(lista, a);