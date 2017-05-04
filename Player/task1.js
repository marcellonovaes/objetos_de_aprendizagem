
var myVideo, start, stop, question, answer, btGapFound, btType1, btType2, btSend, btCancel, banner, type, panelFound, panelType, panelQuestion;

init();


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

	getSegment();

}


function handleSegment(segment){

	start = segment.start;
	stop = segment.stop;
	myVideo.src = "../Videos/video002.webm#t="+start+','+stop;

	seekGap();


}

function seekGap(){
	banner.textContent = "Identifique no vídeo os problemas de comunicação";
	answer.value = "";

	panelQuestion.remove();
	panelType.remove();
	
	contributionPanel.append(panelFound);


}

function playPause() { 
    if (myVideo.paused){ 
	if(myVideo.currentTime < stop){
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

	banner.textContent = "Posicione o vídeo no momento onde o problema ocorre";

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
	banner.textContent = "Nos diga qual problema encontrou";
	panelFound.remove();
	contributionPanel.append(panelType);

}

function sendContribution(){
	var jsonObj, jsonStr;
	var user = '001';
	var video = '001';
	jsonObj = {'user' : user, 'video' : video, 'type' : type, 'answer' : answer.value, 'position' : myVideo.currentTime};
	storeContribution(jsonObj);
}


function storeContribution(data){
	jsonString = JSON.stringify(data);
	$.ajax({
	    url: 'http://localhost/objetos_de_aprendizagem/Service/store.php',
	    //url: 'https://cs-oa-sbie-novaes.c9users.io/Service/store.php',
	    data : {'jsonString':jsonString},
	    type: 'POST'
	});
	seekGap();
}

function getSegment(){

	var URL = "http://localhost/objetos_de_aprendizagem/Service/segment.php";


	$.ajax({
	    url: URL,
	    dataType: 'application/json',
	    complete: function(data){
        		handleSegment(JSON.parse(data.responseText)[0]);
    	    }
	})
}


