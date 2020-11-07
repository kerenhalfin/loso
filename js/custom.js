// Show loading spinner instead of content while the page is loading
$(window).on("load", function () {
    // fade out spinner
    $(".spinner-wrapper").fadeOut("slow");
    // Show scroll bar
    $("body").css("overflow-y", "scroll");
});

// Add smooth scrolling in addition to the css property
// in case the browser doesn't support that
$(document).ready(function () {
    'use strict';

    $('.nav-item, #scroll-to-top').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });
});

// Show and hide menu
$(document).ready(function () {
    'use strict';

    $(window).scroll(function () {
        'use strict';
        let marginTop, opacity, backgroundColor;

        if ($(window).scrollTop() < 80) {
            marginTop = '-100px';
            opacity = '0';
            backgroundColor = 'rgb(0 0 0 / 0%)';

        } else {
            marginTop = '0px';
            opacity = '1';
            backgroundColor = 'rgb(0 0 0 / 80%)';
        }

        $('.navbar').css({
            'margin-top': marginTop,
            'opacity': opacity
        });

        $('.navbar-default').css({
            'background-color': backgroundColor
        });
    });
});

// active menu item on click
$(document).ready(function () {
    'use strict';

    $('.navbar-nav > li > a').click(function () {
        'use strict';

        // remove the active class from the previous anchor
        $('.navbar-nav > li').removeClass('active');
        // add active class to the current clicked anchor
        $(this).parent().addClass('active');
    });
});

// highlight relevant section on the menu when the user scrolls through the section
$(document).ready(function () {
    'use strict';

    $(window).scroll(function () {
        'use strict';

        $('section').each(function () {
            'use strict';

            let sectionId = $(this).attr('id');
            let outerHeight = $(this).outerHeight();
            let greaterTop = $(this).offset().top - 70;

            // when the user scrolls 70 pixels before the section
            // find out the relevant section - add active css class to it, remove it from the rest of the sections
            if (($(window).scrollTop() > greaterTop) &&
                ($(window).scrollTop() < (greaterTop + outerHeight))) {
                $('.navbar-nav li a[href=\'#' + sectionId + '\']').parent().addClass('active');
            } else {
                $('.navbar-nav li a[href=\'#' + sectionId + '\']').parent().removeClass('active');
            }
        });
    });
});

// for devices - collapse the menu after click on the items
$(document).ready(function () {
    $('.navbar-nav>li>a').on('click', function () {
        $('.navbar-collapse').collapse('hide');
    });
});

// adjust the top+bottom padding of the header container so it would fill the screen nicely
$(document).ready(function () {
    'use strict';

    setInterval(function () {
        'use strict';

        let windowHeight = $(window).height();
        let containerHeight = $('.header-container').height();
        let padTop = windowHeight - containerHeight;

        $('.header-container').css({
            'padding-top': Math.round(padTop / 2) + 'px',
            'padding-bottom': Math.round(padTop / 2) + 'px'
        });

    }, 10);
});

// add a bxslider in the screens section
$(document).ready(function () {
    'use strict';

    $('.bxslider').bxSlider({
        slideWidth: 292.5,
        auto: true,
        minSlides: 1,
        maxSlides: 3,
        slideMargin: 50
    });
});

// add counter up animation
$(document).ready(function () {

    let viewportWidth = $(window).width();

    // add counter animation only excluding small devices
    if (viewportWidth > 767) {
        $('.counter-num').counterUp({
            delay: 10,
            time: 1500
        });
    }
});

// add animation
$(document).ready(function () {
    'use strict';

    new WOW().init();
});