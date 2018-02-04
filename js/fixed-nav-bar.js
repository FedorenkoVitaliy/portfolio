$(document).ready(function(){
    $(window).scroll(function () {
        if($(document).scrollTop()<$("#header").outerHeight()){
            $("#header-show").fadeOut("fast");
        }
        else{
            $("#header-show").fadeIn("slow");
        }
    });
    $("#header-show").click(function () {
        if ($("#header-show-check").is(':checked')){
            $('.nav-bar')
                .css('position', 'fixed')
                .css('width', '100%')
                .css('z-index', '10')
                .css('background-color', 'black')
                .css('opacity', '1');
        } else {
            $('.nav-bar')
                .css('position', 'relative')
                .css('background-color', 'black')
                .css('opacity', '0.8');
        }
    });
});

