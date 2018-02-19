// handlebars interaction start
(function(){
    $.ajax({
        url: "data.json"
    }).done(function(data){

        var source  = document.getElementById("about-descr").innerHTML;
        var template = Handlebars.compile(source);
        var html = template(data);

        document.getElementById("about-us").innerHTML = html;
    })
})();

// handlebars interaction end