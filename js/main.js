
$(document).ready(function() {
    var gallery = $(".portfolio-gallery");
    var galleryElem = $(".examples");
    var iconSites = $(".icon-site");
    var timeoutId;

    galleryElem.click(function(){
        if($(this).hasClass("activeElem")){
            gallery.removeClass("gallery-detailed")&&gallery.addClass("gallery-normal")
            $(this).removeClass("activeElem")
        }

        else{
            gallery.addClass("gallery-detailed")&&gallery.removeClass("gallery-normal");
            galleryElem.each(function() {
                $(this).removeClass("activeElem")
            });
            $(this).insertBefore($(".portfolio-gallery>div:first-child"));
            $(this).toggleClass("activeElem");
        }
    });

    iconSites.hover(
        function() {
            var current = $(this);
            if (!timeoutId) {
                timeoutId = window.setTimeout(function() {
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
});