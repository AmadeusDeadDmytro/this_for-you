
  $('.slider1').slick({
      dots: false,
      infinite: true,
      arrows: false,
      slidesToShow: 4,
      slidesToScroll: 1,
      responsive: [
          {
              breakpoint: 1679,
              settings: {
                  slidesToShow: 4,
                  slidesToScroll: 1,
                  infinite: true,
                  arrows: false,
              }
          },
          {
              breakpoint: 1200,
              settings: {
                  slidesToShow: 3,
                  slidesToScroll: 1,
                  arrows: false,
              }
          },
          {
              breakpoint: 991,
              settings: {
                  slidesToShow: 3,
                  slidesToScroll: 1,
                  arrows: false,
              }
          },
          {
              breakpoint: 768,
              settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1,
                  arrows: false,
              }
          },

          {
              breakpoint: 579,
              settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  centerMode: true,
                  arrows: false,
                  infinite: true,
              }
          }
      ]
  });

  $('.slider2').slick({
      dots: false,
      infinite: true,
      arrows: false,
      slidesToShow: 4,
      slidesToScroll: 1,
      responsive: [
          {
              breakpoint: 1679,
              settings: {
                  slidesToShow: 4,
                  slidesToScroll: 1,
                  infinite: true,
                  arrows: false,
              }
          },
          {
              breakpoint: 1200,
              settings: {
                  slidesToShow: 3,
                  slidesToScroll: 1,
                  arrows: false,
              }
          },
          {
              breakpoint: 991,
              settings: {
                  slidesToShow: 3,
                  slidesToScroll: 1,
                  arrows: false,
              }
          },
          {
              breakpoint: 768,
              settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1,
                  arrows: false,
              }
          },

          {
              breakpoint: 579,
              settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  centerMode: true,
                  arrows: false,
                  infinite: true,
              }
          }
      ]
  });

  $('.slider3').slick({
      dots: false,
      infinite: true,
      arrows: false,
      slidesToShow: 4,
      slidesToScroll: 1,
      responsive: [
          {
              breakpoint: 1679,
              settings: {
                  slidesToShow: 4,
                  slidesToScroll: 1,
                  infinite: true,
                  arrows: false,
              }
          },
          {
              breakpoint: 1200,
              settings: {
                  slidesToShow: 3,
                  slidesToScroll: 1,
                  arrows: false,
              }
          },
          {
              breakpoint: 991,
              settings: {
                  slidesToShow: 3,
                  slidesToScroll: 1,
                  arrows: false,
              }
          },
          {
              breakpoint: 768,
              settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1,
                  arrows: false,
              }
          },

          {
              breakpoint: 579,
              settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  centerMode: true,
                  arrows: false,
                  infinite: true,
              }
          }
      ]
  });

  $('.slider4').slick({
      dots: false,
      infinite: true,
      arrows: false,
      slidesToShow: 4,
      slidesToScroll: 1,
      responsive: [
          {
              breakpoint: 1679,
              settings: {
                  slidesToShow: 4,
                  slidesToScroll: 1,
                  infinite: true,
                  arrows: false,
              }
          },
          {
              breakpoint: 1200,
              settings: {
                  slidesToShow: 3,
                  slidesToScroll: 1,
                  arrows: false,
              }
          },
          {
              breakpoint: 991,
              settings: {
                  slidesToShow: 3,
                  slidesToScroll: 1,
                  arrows: false,
              }
          },
          {
              breakpoint: 768,
              settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1,
                  arrows: false,
              }
          },

          {
              breakpoint: 579,
              settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  centerMode: true,
                  arrows: false,
                  infinite: true,
              }
          }
      ]
  });

  $('.slider').slick({
      dots: false,
      infinite: true,
      arrows: false,
      slidesToShow: 4,
      slidesToScroll: 1,
      responsive: [
          {
              breakpoint: 1679,
              settings: {
                  slidesToShow: 4,
                  slidesToScroll: 1,
                  infinite: true,
                  arrows: false,
              }
          },
          {
              breakpoint: 1200,
              settings: {
                  slidesToShow: 3,
                  slidesToScroll: 1,
                  arrows: false,
              }
          },
          {
              breakpoint: 991,
              settings: {
                  slidesToShow: 3,
                  slidesToScroll: 1,
                  arrows: false,
              }
          },
          {
              breakpoint: 768,
              settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1,
                  arrows: false,
              }
          },

          {
              breakpoint: 579,
              settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  centerMode: true,
                  arrows: false,
                  infinite: true,
              }
          }
      ]
  });

  // for menu open and close mobile menu
$(function() {
    function slideMenu() {
        var menuList =  $(".menu-container .menu-list");
        var activeState = menuList.hasClass("active");

        menuList.animate({left: activeState ? "0%" : "-101%"}, 400);
    }
    $(".menu-wrapper").click(function(event) {
        event.stopPropagation();
        $(".hamburger-menu").toggleClass("open");
        $(".menu-container .menu-list").toggleClass("active");
        slideMenu();
    });

    // $(".menu-list").find(".accordion-toggle").click(function() {
    //     $(this).next().toggleClass("open").slideToggle("fast");
    //     $(this).toggleClass("active-tab").find(".menu-link").toggleClass("active");
    //
    //     $(".menu-list .accordion-content").not($(this).next()).slideUp("fast").removeClass("open");
    //     $(".menu-list .accordion-toggle").not(jQuery(this)).removeClass("active-tab").find(".menu-link").removeClass("active");
    // });
}); // jQuery load

// img
$(document).ready(function(){

    // first one for contanct img to stay center

    if ($(window).innerWidth() < 1000) {
        $('.contact__img').scrollLeft(400);
    }
    // for tab with efect
    $(".our_blog__decorate").click(function(){

        $(".our_blog__img-block").removeClass('active');
        $(this).parent().addClass('active')
    })

    // for tab with slider
    $(".sales__li").click(function(){
        $(".sales__li").removeClass('active');

        $(this).addClass('active');

        var panel = $(this).attr('data-id');

        $(".tab__content").removeClass('active');
        $("#" + panel).addClass('active');

        if (panel === 'all') {
            $(".slider1").slick('reinit')
        } else if (panel === 'bukets') {
            $(".slider2").slick('reinit')
        } else if (panel === 'flower') {
            $(".slider3").slick('reinit')
        } else if (panel === 'gift') {
            $(".slider4").slick('reinit')
        }

        $('#' + panel).children().children('.sales_card').hide();
    })
});

// header top fixed
  $(window).scroll(function() {
      var header = $("#header_top");

      if($(window)[0].scrollY > 100) {
          header.addClass('header_active');
      } else {
          header.removeClass('header_active');
      }
  });

  // resize one for contact img to stay center every time when page change with
  window.addEventListener("resize", resizeThrottler, false);


function resizeThrottler() {
      // ignore resize events as long as an actualResizeHandler execution is in the queue

    if ($(window).innerWidth() < 1000) {
        $('.contact__img').scrollLeft(400);
    }
}


