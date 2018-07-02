// Scroll listener for dimming heading

var scrollAt = 0,
    opaqueAt = 0,
    transparentAt = 800;
var titles = document.getElementsByClassName('titles');

window.addEventListener('scroll', function(e) {
  scrollAt = e.target.scrollingElement.scrollTop;
});