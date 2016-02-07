var emailValid = false;
var emailConfirmValid = false;
var passwordValid = false;

$(document).ready(function() {
  $("#emailReg").keyup(function(){
    if(isEmailValid($(this).val())){
      $("#transparentEmail").attr("src","images/tick.png");
      $(this).css("border-color", "#00ff0a");
      emailValid = true;
    }
    else{
      $("#transparentEmail").attr("src","images/cross.png");
      $(this).css("border-color", "#ff0000");
      emailValid = false;
    }
    if(isConfirmEamilValid($(this).val(),$("#confirmEmail").val())){
      $("#transparentConfirmEmail").attr("src","images/tick.png");
      $("#confirmEmail").css("border-color", "#00ff0a");
      emailConfirmValid = true;
    }
    else{
      $("#transparentConfirmEmail").attr("src","images/cross.png");
      $("#confirmEmail").css("border-color", "#ff0000");
      emailConfirmValid = false;
    }
  });
  $("#confirmEmail").keyup(function(){
    if(isConfirmEamilValid($("#emailReg").val(),$(this).val())){
      $("#transparentConfirmEmail").attr("src","images/tick.png");
      $(this).css("border-color", "#35b81c");
      emailConfirmValid = true;
    }
    else{
      $("#transparentConfirmEmail").attr("src","images/cross.png");
      $(this).css("border-color", "#ff0000");
      emailConfirmValid = false;
    }
  });
  $("#passwd").keyup(function(){
    if(isPassValid($(this).val())){
      console.log($(this).val());
      $("#transparentPassword").attr("src","images/tick.png");
      $("#errorFeedback").html("");
      $(this).css("border-color", "#35b81c");
    }
    else {
      $("#transparentPassword").attr("src","images/cross.png");
      $("#errorFeedback").html("**Password must be at least 6 characters and at least 1 number");
      $(this).css("border-color", "#ff0000");
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

function isConfirmEamilValid(emailAddress, confirmedEmailAddress){
  var pattern = /^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;
  if (pattern.test(confirmedEmailAddress) && pattern.test(emailAddress) && (emailAddress==confirmedEmailAddress)){
    return true;
  }
  else{
    return false;
  }
}

function isPassValid(pass) {
  if(pass!==null && pass.length >= 6 && containsNumber(pass)){
    passwordValid = true;
    return true;
  }
  else{
    return false;
  }
}

function containsNumber(string) {
  return (
    /\d/.test(
      string));
    }

function validateForm(){
  return (passwordValid && emailConfirmValid && passwordValid);
}
