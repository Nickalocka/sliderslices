$(document).ready(function(){


sliceSlider = function(){

	$(".slide").each(function(){
		$(this).css("height", Math.round(($(window).height() * 0.8)) + 1);
	});

	var sliceScrollTimer = null;

	$(".slice-slider-inner").scroll(function () {
		$(".slice-slider-inner").scrollTop(0);

	    if (sliceScrollTimer) {
	        clearTimeout(sliceScrollTimer);
	    }

	    sliceScrollTimer = setTimeout(slide, 150);
	});

	slide = function(){
		sliceScrollTimer = null;
		var slider = $(".slice-slider");
		var slides = slider.find(".slider");

		var slide = slides.find(".slide");
		var height = slide.outerHeight();		

		var x = parseInt($(".slider.left").css("top"));

		if (x == 0) {
			y = (x + height) * -1;
		} else {
			y = (x - height);
		}

		$(".slider.left").animate({
			top: y
		});

		$(".slider.right").animate({
			bottom: y
		});

		$(".slice-slider-inner").scrollTop(0);

	};
};

sliceSlider();



});