// handlebars interaction start
(function(){
    $.ajax({
        url: "data.json"
    }).done(function(data){

        var source  = document.getElementById("team-list").innerHTML;
        var template = Handlebars.compile(source);
        var html = template(data);

        document.querySelector(".team").innerHTML = html;
    })
})();

// handlebars interaction end