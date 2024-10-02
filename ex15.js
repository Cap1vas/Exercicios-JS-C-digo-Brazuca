const verificaExiste = (lista, a) => {
    let contador = 0;
    for (let i = 0; i < lista.length; i++) {
        if (lista[i] === a) {
            contador++
        }
    }
    console.log(`O caractere ${a}, aparece ${contador}`);
}


let lista = "arara"
let a = "a"

verificaExiste(lista, a)