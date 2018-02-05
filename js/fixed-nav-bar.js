$(document).ready(function(){
    $(window).scroll(function () {
        if($(window).outerWidth()>810){
            if($(document).scrollTop()>$("#header").outerHeight()){
                $(".logo-menu").addClass("fixedLogo");
            }
            else{
                $(".logo-menu").removeClass("fixedLogo");
            }
        }
        else{

            if($(document).scrollTop()<$("#header").outerHeight()){
                $("#header-show").fadeOut("fast");
            }
            else{
                $("#header-show").fadeIn("slow");
            }
        }

    });
    $("#header-show, .logo-menu").click(function () {
            $('.nav-bar').toggleClass("fixedNav")
            $(".logo-menu").toggleClass("fixedLogo");
    });
});

