$(document).ready(function () {
    $('.to-form').click(function () {
        var elementClick = $(this).attr("href");
        var destination = $(elementClick).offset().top;
            $('html').animate({ scrollTop: destination }, 1100);
    });
});