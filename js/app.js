$(document).ready(function(){
    $('.slider-background').slick({
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
    });


    $('.slider-2').slick({
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 5000,
    });

    $('.arrow i').click(function(){

        $('html, body').animate({
            scrollTop: 0,
        }, 500, 'linear')
    })
    
    $(window).scroll(function(){
    
        console.log($('.arrow').offset().top)
        if ( $('.arrow').offset().top > 800 ) {
            $('.arrow i').fadeIn('fast')
        } else{
            $('.arrow i').fadeOut('fast')
        }
    })
});