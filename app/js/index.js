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
});
