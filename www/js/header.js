$(document).ready(function() {
  $("#backIcon").css('visibility', 'invisible');
  $("#backIcon").click(function () {
    window.location.href = "#";
  });

  $("#header").load("header.html");

  $( "#moreIcon" ).click(function() {
    if ($("#moreMenu").is(':hidden')){
      $("#moreMenu").slideDown(100);
    }
    else{
      $("#moreMenu").slideUp(100);
    }
  });

  $(document).click(function(event) {
    if(!$(event.target).closest('#moreMenu').length && !$(event.target).is('#moreMenu')&& !$(event.target).is('#moreIcon')) {
      if($('#moreMenu').is(":visible")) {
        $('#moreMenu').hide();
      }
    }
  });



});

function showDefaultIcons(){
  $("#profileIcon").attr("src","images/header/profile.png");
  $("#notificationIcon").attr("src","images/header/notification.png");
  $("#companyIcon").attr("src","images/header/company.png");
  $("#testIcon").attr("src","images/header/test.png");
  $("#moreIcon").attr("src","images/header/more.png");
}

function illuminateProfileIcon() {
  showDefaultIcons();
  $("#profileIcon").attr("src","images/header/profileSelected.png");
}

function illuminateCompanyIcon() {
  showDefaultIcons();
  $("#companyIcon").attr("src","images/header/companySelected.png");
}

function illuminateNotificationIcon() {
  showDefaultIcons();
  $("#notificationIcon").attr("src","images/header/notificationSelected.png");
}

function illuminateTestIcon() {
  showDefaultIcons();
  $("#testIcon").attr("src","images/header/testSelected.png");
}

function illuminateMoreIcon() {
  showDefaultIcons();
  $("#moreIcon").attr("src","images/header/moreSelected.png");
}

function setBackButtonToCompanyProfile(){
  $("#backIcon").css('visibility', 'visible');
  $("#backIcon").click(function () {
    window.location.href = "companyProfile.html";
  });
}
