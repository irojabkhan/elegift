
$(document).ready(function() {
	'use strict';

	// Sticky Nav

	$(window).on('scroll', function() {
		let scroll = $(window).scrollTop();

		if (scroll >= 1) {
		  $('.navigation').addClass('fixed');
		} else {
		  $('.navigation').removeClass('fixed');
		}
	});

	// Onepage Nav

	$('.onepage-nav').each(function () {
        $(this).onePageNav({
          filter: ':not(.external)'
        });
    });

	// Nav slidetop

    if($(window).width() < 991) {
      $(document).on('click', function(event) {
        let clickover = $(event.target);
        let _opened = $('#navbarSupportedContent').hasClass('show');
        if(_opened === true && !(clickover.is('.navbar-nav li, .navbar-nav .dropdown *'))) {
          $('button.navbar-toggler').trigger('click');
        }
      });
    }

	// Bookmark

	$('.product__bookmark').on('click', function(e) {
		e.preventDefault();
		$(this).toggleClass('product__bookmarked');
	})

	// Date Picker

	$("input.datepicker").datetimepicker({
		timepicker: false,
		lang: "it",
		format: "d/m/Y",
		todayButton: false,
	});


	// imagesLoaded

	$('.grid').imagesLoaded().always( function( instance ) {});


	// Magnific PopUp

	$('.elegift-promo_video .play-btn').magnificPopup({
	  type: 'iframe'
	});

	$.extend(true, $.magnificPopup.defaults, {
	  iframe: {
	    patterns: {
	      youtube: {
	        index: 'youtube.com/',
	        id: 'v=',
	        src: 'https://www.youtube.com/embed/%id%?autoplay=1'
	      }
	    }
	  }
	});

	// WOW Js

    new WOW().init();

})


// Preloader

$(window).on('load', function() {
  $(".preloader").delay(200).fadeOut();
});