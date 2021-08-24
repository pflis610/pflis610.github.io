// $(document).ready(function () {

//     $('#count-sum').click(function () {
//         let total = 0;
//         $('.salary').each(function () {
//             total += $(this).val();

//         });

//         console.log(total);
//     });

// });



// $(document).ready(function () {

//     $('#count-sum').click(function () {
//         let total = 0;
//         $('.salary').each(function () {
//             total += this.value;

//         });

//         console.log(total);
//     });

// });




$(document).ready(function () {

    $('#count-sum').click(function () {
        let total = 0;
        $('.salary').each(function (index, value) {
            total += value;

        });

        console.log(total);
    });

});