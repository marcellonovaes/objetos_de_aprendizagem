
var myVideo,fingerprint, extra, content, video, savePosition, video_id, gap_field, content_field, position,cp, type, dialog,timeout,player, bg, mx, my,expTop;


var host ='http://localhost/objetos_de_aprendizagem';
//var host ='https://videos-novaes.c9users.io';
//var host ='https://sbie-novaes.c9users.io';


getContent();

function isMobile(){
	var userAgent = navigator.userAgent.toLowerCase();
	if( userAgent.search(/(android|avantgo|blackberry|bolt|boost|cricket|docomo|fone|hiptop|mini|mobi|palm|phone|pie|tablet|up\.browser|up\.link|webos|wos)/i)!= -1 )
		return true;

	return false;
}

function init(){

	fingerprint = jQuery.fingerprint();

	mx=0; my=0;
	myVideo = document.getElementById("video");

	myVideo.addEventListener('click', function(){relocate();}, false);

	answer_text = document.getElementById("answer_text");
	player = document.getElementById("player");
	dialog = document.getElementById("dialog");

	content = document.getElementById("content");
	content.addEventListener('click', function(){relocate();}, false);

	banner = document.getElementById("banner");
	gap_field = document.getElementById("gap_field");
	content_field = document.getElementById("content_field");
	savePosition = document.getElementById("savePosition");

hvideo /= 3;

	expTop = 110;
	pad += 30;

	player.style.left = pad+'px';
	player.style.top = (expTop+100)+'px';
	content.style.left = (pad+15)+'px';

	gap_field.innerHTML = title;

	bg = content.style.background;
	content.style.background = "";

}

function relocate(){
	mx = event.clientX - (pad+23);
	my = event.clientY - (expTop+136);

	showExtra();
}

function save(){


    var url = host+'/Service/locate.php';
    var form_data = new FormData();
    form_data.append('gap_id', extra.gap_id);
    form_data.append('video_id', extra.video);
    form_data.append('user_id', extra.user_id);
    form_data.append('sugestion_id', extra.sugestion_id);
    form_data.append('sugestion_text', extra.sugestion);
    form_data.append('sugestion_type', extra.type);
    form_data.append('gap_position', extra.position);
    form_data.append('gap_answer', extra.answer);
    form_data.append('fingerprint', fingerprint);
    form_data.append('x', mx);
    form_data.append('y', my);

    $.ajax({
        url: url, 
        type: 'POST',
        data: form_data,
        cache: false,
        contentType: false,
        processData: false,
        success: function(response) {
            $('.resp').html(response);
        },
        error: function(xhr, status, error) {
            alert(xhr.responseText);
        }
    });
    

	location.reload();
//getContent();

}


function handleContent(content){
	extra = content;

	video = content.video;
	type = content.type;
	gap = content.answer;
	sugestion = content.sugestion;
	position = content.position;

	init();

	loadVideo();
	
	showExtra();

}

function loadVideo(){
	var a,b;
	
	myVideo.src = "../Videos/"+video+".mp4";

	answer_text.style = 'width:'+1.2*myVideo.width+'px;height:'+expTop+'px;background-color : #eeeeee;text-align: justify;font-size:16px;padding:1px;';

	myVideo.currentTime = position;

	myVideo.pause(); 
 


}

function showExtra(){

			
	content.innerHTML = "";
				
	content.style.backgroundColor = "";

	content.style.background = "";


				

				
				dx = mx;
				dy = my;


				content.innerHTML = "";

				content.style.borderRadius = '8em';
				content.style.fontSize = '20px';

				

				content.style.backgroundColor = "";

				content.style.background = ""; 


				try{
					a = decodeURIComponent(escape(gap));
					b = decodeURIComponent(escape(sugestion));
				}catch(Err){
					a = decodeURIComponent(gap);
					b = decodeURIComponent(sugestion);	
				}


				switch(type){
					case '1':
					case '4':
						var hx,wx;

						var image = new Image();
    						image.src=host+'/Images/Sugestions/'+video+'/'+b;

						var original_width = image.width;
						var original_height = image.height;
						var ratio = original_height / original_width;
			
						hx = hvideo * ratio;
						wx = hvideo;

						if(wx > hvideo){
							wx = hvideo;
							hx = wx * ratio;
						}


						b = '<img height='+hx+' width='+wx+' src='+host+'/Images/Sugestions/'+video+'/'+b+' style="opacity:0.8;box-shadow: 12px 29px 81px 0px rgba(0,0,0,0.75);-moz-box-shadow: 12px 29px 81px 0px rgba(0,0,0,0.75);-webkit-box-shadow: 12px 29px 81px 0px rgba(0,0,0,0.75);"  >';
		
						content.style.backgroundColor = "";
						content.style.top = (expTop+125+dy)+'px';
						content.style.left = (pad+10+dx)+'px';
						content.innerHTML   = "<a  style='color:#ffffff;'>"+b+"</a>";
						break;
					case '3':
						content.style.left = (pad+16+dx)+'px';						
						content.style.background = bg;
						content.style.top = (expTop+133+dy)+'px';
						content.style.borderRadius = '1em';
						content.innerHTML = a+"<br>=<br>"+b;
						break; 
					case '2': 
					case '5': 
					case '6': 

						content.style.background = bg;
						content.style.top = (expTop+133+dy)+'px';
						content.style.left = (pad+dx)+'px';
						content.innerHTML = a;
						break;	
				}
			

}

function getContent(){

	var URL = host+'/Service/random_extra.php';

	$.ajax({
	    url: URL,
	    dataType: 'application/json',
	    complete: function(data){
        		handleContent(JSON.parse(data.responseText)[0]);
    	    }
	})
}





