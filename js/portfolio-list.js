// handlebars interaction start
(function(){
    $.ajax({
        url: "data.json"
    }).done(function(data){

        var source  = document.getElementById("portfolio-list").innerHTML;
        var template = Handlebars.compile(source);
        var html = template(data);

        document.querySelector(".portfolio-gallery").innerHTML = html;
    })
})();

// handlebars interaction end