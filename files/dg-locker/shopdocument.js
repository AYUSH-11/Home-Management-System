$(document).ready(function(){

   /*user information in header*/
  var head_name="Ayush Vachhani";
  var head_image="../../crop.jpg";
  document.getElementById('head_name').innerHTML=head_name;
  document.getElementById('head_image').src=head_image;

  
  var  length=6;
  var name="HELLO";
  
  var image=["../../crop.jpg"];
  var documentname=['Credit Card']
  var opendocument=["homedocument.html"];
  for(var i=0;i<length;i++)
    { 
      $("#inddoc").append("<div class='col-xl-4 col-lg-6 col-md-12 col-sm-12 col-12' style='float:left;'>\
                              <div class='product-thumbnail'>\
                                  <div class='product-img-head'>\
                                    <div class='product-img'>\
                                                    <img src="+image[0]+"  class='img-fluid'>\
                                    </div>\
                                    <div class='ribbons'></div>\
                                    <div class='ribbons-text'>New</div>\
                                    <div class='product-content'>\
                                        <div class='product-content-head'>\
                                            <h3 class='product-title'>"+documentname[0]+"</h3>\
                                        </div>\
                                        <div class='product-btn'>\
                                                <a href='#' class='btn btn-primary' style='width:45%;'>View</a>\
                                                <a href='#' class='btn btn-primary' style='width:45%; float:right;'>Delete</a><br>\
                                            <div style='text-align:center; padding-top: 5px;' >\
                                                <a href='#' class='btn btn-primary'>Download</a>\
                                            </div>\
                                        </div>\
                                    </div>\
                                  </div>\
                              </div>\
                           </div>");
      }

      $('#resbtn').click(function(){
          $('input[type="checkbox"]:checked').prop('checked',false);
    })

  });


