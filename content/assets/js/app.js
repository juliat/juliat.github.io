 //Executes your code when the DOM is ready.  Acts the same as $(document).ready().

$(function() {
  //Calls the tocify method on your HTML div.
  var toc = $("#toc").tocify({ selectors:"h2,h3,h4" }).data("tocify");

  var nav_container = $("#more-proj-content");
  var nav = $("#toc");
  nav_container.waypoint({
    handler: function(event, direction) {
        nav.toggleClass('sticky', direction=='down');
    }
  });
});
