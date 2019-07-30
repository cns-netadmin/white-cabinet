$(function(){

	$(".accordion li .nest").hide();
	$(".accordion .button").on("click", function() {
	    $(this).next().slideToggle();
	    $(this).toggleClass("active");
	});

});
