$(document).ready(function() {
  $("#backIcon").css('visibility', 'visible');
  $("#backIcon").click(function () {
    window.location.href = "browse.html";
  });

  $("#trainingDiv").click(function () {
    if ($("#programTraining").is(':hidden')){
      $('#trainingArrowIconImage').attr('src', 'images/companyProfile/applicantResources/downArrow.png');
      $("#programTraining").slideDown(300);
    }
    else{
      $('#trainingArrowIconImage').attr('src', 'images/companyProfile/applicantResources/rightArrow.png');
      $("#programTraining").slideUp(300);
    }
  });

  $("#careerProgressionDiv").click(function () {
    if ($("#programCareerProgression").is(':hidden')){
      $('#careerProgressionArrowIconImage').attr('src', 'images/companyProfile/applicantResources/downArrow.png');
      $("#programCareerProgression").slideDown(300);
    }
    else{
      $('#careerProgressionArrowIconImage').attr('src', 'images/companyProfile/applicantResources/rightArrow.png');
      $("#programCareerProgression").slideUp(300);
    }
  });
});

function initialize() {
  var myLatlng = new google.maps.LatLng(55.6526860, -4.7028490);
  var stLukesLatLng = new google.maps.LatLng( 55.64943,-4.72222);
  var stWinningsLatLng = new google.maps.LatLng(55.65276,-4.70599);
  var stMatthewsLatLng = new google.maps.LatLng(55.64282,-4.78778);

  var mapOptions = {
    zoom: 4,
    center: myLatlng,
    mapTypeID : google.maps.MapTypeId.ROADMAP
  };
  var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);


  var marker = new google.maps.Marker({
      position: myLatlng,
      map: map,
      /*Map Icon credit: https://mapicons.mapsmarker.com/markers/tourism/cult-religion/church/*/
      icon: 'images/churchMapIcon.png',
      title: 'St. Winin\'s Church'
  });



  var marker = new google.maps.Marker({
      position: stLukesLatLng,
      map: map,
      /*Map Icon credit: https://mapicons.mapsmarker.com/markers/health-education/education/school/?custom_color=ab3333*/
      icon: 'images/primarySchoolMapIcon.png',
      title: 'St. Luke\'s Primary School'
  });

  var marker = new google.maps.Marker({
      position: stWinningsLatLng,
      map: map,
      /*Map Icon credit: https://mapicons.mapsmarker.com/markers/health-education/education/school/?custom_color=ab3333*/
      icon: 'images/primarySchoolMapIcon.png',
      title: 'St. Winnning\'s Primary School'
  });

  var marker = new google.maps.Marker({
      position: stMatthewsLatLng,
      map: map,
      /*Map Icon credit: https://mapicons.mapsmarker.com/markers/health-education/education/high-school/?custom_color=ab3333*/
      icon: 'images/highSchoolMapIcon.png',
      title: 'St. Matthew\'s Academy'
  });

}

google.maps.event.addDomListener(window, 'load', initialize);
