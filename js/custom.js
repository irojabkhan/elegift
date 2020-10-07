
$(document).ready(function() {
	'use strict';


	/*-------------------------------------
	Nav slidetop
	-------------------------------------*/
    if($(window).width() < 991) {
      $(document).on('click', function(event) {
        var clickover = $(event.target);
        var _opened = $('#navbarSupportedContent').hasClass('show');
        if(_opened === true && !(clickover.is('.navbar-nav li, .navbar-nav .dropdown *'))) {
          $('button.navbar-toggler').trigger('click');
        }
      });
    }

	/*-------------------------------------
	Sticky Nav
	-------------------------------------*/
	$(window).on('scroll', function() {
		var scroll = $(window).scrollTop();

		if (scroll >= 1) {
		  $('.nav-wrap').addClass('fixed');
		} else {
		  $('.nav-wrap').removeClass('fixed');
		}
	});


	$('.onepage-nav').each(function () {
        $(this).onePageNav({
          filter: ':not(.external)'
        });
    });

	/*--------------------------------------------
	Bookmark
	--------------------------------------------*/
	$('.product-bookmark').on('click', function(e) {
		e.preventDefault();
		$(this).toggleClass('bookmarked');
	})

	/*--------------------------------------------
	Date Picker
	--------------------------------------------*/
	$( "#datepicker" ).datepicker();

	/*--------------------------------------------
	Magnific PopUp
	--------------------------------------------*/

	$('.promo-video .play-btn').magnificPopup({
	  type: 'iframe',
	  gallery: {
	    // enabled: true,
	  },
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


})


/*--------------------------------------------
Preloader
--------------------------------------------*/

$(window).on('load', function() {
  $(".preloader-wrap").delay(200).fadeOut();
});