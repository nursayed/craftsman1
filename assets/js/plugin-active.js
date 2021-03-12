(function($) {
  'use strict';

  /*--------------------------------------
	Owl Carousel Active coad here
----------------------------------------*/
  $('.review-active').owlCarousel({
    loop: true,
    autoPlay: true,
    autoPlayTimeout: 9000,
    autoPlayHoverPause: true,
    nav: true,
    navText: [
      '<i class="fa fa-angle-left"></i>',
      '<i class="fa fa-angle-right"></i>'
    ],
    responsive: {
      0: {
        items: 1
      },
      767: {
        items: 2
      },
      1000: {
        items: 3
      }
    }
  });

  //  animate plugin active
  new WOW().init();

  //  counter up plugin active
  $('.counter').counterUp({
    delay: 10,
    time: 1000
  });

 

 
  
})(jQuery);
