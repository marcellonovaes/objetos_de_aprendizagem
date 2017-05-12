
var myVideo, video, content, gap_field, content_field, pos,cp, type, zoomContent, dialog, title;
var contents = {}, gaps = {}, types={}, ctrl=[];
//, start, stop, question, answer, btGapFound, btType1, btType2, btSend, btCancel, banner, type, panelFound, panelType, panelQuestion;


//var host ='http://localhost/objetos_de_aprendizagem';
var host ='https://videos-novaes.c9users.io';


init();

function isMobile(){
	var userAgent = navigator.userAgent.toLowerCase();
	if( userAgent.search(/(android|avantgo|blackberry|bolt|boost|cricket|docomo|fone|hiptop|mini|mobi|palm|phone|pie|tablet|up\.browser|up\.link|webos|wos)/i)!= -1 )
		return true;

	return false;
}

function init(){
	myVideo = document.getElementById("video");

	if(hvideo < 420 || isMobile()==true ) hvideo *=2;
	myVideo.width = hvideo;
	myVideo.height = hvideo/1.778;

	dialog = document.getElementById("dialog");

	content = document.getElementById("content");
	banner = document.getElementById("banner");
	gap_field = document.getElementById("gap_field");
	content_field = document.getElementById("content_field");

	zoomContent = document.createElement('div');

	video = 5;
	title = 'Ailurofobia'

	//video = 2;
	//title = 'Peixe, cadê minha peita ?'

	gap_field.innerHTML = title;
	content_field.innerHTML = "<textarea rows=10 cols=44  style='width:"+myVideo.width+"px;height:"+myVideo.width/1.778+"px;background-color : #eeeeee;text-align: justify;font-size:18px;padding:11px;' readonly></textarea>";

	getContent();
}


function handleContent(content){

	for(var i=0; i<content.length; i++){
		var c = content[i];
		gaps[c.position] = c.answer;
		contents[c.position] = c.sugestion;
		types[c.position] = c.type;
		ctrl[i] = c.position;
	}
	
	pos=0;
	cp=0;
	loadVideo();
	
}

function loadVideo(){
	var a,b;
	
	myVideo.src = "../Videos/"+video+".mp4";


	myVideo.play(); 
 
	setInterval(function() {
	
		syncVideo();
		
	}, 1000);



}

function syncVideo(){
		var z;
		var p = Math.ceil(myVideo.currentTime);
		
		if(pos >= ctrl.length)	{ pos = ctrl.length-1;cp=-1;}
		if(pos < 0)		{pos = 0;cp=-1;}

		if(gaps[p]){
			if(cp != p){


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

						if(ratio*maskWidth*0.6 > maskHeight * 0.45){
							h = maskHeight * 0.55;
							w = maskHeight * 0.55 / ratio;
						}else{
							w =  maskWidth * 0.6;
							h =  w * ratio;
						}

						hx = myVideo.height;
						wx = hx / ratio;

						if(wx > myVideo.width){
							wx = myVideo.width;
							hx = wx * ratio;
						}


						z = '<img height='+h+' width='+w+' src='+host+'/Images/Sugestions/'+video+'/'+b+'>';
						b = '<img height='+hx+' width='+wx+' src='+host+'/Images/Sugestions/'+video+'/'+b+'>';
						break;
					case '2': 
					case '3': 
					case '5': 
						z = "<textarea rows=12 cols=60  style='background-color : #eeeeee;text-align: justify;font-size:18px;padding:5px;' readonly>"+b+"</textarea>";
						b = "<textarea rows=10 cols=44  style='width:"+myVideo.width+"px;height:"+myVideo.width/1.778+"px;background-color : #eeeeee;text-align: justify;font-size:18px;padding:11px;' readonly>"+b+"</textarea>";
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
						z = "<iframe width="+winW+" height="+winH+" src="+page+"></iframe>";
						b = "<iframe width="+myVideo.width+" height="+myVideo.width/1.778+" src="+page+"></iframe>";
						break;	
				}
			
				gap_field.innerHTML = "<h2>"+a+"</h2>";
				
				content_field.innerHTML = b;

				zoomContent.innerHTML = z;

				if(pos<ctrl.length)pos++;
				cp = p;
			}
		}
}


function playPause() { 
    if (myVideo.paused){ 
<<<<<<< HEAD
    	//gap_field.innerHTML = "";
		//content_field.innerHTML = "";
=======
>>>>>>> dbcf7428e7eb218ea78fcbee8a753d1e44640fa3
        myVideo.play(); 
        myVideo.currentTime -= 1;
    }else{
        myVideo.pause(); 
    }
} 

function timeStep(delta){
	gap_field.innerHTML = "";
	content_field.innerHTML = "";	
	if(delta > 0){
		myVideo.currentTime += delta;
	}else{
		myVideo.currentTime += delta;
	}
}

function gapStep(delta){
	

<<<<<<< HEAD
		
	//console.log(pos);
		
		myVideo.currentTime = ctrl[pos] ;
=======
	if( (delta > 0 && pos < ctrl.length) || (delta < 0 && pos >= 0) ){
>>>>>>> dbcf7428e7eb218ea78fcbee8a753d1e44640fa3

		if(gap_field.innerHTML != title || pos != 0){

			if(pos > 0){
				pos--;
			}
	


			if((delta>0 && pos+delta<ctrl.length) || (delta<0 && pos-delta>=0)){	
				pos += delta;
				gap_field.innerHTML = "";
				content_field.innerHTML = "";
			}

		}

		if(pos >= ctrl.length)	{ pos = ctrl.length-1;cp=-1;}
		if(pos < 0)		{pos = 0;cp=-1;}

		myVideo.currentTime = ctrl[pos] ;

		syncVideo();
		
		myVideo.pause(); 
	}
}

function getContent(){

	var URL = host+'/Service/contents.php?video='+video;

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

	

/*


		switch(type){
			case '1':
			case '4':
				original_width = content_field.width;
				original_height = content_field.height;

				var ratio = original_height / original_width;

				content_field.width =  maskWidth * 0.6;
				if(ratio*maskWidth*0.6 > maskHeight * 0.55){
					content_field.height = maskHeight * 0.55;
					content_field.width = maskHeight * 0.55 / ratio;
				}else{
					content_field.height = ratio*maskWidth*0.6 ;
				}

				break;
			case '2': 
			case '5':
				content_field.rows=10;
				content_field.cols=60; 
				break;	
			case '3': 
				content_field.rows=7;
				content_field.cols=60;
				break;	
			case '6':
				content_field.width = maskWidth * 0.6;
				content_field.height = maskHeight * 0.55; 
				break;
		}
*/
	//	zoomContent.append(content_field)


		dialog.append(zoomContent);



		$(id).fadeIn(2000); 
}





