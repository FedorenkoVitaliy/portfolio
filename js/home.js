// handlebars interaction start
(function(){
    $.ajax({
        url: "data.json"
    }).done(function(data){

        let source  = document.getElementById("workplaceinfo").innerHTML;
        let template = Handlebars.compile(source);
        let html = template(data);

        document.getElementById("tech-bar").innerHTML = html;
    })
})();

// handlebars interaction end