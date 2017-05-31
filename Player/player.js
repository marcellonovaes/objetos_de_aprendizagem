
var myVideo, content, gap_field, content_field, pos,cp, type, zoomContent, dialog,playpause,timeout,player, bg,click, vw, vh,expTop;
var contents = {}, gaps = {}, types={}, ctrl=[], x=[], y=[];
//, start, stop, question, answer, btGapFound, btType1, btType2, btSend, btCancel, banner, type, panelFound, panelType, panelQuestion;


//var host ='http://localhost/objetos_de_aprendizagem';
//var host ='https://videos-novaes.c9users.io';
var host ='https://sbie-novaes.c9users.io';


init();

function isMobile(){
	var userAgent = navigator.userAgent.toLowerCase();
	if( userAgent.search(/(android|avantgo|blackberry|bolt|boost|cricket|docomo|fone|hiptop|mini|mobi|palm|phone|pie|tablet|up\.browser|up\.link|webos|wos)/i)!= -1 )
		return true;

	return false;
}

function init(){
	myVideo = document.getElementById("video");

/*
	if(hvideo < 420 || isMobile()==true ) hvideo *=2;
	myVideo.width = hvideo;
	myVideo.height = hvideo/1.778;
*/

	answer_text = document.getElementById("answer_text");
	click = document.getElementById("click");
	player = document.getElementById("player");
	zoomContent = document.getElementById("zoomContent");
	dialog = document.getElementById("dialog");
	content = document.getElementById("content");
	banner = document.getElementById("banner");
	gap_field = document.getElementById("gap_field");
	content_field = document.getElementById("content_field");
	playpause = document.getElementById("playpause");
	zoomContent = document.createElement('div');

hvideo /= 3;

	expTop = 110;
	pad += 30;

	player.style.left = pad+'px';
	player.style.top = (expTop+100)+'px';
	content.style.left = (pad+15)+'px';

	gap_field.innerHTML = title;

	bg = content.style.background;
	content.style.background = "";
	click.innerHTML = "";

	getContent();
}


function handleContent(content){

	for(var i=0; i<content.length; i++){
		var c = content[i];
		gaps[c.position] = c.answer;
		contents[c.position] = c.sugestion;
		types[c.position] = c.type;
		x[c.position] = c.x;
		y[c.position] = c.y;
		ctrl[i] = c.position;
	}
	
	timeout=0;
	pos=-1;
	cp=-1;
	p=0;
	
	
	loadVideo();
	
	if(isMobile() == false){
		playpause.innerHTML = "Pause";
	}else{
		playpause.innerHTML = "Play";
	}
	
}

function loadVideo(){
	var a,b;
	
	myVideo.src = "../Videos/"+video+".mp4";

	answer_text.style = 'width:'+1.2*myVideo.width+'px;height:'+expTop+'px;background-color : #eeeeee;text-align: justify;font-size:16px;padding:1px;';

	myVideo.play(); 
 
	setInterval(function() {
	
		syncVideo(1);
		
	}, 1000);

}

