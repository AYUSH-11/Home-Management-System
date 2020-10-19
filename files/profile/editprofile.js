
  $(document).ready(function(){
  	/*user information in header*/
  	/*var head_name="Ayush Vachhani";
  	var head_image="../../crop.jpg";
  	document.getElementById('head_name').innerHTML=head_name;
  	document.getElementById('head_image').src=head_image;*/


  	var work=['Senior Software engineer at AK Group','Software engineer at S k Globex'];
	var len=2;
	var remove=['#','#'];

	for(var i=0;i<len;i++)
	{
	$("#work").append("<p><i  style='font-size:20px;'></i>\
						"+work[i]+"\
						<a href="+remove[i]+" style='float:right;' class='btn btn-warning' >Remove</a> </p>\
		");
	}

	/*Education*/
	/*var education=['J N V Jamnagar ','Marwadiuniversity'];
	var len1=2;
	var remove1=['#','#'];
	for(var i=0;i<len1;i++)
	{
	$("#education").append("<p><i  style='font-size:20px;'></i>\
						"+education[i]+"\
						<a href="+remove1[i]+" style='float:right;' class='btn btn-warning' >Remove</a> </p>\
		");
	}*/


  });
