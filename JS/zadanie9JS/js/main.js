//ES5
/*function iloczyn(num1, num2, num3) {
    let result = num1 * num2 * num3;
    return result
}*/

//ES6
/*const iloczyn = (num1, num2, num3) => {
    let result = num1 * num2 * num3;
    return result
}*/

//ES6 skrót
const iloczyn = (num1, num2, num3) => num1 * num2 * num3;


let wynikIloczynu = iloczyn(2, 3, 4);
console.log(wynikIloczynu);