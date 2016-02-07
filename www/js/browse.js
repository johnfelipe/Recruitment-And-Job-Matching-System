$(document).ready(function(){

  $("#geocomplete").geocomplete();
  var arrowDown = true;

  $("#backIcon").css('visibility', 'visible');
  $("#backIcon").click(function () {
    window.location.href = "companyProfile.html";
  });

  $("#typeArrow").click(function () {
    if ($("#searchPanelType").is(':hidden')){
      $('.arrow').attr('src', 'images/companyProfile/applicantResources/rightArrow.png');
      $('.searchPanel').css('display', 'none');
      $('#typeArrowImage').attr('src', 'images/companyProfile/applicantResources/downArrow.png');
      $("#searchPanelType").slideDown(300);
    }
    else{
      $('#typeArrowImage').attr('src', 'images/companyProfile/applicantResources/rightArrow.png');
      $("#searchPanelType").slideUp(300);
    }
  });

  $("#levelArrow").click(function () {
    if ($("#searchPanelLevel").is(':hidden')){
      $('.arrow').attr('src', 'images/companyProfile/applicantResources/rightArrow.png');
      $('.searchPanel').css('display', 'none');
      $('#levelArrowImage').attr('src', 'images/companyProfile/applicantResources/downArrow.png');
      $("#searchPanelLevel").slideDown(300);
    }
    else{
      $('#levelArrowImage').attr('src', 'images/companyProfile/applicantResources/rightArrow.png');
      $("#searchPanelLevel").slideUp(300);
    }
  });

  $("#locationArrow").click(function () {
    if ($("#searchPanelLocation").is(':hidden')){
      $('.arrow').attr('src', 'images/companyProfile/applicantResources/rightArrow.png');
      $('.searchPanel').css('display', 'none');
      $('#locationArrowImage').attr('src', 'images/companyProfile/applicantResources/downArrow.png');
      $("#searchPanelLocation").slideDown(300);
      locationn();
    }
    else{
      $('#locationArrowImage').attr('src', 'images/companyProfile/applicantResources/rightArrow.png');
      $("#searchPanelLocation").slideUp(300);
    }
  });

  $("#programAreasArrow").click(function () {
    if ($("#searchPanelProgramArea").is(':hidden')){
      $('.arrow').attr('src', 'images/companyProfile/applicantResources/rightArrow.png');
      $('.searchPanel').css('display', 'none');
      $('#programAreasArrowImage').attr('src', 'images/companyProfile/applicantResources/downArrow.png');
      $("#searchPanelProgramArea").slideDown(300);
    }
    else{
      $('#programAreasArrowImage').attr('src', 'images/companyProfile/applicantResources/rightArrow.png');
      $("#searchPanelProgramArea").slideUp(300);
    }
  });

  $("#moreIconImage").click(function () {
    if ($("#ajaxSearch").is(':hidden')){
      $('.arrow').attr('src', 'images/companyProfile/applicantResources/rightArrow.png');
      $('.searchPanel').css('display', 'none');
      $("#ajaxSearch").slideDown(300);
    }
    else{
      $("#ajaxSearch").slideUp(300);
    }
  });

  $(".arrowIcon").click(function () {
    if ($(this).parent("div").find(".snippet").is(':hidden')){

      $(this).parent("div").find(".programLocation").css( "height", "auto" );
      $(this).parent("div").find(".programLocation").css( "overflow", "visible" );

      $(this).parent("div").parent("div").css( "height", "auto" );

      $(this).parent("div").find(".division").css( "height", "auto" );
      $(this).parent("div").find(".division").css( "overflow", "visible" );

      $(this).find("img").attr('src', 'images/companyProfile/browse/upArrow.png');
      $(this).parent("div").find(".snippet").slideDown(300);
    }
    else{
      $(this).parent("div").find(".programLocation").css( "height", "3vw" );
      $(this).parent("div").find(".programLocation").css( "overflow", "hidden" );

      $(this).parent("div").find(".division").css( "height", "3vw" );
      $(this).parent("div").find(".division").css( "overflow", "hidden" );

      // $(this).parent("div").parent("div").css( "height", "65vw" );
      $(this).parent("div").parent("div").css( "margin-bottom", "0%" );
      $(this).find("img").attr('src', 'images/companyProfile/applicantResources/downArrow.png');
      $(this).parent("div").find(".snippet").slideUp(300);
      $(this).parent("div").parent("div").find('.program').css( "height", "75vw" );
    }
  });

  $(".checkbox").click(function () {
    if ($(this).css('background-color')==="rgb(255, 0, 0)"){
      $(this).css('background-color', 'rgba(156, 163, 24, 0.14)');
    }
    else{
      $(this).css('background-color', 'red');
    }
  });

  $("#europe").click(function () {
    if ($(this).css('background-color')==="rgb(255, 0, 0)"){
      //   $('#countries tr:last').after('<tr><td class="sixColumnTable1"><div class="checkbox" id="americas">&nbsp;</div></td><td class="sixColumnTable2">Bahrain</td><td class="sixColumnTable3"><div class="checkbox" id="asiaPacific">&nbsp;</div></td><td class="sixColumnTable4">Belgium</td><td class="sixColumnTable5"><div class="checkbox" id="europe">&nbsp;</div></td><td class="sixColumnTable6">France</td></tr>');
      //
      $('.locationTable').css('display', 'none');
      $("#europeanCountries").slideDown(300);
    }
    else{
      $("#europeanCountries").slideUp(300);
    }
  });

  $("#asiaPacific").click(function () {
    if ($(this).css('background-color')==="rgb(255, 0, 0)"){
      $('.locationTable').css('display', 'none');
      $("#asianPacificCountries").slideDown(300);
    }
    else{
      $("#asianPacificCountries").slideUp(300);
    }
  });

  $("#americas").click(function () {
    if ($(this).css('background-color')==="rgb(255, 0, 0)"){
      $('.locationTable').css('display', 'none');
      $("#northAmericanCountries").slideDown(300);
    }
    else{
      $("#northAmericanCountries").slideUp(300);
    }
  });

  $(".programTitle").click(function () {
    window.location.href = "program.html";
  });


});


function locationPreference(){
  $('.locationPanel').css('display', 'none');
  $("#locationPreferencesOption").slideDown(300);
}

function radius(){
  $('.locationPanel').css('display', 'none');
  $("#radiusOption").slideDown(300);
}

function locationn(){
  $('.locationPanel').css('display', 'none');
  $("#locationOption").slideDown(300);
}

function showVal(value){
  $("#distance").html(value*4);
}
