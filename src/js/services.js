$(function(){

	$("#salon-list").hide();
	$("#wedding-list").hide();
	$("#hair").addClass('tab-active');

	// mobile

	$("#mobile-salon-list").hide();
	$("#mobile-wedding-list").hide();
	$("#mobile-hair").addClass('tab-active');

	$("#hair").click(function(){

		$("#hair-list").fadeIn('fast');
		$("#salon-list").hide();
		$("#wedding-list").hide();
		$("#hair").addClass('tab-active');
		$("#salon").removeClass('tab-active');
		$("#wedding").removeClass('tab-active');

	});

	$("#salon").click(function(){
		$("#salon-list").fadeIn('fast');
		$("#hair-list").hide();
		$("#wedding-list").hide();
		$("#salon").addClass('tab-active');
		$("#hair").removeClass('tab-active');
		$("#wedding").removeClass('tab-active');
	});

	$("#wedding").click(function(){
		$("#wedding-list").fadeIn('fast');
		$("#hair-list").hide();
		$("#salon-list").hide();
		$("#wedding").addClass('tab-active');
		$("#hair").removeClass('tab-active');
		$("#salon").removeClass('tab-active');
	});

	// Mobile

	$("#mobile-salon-list").hide();
	$("#mobile-wedding-list").hide();
	$("#mobile-hair").addClass('tab-active');

	$("#mobile-hair").click(function(){

		$("#mobile-hair-list").fadeIn('fast');
		$("#mobile-salon-list").hide();
		$("#mobile-wedding-list").hide();
		$("#mobile-hair").addClass('tab-active');
		$("#mobile-salon").removeClass('tab-active');
		$("#mobile-wedding").removeClass('tab-active');

	});

	$("#mobile-salon").click(function(){
		$("#mobile-salon-list").fadeIn('fast');
		$("#mobile-hair-list").hide();
		$("#mobile-wedding-list").hide();
		$("#mobile-salon").addClass('tab-active');
		$("#mobile-hair").removeClass('tab-active');
		$("#mobile-wedding").removeClass('tab-active');
	});

	$("#mobile-wedding").click(function(){
		$("#mobile-wedding-list").fadeIn('fast');
		$("#mobile-hair-list").hide();
		$("#mobile-salon-list").hide();
		$("#mobile-wedding").addClass('tab-active');
		$("#mobile-hair").removeClass('tab-active');
		$("#mobile-salon").removeClass('tab-active');
	});


});

