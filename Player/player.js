
var myVideo, video, banner, content, gap_field, content_field, pos,cp;
var contents = {}, gaps = {}, types={}, ctrl=[];
//, start, stop, question, answer, btGapFound, btType1, btType2, btSend, btCancel, banner, type, panelFound, panelType, panelQuestion;

init();


function init(){
	myVideo = document.getElementById("video");
	content = document.getElementById("content");
	banner = document.getElementById("banner");
	gap_field = document.getElementById("gap_field");
	content_field = document.getElementById("content_field");

	video = 5;
	banner.innerHTML = 'AILUROFOBIA'

	//video = 2;
	//banner.innerHTML = 'Peixe, cadê minha peita ?'


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
		
		if(gaps[p]){
			if(cp != p){
				try{
					a = decodeURIComponent(escape(gaps[p]));
					b = decodeURIComponent(escape(contents[p]));
				}catch(Err){
					a = decodeURIComponent(gaps[p]);
					b = decodeURIComponent(contents[p]);	
				}
			
				switch(types[p]){
					case '1':
					case '4':
						b = "<img width=200 src=https://videos-novaes.c9users.io/Images/Sugestions/"+video+"/"+b+">";
						break;
					case '2': 
						b = "<textarea rows=10 cols=60>"+b+"</textarea>";
						break;	
					case '3': 
						b = "<p>significa</p><textarea rows=7 cols=60>"+b+"</textarea>";
						break;	
					case '5': 
						b = "<textarea rows=10 cols=60>"+b+"</textarea>";
						break;	
					case '6': 
					
						var page = a;	
			
						if(page.substring(0, 23) == 'https://www.youtube.com'){
				
							var act = page.substring(24, 32);
				
							if(act == 'watch?v='){
				
								var obj = page.substring(32, 44);
				
								page = 'https://www.youtube.com/embed/'+obj;
							}
						}
					
					
						b = "<iframe width=600 height=400 src="+b+"></iframe>";
						break;	
				}
			
				gap_field.innerHTML = "<h2>"+a+"</h2>";
				
				content_field.innerHTML = b;
				pos++;
				cp = p;
			}
		}
}


function playPause() { 
    if (myVideo.paused){ 
    	gap_field.innerHTML = "";
		content_field.innerHTML = "";
        myVideo.play(); 
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
	
	
	if(pos > 0){
		pos--;
	}
	
	if( (delta > 0 && pos < ctrl.length) || (delta < 0 && pos > 0) ){
		
		pos += delta;

		
	console.log(pos);
		
		myVideo.currentTime = ctrl[pos];

//		console.log(pos);
//		console.log(ctrl[pos]);
//		console.log(myVideo.currentTime);

	
		gap_field.innerHTML = "";
		content_field.innerHTML = "";
	
		syncVideo();
	}
}

function getContent(){

	var URL = "https://videos-novaes.c9users.io/Service/contents.php?video="+video;


	$.ajax({
	    url: URL,
	    dataType: 'application/json',
	    complete: function(data){
        		handleContent(JSON.parse(data.responseText));
    	    }
	})
}


