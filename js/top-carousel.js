$(document).ready(function(){

    // $('.carouselTop').on('init', function () {
    //     $('.slick-slide').css('display', 'flex'); // 초기화 시 display를 flex로 설정
    // });

// 슬라이드 변경 시 너비 조정
$('.carouselTop').on('afterChange', function (event, slick, currentSlide) {
    $('.carouselTop .slick-slide .top_CellText').css('display', 'none'); 
    $('.carouselTop .slick-center .top_CellText').css('display', 'flex'); 

});

    $('.carouselTop').slick({
        lazyLoad: 'ondemand',
        prevArrow : $('.top_prevArrow'), 
        nextArrow : $('.top_nextArrow'), 
        autoplay: true,
        autoplaySpeed: 2000,
            infinite: true,
            slidesToShow: 3, // 3개 슬라이드가 보이도록 설정
            slidesToScroll: 1,
            centerMode: true, // 중앙 정렬
            variableWidth: true, // 슬라이드 너비를 유동적으로 설정
            draggable: false,
            
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1,
                        variableWidth: false,
                    }
                }
            ]

        });

});


