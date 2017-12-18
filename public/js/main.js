//Initialize WOW.JS
new WOW().init();
//Main Site JS
$(document).ready(function(){
  // Update active nav
  function updateNav() {
    $('#navigation .nav-link').removeClass('active');
    $('#navigation #' + $('.barba-container').data('namespace')).addClass('active');
  } updateNav();

  /* Navigation */
  $(document, window).on('load ready scroll resize', function() {
    var bannerHeight = $('#banner').height();
    if ($(window).scrollTop() > bannerHeight + 20) {
      $('#navigation').addClass('attached');
    } else {
      $('#navigation').removeClass('attached');
    }
  });

  $('.nav-menu, .nav-close').on('click', function() {
    $('.nav-list').toggleClass('hidden');
  }); $(document).keyup(function(e) {
    if (e.keyCode == 27 && $(window).width() < 992) {
      $('.nav-list').toggleClass('hidden');
    }
  });

  /* Landing */
  setTimeout(function() {
    $('.landing-ollie-text').addClass('expanded');
  }, 500);

  /* Testimonials */
  function switchTestimonials() {
    $('.testimonial').each(function(i, item) {
      var t = $(item);
      setTimeout(function() {
        $('.testimonial').removeClass('active');
        $(t).addClass('active');
        $('.indicator-wrapper .indicator').removeClass('active');
        $('.indicator-wrapper .indicator[data-indicator="' + $(t).data('testimonial') + '"]').addClass('active');
      }, 8000 * i);
    });
    $('.indicator-wrapper .indicator').on('click', function() {
      $('.indicator-wrapper .indicator').removeClass('active');
      $(this).addClass('active');
      $('.testimonial').removeClass('active');
      $('.testimonial[data-testimonial="' + $(this).data('indicator') + '"]').addClass('active');
    });
  } switchTestimonials();
  setInterval(switchTestimonials, 24000);

  /* BG Image LG */
  function setBgImgHeight() {
    var bgImages = $('.lg-bg-img');
    for (var i = 0; i < bgImages.length; i++) {
      var item = bgImages[i];
      console.log($(item), $(item).closest('.row').children('.lg-img-text-col'), $(item).closest('.row').children('.lg-img-text-col').height());
      $(item).height($(item).closest('.row').children('.lg-img-text-col').height() + 0);
    }
  } setBgImgHeight();
  $(window).on('resize', function() {
    setBgImgHeight();
  });

  // Snipcart
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
});
