$(document).ready(function() {
  $('#forgottenPasswordDiv').hide();
  $("#ForgotPassword").click(function () {
    $('#forgottenPasswordDiv').show();
  });
  $("#okButton").click(function () {
    var emailForgottenPassword = $("#forgottenPasswordsEmail").val();
    if (isEmailValid(emailForgottenPassword)){
      recordForgottenPassword(emailForgottenPassword);
      // callPHP(emailForgottenPassword);
      alert("Thank you. We have sent a password reset link to your email address.");
      $('#forgottenPasswordDiv').hide();
    }
    else{
      $("#forgottenPasswordsFeedbackLogin").html("**Enter a valid email address");
    }
  });
  $("#CancelButton").click(function () {
    $('#forgottenPasswordDiv').hide();
  });

});

/*Function that calls recordForgottenPassword.php. Calls callPHP function depending on the response*/
function recordForgottenPassword(emailForgottenPassword){
  jQuery.ajax({
    type: "POST",
    dataType: "JSON",
    url: "https://devweb2014.cis.strath.ac.uk/~rqb12155/recordForgottenPassword.php",
    data: {emailAddress: emailForgottenPassword},
    success:function(data){
      if(jQuery.type(data)==='number'){
        callPHP(emailForgottenPassword, data);
      }
    },
    error: function(XMLHttpRequest, textStatus, errorThrown) {
      alert("Status: " + textStatus); alert("Error: " + errorThrown);
    }
  });
}

function callPHP(emailAddress, forgottenPasswordId){
    jQuery.ajax({
      type: "POST",
      dataType: 'text',
      url: "https://devweb2014.cis.strath.ac.uk/~rqb12155/emailPasswordReset.php",
      data: {emailAddress: emailAddress, forgottenPasswordId: forgottenPasswordId},
      success:function(response){
      },
      error: function(XMLHttpRequest, textStatus, errorThrown) {
        alert("Status: " + textStatus); alert("Error: " + errorThrown);
      }
    });
}
