
$(document).ready(function () {

    const $Text_allnew = $(".allnew");
    const $Text_hallym = $(".hallym");
    const $Indicator = $(".indicator-bar");

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
        }else if(scrollTop >= 2930){
            $Text_hallym.css('transform', 'translateY(200px)');
            // $Text_hallym.css('clip-path', ' inset(0% 100% 0% 0%)');
        }

        if(scrollTop >= 2930){
            $Indicator.css("visibility", 'hidden')
        }else{
            $Indicator.css("visibility", 'visible')
        }


        3780
        if(scrollTop > 5271){
            $(".bg_video").empty()
        }else{
            $(".bg_video").append(` <video autoplay loop muted>
                    <source src="./asset/main_video.mp4" /> 
                </video>`)
        }


    });
});

