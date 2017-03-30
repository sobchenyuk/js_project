$(function () {
	$('#accordion-js').append('<span></span>');
	$('#accordion-js li a').click(function() {
		var checkElement = $(this).next();
		checkElement.stop().animate({'height':'toggle'}, 500);	
		if((checkElement.is('ul')) && (checkElement.is(':visible'))) {
			return false;
		}
	});
});	




