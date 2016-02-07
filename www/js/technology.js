$(document).ready(function() {
  $("#backIcon").css('visibility', 'visible');
  $("#backIcon").click(function () {
    window.location.href = "explore.html";
  });
  $('.profiles').slick({
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear',
    arrows: true
  });
});
