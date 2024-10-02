const contavogal = (a) => {
    let contador = 0;
    for (let i = 0; i < a.length; i++) {
        if (a[i].toLowerCase() === "a" || a[i].toLowerCase() === "e" || a[i].toLowerCase() === "i" || a[i].toLowerCase() === "o" || a[i].toLowerCase() === "u") {
            contador++;
        }
    }
    console.log(contador);
}


let a = "Amor"

contavogal(a)