$(document).ready(function () {
    $(".logo-menu").click(function () {
        $(".hatchet").toggleClass("hatchetRotate");
        $(".hammer").toggleClass("hammerRotate");
        $(".menu-link").toggleClass("mini-menu-link");
        $(".header").toggleClass("header-small");
    })

    //feedback
    var reviewWidth = $(".review").outerWidth();
    var reviewHeight = $(".review").outerHeight();
    var iteration=0;
    if($(window).width() < 900) {
        $(".activeReview").css("height", reviewHeight * 2 + "px");
    }
    $(".arrow").click(function(){
        $(this).animate({fontSize: "30px"},100).animate({fontSize: "35px"});
    });

    $(".arrow-up").click(function(){
        iteration--;
        if(iteration<0){
            $(".allReviews").css("top", -reviewHeight*($(".review").length-2));
            iteration=$(".review").length-2;
        }
        else{
            $(".allReviews").css("top", -reviewHeight*iteration);
        }
    });

    $(".arrow-down").click(function(){
        iteration++;
        if( iteration>($(".review").length-2)){
            $(".allReviews").css("top", 0);
            iteration=0;
        }
        else{
            $(".allReviews").css("top", -reviewHeight*iteration);
        }
    });

    $(".arrow-left").click(function(){
        iteration--;
        if(iteration<0){
            $(".allReviews").css("left", -reviewWidth*($(".review").length-2));
            iteration=$(".review").length-2;
        }
        else{
            $(".allReviews").css("left", -reviewWidth*iteration);
        }
    });

    $(".arrow-right").click(function(){
        iteration++;
        if( iteration>$(".review").length-2){
            $(".allReviews").css("left", 0);
            iteration=0;
        }
        else{
            $(".allReviews").css("left", -reviewWidth*iteration);
        }
    });
    if($(window).width() < 600) {
        $('.quality__description-block').slideUp();
        $('.quality').click(function(){
            $(this).find($('.quality__description-block')).slideToggle();
        });
    }
});
