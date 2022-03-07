$(document).ready(function () {
    $(".owl-carousel").owlCarousel({
      dots: false,
      margin: 10,
      nav: true,
      navText: ["<img src='./img/testimonial/left_button.png'>", "<img src='./img/testimonial/right_button.png'>"
    ],
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 1,
        },
        1000: {
          items: 2,
        },
        1400: {
          items: 3,
        },
      },
    });
  });