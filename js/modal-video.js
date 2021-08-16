'use strict'


    $('.fakeplay-img').click(function(){
        $('.overlay-modal-video').fadeIn('fast')
        $('body').css({overflow: 'hidden'})
        $('.overlay-modal-video').css({display: 'flex'})
    })

    $('.button-wrappp-close').click(function(){
        $('.overlay-modal-video').fadeOut('fast')
        $('body').css({overflow: ''})
        $('.overlay-modal-video').css({display: 'none'})
    })
