$(document).ready(function(){
    $(window).scroll(function () {
        if ($(this).scrollTop() > 0) {
            $('.nav-bar')
                .css('position', 'fixed')
                .css('width', '100%')
                .css('height', '120px')
                .css('z-index', '100')
                .css('background-color', 'black')
                .css('opacity', '1');
        } else {
            $('.nav-bar')
                .css('position', 'relative')
                .css('background-color', 'black')
                .css('opacity', '0.8');
        }
    });
    // $('.nav-bar').click(function () {
    //     $('html').animate({
    //         scrollTop: 0
    //     }, 1000);
    //
    // });
});

