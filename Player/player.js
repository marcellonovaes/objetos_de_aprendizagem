
var myVideo, video, content, gap_field, content_field, pos,cp, type, zoomContent, dialog, title;
var contents = {}, gaps = {}, types={}, ctrl=[];
//, start, stop, question, answer, btGapFound, btType1, btType2, btSend, btCancel, banner, type, panelFound, panelType, panelQuestion;


var host ='http://localhost/objetos_de_aprendizagem';
//var host ='https://videos-novaes.c9users.io';


init();


function init(){
	myVideo = document.getElementById("video");
	dialog = document.getElementById("dialog");
	zoomContent = document.getElementById("zoomContent");
	content = document.getElementById("content");
	banner = document.getElementById("banner");
	gap_field = document.getElementById("gap_field");
	content_field = document.getElementById("content_field");

	video = 5;
	title = 'AILUROFOBIA'

	//video = 2;
	//title = 'Peixe, cadê minha peita ?'

	gap_field.innerHTML = title;

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
						b = '<img height=340 src='+host+'/Images/Sugestions/'+video+'/'+b+'>';
						break;
					case '2': 
					case '3': 
					case '5': 
						b = "<textarea rows=15 cols=60>"+b+"</textarea>";
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
					
					
						b = "<iframe width=600 height=340 src="+page+"></iframe>";
						break;	
				}
			
				gap_field.innerHTML = "<h2>"+a+"</h2>";
				
				content_field.innerHTML = b;
				if(pos<ctrl.length)pos++;
				cp = p;
			}
		}
}


function playPause() { 
    if (myVideo.paused){ 
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
	

	if( (delta > 0 && pos < ctrl.length) || (delta < 0 && pos >= 0) ){

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


		dialog.append(content_field);



		$(id).fadeIn(2000); 
}





