/*let N = 10;
function fibo(n) {
    if (n == 0) {
    return 0;
    } else if (n == 1) {
      return 1;
    } else {
      return (n-1) + (n-2); 
    }
}
console.log(fibo(N)); */

function fibo(n) {
  if (n === 0) {
  return 0;
  } else if (n === 1 || n === 2) {
    return 1;
  } else if (n > 2) {
      let a = 1;
      let b = 1;
      let c = 0;
      for (let i = 0; i < n - 2; i++) {
          c = a + b;
          a = b;
          b = c;
      }
      return c;
  }
}
let N = 2;
console.log(fibo(N));
