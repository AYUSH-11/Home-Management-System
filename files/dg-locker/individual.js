$(document).ready(function(){
    $('#switch16').prop('checked', false);
    $("#switch16").click(function(){

      if ($(this).is(":checked")) {
       $("#div_password1").show();
       $("#div_password2").show();
       
      }
      else{
        $("#div_password1").hide();
        $("#div_password2").hide();
      }
    });




  });

  
