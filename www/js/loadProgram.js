$(document).ready(function(){
  $(".programTitle").click(function () {
    //Obtain program reference number from job profile
    var programReference = $(this).parent("div").parent("div").find(".programReference").html();

    //Error checking for non-existant reference number
    if ((programReference === undefined) || (programReference === null)){
      console.log("none");
      return false;
    }
    else{
      console.log(programReference);
    }

    if (window.localstorage){
      console.log("ls");
    }
    else{
      console.log("no ls");
    }
  });
});
