$(document).ready(function () {

    var gallery = $(".portfolio-gallery");
    var galleryElem = $(".examples");
    var iconSites = $(".icon-site");
    var timeoutId;

    $(".logo-menu").click(function () {
        $(".hatchet").toggleClass("hatchetRotate");
        $(".hammer").toggleClass("hammerRotate");
        $(".menu-link").toggleClass("mini-menu-link");
        $(".header").toggleClass("header-small");
    })

    galleryElem.click(function () {
        if ($(this).hasClass("activeElem")) {
            gallery.removeClass("gallery-detailed") && gallery.addClass("gallery-normal");
            $(this).removeClass("activeElem");
        }

        else {
            gallery.addClass("gallery-detailed") && gallery.removeClass("gallery-normal");
            galleryElem.each(function () {
                $(this).removeClass("activeElem");
            });
            $(this).insertBefore($(".portfolio-gallery>div:first-child"));
            $(this).toggleClass("activeElem");
        }
    });

    iconSites.hover(
        function () {
            var current = $(this);
            if (!timeoutId) {
                timeoutId = window.setTimeout(function () {
                    timeoutId = null;
                    current.addClass("showScroll");
                }, 1000);
            }
        },
        function () {
            var current = $(this);
            if (timeoutId) {
                window.clearTimeout(timeoutId);
                timeoutId = null;
            }
            else {
                current.removeClass("showScroll");
            }
        }
    )

    $("#contact .user-message").on('input', function(){
        $(".charLeft").text(600-$(this).val().length);
       ($(".charLeft").text())<180?
            $(".counter").addClass("counterVisible"):
            $(".counter").removeClass("counterVisible");
    });

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
        if( iteration==$(".review").length-2){
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
