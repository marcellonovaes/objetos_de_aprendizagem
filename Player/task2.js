
var myVideo,video, formContribution,banner, id, position, type, answer,answer_text,definition,image,image1,synonymous,explanation,image2,hyperlink,panel_send,labelIm1,labelIm2, op, sugestion;
init();



function init(){
	formContribution = document.getElementById("formContribution");
	banner = document.getElementById("banner");
	panel_send = document.getElementById("panel_send");
	labelIm1 = document.getElementById("labelIm1");
	labelIm2 = document.getElementById("labelIm2");
	answer_text = document.getElementById("answer_text");
	sugestion_type_1 = document.getElementById("sugestion_type_1");
	sugestion_type_2 = document.getElementById("sugestion_type_2");
	definition = document.getElementById("definition");
	image1 = document.getElementById("image1");
	synonymous = document.getElementById("synonymous");
	explanation = document.getElementById("explanation");
	image2 = document.getElementById("image2");
	hyperlink = document.getElementById("hyperlink");
	myVideo = document.getElementById("video");


image1.addEventListener('change', function(){
	var str = this.value;
	labelIm1.innerHTML = str.substring(str.length - 30, str.length);
	sugestion = str;
	image=image1;
});

image2.addEventListener('change', function(){
	var str = this.value;
	labelIm2.innerHTML = str.substring(str.length - 30, str.length);
	sugestion = str;
	image=image2;
});



	getSugestion();
}

function clear(){
	sugestion_type_1.remove();
	sugestion_type_2.remove();
	labelIm1.remove();
	labelIm2.remove();	
	definition.remove();
	image1.remove();
	labelIm1.remove();
	synonymous.remove();
	explanation.remove();
	image2.remove();
	labelIm2.remove();
	hyperlink.remove();
	panel_send.remove();
}

function getSugestion(){
	clear();
	getRandomGap();
}


function handleGap(gap){
	type = gap.type;
	answer = gap.answer;
	position = gap.position;
	id = gap.id;	
	video = gap.video;

	myVideo.src = "../Videos/"+video+".mp4";

	myVideo.currentTime = position - 2;

	switch(type){
		case '1': 	banner.textContent = "Ajude a compreender o termo ou expressão:";
				contributionPanel.append(sugestion_type_1);

			break;

		case '2': 	banner.textContent = "Ajude a explicar esta dúvida:";
				contributionPanel.append(sugestion_type_2);

	}

	answer_text.textContent = answer;

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

	var URL = "https://videos-novaes.c9users.io/Service/random.php";
	//var URL = "http://localhost/objetos_de_aprendizagem/Service/random.php";

	//var URL = "https://cs-oa-sbie-novaes.c9users.io/Service/list.php";

	$.ajax({
	    url: URL,
	    dataType: 'application/json',
	    complete: function(data){
        		handleGap(JSON.parse(data.responseText)[0]);
    	    }
	})
}


function getOption(o){
	definition.remove();
	image1.remove();
	synonymous.remove();
	explanation.remove();
	image2.remove();
	hyperlink.remove();
	labelIm1.remove();
	labelIm2.remove();	
	op = o;
	switch(o){
		case 1: sugestion_type_1.append(labelIm1);
			sugestion_type_1.append(image1);
			break;	
		case 2: sugestion_type_1.append(definition);
			break;	
		case 3: sugestion_type_1.append(synonymous);
			break;	
		case 4: sugestion_type_2.append(labelIm2);
			sugestion_type_2.append(image2);
			break;	
		case 5: sugestion_type_2.append(explanation);
			break;	
		case 6: sugestion_type_2.append(hyperlink);
			break;	
	}
	contributionPanel.append(panel_send);
}


function sendSugestion(){
	
	switch(op){
		case 1:
		case 4:
			encodeImageFileAsURL(image);
			break;
		case 2: sugestion = definition.value;
			save();
			break;	
		case 3: sugestion = synonymous.value;
			save();
			break;	
		case 5: sugestion = explanation.value;
			save();
			break;	
		case 6: sugestion = hyperlink.value;
			save();
			break;	
	}

}

function save(){
    var url = 'https://videos-novaes.c9users.io/Service/save.php';
    //var url = 'http://localhost/objetos_de_aprendizagem/Service/save.php';
    var form_data = new FormData();
    form_data.append('id', id);
    form_data.append('video', video);
    form_data.append('sugestion', sugestion);
    form_data.append('sugestion_type', op);
    
    
    
    $.ajax({
        url: url, 
        type: 'POST',
        data: form_data,
        cache: false,
        contentType: false,
        processData: false,
        success: function(response) {
            $('.resp').html(response);
        },
        error: function(xhr, status, error) {
            alert(xhr.responseText);
        }
    });
    
	getSugestion();
}

function encodeImageFileAsURL(element) {
  var file = element.files[0];
  var reader = new FileReader();
  reader.onloadend = function() {
	sugestion = reader.result;
	save();
  }
  reader.readAsDataURL(file);
}






