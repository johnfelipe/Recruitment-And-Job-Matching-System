$(document).ready(function() {
  loadProfileIntro('liamdiamond@hotmail.co.uk');
});


function loadProfileIntro(emailAddress){
  jQuery.ajax({
    dataType: 'JSON',
    url: "https://devweb2014.cis.strath.ac.uk/~rqb12155/.php",
    data: {emailAddress: emailAddress},
    success:function(data){
      console.log(data);
    },
    error: function(XMLHttpRequest, textStatus, errorThrown) {
      alert("Status: " + textStatus); alert("Error: " + errorThrown);
    }
  });
}
