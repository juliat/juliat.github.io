 //Executes your code when the DOM is ready.  Acts the same as $(document).ready().

$(function() {

  // sliders
  var unslider = $('.images').unslider({
		autoplay: false,
		delay: 9000000,
		dots: true,
		arrows: true,
		fluid: true,
		/* speed: 500,               //  The speed to animate each slide (in milliseconds)
		complete: function() {},  //  A function that gets called after every slide animation
		keys: true,               //  Enable keyboard (left, right) arrow shortcuts
		dots: true,               //  Display dot navigation
		fluid: false              //  Support responsive design. May break non-responsive designs*/
	});
	// next and previous links for slider
  $('.unslider-arrow').click(function() {
      var fn = this.className.split(' ')[1];

      //  Either do unslider.data('unslider').next() or .prev() depending on the className
      unslider.data('unslider')[fn]();
  });

  // lightboxing
  $(function () {
    $('.images a, a[rel="lightbox"]').fluidbox();
	});


  //Calls the tocify method on your HTML div.
  var toc = $("#toc").tocify({ selectors:"h2", extendPage: false }).data("tocify");

  var nav_container = $("#more-proj-content");
  var nav = $("#toc");
  nav_container.waypoint({
    handler: function(event, direction) {
        nav.toggleClass('sticky', direction=='down');
    }
  });

  $('.case-study img').jcaption({
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

	// Email obfuscator script 2.1 by Tim Williams, University of Arizona
	// Random encryption key feature by Andrew Moulden, Site Engineering Ltd
	// This code is freeware provided these four comment lines remain intact
	// A wizard to generate this code is at http://www.jottings.com/obfuscator/
	(function(){
	  coded = "R4C76CS@JH67C.ILH"
	  key = "WI9RYGKsMdklgXtyh8ra2pivEQAbCJFSmeUo6wu7qOB10VcnjHNDLPT4xf35zZ"
	  shift=coded.length
	  link=""
	  for (i=0; i<coded.length; i++) {
	    if (key.indexOf(coded.charAt(i))==-1) {
	      ltr = coded.charAt(i)
	      link += (ltr)
	    }
	    else {
	      ltr = (key.indexOf(coded.charAt(i))-shift+key.length) % key.length
	      link += (key.charAt(ltr))
	    }
	  }
	  emailLink = $('#nospammail').attr('href', 'mailto:'+link);
	}());
});