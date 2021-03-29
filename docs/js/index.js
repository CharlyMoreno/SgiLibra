var width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
var minPoint = 991;

jQuery(function ($) {
    $(window).scroll(function(){
        if ($(this).scrollTop() > 50 && width > minPoint) {
            $('.navbar').addClass('bg-dark');        
        } else {
            $('.navbar').removeClass('bg-dark');               
        }
    });
});
