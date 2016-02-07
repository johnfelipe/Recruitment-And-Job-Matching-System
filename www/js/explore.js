$(document).ready(function(){
  $("#backIcon").css('visibility', 'visible');
  $("#backIcon").click(function () {
    window.location.href = "companyProfile.html";
  });

  $('.programAreas').slick({
    slidesToScroll: 4,
    centerMode: true,
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1
  });

  var numberOfImages = 4;
  var randomNumber = Math.round(Math.random()*(numberOfImages-1)) + 1;
  // document.getElementById("quotes").style.backgroundImage = "url(images/companyProfile/explore/quotes/" + randomNumber + ".png)";
  var chosenImage = randomNumber + '.png';
  $("#quotes").css({
      'background-image' : 'url(images/companyProfile/explore/quotes/'+chosenImage+')',
  });
});
