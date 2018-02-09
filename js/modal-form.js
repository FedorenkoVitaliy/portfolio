$(document).ready(function() {

//write us modal menu start
	$('#write-us, .call-back-link').click( function(){
		$('#overlay').fadeIn(400, function(){
			$('.call-back-form-modal').css('display', 'grid').animate({opacity: 1, top: '140px'}, 350);
		});
        $('#overlay').css("display", "grid");
	});

    $('#overlay, .close-form, .examples-detailed:after').click( function(){
        $('.call-back-form-modal').animate({opacity: 0, top: '100vh'}, 200,
        function(){
            $(this).css('display', 'none');
            $('#overlay').fadeOut(400);
        });
    });
//write us modal menu end

//portfolio gallery modal start
    $('.examples').click( function(event){
        event.stopPropagation();
        $('#overlay').fadeIn(400, function(){
			$(event.target).children(".icon-site").children().clone().appendTo(".display");
            $(event.target).children(".project-detailed").clone().appendTo(".examples-detailed");
            $('.examples-detailed').css('display', 'grid').animate({opacity: 1,top: "2vh", left: '5vw'}, 350);
            $("html,body").css("overflow","hidden");
        });
    });

    $('#overlay, .close-form').click( function(event){
		$('.examples-detailed').animate({opacity: 0, top: '45%'}, 300,
        function(){
            $(this).css('display', 'none');
            $('#overlay').fadeOut(400);
            $("html,body").css("overflow","auto");
            $('.display').children().detach();
            $('.examples-detailed').children(".project-detailed").detach();
        });
    });

    //portfolio gallery modal end*/

    $('.call-back-form-modal, .examples-detailed').click(function (event) {
        event.stopPropagation();
    });
});