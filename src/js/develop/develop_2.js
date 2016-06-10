


$(document).ready(function(){

    $('.taba').click(function(){

        if( !$(this).closest('li').hasClass('activate') ) {

            $('.descript').stop().slideUp(300);
            $('.faq li').removeClass('activate');
            $(this).closest('li').addClass('activate');
            $(this).closest('li').find('.descript').stop().slideDown(300);

        } else {
            $('.descript').stop().slideUp(300);
            $('.descript').closest('li').removeClass('activate');
        }

    });

});

$(window).load(function(){

});

$(window).resize(function(){

});

