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


});

