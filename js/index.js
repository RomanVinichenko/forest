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
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
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
    getResponse(8);
    var showing = list.filter(':visible').length;
    list.slice(showing - 1, showing + numToShow).fadeIn();

    var nowShowing = list.filter(':visible').length;
    if (nowShowing >= numInList) {
      button.hide();
    }
  });
});

async function getResponse(number) {
  let response = await fetch('https://fakestoreapi.com/products');
  let content = await response.json();
  console.log(content);
  content = content.slice(0, number);
  let list = document.querySelector('.products__items');

  let key;

  for (key in content) {
    console.log(content);
    list.innerHTML += `
          <li class="products__item">
          <img class="products__item-img" src="${content[key].image}" alt="photo of item">
          <div class="products__item-descr">
              <h4 class="products__item-title">${content[key].title}</h4>
              <p class="products__item-subtitle">${content[key].description}</p>
              <span class="products__item-price">Rp ${content[key].price}</span>
              <span class="products__item-preprice">Rp ${content[key].price}</span>
              <div class="products__nav">
              <button class="products__nav-btn">Add to cart</button>
              <div class="products__nav-links">
                <a class="products__nav-link" href="#">
                  <img
                    class="products__nav-img"
                    src="./images/icons/share.svg"
                    alt="logo share"
                  />
                  Share
                </a>
                <a class="products__nav-link" href="#">
                  <img
                    class="products__nav-img"
                    src="./images/icons/heartwhite.svg"
                    alt="logo like"
                  />
                  like
                </a>
              </div>
            </div>
          </div>
         </li>
        `;
    content[key];
  }
}

getResponse(8);
