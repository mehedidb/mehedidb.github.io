jQuery(document).on('ready', function ($) {
    "use strict";

    /*--------------------------
        STICKY MAINMENU
    ---------------------------*/
    $("#mainmenu-area").sticky({
        topSpacing: 0
    });


    /*---------------------------
        SMOOTH SCROLL
    -----------------------------*/
    $('ul#nav li a[href^="#"], a.navbar-brand, a.scrolltotop').on('click', function (event) {
        var id = $(this).attr("href");
        var offset = 60;
        var target = $(id).offset().top - offset;
        $('html, body').animate({
            scrollTop: target
        }, 1500, "easeInOutExpo");
        event.preventDefault();
    });


    /*----------------------------
        MOBILE & DROPDOWN MENU
    ------------------------------*/
    jQuery('.stellarnav').stellarNav({
        theme: 'dark'
    });

    /*----------------------------
        SCROLL TO TOP
    ------------------------------*/
    $(window).scroll(function () {
        var totalHeight = $(window).scrollTop();
        if (totalHeight > 300) {
            $(".scrolltotop").fadeIn();
        } else {
            $(".scrolltotop").fadeOut();
        }
    });


    /*--------------------------
       HOME PARALLAX BACKGROUND
    ----------------------------*/
    $(window).stellar({
        responsive: true,
        positionProperty: 'position',
        horizontalScrolling: false
    });





    /*----------------------------
        PORTFOLIO MASONRY ACTIVE
    -----------------------------*/
    var $CreativePortfolioMasonry = $('.portfolio-masonry');
    if (typeof imagesLoaded === 'function') {
        imagesLoaded($CreativePortfolioMasonry, function () {
            setTimeout(function () {
                $CreativePortfolioMasonry.isotope({
                    itemSelector: '.portfolio-item',
                    resizesContainer: false,
                    layoutMode: 'masonry',
                    filter: '*'
                });
            }, 500);
        });
    };


    /* ------------------------------
     PORTFOLIO FILTERING
     -------------------------------- */
    $('.portfolio-menu li').on('click', function () {
        $(this).addClass('active');
        var filterValue = $(this).attr('data-filter');

        $(".portfolio-masonry").isotope({
            filter: filterValue,
            animationOptions: {
                duration: 750,
                easing: 'linear',
                queue: false,
            }
        });
        return false;
    });


    /*---------------------------
        PROGRESS SKILL BAR
    -----------------------------*/
    jQuery('.skillbar').each(function () {
        jQuery(this).appear(function () {
            jQuery(this).find('.count-bar').animate({
                width: jQuery(this).attr('data-percent')
            }, 3000);
            var percent = jQuery(this).attr('data-percent');
            jQuery(this).find('.count').html('<span>' + percent + '</span>');
        });
    });


    /*---------------------------
        SCREENSHOT SLIDER
    -----------------------------*/
    var $screenshotCarousel = $('.screenshot-list');
    $screenshotCarousel.owlCarousel({
        merge: true,
        smartSpeed: 1000,
        loop: true,
        nav: true,
        center: true,
        navText: ['<i class="fa fa-long-arrow-left"></i> Prev', 'Next <i class="fa fa-long-arrow-right"></i>'],
        autoplay: true,
        autoplayTimeout: 3000,
        margin: 20,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 5
            },
            1200: {
                items: 5
            }
        }
    });


    /*---------------------------
        TESTMONIAL SLIDER
    -----------------------------*/
/*    $('.client-list').owlCarousel({
        merge: true,
        smartSpeed: 1000,
        loop: true,
        nav: false,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        autoplay: false,
        autoplayTimeout: 2000,
        margin: 10,
        responsiveClass: true,
        responsive: {
            0: {
                items: 2
            },
            600: {
                items: 4
            },
            1000: {
                items: 6
            }
        }
    });*/


    /*------------------------------
        ABOUT VIDEO POPUP
    --------------------------------*/
/*    $('.video-play-button').magnificPopup({
        disableOn: 700,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 320,
        preloader: false
    });*/


    /*--------------------------
        ACTIVE WOW JS
    ----------------------------*/
    new WOW().init();
    /*---------------------------
    
    -----------------------------*/
    /*---------------------------
	    HOME SLIDER
	-----------------------------*/
/*    var $homeSlider = $('.welcome-slider-area');
    $homeSlider.owlCarousel({
        merge: true,
        smartSpeed: 3000,
        loop: true,
        nav: true,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        autoplay: true,
        autoplayTimeout: 3000,
        margin: 0,
        animateIn: 'fadeIn',
        animateOut: 'fadeOut',
        responsiveClass: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            },
            1200: {
                items: 1
            }
        }
    });
    $homeSlider.on("translate.owl.carousel", function () {
        $(".welcome-single-slide h1,.welcome-single-slide h4, .welcome-single-slide p, .home-download-button").removeClass("animated fadeInUp").css("opacity", "0");


    });
    $homeSlider.on("translated.owl.carousel", function () {
        $(".welcome-single-slide h1,.welcome-single-slide h4, .welcome-single-slide p, .home-download-button").addClass("animated fadeInUp").css("opacity", "1");
    });*/

}(jQuery));



jQuery(window).on('load', function () {
    "use strict";
    /*--------------------------
        PRE LOADER
    ----------------------------*/
    $(".preeloader").fadeOut(1000);


    /*---------------------------
        ISOTOPE ACTIVE ON LOAD
    -----------------------------*/
/*    $(".portfolio-masonry").isotope({
        itemSelector: '.portfolio-item'
    });*/

});
