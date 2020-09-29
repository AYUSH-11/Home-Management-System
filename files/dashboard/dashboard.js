$(document).ready(function(){

  /*user information in header*/
  var head_name="Ayush Vachhani";
  var head_image="../../crop.jpg";
  document.getElementById('head_name').innerHTML=head_name;
  document.getElementById('head_image').src=head_image;


  /*All Users*/
  var  length=3;
  var name=['HELLO','Ayush','Yash'];
  var image="crop.jpg";
  var viewinformation ='files/dashboard/viewinformation.html';
  var images=['crop.jpg','crop.jpg','crop.jpg'];
  for(var i=0;i<length;i++)
    {
      $("#record").append(' <div class="flip-card" style=" float:left ;width:32%; padding:10px;height:325px">\
      	<div class="flip-card-inner">\
      			<div class="flip-card-front">\
      				<img src='+images[i]+' alt="Avatar" style="width:300px;height:260px;">\
      			<div>\
      			</div><h1>'+ name[i]+'</h1></div>\
      			<div class="flip-card-back">\
      			<br><br><br>\
      			<a href="'+viewinformation+'" class="btn btn-warning" style="font-size:20px;" >view</a>\
      			<br><br>\
      			<br><br>\
      			<a href="'+viewinformation+'" class="btn btn-warning" style="font-size:20px;" >Remove</a>\
      		</div>\
      	</div>\
      	</div>.');	
    }





  });
