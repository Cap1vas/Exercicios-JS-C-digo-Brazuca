const espaconao = (a) => {
    let nova = "";  // Cria uma nova string
    for (let i = 0; i < a.length; i++) {
        if (a[i] !== ' ') {
            nova += a[i];
        }
    }
    console.log(nova);
}

let a = "Codigo Brazuka";
espaconao(a);  
