$(document).ready(function(){
    $('.carouselBottom').slick({
        arrows: false,
        autoplay: false,
        // infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        centerMode: false,  // centerMode 비활성화
        variableWidth: true, // 슬라이드 너비를 유동적으로 설정
        draggable: true,
        swipeToSlide: true,  
        touchMove: true,
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
        // 이미지 기본 드래그 방지
        $('.carouselBottom_Cell img').on('dragstart', function (event) {
            event.preventDefault();
        });

});

