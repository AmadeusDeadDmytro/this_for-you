$(".slider").slick({
    dots: false,
    infinite: true,
    arrows: true,
    prevArrow: '<button id="prev" type="button" class="slider-button"><svg width="22" height="42" viewBox="0 0 22 42" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21 1L1 21L21 41" stroke="#A0A0A0"/></svg></button>',
    nextArrow: '<button id="next" type="button" class="slider-button"><svg width="22" height="42" viewBox="0 0 22 42" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 1L21 21L1 41" stroke="#2FB042"/></svg></button>',
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1679,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
                infinite: true,
            }
        },
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
                arrows: false,

            }
        },
        {
            breakpoint: 993,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                arrows: false,

            }
        },
        {
            breakpoint: 737,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                arrows: false,

            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
                infinite: true,
            }
        }
    ]
});
