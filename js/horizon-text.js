
$(document).ready(function () {

    const $Text_allnew = $(".allnew");
    const $Text_hallym = $(".hallym");
    const $Indicator = $(".indicator_bar_wrap");

    // 애니메이션 끝난 후 이벤트
    //333 
    $(".allnew").on("animationend", function() {
        $(this).css({
            "animation-name": "none", // 애니메이션 이름 제거
            "opacity" : "1",
        });
    }); 

    
    $(window).on('scroll', function () {
        // 스크롤 위치 가져오기
        const scrollTop = $(this).scrollTop();

        if (scrollTop < 800 && scrollTop >= 0) {
            $Text_allnew.css('transform', 'translateX(0)');
            $Text_allnew.css('clip-path', '  inset(-100% 0% -100% 0%)');
        } else if(scrollTop >= 800){
            $Text_allnew.css('transform', 'translateX(-200px)');
            $Text_allnew.css('clip-path', ' inset(-100% 0% -100% 100%)');
        }

        if (scrollTop > 833) {
            $Text_hallym.css('transform', 'translateX(0)');
            $Text_hallym.css('clip-path', '  inset(-100% 0% -100% 0%)');
        } else if(scrollTop <= 833 && scrollTop == 0){
            $Text_hallym.css('transform', 'translateX(200px)');
            $Text_hallym.css('clip-path', ' inset(-100% 100% -100% 0%)');
        }

        // 인디케이터
        if(scrollTop >= 3466){
            $Indicator.css("visibility", 'hidden')
        }else{
            $Indicator.css("visibility", 'visible')
        }

        if (scrollTop >= 5777) {
            $(".bg_video").empty(); // 비디오 제거
        } else if (scrollTop <= 5271 && scrollTop > 0) {
            // 비디오가 없는 경우에만 추가
            if ($(".bg_video video").length == 0) {
                $(".bg_video").append(`
                    <video autoplay loop muted>
                        <source src="./asset/main_video.mp4" type="video/mp4" />
                    </video>
                `);
            }
        }

    });
});

