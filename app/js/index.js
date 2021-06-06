$(function () {
  $('.articles__items').slick({
    dots: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    swipeToSlide: true,
  });

  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $('.header').addClass('header--active');
    } else {
      $('.header').removeClass('header--active');
    }
  });
});
