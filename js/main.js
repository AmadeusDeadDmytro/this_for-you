
  function sliderFunction(current) {
    if($(current).length > 0 ) {
      $(current).not(current + '.slick-initialized').slick({
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
    }
  }

  function openContent(tabsContent) {

      console.log('#' + tabsContent)
      $(".tab__content").hide()
      $('#' + tabsContent).show()
      sliderFunction('#' + tabsContent + ' .sales__div');
  }

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

    $(".menu-list").find(".accordion-toggle").click(function() {
        $(this).next().toggleClass("open").slideToggle("fast");
        $(this).toggleClass("active-tab").find(".menu-link").toggleClass("active");

        $(".menu-list .accordion-content").not($(this).next()).slideUp("fast").removeClass("open");
        $(".menu-list .accordion-toggle").not(jQuery(this)).removeClass("active-tab").find(".menu-link").removeClass("active");
    });
}); // jQuery load


// tabs

document.getElementById("defaultOpen").click();

// img
$(document).ready(function(){

    $(".our_blog__decorate").click(function(){

        $(".our_blog__img-block").removeClass('active');
        $(this).parent().addClass('active')
    })

    $('.contact__img').scrollLeft(400)
});

function headerFixed() {
    window.addEventListener("scroll" ,() => {
        var header = document.getElementById('header_top');
        if(window.scrollY > 100){
            header.style.position = "fixed";
            header.style.boxShadow = "0 5px 8px -5px";
        } else {
            header.style.position = "relative";
            header.style.boxShadow = "none";
        }
    });
}

headerFixed();

window.addEventListener("resize", resizeThrottler, false);

var resizeTimeout;

function resizeThrottler() {
      // ignore resize events as long as an actualResizeHandler execution is in the queue
      if ( !resizeTimeout ) {
          resizeTimeout = setTimeout(function() {
              resizeTimeout = null;
              actualResizeHandler();

              // The actualResizeHandler will execute at a rate of 15fps
          }, 66);
      }
}

function actualResizeHandler() {
    $(document).ready(function(){
        $('.contact__img').scrollLeft(400)
    })
}

sliderFunction('.slider')
