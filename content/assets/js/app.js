 //Executes your code when the DOM is ready.  Acts the same as $(document).ready().

$(function() {
  //Calls the tocify method on your HTML div.
  var toc = $("#toc").tocify({ selectors:"h2", extendPage: false }).data("tocify");

  var nav_container = $("#more-proj-content");
  var nav = $("#toc");
  nav_container.waypoint({
    handler: function(event, direction) {
        nav.toggleClass('sticky', direction=='down');
    }
  });

  $('#main-content img').jcaption({
		//Element to wrap the image and caption in
		wrapperElement: 'div',

		//Class for wrapper element
		wrapperClass: 'caption',

		//Caption Element
		captionElement: 'p',

		//Attribute of image to use as caption source
		imageAttr: 'alt',

		//If true, it checks to make sure there is caption copy before running on each image
		requireText: true,

		//Should inline style be copied from img element to wrapper
		copyStyle: false,

		//Strip inline style from image
		removeStyle: true,

		//Strip align attribute from image
		removeAlign: true,

		//Assign the value of the image's align attribute as a class to the wrapper
		copyAlignmentToClass: false,

		//Assign the value of the image's float value as a class to the wrapper
		copyFloatToClass: true,

		//Assign a width to the wrapper that matches the image
		autoWidth: true,

		//Animate on hover over the image
		animate: false,

		//Show Animation
		show: {opacity: 'show'},
		showDuration: 200,

		//Hide Animation
		hide: {opacity: 'hide'},
		hideDuration: 200	
	});
});