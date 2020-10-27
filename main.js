$(document).ready(function(){
    $('.next .fa-chevron-right').click(function() {
        //creo una variabile che mi salva l'img corrente
        var currentImg = $('img.active');

        //rimuovo class 'active' img corrente
        currentImg.removeClass('active');
        //creo condizione se img corrente ==1 add class
        //se no  ritorna alla prima img
        if (currentImg.next('img').length) {
            //add class 'active' next img
            currentImg.next('img').addClass('active');
            $('.dots i').next().toggleClass('far fas')
        } else {
            $('.slide img:first-of-type').addClass('active');
        }
    });

    $('.prev .fa-chevron-left').click(function() {
        //creo una variabile che mi salva l'img corrente
        var currentImg = $('img.active');

        //rimuovo class 'active' img corrente
        currentImg.removeClass('active');

        //creo condizione se img corrente ==1 add class
        //se no  ritorna all'ultima img
        if (currentImg.prev('img').length) {
            //add class 'active' prev img
            currentImg.prev('img').addClass('active');
        } else {
            $('.slide img:last-of-type').addClass('active');
        }
    });

});
