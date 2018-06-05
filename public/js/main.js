// Little Scientists Main Site Javascript
// By Abhi Nayar for SemiErect Design Co.
// Copyright (c) 2018 - All Rights Reserved.
// Please contact hello@abhi.design for design information.
//
//
// NOTE: Future dev., jQuery is old fashioned and this whole thing should be re-arch as a React or Vue app.
// Out of scope for this project but definitely something you should do.
//
//
//Initialize WOW.JS
new WOW().init();

document.addEventListener('DOMContentLoaded', function(e) {
  console.log('DOM Fully Loaded & Parsed');

  // Update active navigation item based on namespace
  function updateNav() {
    $('#navigation .nav-link').removeClass('active');
    $('#navigation #' + $('.barba-container').data('namespace')).addClass('active');
  } updateNav();

  // Update active navigation item based on namespace
  function updateNav() {
    $('#navigation .nav-link').removeClass('active');
    $('#navigation #' + $('.barba-container').data('namespace')).addClass('active');
  } updateNav();

  // Navigation code (scrolling)
  $(document, window).on('load ready scroll resize', function() {
    var bannerHeight = $('#banner').height();
    if ($(window).scrollTop() > bannerHeight + 20) {
      $('#navigation').addClass('attached');
    } else {
      $('#navigation').removeClass('attached');
    }
  });

  // Mobile navigation code
  $('.nav-menu, .nav-close').on('click', function() {
    $('.nav-list').toggleClass('hidden');
  }); $(document).keyup(function(e) {
    if (e.keyCode == 27 && $(window).width() < 992) {
      $('.nav-list').toggleClass('hidden');
    }
  });

  // Makes the text pop from behind Ollie
  setTimeout(function() {
    $('.landing-ollie-text').addClass('expanded');
  }, 500);

  // Testimonials
  function switchTestimonials() {
    $('.testimonial').each(function(i, item) {
      var t = $(item);
      setTimeout(function() {
        $('.testimonial').removeClass('active');
        $(t).addClass('active');
        $('.indicator-wrapper .indicator').removeClass('active');
        $('.indicator-wrapper .indicator[data-indicator="' + $(t).data('testimonial') + '"]').addClass('active');
      }, 16000 * i);
    });
    $('.indicator-wrapper .indicator').on('click', function() {
      $('.indicator-wrapper .indicator').removeClass('active');
      $(this).addClass('active');
      $('.testimonial').removeClass('active');
      $('.testimonial[data-testimonial="' + $(this).data('indicator') + '"]').addClass('active');
    });
  } switchTestimonials();
  setInterval(switchTestimonials, 48000);

  // Makes the background image the same height as the columns
  function setBgImgHeight() {
    var bgImages = $('.lg-bg-img');
    for (var i = 0; i < bgImages.length; i++) {
      var item = bgImages[i];
      //console.log($(item), $(item).closest('.row').children('.lg-img-text-col'), $(item).closest('.row').children('.lg-img-text-col').height());
      $(item).height($(item).closest('.row').children('.lg-img-text-col').height() + 0);
    }
  } setBgImgHeight();
  $(window).on('resize', function() {
    setBgImgHeight();
  });

  // Snipcart Code
  Snipcart.subscribe('cart.ready', function (data) {
    $('#snipcart-header').append('<div id="snip-header-int-shipping" class="text-section hidden-xs hidden-sm">For international purchases please call us at <a class="color-sec" href="tel:18003228386">1-800-FACT-FUN</a></div>');
  }); Snipcart.subscribe('cart.opened', function() {
    if ($(window).width() < 992) {
      $('#drift-widget').addClass('hidden');
    }
  }); Snipcart.subscribe('cart.closed', function() {
    if ($(window).width() < 992) {
      $('#drift-widget').removeClass('hidden');
    }
  });

  // Science Lesson List
  // dependencies: List.js
  var scienceLessonList = new List('scienceLessonListWrapper', {
    valueNames: ['name', 'desc']
  });

  // Smooth Scroll
  $('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
      &&
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top - 110
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
        });
      }
    }
  });

  // register service worker
  if ('serviceWorker' in navigator) {
  	navigator.serviceWorker.register('/service-worker.js').then(function(registration) {
  		console.log('ServiceWorker registered with scope: ', registration.scope);
  	}).catch(function(err) {
  		console.log('ServiceWorker registration failed: ', err);
  	});
  }
})
