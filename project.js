function openNav() {
  document.getElementById("mySidebar").style.width = "300px";
  document.getElementById("mySidebar").style.visibility = "visible";
}

function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
}
var loader;
function loadNow(opacity) {
  if (opacity <= 0) {
    displayContent();
  } else {
    loader.css("opacity", "opacity");
    window.setTimeout(function () {
      loadNow(opacity - 0.05);
    }, 100);
  }
}
function displayContent() {
  loader.css("display", "none");
  $("#site-wrap").css("display", "block");
}
$(document).ready(function () {
  loader = $(".loader");
  loadNow(1);
});
