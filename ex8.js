const media = (a) => {
    let soma = 0;
    for (let i = 0; i < a.length; i++) {
        soma = soma + a[i];
    }
    console.log((soma) / a.length)
}

let a = [1, 2, 3];
media(a);