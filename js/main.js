$(function(){

  $('.top__slider').slick({
    arrows: false,
    dots: true,
    autoplay: true,
    fade: true,
    responsive: [ /*отключение дотсов при мониторах 1200, есть на сайте сликслайдера */
      {
        breakpoint: 1200,
        settings: {
        dots: false
        }
      },
    ]
  });  


  $('.reviews__slider').slick({
    arrows: false,
    dots: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [ /*отключение дотсов при мониторах 1200, есть на сайте сликслайдера */
      {
        breakpoint: 1141,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 846,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 585,
        settings: {
          slidesToShow: 1,
        }
      },
    ]

  });  

  $('.menu__btn').on('click', function(){ /*так обращаемся к кнопке в jquery, function - что бы работало несколько раз*/
    $('.menu__list').toggleClass('menu__list--active') /*toggleClass - этот метод позволяет при первом событии добавлять один класс при втором другой*/
  }) 

}); 