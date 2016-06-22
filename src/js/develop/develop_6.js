function headerButer(menuMobile,toggleMenu){
 
    $(document).on('click touchstart',function (event){
        if($(window).width()<1024-$.scrollbarWidth()){
            var div = toggleMenu;
            if (!div.is(event.target) && div.has(event.target).length === 0 && !menuMobile.is(event.target) && menuMobile.has(event.target).length === 0)
                {
                    toggleMenu.slideUp();
                    menuMobile.removeClass('active');
                }
        }
    });
}



$(document).ready(function(){
	headerButer($(".butter"),$( ".mbox>ul"));
});

$(window).load(function(){

});

$(window).resize(function(){

});