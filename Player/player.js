
var myVideo, question, answer, btGapFound, btType1, btType2, btSend, btCancel, banner, type, panelFound, panelType, panelQuestion;

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
    if (myVideo.paused) 
        myVideo.play(); 
    else 
        myVideo.pause(); 
} 

function timeStep(delta){
	myVideo.currentTime += delta;
}

function gapType(op){


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
	banner.textContent = "Nos diga qual problema encontrou";
	panelFound.remove();
	contributionPanel.append(panelType);

}

function sendContribution(){
	console.log(type);
	console.log(answer.value);
	console.log(myVideo.currentTime);
	seekGap();
}



