$(document).ready(function(){
    $(window).scroll(function () {

            if($(document).scrollTop()<$("#header").outerHeight()){
                $("#header-show").fadeOut("fast");
            }
            else{
                $("#header-show").fadeIn("slow");
            }

    });
    $("#header-show, .logo-menu").click(function () {
            $('.nav-bar').toggleClass("fixedNav")
            $(".logo-menu").toggleClass("fixedLogo");
    });
});

