function butterMenu() {
    $('.butter').click(function () {
        $(this).toggleClass('active');
        if($(this).hasClass('active')){
            $('.menu.top ul').stop().slideDown();
        }else{
            $('.menu.top ul').stop().slideUp();
        }
        return false;
    });
}
function checkAdaptive() {
    if($('.butter').css('display') == 'block' ){return true;}
    return false;
}

function fixedMenu() {
    $(window).scroll(function () {
        var top = $(window).scrollTop();

        if(top >= $('header').height()){

            $('.menu.top').attr('style','position:fixed;top:0;left:0;');
        }else{
            $('.menu.top').removeAttr('style');
        }
    })
}
function clickOnClick() {
    $('.click').click(function () {
        var ind =0;
        $('.practitcs-wrap.mobile .item').each(function () {
            $(this).slideDown();
            ind++;
            slide($('.practitcs-wrap.mobile .item').eq(ind));
        });
        function slide(block) {
            var box =block;
            setTimeout(function () { box.slideDown();  },400);
        }
        $(this).remove();
    });
}
$(document).ready(function(){
    butterMenu();
    fixedMenu();
    clickOnClick();
});

$(window).load(function(){

});

$(window).resize(function(){
    if (checkAdaptive()){
        $('.menu.top ul').removeAttr('style');
        $('.butter').removeAttr('style');
    }
});