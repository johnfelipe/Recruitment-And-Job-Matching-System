
$(document).ready(function() {
  $("#login").click(function () {
    if (validateLogin()){
      var emailAddress = $("#email").val();
      var password = $("#password").val();
      authenticateLogin(emailAddress, password);
    }
  });
});

function authenticateLogin(emailAddress, password){
  jQuery.ajax({
    type: "POST",
    dataType: 'text',
    url: "https://devweb2014.cis.strath.ac.uk/~rqb12155/authenticateLogin.php",
    data: {emailAddress: emailAddress, password: password},
    success:function(response){
      if(response === "<html><body><p>true</p></body></html>"){
        console.log("successful login");
        window.location.href = "profile.html";
        if (window.localStorage) {
          localStorage.setItem("loginEmail", emailAddress);
        }
      }
      else{
        console.log("unsuccessful login");
      }
    },
    error: function(XMLHttpRequest, textStatus, errorThrown) {
      alert("Status: " + textStatus); alert("Error: " + errorThrown);
    }
  });
}
