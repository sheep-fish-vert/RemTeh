
/* show hide go top button */

    function showHideGoTopButton(){

        $(window).scroll(function(){
            if($(window).scrollTop() > 100){
                $('.button-up').addClass('show');
            }else{
                $('.button-up').removeClass('show');
            }
        });

    }

/* /show hide go top button */


$(document).ready(function(){

    showHideGoTopButton();

});

$(window).load(function(){

});

$(window).resize(function(){

});