$(document).ready(function () {
    $(".owl-carousel").owlCarousel({
      dots: false,
      margin: 10,
      nav: true,
      navText: ["<img src='/img/testimonial/left_button.png'>", "<img src='/img/testimonial/right_button.png'>"
    ],
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 2,
        },
        1000: {
          items: 3,
        },
      },
    });
  });


    // ["<img src='/img/testimonial/left_button.png'>", "<img src='/img/testimonial/left_button.png'>"
    //   ],