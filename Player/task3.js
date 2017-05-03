
var myVideo, user_id, gap_id, gap_type, gap_problem, position, sugestion_url, sugestion_txt, sugestion_img, msg, banner, problem;
var sugestions = [], index;



init();

function init(){
	index = 0;
	problem = document.getElementById("problem");
	msg = document.getElementById("msg");
	banner = document.getElementById("banner");
	contributionPanel = document.getElementById("contributionPanel");
	sugestion_txt = document.getElementById("sugestion_txt");
	sugestion_img = document.getElementById("sugestion_img");
	sugestion_url = document.getElementById("sugestion_url");
	myVideo = document.getElementById("video");
	clear();
}

function clear(){
	sugestion_txt.remove();
	sugestion_img.remove();
	sugestion_url.remove();
	selected_sugestion = 0;
	getRandomGap();
}



function handleGap(gap){
	position = gap.position;

	gap_type = gap.type;
	gap_problem = gap.answer;
	gap_id = gap.id;
		

	if(gap_type == 1){
		banner.textContent = "Qual o melhor sinônimo ou definição para a expressão abaixo ?";
	}else{
		banner.textContent = "Qual o melhor explicação para a questão abaixo ?";
	}
		
	problem.textContent = gap_problem;
	
	myVideo.currentTime = position - 1;

	getSugestions();
}

function handleSugestions(response){


	if(response.length > 0){
    		sugestions = response;
		displaySugestion();
	}else{
		clear();
	}
}

function displaySugestion(){
	sugestion_txt.remove();
	sugestion_img.remove();
	sugestion_url.remove();

	user_id = sugestions[index].user;

	switch(sugestions[index].type){
		case '1': 
		case '4': 
			img_src = 'http://localhost/objetos_de_aprendizagem/Images/Sugestions/002/'+sugestions[index].sugestion;
			sugestion_img.src = img_src;
//			sugestion_img.onclick = function() { alert("OK"); };

			sugestion_img.onclick = function() {
 

						 };

			contributionPanel.append(sugestion_img);
			break;	
		case '2': 
			sugestion_txt.textContent = sugestions[index].sugestion;
			contributionPanel.append(sugestion_txt);
			break;	
		case '3': 
			sugestion_txt.textContent = sugestions[index].sugestion;
			contributionPanel.append(sugestion_txt);
			break;	
		case '5': 
			sugestion_txt.textContent = sugestions[index].sugestion;
			contributionPanel.append(sugestion_txt);
			break;	
		case '6': 
			sugestion_url.src = sugestions[index].sugestion;	
			contributionPanel.append(sugestion_url);
			break;	
	}


}


function nextSugestion(){
	if(index < sugestions.length-1){
		index++;
		displaySugestion();
	}
}

function previousSugestion(){
	if(index > 0){
		index--;
		displaySugestion();
	}
}

function chooseSugestion(){
	console.log('GAP_ID: '+gap_id);
	console.log('USER_ID: '+user_id);
	console.log(sugestions[index]);
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

	//var URL = "https://cs-oa-sbie-novaes.c9users.io/Service/random.php";

	$.ajax({
	    url: URL,
	    dataType: 'application/json',
	    complete: function(data){
        		handleGap(JSON.parse(data.responseText)[0]);
    	    }
	})
}

function getSugestions(){

	var URL = "http://localhost/objetos_de_aprendizagem/Service/sugestions.php?gap="+gap_id;

	//var URL = "https://cs-oa-sbie-novaes.c9users.io/Service/random.php";

	$.ajax({
	    url: URL,
	    dataType: 'application/json',
	    complete: function(data){
        		handleSugestions(JSON.parse(data.responseText));
    	    }
	})
}
