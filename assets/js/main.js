$(document).ready(function () {
        // Sticky Bavbar
        $(window).on('scroll', function () {
            if ($(window).scrollTop()) {
                $('#nav').addClass('sticky');
            } else if (!$(window).scrollTop()) {
                $('#nav').removeClass('sticky');
            }
            else {
                $('#nav').removeClass('sticky');
            }
        })

        
    $('.menu').on('click', function () {
        console.log('sticky ');
        $('.menu').addClass('menu-hide');
        $('.menu-hide').removeClass('menu');
        $('.nav-list').removeClass('hide');
        $('.cross-hide').addClass('cross');
        $('.cross').removeClass('cross-hide');
        
    })

    
    $('.crosss').on('click', function () {
        console.log('sticky dafasdf');
        $('.cross').addClass('cross-hide');
        $('.cross-hide').removeClass('cross');
        $('.nav-list').addClass('hide');
        $('.menu-hide').addClass('menu');
        $('.menu').removeClass('menu-hide');

    })
    $(window).scroll(function() {
        var scrollPos = $(window).scrollTop();
        
        $('section').each(function() {
          var top = $(this).offset().top - 100,
              bottom = top + $(this).outerHeight();
    
          if (scrollPos >= top && scrollPos <= bottom) {
            $('nav ul li a').removeClass('active');
            $('nav ul li a[href="#' + $(this).attr('id') + '"]').addClass('active');
          }
        });
      });
})
