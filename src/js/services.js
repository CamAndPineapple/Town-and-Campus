$(function() {

	// start state desktop/mobile
	$("#salon-list").hide();
	$("#wedding-list").hide();
	$("#hair").addClass('tab-active');
	$("#mobile-salon-list").hide();
	$("#mobile-wedding-list").hide();
	$("#mobile-hair").addClass('tab-active');

	// Display chosen list when clicked on
	$('.services-nav-li').click(displayServices);


	function displayServices() {
		var id = '#' + this.id;
		var listId = id + '-list';
		$(id).addClass('tab-active');
		$(listId).fadeIn('fast');
		$('.services-content-ul').not(listId).hide();
		$('.services-nav-li').not(id).removeClass('tab-active');
	}


});

