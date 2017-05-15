
var myVideo,video, start, stop, question, answer, btGapFound, btType1, btType2, btSend, btCancel, banner, type, panelFound, panelType, panelQuestion;

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
	contributionPanel = document.getElementById("contributionPanel");
	panelFound = document.getElementById("panelFound");
	panelType = document.getElementById("panelType");
	panelQuestion = document.getElementById("panelQuestion");
	question = document.getElementById("question");
	answer = document.getElementById("answer");
	btGapFound = document.getElementById("btGapFound");
	btType1 = document.getElementById("btType1");
	btType2 = document.getElementById("btType2");
	btSend = document.getElementById("btSend");
	btCancel = document.getElementById("btCancel");
	banner = document.getElementById("banner");
	playpause = document.getElementById("playpause");


	banner.style = 'width:'+1.5*hvideo+'px;height:110px;background-color : #eeeeee;text-align: justify;font-size:18px;padding:11px;';

	if(hvideo < 420 || isMobile()==true ) hvideo *=2;
	myVideo.width = hvideo;
	myVideo.height = hvideo/1.778;


	contributionPanel.style = "width:"+hvideo+"px; align-items:center; text-align:center;display:flex;" ;


	question.style = "width:"+hvideo/2+"px;";  
	answer.style = "width:"+hvideo/2+"px;";   
	btType1.style = "width:"+hvideo/2+"px;";   
	btType2.style = "width:"+hvideo/2+"px;";  
	btSend.style = "width:"+hvideo/2+"px;"; 
	
playpause.innerHTML = "Play";



	getSegment();

}


function handleSegment(segment){

	start = segment.start;
	stop = segment.stop;
	video = segment.video;

	myVideo.src = "../Videos/"+video+".mp4#t="+start+','+stop;

	seekGap();


}

function seekGap(){
	banner.textContent = "Assista o vídeo e clique no botão ao encontrar uma dúvida, \nou quando encontrar uma palavra ou expressão que não compreenda."
	answer.value = "";

	panelQuestion.remove();
	panelType.remove();
	
	contributionPanel.append(panelFound);


}


function playPause() { 
    if (myVideo.paused){ 
	if(myVideo.currentTime < stop){
        	myVideo.currentTime -= 1;
        	myVideo.play(); 
	}else{
		myVideo.currentTime = start;
	}
    }else{
        myVideo.pause(); 
    }
} 

function timeStep(delta){
	if(delta > 0){
		if(myVideo.currentTime < stop){
			myVideo.currentTime += delta;
		}
	}else{
		if(myVideo.currentTime > start){
			myVideo.currentTime += delta;
		}
	}
}

function gapType(op){
        myVideo.pause(); 

	banner.textContent = "Posicione o vídeo no momento onde o problema ocorre.\nUtilize os botões +2 e -2 para posicionar o vídeo no momento correto.";

	panelType.remove();

	contributionPanel.append(panelQuestion);


	switch(op){
		case 1:
			question.textContent = "Qual foi a palavra ou expressão?";
			type = 1;
			break

		case 2:
			question.textContent = "Precisa de mais explicações sobre o quê?";
			type = 2;

	}


}

function gapFound(){

        myVideo.pause(); 
	banner.textContent = "Nos diga qual problema encontrou.\nClique no primeiro botão caso não tenha entendido uma palarva ou expressão,\nou no segunda botão caso não tenha compreendido algo e queira mais informacões.";
	panelFound.remove();
	contributionPanel.append(panelType);

}

function sendContribution(){
	var jsonObj, jsonStr;
	var user = '001';
	jsonObj = {'user' : user, 'video' : video, 'type' : type, 'answer' : answer.value, 'position' : myVideo.currentTime};
	storeContribution(jsonObj);
}


function storeContribution(data){
	jsonString = JSON.stringify(data);

	$.ajax({
	    url: host+'/Service/store.php',
	    data : {'jsonString':jsonString},
	    type: 'POST'
	});
	seekGap();
}

function getSegment(){

	var URL = host+'/Service/segment.php';

	$.ajax({
	    url: URL,
	    dataType: 'application/json',
	    complete: function(data){
        		handleSegment(JSON.parse(data.responseText)[0]);
    	    }
	})
}


