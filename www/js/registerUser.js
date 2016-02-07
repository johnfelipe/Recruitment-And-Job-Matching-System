$(document).ready(function() {
  $("#confirmRegistration").click(function () {
    if (validateForm()){
      var emailAddress = $("#emailReg").val();
      var password = $("#passwd").val();
      checkAlreadyRegistered(emailAddress,password);
    }
    else{
    }
  });
});

function checkAlreadyRegistered(emailAddress,password){
  jQuery.ajax({
    type: "POST",
    dataType: 'text',
    url: "https://devweb2014.cis.strath.ac.uk/~rqb12155/checkRegistered.php",
    data: {emailAddress: emailAddress, password: password},
    success:function(response){
      if(response === "<html><body><p>0TTP</p></body></html>"){
        storeRegistrationInDB(emailAddress,password);
      }
      else{
        alert("Error: our records show that there is already and account associated with this email address");
      }
    },
    error: function(XMLHttpRequest, textStatus, errorThrown) {
      alert("Status: " + textStatus); alert("Error: " + errorThrown);
    }
  });
}

function storeRegistrationInDB(emailAddress,password){
  jQuery.ajax({
    type: "POST",
    url: "https://devweb2014.cis.strath.ac.uk/~rqb12155/registrationWithEncryption.php",
    dataType:"text",
    data: {emailAddress: emailAddress, password: password},
    success:function(response){
      alert("registration success. You may now login.");
      $('#loginPg').slideDown();
      $('#registerPg').slideUp();
    },
    error: function(XMLHttpRequest, textStatus, errorThrown) {
      alert("Status: " + textStatus); alert("Error: " + errorThrown);
    }
  });
}
