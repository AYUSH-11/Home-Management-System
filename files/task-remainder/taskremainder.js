$(document).ready(function(){

/*user information in header*/
  var head_name="Ayush Vachhani";
  var head_image="../../crop.jpg";
  document.getElementById('head_name').innerHTML=head_name;
  document.getElementById('head_image').src=head_image;


  var  length=4;
  var from=['Ayush','Yash','Ayush','Yash'];
  var to=['Yash','Ayush','Yash','Ayush'];
  var assign_date=['12 July, 2020','16 July, 2020','18 July, 2020','11 Nov, 2020'];
  var user_name=['user1','user2','user3','user4'];
  var name=['All','Ayush','Yash','Smit'];
  var image=['../../assets/vendor/timeline/img/cd-icon-location.svg']
  var background=['cd-timeline__img cd-timeline__img--picture js-cd-img','cd-timeline__img cd-timeline__img--location js-cd-img','cd-timeline__img cd-timeline__img--movie js-cd-img']
  for(var i=0;i<length;i++)
    {
      $("#filter").append('<div class="custom-control custom-checkbox" >\
                                        <input type="checkbox" class="custom-control-input" id='+user_name[i]+' >\
                                        <label class="custom-control-label" for='+user_name[i]+'>'+name[i]+'</label>\
                                    </div>'); 
    } 


  for(var i=0;i<length;i++)
    {
      $("#task").append('<div class="cd-timeline__block js-cd-block">\
                                <div class="'+background[(i%3)]+'">\
                                    <img src="'+image[0]+'" alt="Picture">\
                                </div>\
                                <div class="cd-timeline__content js-cd-content">\
                                    <h3>Title of Assigned Task</h3>\
                                    <h4 style="float: left;">From :' + from[i] + '</h4>\
                                    <h4 style="float: right;">To :' + to[i] + '</h4><br><br>\
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.  laudantium ipsa ad debitis unde? Iste voluptatibus minus veritatis qui ut.</p>\
                                    <a href="#0" class="btn btn-primary btn-lg">Read More</a>\
                                    <span class="cd-timeline__date">'+ assign_date[i]+'</span>\
                                </div>\
                            </div>');	
    }
    
    $('#resbtn').click(function(){
      $('input[type="checkbox"]:checked').prop('checked',false);
    })





  });
