// 스크롤 시 header fade-in
$(document).on('scroll', function(){
    if($(window).width() >768){
        if($(window).scrollTop() > 1980){
            $("#header").removeClass("deactive");
            $("#header").addClass("active");

            $('.head_logo_p').attr('src', '../asset/hanrimLOGO_color.svg')
            $('.langIcon').attr('src', '../asset/KoreanIcon_b.svg')
            $('.searchIcon').attr('src', '../asset/SearchIcon_b.svg')
            $('.menuIcon').attr('src', '../asset/headerBarIcon_b.svg')
        }else{
            $("#header").removeClass("active");
            $("#header").addClass("deactive");

            $('.head_logo_p').attr('src', '../asset/hanrimLOGO.svg')
            $('.langIcon').attr('src', '../asset/KoreanIcon.svg')
            $('.searchIcon').attr('src', '../asset/SearchIcon.svg')
            $('.menuIcon').attr('src', '../asset/headerBarIcon.svg')
        }
    }
})