$(document).ready(function(){
  var  length=3;
  var name="hello";
  var image="crop.jpg"
  for(var i=0;i<length;i++)
    {
      $("#record").append(" <div class=\"flip-card\" style=\" float:left ;width:32%; padding:5px;height:325px\"><div class=\"flip-card-inner\"><div class=\"flip-card-front\"><img src="+image+" alt=\"Avatar\" style=\"width:300px;height:300px;\"><div></div>"+ name+"</div><div class=\"flip-card-back\"><br><br><button style=\"font-size: 25px;background-color: lightblue\">view</button><br><br><br><br><button style=\"font-size: 25px;background-color: lightblue\">update</button><br><br><br><br><button style=\"font-size: 25px;background-color: lightblue;\">delete</button></div></div></div>.");	
    }

  });
