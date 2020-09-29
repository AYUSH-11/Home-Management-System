window.onload = function information(){
	/*user information in header*/
  	var head_name="Ayush Vachhani";
  	var head_image="../../crop.jpg";
  	document.getElementById('head_name').innerHTML=head_name;
  	document.getElementById('head_image').src=head_image;


	/*User Photo And name*/
	var proname="Ayush Vachhani";
	var image="../../crop.jpg";
	document.getElementById('name').innerHTML=proname;
	document.getElementById('user_img').src=image;



	/*User Basic Details*/
	var name="Ayush Ashokbhai Vachhani";
	var birth ="11 Nov 2000";
	var gen="Male";
	var prof="Student";
	var blood="O+";

	var full_name="Full Name : "+name;
	var birth_date="Birth Date : "+birth;
	var gender="Gender : "+gen;
	var profesion="Profesion : "+prof;
	var blood_group="Blood Group : "+blood;
	
	
	document.getElementById('full_name').innerHTML=full_name;
	document.getElementById('birth').innerHTML=birth_date;
	document.getElementById('gender').innerHTML=gender;
	document.getElementById('profesion').innerHTML=profesion;
	document.getElementById('blood_group').innerHTML=blood_group;

	/*Contact Information*/
	var gmail='<i class="fas fa-fw fa-envelope mr-2" ></i>ayushpatel@gmail.com';
	var mob='<i class="fas fa-fw fa-phone mr-2"></i>+911234567890';
	document.getElementById('gmail').innerHTML=gmail;
	document.getElementById('mob').innerHTML=mob;


	/*Social Channel*/
	var facebook='<i class="fab fa-fw fa-facebook-square mr-1 facebook-color" ></i>facebook.com';
	var twitter='<i class="fab fa-fw fa-twitter-square mr-1 twitter-color" ></i>twitter.com'
	var instagram='<i class="fab fa-fw fa-instagram mr-1 instagram-color" ></i>instagram.com';
	var youtube='<i class="fab fa-fw fa-youtube mr-1 youtube-color" ></i>youtube.com';

	document.getElementById('facebook').innerHTML=facebook;
	document.getElementById('twitter').innerHTML=twitter;
	document.getElementById('instagram').innerHTML=instagram;
	document.getElementById('youtube').innerHTML=youtube;
	
}

$(document).ready(function(){


	/*User Work*/
	var work=['Senior Software engineerat AK Group','Software engineer at S k Globex'];
	var len=2;
	for(var i=0;i<len;i++)
	{
	$("#work").append("<p><i class='fas fa-arrow-circle-right' style='font-size:20px;color:blue'></i>\
						"+work[i]+"</p>\
		");
	}
	/*Education*/
	var education=['J N V Jamnagar ','Marwadiuniversity'];
	var len1=2;
	for(var i=0;i<len1;i++)
	{
	$("#education").append("<p><i class='fas fa-arrow-circle-right' style='font-size:20px;color:blue'></i>\
						"+education[i]+"</p>\
		");
	}
	/*User Language*/
	var language=['English','Hindi','Gujrati'];
	var len2=3;
	for(var i=0;i<len2;i++)
	{
	$("#language").append("<p><i class='fas fa-arrow-circle-right' style='font-size:20px;color:blue'></i>\
						"+language[i]+"</p>\
		");
	}


/*Revies*/
	var rev=['Maecenas rutrum viverra augue. Nulla in eros vitae ante ullamcorper congue. Praesent tristique massa ac arcu dapibus tincidunt. Mauris arcu mi, lacinia et ipsum vel, sollicitudin laoreet risus.','Nice Work']
	var len3=3
	var givenby=['ayush','yash','smit'];
	for(var i=0;i<len3;i++)
	{
	$("#reviews").append('<div class="card-body">\
                                <div class="review-block">\
                                    <p class="review-text font-italic m-0">'+rev[i]+'</p>\
                                    <span class="text-dark font-weight-bold">'+givenby[i]+'</span><small class="text-mute"> (Company name)</small>\
                                 	</div>\
                          </div>');
	}	



                                                                    


})