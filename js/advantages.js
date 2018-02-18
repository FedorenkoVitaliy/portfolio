(function(){
    $.ajax({
        url: "data.json"
    }).done(function(data){

        var source  = document.getElementById("advantages-list").innerHTML;
        var template = Handlebars.compile(source);
        var html = template(data);

        document.querySelector(".quality-wrapper").innerHTML = html;
    })
})();