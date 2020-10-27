$(document).ready(function(){
    $('.next .fa-chevron-right').click(function() {
        //creo una variabile che mi salva l'img corrente
        var currentImg = $('img.active');

        //rimuovo class 'active' img corrente
        currentImg.removeClass('active');
        //creo condizione se img corrente ==1 add class
        //se no  ritorna alla prima img
        if (currentImg.next().length) {
            //add class 'active' next img
            currentImg.next().addClass('active');
        } else {
            $('.slide :first-child').addClass('active');
        }
    });

    $('.prev .fa-chevron-left').click(function() {
        //creo una variabile che mi salva l'img corrente
        var currentImg = $('img.active');

        //rimuovo class 'active' img corrente
        currentImg.removeClass('active');

        //creo condizione se img corrente ==1 add class
        //se no  ritorna all'ultima img
        if (currentImg.prev().length) {
            //add class 'active' prev img
            currentImg.prev().addClass('active');
        } else {
            $('.slide :last-child').addClass('active');
        }
    });

});
