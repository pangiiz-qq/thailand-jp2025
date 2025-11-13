'use strict';

window.onload = function () {
  var player = document.getElementById('eye-video');
  player.play();
};

window.onpageshow = function (event) {
  if (event.persisted) {
    window.location.reload();
  }
};
/**
 * Binds to the document ready event.
 *
 * @since 3.2.1
 *
 * @param {jQuery} $ The jQuery object.
 */


jQuery(document).ready(function ($) {
  if (navigator.userAgent.match(/Trident\/7\./)) {
    // if IE
    $('body').on('mousewheel', function () {
      event.preventDefault();
      var wheelDelta = event.wheelDelta;
      var currentScrollPosition = window.pageYOffset;
      window.scrollTo(0, currentScrollPosition - wheelDelta);
    });
  }

  var $gnavMenuClick = function $gnavMenuClick() {
    $('body').addClass('move');
    setTimeout(function () {
      $('body').removeClass('move');
    }, 600);
  };

  $(window).on('beforeunload unload pagehide', function (e) {
    $('body').addClass('move');
  });
  $('a.unbeforeunload').on('click', function () {
    $(window).unbind('beforeunload');
  });
  $(window).on('load', function () {
    $('body').addClass('load');
    var localLink = window.location + '';

    if (localLink.indexOf('#') !== -1) {
      localLink = localLink.slice(localLink.indexOf('#') + 1);
      $('html,body').animate({
        scrollTop: $('#' + localLink).offset().top
      }, 1000, 'swing');
    }
  });
  $('a[href*="#"]:not(.no-scroll)').on('click', function () {
    var duration = 1500;

    if ($(this).parents('.gnav_menu').length) {
      duration = 0;
      $gnavMenuClick();
    }

    var str = $(this).attr('href');
    var href = str.substring(str.indexOf('#'));
    var target = $(href === '#' || href === '' ? 'html' : href);
    var targetPosition = $(target).offset().top;

    var scrollStop = function scrollStop() {
      $('body, html').stop(true);
    };

    $('body, html').animate({
      scrollTop: targetPosition
    }, duration, 'swing');
    window.addEventListener('DOMMouseScroll', scrollStop, false);
    window.onmousewheel = document.onmousewheel = scrollStop;
    return false;
  });
  $('#gnav_open').on('click', function () {
    $('body').toggleClass('gnav_show');
  });
  $('.gnav_internal').on('click', function () {
    $('body').toggleClass('gnav_show');
  });

  (function () {
    $('body, .syn-width').width($(window).width());
    $(window).resize(function () {
      $('body, .syn-width').width($(window).width());
    });
  })();

  (function () {
    var gototop = $('#gototop');
    $(window).scroll(function () {
      var wStop = $('#footer').offset().top - $(window).innerHeight();

      if ($(this).scrollTop() > wStop) {
        gototop.addClass('absolute');
        $('body').addClass('to-footer');
      } else {
        gototop.removeClass('absolute');
        $('body').removeClass('to-footer');
      }

      if ($(this).scrollTop() > 200) {
        gototop.addClass('show');
      } else {
        gototop.removeClass('show');
      }
    });
  })();

  (function () {
    var main = document.getElementById('main');
    var header = document.getElementById('header');
    var mainTop = main.offsetTop;

    window.onscroll = function () {
      if (window.pageYOffset > mainTop - 120) {
        header.classList.add('onscroll');
      } else {
        header.classList.remove('onscroll');
      }
    };
  })();

  (function () {
    var fadeInScroll = function fadeInScroll() {
      $('.u-fadeIn').each(function () {
        var elemFadeIn = $(this).offset().top - $(window).innerHeight();

        if ($(window).scrollTop() > elemFadeIn + 50) {
          $(this).addClass('u-scrollIn');
        }
      });
    };

    setTimeout(function () {
      fadeInScroll();
    }, 500);
    $(window).scroll(function () {
      setTimeout(function () {
        fadeInScroll();
      }, 100);
    });
  })();

  (function () {
    var eyeVideo = document.getElementById('eye-video');
    var fullVideo = document.getElementById('full-video');

    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
      fullVideo.setAttribute('controls', '');
    }

    $(document).on('lity:open', function (event, instance) {
      eyeVideo.classList.remove('play', 'pause');
      eyeVideo.classList.add('pause');
      eyeVideo.pause();
      fullVideo.classList.remove('play', 'pause');
      fullVideo.classList.add('play');
      fullVideo.play();
    });
    $(document).on('lity:close', function (event, instance) {
      fullVideo.classList.remove('play', 'pause');
      fullVideo.classList.add('pause');
      fullVideo.pause();
      fullVideo.currentTime = 0;
      eyeVideo.classList.remove('play', 'pause');
      eyeVideo.classList.add('play');
      eyeVideo.play();
    });
  })();

  $('#top_mv_slider,#top_mv_slider_sp').bxSlider({
    auto: false,
    speed: 3000,
    pause: 3000,
    mode: 'fade',
    touchEnabled: true,
    infiniteLoop: true,
    controls: false,
    pager: false
  });
  $('#top_slide01').slick({
    dots: false,
    arrows: true,
    autoplay: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 3000,
    fade: true,
    cssEase: 'linear',
    prevArrow: $('#top_slide01_prev'),
    nextArrow: $('#top_slide01_next')
  });
  $(window).on('scroll', function (e) {
    var img1 = $('#par1').offset().top - $(window).outerHeight() - 500;

    if ($(window).scrollTop() > img1) {
      $('div[data-img=par1]').addClass('is-opacity');
    } else {
      $('div[data-img=par1]').removeClass('is-opacity');
    }

    var img2 = $('#par2').offset().top - $(window).outerHeight() - 500;

    if ($(window).scrollTop() > img2) {
      $('div[data-img=par2]').addClass('is-opacity');
    } else {
      $('div[data-img=par2]').removeClass('is-opacity');
    }

    var img3 = $('#par3').offset().top - $(window).outerHeight() - 500;

    if ($(window).scrollTop() > img3) {
      $('div[data-img=par3]').addClass('is-opacity');
    } else {
      $('div[data-img=par3]').removeClass('is-opacity');
    }

    var img4 = $('#par4').offset().top - $(window).outerHeight() - 500;

    if ($(window).scrollTop() > img4) {
      $('div[data-img=par4]').addClass('is-opacity');
    } else {
      $('div[data-img=par4]').removeClass('is-opacity');
    }

    var img5 = $('#par5').offset().top - $(window).outerHeight() - 500;

    if ($(window).scrollTop() > img5) {
      $('div[data-img=par5]').addClass('is-opacity');
    } else {
      $('div[data-img=par5]').removeClass('is-opacity');
    }

    var img6 = $('#par6').offset().top - $(window).outerHeight() - 500;

    if ($(window).scrollTop() > img6) {
      $('div[data-img=par6]').addClass('is-opacity');
    } else {
      $('div[data-img=par6]').removeClass('is-opacity');
    }
  });
});