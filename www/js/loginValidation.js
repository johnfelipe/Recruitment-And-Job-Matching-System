var emailValid = false;
var passwordValid = false;

$(document).ready(function() {
  $("#email").keyup(function(){
    if(isEmailValid($(this).val())){
      emailValid = true;
    }
    else{
      emailValid = false;
    }
  });
  $("#password").keyup(function(){
    if(isPasswordValid($(this).val())){
      passwordValid = true;
    }
    else{
      passwordValid = false;
    }
  });

});

function isEmailValid(emailAddress) {
  var pattern = /^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;
  if (pattern.test(emailAddress) && emailAddress!== null && emailAddress!=="" && emailAddress.length!== 0){
    return true;
  }
  else{
    return false;
  }
}

function isPasswordValid(password) {
  if(password===null || password.length === 0 || password===""){
    return false;
  }
  else{
    return true;
  }
}

function validateLogin(){
  if (!emailValid && !passwordValid){
    $("#errorFeedbackLogin").html("**Enter a valid email address and a password");
  }
  else{
    if(!emailValid){
      $("#errorFeedbackLogin").html("**Enter a valid email address");
    }
    if(!passwordValid){
      $("#errorFeedbackLogin").html("**Password required ");
    }
  }
  return (emailValid && passwordValid);
}
