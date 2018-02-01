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
$(document).ready(function () {
    $('.zzz').click(function () {
        var elementClick = $(this).attr("href");
        var destination = $(elementClick).offset().top;
            $('html').animate({ scrollTop: destination }, 1100);
    });
});
