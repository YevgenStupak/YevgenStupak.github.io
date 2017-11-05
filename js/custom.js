//Slider Slick activate------//
//top slider//
$(document).ready(function(){
    $('.bannerr-slider').slick({
        appendArrows : '.banner-slider-button',
        prevArrow : '<button type="button" class="slick-prev"><i class="fa fa-angle-left"></i></button>',
        nextArrow : '<button type="button" class="slick-next"><i class="fa fa-angle-right"></i></button>',
        fade: false
        
    });
//down slider//
    $('.case-study-slider').slick({
        arrows : false,
        dots : true 
        
    });
});



//menu scroll//
$(document).ready(function(){
    $("#menu").on("click","a",function(event){
        event.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top;
            $('body,html').animate({scrollTop: top},2000);
    });
});



// button back-up//
(function($) {  
$(function() {  
    
    $('#back-top').click(function() {  
    $('body,html').animate({scrollTop:0},2500);  
    return false;  
    });  
    
});  
})(jQuery);


// wow effekt//
newFunction();

function newFunction() {
    var wow = new WOW({
        boxClass: 'wow',
        animateClass: 'animated',
        offset: 200,
        mobile: false,
        live: true,
        callback: function(box) {
            // the callback is fired every time an animation is started
            // the argument that is passed in is the DOM node being animated
        },
        scrollContainer: null // optional scroll container selector, otherwise use window
    });
    wow.init();
}
newFunction_1();


// header-resize//
function newFunction_1() {
    $(window).scroll(function() {
        if ($(this).scrollTop() > 50) {
            $('header').addClass("header-scroll");
        }
        else {
            $('header').removeClass("header-scroll");
        }
    });
}

$(document).ready(function(){
    var touch = $('#touch-menu');
    var men = $('.main-menu');

    $(touch).on('click', function(e) {
        e.preventDefault();
        men.slideToggle();
    });
    $(window).resize(function(){
        var wid = $(window).width();
        if(wid > 760 && men.is(':hidden')) {
            men.removeAttr('style');
        }
    });
});
