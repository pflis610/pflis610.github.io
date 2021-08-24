$(document).ready(function(){

    $('.btn-first').click(function(){
        $('p').first().insertAfter($('p').last());
    });

    $('.btn-last').click(function(){
        $('p').last().insertBefore($('p').first());
    });

});