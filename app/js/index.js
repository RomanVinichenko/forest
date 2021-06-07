$(function () {
  $('.menu a, footer a').on('click', function (event) {
    event.preventDefault();
    var id = $(this).attr('href'),
      top = $(id).offset().top;
    $('body,html').animate(
      {
        scrollTop: top,
      },
      1200,
    );
  });

  $('.articles__items').slick({
    dots: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    swipeToSlide: true,
    autoPlay: true,
    autoplaySpeed: 1000,
    responsive: [
      {
        breakpoint: 1270,
        settings: 'unslick',
      },
    ],
  });

  $(window).scroll(function () {
    if ($(this).scrollTop() > 10) {
      $('.header').addClass('header--active');
    } else {
      $('.header').removeClass('header--active');
    }
  });

  $('.menu__btn').on('click', function () {
    $('.menu__items').toggleClass('menu__items--active');
  });

  $('.menu__item-link, .header__logo').on('click', function () {
    $('.menu__items--active').removeClass('menu__items--active');
  });

  $('.intro__content-btn').on('click', function () {
    console.log('Moving to choice to best products');
  });
  $('.products__btn').on('click', function () {
    console.log('Show me more products please');
  });
  $('.footer__item-btn').on('click', function () {
    console.log('Notify me about updates');
  });
  $('.products__nav-btn').on('click', function () {
    console.log('Add to my cart');
  });
});

$(document).ready(function () {
  var list = $('.products__items li');
  var numToShow = 8;
  var button = $('.products__btn');
  var numInList = list.length;
  list.hide();
  if (numInList > numToShow) {
    button.show();
  }
  list.slice(0, numToShow).show();

  button.click(function () {
    var showing = list.filter(':visible').length;
    list.slice(showing - 1, showing + numToShow).fadeIn();
    var nowShowing = list.filter(':visible').length;
    if (nowShowing >= numInList) {
      button.hide();
    }
  });
});
