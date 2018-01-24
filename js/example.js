$(document).ready(function() {


    $('.big-photo, .small-photo').on('mousemove', function(event) {
        var offset = $(this).offset();
        var relativeX = ((event.pageX - offset.left) / 30);
        var relativeY = ((event.pageY - offset.top) / 30);

        var x = Math.round(relativeX);
        var y = Math.round(relativeY);

        if (x < $('.big-photo, .small-photo').width()/2) {
            $(this).attr('style', 'transform: perspective(1000px) rotateX(-' + x + 'deg) rotateY(' + y + 'deg)' );
            // alert('hello');
        } else {
            $(this).attr('style', 'transform: perspective(1000px) rotateX(-' + x + 'deg) rotateY(-' + y + 'deg)' );
        }

        if (y < $('.big-photo, .small-photo').height()/2) {
            $(this).attr('style', 'transform: perspective(1000px) rotateX(' + x + 'deg) rotateY(' + y + 'deg)' );
        } else {
            $(this).attr('style', 'transform: perspective(1000px) rotateX(' + x + 'deg) rotateY(-' + y + 'deg)' );
        }
    })

    $('.big-photo, .small-photo, .small-photo').on('mouseout', function(event) {
        $(this).attr('style', 'transform: perspective(1000px) rotateX(' + 0 + 'deg)   rotateY(' + 0 + 'deg)' );
    })
})