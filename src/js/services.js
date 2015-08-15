$(function(){

	$("#salon-list").hide();
	$("#wedding-list").hide();
	$("#hair").addClass('tab-active');

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

	$("#salon-list-mobile").hide();
	$("#wedding-list-mobile").hide();
	$("#hair-mobile").addClass('tab-active');

	$("#hair-mobile").click(function(){

		$("#hair-list-mobile").fadeIn('fast');
		$("#salon-list-mobile").hide();
		$("#wedding-list-mobile").hide();
		$("#hair-mobile").addClass('tab-active');
		$("#salon-mobile").removeClass('tab-active');
		$("#wedding-mobile").removeClass('tab-active');

	});

	$("#salon-mobile").click(function(){
		$("#salon-list-mobile").fadeIn('fast');
		$("#hair-list-mobile").hide();
		$("#wedding-list-mobile").hide();
		$("#salon-mobile").addClass('tab-active');
		$("#hair-mobile").removeClass('tab-active');
		$("#wedding-mobile").removeClass('tab-active');
	});

	$("#wedding").click(function(){
		$("#wedding-list-mobile").fadeIn('fast');
		$("#hair-list-mobile").hide();
		$("#salon-list-mobile").hide();
		$("#wedding-mobile").addClass('tab-active');
		$("#hair-mobile").removeClass('tab-active');
		$("#salon-mobile").removeClass('tab-active');
	});


});

