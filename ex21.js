const mult = (n1, n2) => {
    if (n1 % n2 === 0 || n2 % n1 === 0) {
        return true
    }
    else {
        return false
    }
}




let n1 = 4;
let n2 = 2;

console.log(mult(n1, n2));

