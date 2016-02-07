// $('body').css({background : 'url(images/wallpaper/'+wp+'.jpg)  no-repeat fixed bottom left'});

$(document).ready(function() {
  $("#indexIframe").contents().find("body").css("background-color","red");
  
  $("#changeBackground").click(function () {
    var imageURL = $("#imageURL").val();
    $("body").css("background-image", "url("+imageURL+")");
  });


});
