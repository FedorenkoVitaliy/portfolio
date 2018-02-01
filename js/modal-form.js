$(document).ready(function() {

//write us modal menu start
	$('#write-us, .call-back-link').click( function(){  
		$('#overlay').fadeIn(400, function(){
			$('.call-back-form-modal').css('display', 'grid').animate({opacity: 1, top: '140px', left: '35%'}, 350);
		});
	});

    $('#overlay, .close-form, .examples-detailed:after').click( function(){
        $('.call-back-form-modal').animate({opacity: 0, top: '0'}, 200,
            function(){
                $(this).css('display', 'none');
                $('#overlay').fadeOut(400);
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

    $('#overlay, .close-form').click( function(){
		$('.examples-detailed').animate({opacity: 0, top: '45%'}, 300,
			function(){
				$(this).css('display', 'none');
				$('#overlay').fadeOut(400);
                $("html,body").css("overflow","auto");
                $('.examples-detailed').children(".project-detailed").detach();
                $('.examples-detailed').children(".icon-site").detach();
			}
		);
    });

    //portfolio gallery modal end
});