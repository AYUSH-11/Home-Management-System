$(document).ready(function(){

  

  var  length=6;
  var name="HELLO";
  var image="../../crop.jpg"
  var image=["../../crop.jpg"];
  var opendocument=["individualdocument.html"];
  for(var i=0;i<length;i++)
    {
      $("#indrec").append("<form action="+opendocument[0]+">\
        <input type='image' src="+image[0]+" alt='Submit' width=25% height='250px' style='float:left;padding:10px;' >\
      </form>");	
    }


    // for show password field
    // document.getElementsById('switch16').checked=false;
    // pass_checkbox.checked = false;
    // prop('#switch16').prop('checked' , false);
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


    /*user information in header*/
  var head_name="Ayush Vachhani";
  var head_image="../../crop.jpg";
  document.getElementById('head_name').innerHTML=head_name;
  document.getElementById('head_image').src=head_image;


  });

  
