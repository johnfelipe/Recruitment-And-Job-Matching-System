/*
Helper function to count number of characters in a textbox
*/
function countChars(countfrom,displayto) {
    var len = document.getElementById(countfrom).value.length;
    document.getElementById(displayto).innerHTML = len;
    if (len >1000){
        document.getElementById("displayCharacterCount").style.color = "#ff0000";
    }
    else{
        document.getElementById("displayCharacterCount").style.color = "#66FF33";
    }
}
