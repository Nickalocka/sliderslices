$(document).ready(function(){


halfSlider = function(){

		var slider = $(".half-slider");
		var slides = slider.find(".slider");
		var slide = slides.find(".slide");
		var innerSlider = slider.find(".half-slider-inner");
		var sliceScrollTimer = null;		

		slide.css("height", Math.round(($(window).height() * 0.8)) + 1);

		var height = slide.outerHeight();

		innerSlider.scroll(function () {
			innerSlider.scrollTop(0);

		    if (sliceScrollTimer) {
		        clearTimeout(sliceScrollTimer);
		    }

		    sliceScrollTimer = setTimeout(slide, 175);
		});

	slide = function(){
		sliceScrollTimer = null;	

		var curPosition = parseInt(slides.css("top"));
		var newPosition;

		if (curPosition == 0) {
			newPosition = (curPosition + height) * -1;
		} else {
			newPosition = (curPosition - height);
		}

		slides.each(function(){
			var s = $(this);
			
				if (s.hasClass("left")) {
					if (Math.floor(parseInt(s.css("bottom"))) != 0) {
						s.animate({
							top: newPosition
						});
					}
				} else {
					if (Math.floor(parseInt(s.css("top"))) != 0) {
						s.animate({
							bottom: newPosition
						});
					}
				}			

		});

		innerSlider.scrollTop(0);

	};
};

halfSlider();

});