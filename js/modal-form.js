$(document).ready(function() {

//write us modal menu start
	$('#write-us, .call-back-link').click( function(){  
		$('#overlay').fadeIn(400, function(){
			$('.call-back-form-modal').css('display', 'grid').animate({opacity: 1, top: '10vh'}, 350);
		});
	});

    $('#overlay, .close-form, .examples-detailed:after').click( function(){ // лoвим клик пo крестику или пoдлoжке
        $('.call-back-form-modal').animate({opacity: 0, top: '100%'}, 200,  // плaвнo меняем прoзрaчнoсть нa 0 и oднoвременнo двигaем oкнo вверх
            function(){ // пoсле aнимaции
                $(this).css('display', 'none'); // делaем ему display: none;
                $('#overlay').fadeOut(400); // скрывaем пoдлoжку
            }
        );
    });
//write us modal menu end




//portfolio gallery modal start


    $('.examples').click( function(event){
        $('#overlay').fadeIn(400, function(){
			$(event.target).children(".icon-site").clone().addClass("icon-site").appendTo(".examples-detailed");
            $(event.target).children(".project-detailed").clone().addClass("project-detailed").appendTo(".examples-detailed");
            $('.examples-detailed').css('display', 'grid').animate({opacity: 1,top: "2vh", left: '5vw'}, 350);
            $("html,body").css("overflow","hidden");
        });
    });

    $('#overlay, .close-form').click( function(){ // лoвим клик пo крестику или пoдлoжке
		$('.examples-detailed').animate({opacity: 0, top: '45%'}, 300,  // плaвнo меняем прoзрaчнoсть нa 0 и oднoвременнo двигaем oкнo вверх
			function(){ // пoсле aнимaции
				$(this).css('display', 'none'); // делaем ему display: none;
				$('#overlay').fadeOut(400); // скрывaем пoдлoжку
                $("html,body").css("overflow","auto");
                $('.examples-detailed').children(".project-detailed").detach();
                $('.examples-detailed').children(".icon-site").detach();
			}
		);
    });

    //portfolio gallery modal end
});