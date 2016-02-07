$(document).ready(function() {
  $("#accordion > li > ul").slideUp();
  $("#accordion > li > div").click(function(){
    $("#accordion > li > ul").slideUp();
    $('.arrow').attr('src', 'images/companyProfile/applicantResources/downArrow.png');
    var img = $(this).find("img");
    if ($(this).next().is(':visible')){
      img.first().attr('src', 'images/companyProfile/applicantResources/downArrow.png');
    }
    else{
      img.first().attr('src', 'images/companyProfile/applicantResources/rightArrow.png');
      $(this).next().slideToggle(300);
    }
  });
});
