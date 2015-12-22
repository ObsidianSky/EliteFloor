(function($){
    if($.fn.mCustomScrollbar){
        $(window).load(function(){                
            $(".slim-scroll").mCustomScrollbar({
                scrollButtons:{enable:true},
                theme:"dark-thin"
            }); 
        });
    }   
})(jQuery);

$(function() {
    function fullScreen() {
        var windowHeight = $(window).height();
        var windowWidth = $(window).width();
        var fullHeight = windowHeight - 61;        
         $('.full-screen').css({
            'height': fullHeight
        });
        $('.slideshow-fullscreen').css({
            'height': fullHeight
        });
     }
    $(window).resize(function() {
        fullScreen();         
    });
    fullScreen();
 });
// ----------------------------------------------------------
