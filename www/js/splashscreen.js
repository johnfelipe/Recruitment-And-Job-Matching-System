$(document).ready(function() {
    $("#register").click(showRegister);
    $("#cancel").click(hideRegister);
});


function showRegister() {
    $('#registerPg').slideDown();
    $('#loginPg').slideUp();
}

function hideRegister() {
    $('#loginPg').slideDown();
    $('#registerPg').slideUp();
}