function syncVideo(delta){
		var z,dx,dy;
		var p = Math.ceil(myVideo.currentTime);
		
		if(myVideo.ended){
			playpause.innerHTML = "Play";
			timeout=0;
			pos=-1;
			cp=-1;
			p=0;
		}
		
		
		if(pos >= ctrl.length)	{ pos = ctrl.length-1;cp=-1;}
		if(pos < 0)		{pos = 0;cp=-1;}


		if(timeout > 1 && !myVideo.paused){
			
			content.innerHTML = "";

			zoomContent.innerHTML = "";
			
			click.innerHTML = "";
			
						
			content.style.backgroundColor = "";

			content.style.background = "";

		}else{
			timeout++;
		}
				
		if(gaps[p]){
			
			if(cp != p){

				
				dx = parseFloat(x[p]);
				dy = parseFloat(y[p]);

				pos += delta;

				timeout = 0;
				click.innerHTML = "";
				content.innerHTML = "";

				content.style.borderRadius = '8em';
				content.style.fontSize = '20px';

				

				zoomContent.innerHTML = "";

				content.style.backgroundColor = "";

				content.style.background = ""; 

				try{
					a = decodeURIComponent(escape(gaps[p]));
					b = decodeURIComponent(escape(contents[p]));
				}catch(Err){
					a = decodeURIComponent(gaps[p]);
					b = decodeURIComponent(contents[p]);	
				}

				type = types[p];			

				switch(types[p]){
					case '1':
					case '4':
						var h,w,hx,wx;
						var maskHeight = $(document).height();
						var maskWidth = $(window).width();

						var image = new Image();
    						image.src=host+'/Images/Sugestions/'+video+'/'+b;

						var original_width = image.width;
						var original_height = image.height;
						var ratio = original_height / original_width;
			

						h=maskHeight*0.55;
						if( h/ratio > maskWidth*0.55  || isMobile()==true){
							w=maskWidth*0.55;
							h = ratio * w;
						}else{
							w = h/ratio;
						}

						

	
						hx = hvideo * ratio;//myVideo.height/2;
						wx = hvideo;//hx / ratio;

						if(wx > hvideo){
							wx = hvideo;
							hx = wx * ratio;
						}


						z = '<img height='+h+' width='+w+' src='+host+'/Images/Sugestions/'+video+'/'+b+'   style="box-shadow: 12px 29px 81px 0px rgba(0,0,0,0.75);-moz-box-shadow: 12px 29px 81px 0px rgba(0,0,0,0.75);-webkit-box-shadow: 12px 29px 81px 0px rgba(0,0,0,0.75);" >';
						b = '<img height='+hx+' width='+wx+' src='+host+'/Images/Sugestions/'+video+'/'+b+' style="opacity:0.8;box-shadow: 12px 29px 81px 0px rgba(0,0,0,0.75);-moz-box-shadow: 12px 29px 81px 0px rgba(0,0,0,0.75);-webkit-box-shadow: 12px 29px 81px 0px rgba(0,0,0,0.75);"  >';
						click.innerHTML = "<a href='javascript:void(0)' onclick='zoomIn();' style='color:#ffffff;'><img style='transform: rotate(295deg);-ms-transform: rotate(295deg); -webkit-transform: rotate(295deg);'   src='../Images/ClickHere.gif' width=100></a>";
						click.style.left = (pad+10+dx)+'px';
						click.style.top = (expTop+125+dy)+'px';
		
						content.style.backgroundColor = "";
						content.style.top = (expTop+125+dy)+'px';
						content.style.left = (pad+10+dx)+'px';
						content.innerHTML   = "<a href='javascript:void(0)' onclick='zoomIn();' style='color:#ffffff;'>"+b+"</a>";
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
						z = "<textarea rows=12 cols=50  style='background-color : #eeeeee;text-align: justify;font-size:18px;padding:5px;box-shadow: 12px 29px 81px 0px rgba(0,0,0,0.75);-moz-box-shadow: 12px 29px 81px 0px rgba(0,0,0,0.75);-webkit-box-shadow: 12px 29px 81px 0px rgba(0,0,0,0.75);' readonly>"+b+"</textarea>";
						b = "<a href='javascript:void(0)' onclick='zoomIn();' style='color:#ffffff;'>"+a+"</a>";
						content.style.background = bg;
						content.style.left = (pad+25+dx)+'px';
						content.style.top = (expTop+133+dy)+'px';
						content.innerHTML = b;
						click.innerHTML = "<a href='javascript:void(0)' onclick='zoomIn();' style='color:#ffffff;'><img style='transform: rotate(295deg);-ms-transform: rotate(295deg); -webkit-transform: rotate(295deg);' src='../Images/ClickHere.gif' width=60></a>";
						click.style.top = (expTop+98+dy)+'px';
						click.style.left = (pad-10+dx)+'px';
						break;	
					case '6': 
					
						var page = b;	
		
						if(page.substring(0, 23) == 'https://www.youtube.com'){
				
							var act = page.substring(24, 32);
				
							if(act == 'watch?v='){
				
								var obj = page.substring(32, 44);
				
								page = 'https://www.youtube.com/embed/'+obj;
							}
						}
					
						var winH = $(window).height()*0.55;
						var winW = $(window).width()*0.6;
						z = "<iframe width="+winW+" height="+winH+" src="+page+"style='box-shadow: 12px 29px 81px 0px rgba(0,0,0,0.75);-moz-box-shadow: 12px 29px 81px 0px rgba(0,0,0,0.75);-webkit-box-shadow: 12px 29px 81px 0px rgba(0,0,0,0.75);'></iframe>";
						b = "<a href='javascript:void(0)' onclick='zoomIn();' style='color:#ffffff;'>"+a+"</a>";
						content.style.background = bg;
						content.style.top = (expTop+133+dy)+'px';
						content.style.left = (pad+dx)+'px';
						content.innerHTML = b;
						click.innerHTML = "<a href='javascript:void(0)' onclick='zoomIn();' style='color:#ffffff;'><img style='transform: rotate(295deg);-ms-transform: rotate(295deg); -webkit-transform: rotate(295deg);' src='../Images/ClickHere.gif' width=60></a>";
						click.style.top = (expTop+98+dy)+'px';
						click.style.left = (pad-10+dx)+'px';
						break;	
				}
			
				zoomContent.innerHTML = z;

				cp = p;
			}
		}
}



function playPause() { 
    if (myVideo.paused){ 
        myVideo.play(); 
		playpause.innerHTML = "Pause";
        myVideo.currentTime -= 1;
    }else{
        myVideo.pause(); 
		playpause.innerHTML = "Play";
    }
} 



function gapStep(delta){
	pos += delta;
	if(pos < 0){
		pos=0;
	}else{
		if(pos >= ctrl.length){
			pos = ctrl.length -1;
		}
	}
	myVideo.currentTime = ctrl[pos] ;
	syncVideo(0);
	myVideo.pause();
	playpause.innerHTML = "Play";
	timeout = 0;
}

function getContent(){

	var URL = host+'/Service/extra.php?video='+video;

	$.ajax({
	    url: URL,
	    dataType: 'application/json',
	    complete: function(data){
        		handleContent(JSON.parse(data.responseText));
    	    }
	})
}



function zoomIn(){
		
		var id = '#dialog';
	
		var maskHeight = $(document).height();
		var maskWidth = $(window).width();
	
		$('#mask').css({'width':maskWidth,'height':maskHeight});

		$('#mask').fadeIn(1000);	
		$('#mask').fadeTo("slow",0.8);	
	
		var winH = $(window).height();
		var winW = $(window).width();
              
		$(id).css('top',  winH/2-$(id).height()/2);
		$(id).css('left', winW/2-$(id).width()/2);

		dialog.append(zoomContent);

		myVideo.pause(); 

		$(id).fadeIn(2000); 
}





