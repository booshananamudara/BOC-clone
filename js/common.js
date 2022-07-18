
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("button_up_id").style.opacity = "0";
  } else {
    document.getElementById("button_up_id").style.opacity = "1";
  }
  prevScrollpos = currentScrollPos;
}