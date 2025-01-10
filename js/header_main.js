// 스크롤 시 header fade-in
$(document).on('scroll', function(){
    if($(window).width() >768){
        if($(window).scrollTop() >= 1838){
            $("#header").removeClass("deactive");
            $("#header").addClass("active");

            // $('.head_logo_p').attr('src', 'asset/header/hanrimLOGO_color.svg')
            $('.head_logo_p').attr('src', 'https://g1azed.github.io/hallym/asset/header/hanrimLOGO_color.svg')
            $('.langIcon').attr('src', '../asset/Icon/KoreanIcon_b.svg')
            $('.searchIcon').attr('src', '../asset/Icon/SearchIcon_b.svg')
            $('.menuIcon').attr('src', '../asset/Icon/headerBarIcon_b.svg')
        }else{
            $("#header").removeClass("active");
            $("#header").addClass("deactive");

            $('.head_logo_p').attr('src', 'https://g1azed.github.io/hallym/asset/header/hanrimLOGO.svg')
            $('.langIcon').attr('src', '../asset/Icon/KoreanIcon.svg')
            $('.searchIcon').attr('src', '../asset/Icon/SearchIcon.svg')
            $('.menuIcon').attr('src', '../asset/Icon/headerBarIcon.svg')
        }
    }
})