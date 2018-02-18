$(document).ready(function () {
    $('.to-about-us, .to-advantages, .to-portfolio, .to-team, .to-contact, .to-reviews').click(function () {
        var elementClick = $(this).attr("href");
        var destination = $(elementClick).offset().top;
        var navbarHeight = $(".nav-bar").outerHeight();
            $('html').animate({ scrollTop: destination-navbarHeight}, 2500);
    });
});