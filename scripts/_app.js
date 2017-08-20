$(document).ready(function(){

fadingSlides = function(){
	var slider = $(".fading-slides");
	var slides = slider.find(".slide");
	var count = slides.length;
	var i = 1;

	fade = function(elem) {
		elem.animate({
	    opacity: 1
	  }, 2000, 
	  function() {
	  	if (i < count) {
	    elem.animate({
	    	opacity: 0
	    }, 2000, function(){
	    	elem.remove();				
				if (i < count) {
					var x = i;
					i++;
					fade($(slides[x]));
				};
	    })
	  };
	  });
	};

	fade($(slides[0]));

};


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

		    sliceScrollTimer = setTimeout(slide, 250);
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

fadingSlides();
halfSlider();

});