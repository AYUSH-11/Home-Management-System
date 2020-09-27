$(document).ready(function(){
  var  length=3;
  var name=['HELLO','Ayush','Yash'];
  var image="crop.jpg"
  var images=['crop.jpg','crop.jpg','crop.jpg']
  for(var i=0;i<length;i++)
    {
      $("#record").append(" <div class=\"flip-card\" style=\" float:left ;width:32%; padding:10px;height:325px\">\
      	<div class=\"flip-card-inner\">\
      			<div class=\"flip-card-front\">\
      				<img src="+images[i]+" alt=\"Avatar\" style=\"width:300px;height:260px;\">\
      			<div>\
      			</div><h1>"+ name[i]+"</h1></div>\
      			<div class=\"flip-card-back\">\
      			<br><br>\
      			<button style=\"font-size: 25px;background-color: lightblue\">view</button>\
      			<br><br><br><br>\
      			<button style=\"font-size: 25px;background-color: lightblue\">update</button>\
      			<br><br><br><br>\
      			<button style=\"font-size: 25px;background-color: lightblue;\">delete</button>\
      		</div>\
      	</div>\
      	</div>.");	
    }

  });
