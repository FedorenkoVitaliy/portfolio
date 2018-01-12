$(document).ready(function(){   
    $(window).scroll(function () {
        if ($(this).scrollTop() > 0) {
            $('.to-Top').fadeIn();
        } else {
            $('.to-Top').fadeOut();
        }
    });
    $('.to-Top').click(function () {
        $('html').animate({
            scrollTop: 0
        }, 1000);
       
    });
});