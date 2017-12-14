//Main Site JS
$(document).ready(function(){
  //Initialize WOW.JS
  new WOW().init();

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
    if (e.keyCode == 27) {
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
});
