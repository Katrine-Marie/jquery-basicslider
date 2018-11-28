$.fn.basicslider = function(options) {

	var defaults = {
    animationSpeed:     1000,
		pause:							3000
  };

	var options = $.extend({}, defaults, options);

	// clone first slide and append after last slide to create a continuous sliding effect
	$("#slider .slides > *:first-child").clone().appendTo(".slides");

	// general variables
	var width = 100;
	var animationSpeed = options.animationSpeed;
	var pause = options.pause;
	var currentSlide = 1;

	// caches elements
	var $slider = $('#slider');
	var $slideContainer = $('.slides', $slider);
	var $slides = $('.slides > *', $slider);

	// gets total number of slides
	var slideCount = $slides.length;
	// gets total width of slider
	var sliderWidth = width * slideCount;

	// sets width of individual slide based on percentage value
	var slideWidth = 100/slideCount;
	// var slideWidth = Math.round((100/slideCount) * 10000) / 10000;

	// appends percentage units to variables
	slideWidth += '%';
	width += '%';
	sliderWidth += '%';

	// sets width with CSS for .slides and content slides
	$slider.css('overflow', 'hidden');
	$slideContainer.css('width', sliderWidth);
	$slides.css('width', slideWidth);

	var interval;

	function startSlider() {
		interval = setInterval(function() {
			$slideContainer.animate({
				'margin-left': '-=' + width
			}, animationSpeed, function() {
				currentSlide++;
				if (currentSlide === $slides.length) {
					currentSlide = 1;
					$slideContainer.css('margin-left', 0);
				}
			});
		}, pause);
	}

	function pauseSlider() {
		clearInterval(interval);
	}
	$slideContainer.on('mouseenter', pauseSlider).on('mouseleave', startSlider);

	startSlider();
};
