    // 스크롤 시 header fade-in
    $(document).on('scroll', function(){
        // if($(window).scrollTop() > 3840){
        //     $("#header").removeClass("deactive");
        //     $("#header").addClass("active");

        //     $('.head_logo_p').attr('src', '../asset/hanrimLOGO_color.svg')
        //     $('.langIcon').attr('src', '../asset/KoreanIcon_b.svg')
        //     $('.searchIcon').attr('src', '../asset/SearchIcon_b.svg')
        //     $('.menuIcon').attr('src', '../asset/headerBarIcon_b.svg')
        // }else{
        //     $("#header").removeClass("active");
        //     $("#header").addClass("deactive");

        //     $('.head_logo_p').attr('src', '../asset/hanrimLOGO.svg')
        //     $('.langIcon').attr('src', '../asset/KoreanIcon.svg')
        //     $('.searchIcon').attr('src', '../asset/SearchIcon.svg')
        //     $('.menuIcon').attr('src', '../asset/headerBarIcon.svg')
        // }

        if($(window).scrollTop() < 279 ){
            $("#header").removeClass("deactive");
            $("#header").addClass("active");

            $('.head_logo_p').attr('src', '../asset/hanrimLOGO_color.svg')
            $('.langIcon').attr('src', '../asset/KoreanIcon_b.svg')
            $('.searchIcon').attr('src', '../asset/SearchIcon_b.svg')
            $('.menuIcon').attr('src', '../asset/headerBarIcon_b.svg')
        }else if($(window).scrollTop() > 279 && $(window).scrollTop() < 1224 ){
            $("#header").removeClass("active");
            $("#header").addClass("deactive");

            $('.head_logo_p').attr('src', '../asset/hanrimLOGO.svg')
            $('.langIcon').attr('src', '../asset/KoreanIcon.svg')
            $('.searchIcon').attr('src', '../asset/SearchIcon.svg')
            $('.menuIcon').attr('src', '../asset/headerBarIcon.svg')
        }else if($(window).scrollTop() > 1224 && $(window).scrollTop() < 2700 ){
            $("#header").removeClass("deactive");
            $("#header").addClass("active");

            $('.head_logo_p').attr('src', '../asset/hanrimLOGO_color.svg')
            $('.langIcon').attr('src', '../asset/KoreanIcon_b.svg')
            $('.searchIcon').attr('src', '../asset/SearchIcon_b.svg')
            $('.menuIcon').attr('src', '../asset/headerBarIcon_b.svg')
        }else if($(window).scrollTop() > 2700 && $(window).scrollTop() < 3800 ){
            $("#header").removeClass("active");
            $("#header").addClass("deactive");

            $('.head_logo_p').attr('src', '../asset/hanrimLOGO.svg')
            $('.langIcon').attr('src', '../asset/KoreanIcon.svg')
            $('.searchIcon').attr('src', '../asset/SearchIcon.svg')
            $('.menuIcon').attr('src', '../asset/headerBarIcon.svg')
        }else{
            $("#header").removeClass("deactive");
            $("#header").addClass("active");

            $('.head_logo_p').attr('src', '../asset/hanrimLOGO_color.svg')
            $('.langIcon').attr('src', '../asset/KoreanIcon_b.svg')
            $('.searchIcon').attr('src', '../asset/SearchIcon_b.svg')
            $('.menuIcon').attr('src', '../asset/headerBarIcon_b.svg')
        }
        console.log(scrollY)
    })