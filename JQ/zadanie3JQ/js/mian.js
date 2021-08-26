$(document).ready(function () {

    $('#count-sum').click(function () {
        let total = 0;
        $('.salary').each(function () {
            total += Number(this.innerText);
            
        });

        $('#sum').text(total);

        console.log(total);
    });

});


// $(document).ready(function () {

//     $('#count-sum').click(function () {
//         let total = 0;
//         $('.salary').each(function (index, element) {
//             total += Number(element.innerText);
            
//         });

//         $('#sum').text(total);

//         console.log(total);
//     });

// });