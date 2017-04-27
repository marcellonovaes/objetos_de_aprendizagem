
var myVideo, question, answer, btGapFound, btType1, btType2, btSend, btCancel, banner, type, panelFound, panelType, panelQuestion;
var gaps={};
//init();
listGaps();
console.log(gaps);

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

	handleGap();
}


function handleGap(){
	banner.textContent = "Identifique no vídeo os problemas de comunicação";
	
	/*
	answer.value = "";

	panelQuestion.remove();
	panelType.remove();
	
	contributionPanel.append(panelFound);

*/
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





function listGaps(){

		//var URL = "http://localhost/objetos_de_aprendizagem/Service/list.php";

		var URL = "https://cs-oa-sbie-novaes.c9users.io/Service/list.php";


		var result = $.getJSON(URL, function(data){
			

			for(i=0; i<data.length; i++){
				gaps[i] = data[i];
			}



		})

}



