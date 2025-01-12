
$(document).ready(function () {

    const $Text_allnew = $(".allnew");
    const $Text_hallym = $(".hallym");
    
    $(window).on('scroll', function () {
        // 스크롤 위치 가져오기
        const scrollTop = $(this).scrollTop();

        // if (scrollTop >160) {
        //     $Text_allnew.css('transform', 'translateY(0)');
        //     $Text_allnew.css('clip-path', '  inset(-100% 0% -100% 0%)');
        // } else if(scrollTop <= 160 && scrollTop == 0){
        //     $Text_allnew.css('transform', 'translateY(-100px)');
        //     $Text_allnew.css('clip-path', ' inset(50% 0% 50% 0%)');
        // }

        // 배경색 변경: 스크롤 위치에 따라 색상이 점진적으로 변함
        if (scrollTop >1350) {
            $Text_hallym.css('transform', 'translateX(0)');
            $Text_hallym.css('clip-path', '  inset(-100% 0% -100% 0%)');
        } else if(scrollTop <= 1800 && scrollTop == 0){
            $Text_hallym.css('transform', 'translateX(200px)');
            $Text_hallym.css('clip-path', ' inset(-100% 100% -100% 0%)');
        }




        // 투명도 변경: 0 ~ 1 사이 값을 계산하여 투명도 적용
        // const opacity = 1 - scrollTop / 800;
        // $box.css('opacity', Math.max(opacity, 0.3)); // 최소 투명도 0.3 유지
    });
});


// $(document).ready(function () {
//     const $box = $('.box');

//     $(window).on('scroll', function () {
//         // 스크롤 위치 가져오기
//         const scrollTop = $(this).scrollTop();

//         // 배경색 변경: 스크롤 위치에 따라 색상이 점진적으로 변함
//         if (scrollTop > 200) {
//             $box.css('transform', 'translateX(-20px)');
//         } else {
//             $box.css('transform', 'translateX(0px)');
//         }

//         // 투명도 변경: 0 ~ 1 사이 값을 계산하여 투명도 적용
//         const opacity = 1 - scrollTop / 800;
//         $box.css('opacity', Math.max(opacity, 0.3)); // 최소 투명도 0.3 유지
//     });
// });