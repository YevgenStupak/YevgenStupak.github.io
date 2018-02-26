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

$(document).ready(function(){
    var show = true;
    var countbox = "#counts";
    $(window).on("scroll load resize", function(){
 
        if(!show) return false;                   // Отменяем показ анимации, если она уже была выполнена
 
        var w_top = $(window).scrollTop();        // Количество пикселей на которое была прокручена страница
        var e_top = $(countbox).offset().top;     // Расстояние от блока со счетчиками до верха всего документа
 
        var w_height = $(window).height();        // Высота окна браузера
        var d_height = $(document).height();      // Высота всего документа
 
        var e_height = $(countbox).outerHeight(); // Полная высота блока со счетчиками
 
        if(w_top + 200 >= e_top || w_height + w_top == d_height || e_height + e_top < w_height){
            $("#spincr1").spincrement({
                from: 0,
                to:3891,
                thousandSeparator: "",
                duration: 3500
            });
            $("#spincr2").spincrement({
                from: 0,
                to:2810,
                thousandSeparator: "",
                duration: 3500
            });
            $("#spincr3").spincrement({
                from: 0,
                to:618,
                thousandSeparator: "",
                duration: 3500
            });
            $("#spincr4").spincrement({
                from: 0,
                to:178,
                thousandSeparator: "",
                duration: 3500
            });
            $("#spincr5").spincrement({
                from: 0,
                to:285,
                thousandSeparator: "",
                duration: 3500
            });
 
            show = false;
        }
    });
});


// menu scroll//
$(document).ready(function(){
    $("#menu,   #main-btn").on("click","a",function(event){
        event.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top;
            $('body,html').animate({scrollTop: top},2000);
    });
});



// jQuery(document).ready(function ($) {

// var lastId,
// topMenu = $("#menu"),
// topMenuHeight = topMenu.outerHeight(),
//     // All list items
//     menuItems = topMenu.find("a"),
//     // Anchors corresponding to menu items
//     scrollItems = menuItems.map(function () {
//         var href = $(this).attr("href");
//         if(href.indexOf("#") === 0){
//             var item = $($(this).attr("href"));
//             if (item.length) {
//                 return item;
//             }
//         }
//     });
// });


// function up() {  
//     var top = Math.max(document.body.scrollTop,document.documentElement.scrollTop);  
//   if(top > 0) {  
//     window.scrollBy(0,((top+200)/-10));  
//     t = setTimeout('up()',50);  
//   } else clearTimeout(t);  
//   return false;  
//   }

// button back-up//
// (function($) {  
// $(function() {  
    
//     $('#back-top').click(function() {  
//     $('body,html').animate({scrollTop:0},2500);  
//     return false;  
//     });  
    
// });  
// })(jQuery);


jQuery(document).ready(function (){

    $(window).scroll(function () {
        
        //Display or hide scroll to top button 
        if  ($(this).scrollTop()>500) {
            $('#back-top').fadeIn(1000);
        } else {
            $('#back-top').fadeOut(600);
        }
    });
    $('#back-top').click(function () {
        $("html,body").animate({
            scrollTop: 0
            }, 800);
            return false;
        
    });
});

// wow effekt//


function newFunction() {
    var wow = new WOW({
        boxClass: 'wow',
        animateClass: 'animated',
        offset: 300,
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
newFunction();


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
newFunction_1();



$(document).ready(function(){

    $(".filter-button").click(function(){
        var value = $(this).attr('data-filter');
        
        if(value == "all")
        {
            $('.filter').show(500);
        }
        else
        {
            $(".filter").not('.'+value).hide(500);
            $('.filter').filter('.'+value).show(500);
            
        }
    });
    
    if ($(".filter-button").removeClass("active")) {
$(this).removeClass("active");
}
$(this).addClass("active");

});

$(document).ready(function() {
    
    //E-mail Ajax Send
    $("#reg").submit(function() { //Change
        var th = $(this);
        $.ajax({
            type: "POST",
            url: "../form/submit.php", //Change
            data: th.serialize()
        }).done(function() {
            
            // $('.hidden').fadeIn(500);

            setTimeout(function() {
                $('.hidden, .close').click(function() {
                    $('.hidden').fadeOut(500);
                });
                // Done Functions
                th.trigger("reset");
            }, 1000);
        });
        return false;
    });

});

 $(document).ready(function(){
    
     $('.form-btn').click(function() {
       
         $('.hidden').fadeIn(500);
     });

     $('.hidden, .close').click(function() {

         $('.hidden').fadeOut(500);
     });
 });