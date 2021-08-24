
$(document).ready(function () {

    $('.button').click(function () {

        $('.square').animate({ left: '100px', height: '100px', width: '100px' }, 3000,
            function () {
                $('.square').addClass('backgroudColor');
                setTimeout(function () { $('.square').append('<h2>Animacja Zakończona</h2>'); }, 5000);
            });

    });

});
