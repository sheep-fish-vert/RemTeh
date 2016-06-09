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

$(document).ready(function(){
    butterMenu();
});

$(window).load(function(){

});

$(window).resize(function(){
    if (checkAdaptive()){
        $('.menu.top ul').removeAttr('style');
        $('.butter').removeAttr('style');
    }
});