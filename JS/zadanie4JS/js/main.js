let array =[0, 1, 2, 3, 4, 5];

function ss(arr) {
    let sumSquare = 0;

    for (let i =0; i<arr.length; i++) {
    sumSquare += Math.pow(arr[i], 2);
    }
    console.log(sumSquare);
}
ss(array);   