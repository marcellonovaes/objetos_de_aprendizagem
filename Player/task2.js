
var myVideo, banner, id, position, type, answer,answer_text;
init();



function init(){
	banner = document.getElementById("banner");
	answer_text = document.getElementById("answer_text");
	myVideo = document.getElementById("video");
	getSugestion();
}

function getSugestion(){
	getRandomGap();
}


function handleGap(gap){
	type = gap.type;
	answer = gap.answer;
	position = gap.position;
	id = gap.id;	

	myVideo.currentTime = position - 1;


	switch(type){
		case '1': banner.textContent = "Ajude a compreender o termo ou expressão:";
			break;

		case '2': banner.textContent = "Ajude a explicar esta dúvida:";
	}

	answer_text.textContent = answer;
	
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





function getRandomGap(){

	var URL = "http://localhost/objetos_de_aprendizagem/Service/random.php";

	//var URL = "https://cs-oa-sbie-novaes.c9users.io/Service/list.php";

	$.ajax({
	    url: URL,
	    dataType: 'application/json',
	    complete: function(data){
        		handleGap(JSON.parse(data.responseText)[0]);
    	    }
	})


}



