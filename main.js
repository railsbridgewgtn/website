// Scroll listener for dimming heading

var scrollAt = 0, // current scroll state
    opaqueAt = 0, // start opaque at this scroll state
    transparentAt = 800; // fade it out by here
var titles = document.getElementsByClassName('titles');

window.addEventListener('scroll', function(e) {
  // Get scroll state
  scrollAt = e.target.scrollingElement.scrollTop;

});