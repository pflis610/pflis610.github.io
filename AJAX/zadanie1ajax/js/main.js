$(document).ready(function () {

    $('#get-data').click(function () {

        $.getJSON('https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php')
            .done(function (data) {

                let dataProg = $('<div></div>').attr('id', 'dane-programisty').text('Imie: ' + data.imie + ',' +
                 ' Nazwisko: ' + data.nazwisko + ',' + ' Zawód: ' + data.zawod + ',' + ' Firma : ' + data.firma);

                $('body').append(dataProg);

                console.log(data);
            })
            .fail(function (error) {
                console.error(error);
            });

    });


});