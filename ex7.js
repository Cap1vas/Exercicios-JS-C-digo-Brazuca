const primo = (a) => {
    if (a <= 1) {
        console.log("Nao eh primo");
        return;
    }

    for (let i = 2; i < a; i++) {
        if (a % i === 0) {
            console.log("Nao eh primo");
            return;
        }
    }

    console.log("Primo");
}
let a = 1;
primo(a); 