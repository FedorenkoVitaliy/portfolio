$(document).ready(function() {

    $('#blog').on('click', function () {
        if ($("#blog").prop("checked") != 'checked') {
            // window.alert('Дайте свое согласие на обработку данных!');
            $(".blog").css('display', 'none');
            return false;
        }
        return true;
    });
})