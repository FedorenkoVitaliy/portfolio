$(document).ready(function(){

    //fixed-nav-bar
    $(".nav-bar").clone().appendTo(".fix-nav");
    $(".drop-down-menu").clone().appendTo(".fix-nav");
    $(".fix-nav .logo").attr("src", "img/logo-description.png").css("height", "60px");
    if($(document).scrollTop()>$("#header").outerHeight()){
        $('.fix-nav').addClass("fixed");

    }
    $(window).scroll(function () {
        if($(document).scrollTop()>=$("#header").outerHeight()-20){
            $('.fix-nav').addClass("fixed");
        }
        if($(document).scrollTop()<$("#header").outerHeight()){
            $('.fix-nav').removeClass("fixed");
        }
    });

    //drop-down script
    $(".header>.nav-bar .menu-link").children().clone().appendTo(".drop-down-menu");
    if($(window).outerWidth() <= 900) {
        $(".logo-menu, .drop-down-menu li").click(function () {
            $(".hatchet").toggleClass("hatchetRotate");
            $(".hammer").toggleClass("hammerRotate");
            $(".drop-down-menu").toggleClass("show-menu");
        });

        $(window).scroll(function () {
            $(".hatchet").removeClass("hatchetRotate");
            $(".hammer").removeClass("hammerRotate");
            $(".drop-down-menu").removeClass("show-menu");
        });
    }
});

