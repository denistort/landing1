 $(document).ready(function(){
                $('.burger-menu-button').click(function(){
                    $('.burger-menu').toggleClass('active');
                })

                $('section').click(function(){
                    if( $('.burger-menu').hasClass('active')){
                        $('.burger-menu').removeClass('active')
                    }
                })
            })