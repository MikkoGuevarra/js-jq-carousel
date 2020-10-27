$(document).ready(function(){
    $('.next .fa-chevron-right').click(function() {
        //creo una variabile che mi salva l'img corrente
        var currentImg = $('img.active');

        //creo variabile per il dot che ha la classe  'fas'
        var selected = $('.fa-circle.fas');
        selected.toggleClass('fas far');



        //rimuovo class 'active' img corrente
        currentImg.removeClass('active');
        //creo condizione se img corrente ==1 add class
        //se no  ritorna alla prima img
        if (currentImg.next('img').length) {
            //add class 'active' next img
            currentImg.next('img').addClass('active');
            selected.next().toggleClass('fas far');
        } else {
            $('.slide img:first-of-type').addClass('active');
            $('.dots .fa-circle:first-of-type').toggleClass('fas far');
        }
    });

    $('.prev .fa-chevron-left').click(function() {
        //creo una variabile che mi salva l'img corrente
        var currentImg = $('img.active');
        var selected = $('.fa-circle.fas');
        selected.toggleClass('fas far');

        //rimuovo class 'active' img corrente
        currentImg.removeClass('active');

        //creo condizione se img corrente ==1 add class
        //se no  ritorna all'ultima img
        if (currentImg.prev('img').length) {
            //add class 'active' prev img
            currentImg.prev('img').addClass('active');
            selected.prev().toggleClass('fas far');
        } else {
            $('.slide img:last-of-type').addClass('active');
            $('.dots .fa-circle:last-of-type').toggleClass('fas far');
        }
    });

    // BONUS: cliccando su un pallino, si attiva l'immagine corrispondente. Ad esempio: sto visualizzando la prima immagine, clicco sul quarto pallino e si attiva direttamente la quarta immagine (oltre al pallino corrispondente ovviamente!)

    $('.fa-circle').click(function(){

        //creo variabile che selezioni il tag che ha la classe 'fas'
        var currentSelected = $('.fa-circle.fas');
        //applico toggleClass per cmabiare fas con far e viceversa
        currentSelected.toggleClass('fas far');
        //seleziono solo un cerchio usando this e qnd clicco fa il switch
        $(this).toggleClass('fas far');

        //creo variabile per img corrente
        // var selectedImg = $('img.active')
        // selectedImg.removeClass('active');
        //


    });

});
