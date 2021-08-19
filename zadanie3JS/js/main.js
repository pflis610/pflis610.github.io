let array = [1, 2, 3, 4, 5, 6];

function sm(arr) {
    let sum = 0;
    let multipli = 1;

    for (let i = 0; i<arr.length; i++) {
        sum += arr[i];
        multipli *= arr[i];
    }
    console.log(sum, multipli);
}
sm(array);
