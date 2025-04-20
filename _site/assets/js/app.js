 //Executes your code when the DOM is ready.  Acts the same as $(document).ready().

$(function() {
  // lightboxing
  $(function () {
    $('.images a, a[rel="lightbox"]').fluidbox();
	});

  //Calls the tocify method on your HTML div.
  var toc = $("#toc").tocify({ selectors:"h3", extendPage: true }).data("tocify");
  // highlight offset should be equal to padding in h3's parent, .item-description
  toc.setOptions({ hashGenerator: "pretty", history: true})

  // when someone clicks an item-description image, scroll down
  // todo?

	// Email obfuscator script 2.1 by Tim Williams, University of Arizona
	// Random encryption key feature by Andrew Moulden, Site Engineering Ltd
	// This code is freeware provided these four comment lines remain intact
	// A wizard to generate this code is at http://www.jottings.com/obfuscator/
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

});