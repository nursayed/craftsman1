 // isotop

  var $grid = $('.grid').isotope({
    itemSelector: '.grid-item',
    layoutMode: 'fitRows',
    getSortData: {
      name: function (element) {
        return $(element).text();
      }
    }
  });
  
  $('.filter button').on("click", function () {
    var value = $(this).attr('data-name');
      $grid.isotope({
        filter: value
      });
    $('.filter button').removeClass('filter-active');
    $(this).addClass('filter-active');
  })

  // client

$(document).ready(function () {
  function gotop() {
    if ($(window).scrollTop() > 150) {
      $('#goTop').fadeIn();
    } else {
      $('#goTop').fadeOut();
    }
  }

  function responsiveStyle() {
    $('.main-project-item .wrap, .square-wrap').each(function () {
      $(this).css({ height: $(this).width() });
    });
    if ($(window).width() <= 768) {
    } else {
    }
  }
  function len(el) {
    el.oninput = function () {
      if (this.value.length > 1) {
        this.value = this.value.slice(0, 1);
      }
    };
  }
  function maxLengthCheck(object) {
    if (object.value.length > object.maxLength)
      object.value = object.value.slice(0, object.maxLength);
  }
  $('.close-menu').on('click', function () {
    $(this).parents('.top-menu').removeClass('show');
  });
  $('.close').on('click', function () {
    $(this).parents('.modal').modal('hide');
  });
  $('.open-menu').on('click', function () {
    var t = $(this).attr('data-target');
    $(t).toggleClass('show');
  });
  $('[data-toggle="tooltip"]').tooltip();

  // pop up setting
  $('.closeView').click(function () {
    $(this).parents('.popup').fadeOut(500);
    $(this).parents('.popup').find('video ,iframe').remove();
    $(this).parents('.popup').find('img').removeAttr('src');
  });
  $(document).on('click', '.poImg', function () {
    var sr = $(this).attr('data-src'),
      el = '';
    el = "<img  src='" + sr + "' class='d-block m-auto'/>";
    $('#popupimg .content').prepend(el);
    $('#popupimg').fadeIn(500);
  });
  $('.povid').on('click', function () {
    var ssr = $(this).attr('data-src'),
      isYou = $(this).attr('data-youtube'),
      ell = '';
    if (isYou == 'true') {
      ell = "<iframe src='" + ssr + "' width='100%' height='100%'></iframe>";
    } else {
      ell =
        "<video autoplay controls><source src='" +
        ssr +
        "' type='video/mp4'></video>";
    }
    $('#popupimg .content').prepend(ell);
    $('#popupimg').fadeIn(500);
  });
  $('.popbutn').on('click', function () {
    $('.popup').each(function () {
      $(this).fadeOut();
    });
    var sr = $(this).data('popup');
    $(sr).fadeIn(500);
  });
  $('.popcheck').on('change', function () {
    if ($(this).is(':checked')) {
      var sr = $(this).data('popup');
      $(sr).fadeIn(500);
    }
  });
  $("section:not('.top-header')").on('click', function () {
    $('.search-form').removeClass('show');
  });
  $('.show-review').on('click', function () {
    var t = $(this).attr('data-target');
    $('.reviews').find('.review-item').removeClass('show');
    $('.show-review').removeClass('active');
    $(t).addClass('show');
    $(this).addClass('active');
    $('.reviews').addClass('show');
  });
  $('.reviews .close-review').on('click', function () {
    $('.reviews').removeClass('show');
  });
  len($('.code-input'));
  //  =========== call functions here ===========///
  responsiveStyle();
  $(window).on('resize', function () {
    responsiveStyle();
  });
  $('.code-input').on('keyup', function () {
    var v = $(this).val();
    v = v.slice(0, 1);
    $(this).val(v);
  });
  AOS.init({
    once: true,
    mirror: true,
    duration: 1000,
    disable: 'mobile',
  });
});
