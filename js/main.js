
  function sliderFunction(current) {
      $(`.${current}`).slick({
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

$(function() {
    function slideMenu() {
        var menuList =  $(".menu-container .menu-list");
        var activeState = menuList.hasClass("active");

        menuList.animate({left: activeState ? "0%" : "-100%"}, 400);
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
function openCity(evt, tabsContent) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tab__content");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    tablinks = document.getElementsByClassName("sales__li");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    document.getElementById(tabsContent).style.display = "block";
    evt.currentTarget.className += " active";

    if (tabsContent === 'all') {
        sliderFunction('slider')
    } else {
        sliderFunction('slider1')
    }
}

document.getElementById("defaultOpen").click();


// img
$(document).ready(function(){
    $('.contact__img').scrollLeft(400)
})
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
  sliderFunction('slider')
