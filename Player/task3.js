
var myVideo,video, dialog, original_height, original_width, zoomItem, user_id, gap_id, gap_type, gap_problem, position, sugestion_url, sugestion_txt, sugestion_img, msg, banner, problem;
var sugestions = [], index;

//var host ='http://localhost/objetos_de_aprendizagem';
var host ='https://videos-novaes.c9users.io';

init();

function init(){
	index = 0;
	dialog = document.getElementById("dialog");
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
	sugestion_txt.textContent="";
	sugestion_img.textContent="";
	sugestion_url.textContent="";
	sugestion_txt.remove();
	sugestion_img.remove();
	sugestion_url.remove();
	selected_sugestion = 0;
	index=0;
	getRandomGap();
}



function handleGap(gap){

	position = gap.position;

	gap_type = gap.type;
	gap_problem = gap.answer;
	gap_id = gap.id;
		
	video = gap.video;

	myVideo.src = "../Videos/"+video+".mp4";

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
	
	try{
		user_id = sugestions[index].user;
		switch(sugestions[index].type){
			case '1': 
			case '4': 
				img_src = host+'/Images/Sugestions/'+video+'/'+sugestions[index].sugestion;
				sugestion_img.src = img_src;
				zoomItem = sugestion_img; 
				break;	
			case '2': 
			case '3': 
			case '5': 
				sugestion_txt.textContent = sugestions[index].sugestion;
				zoomItem = sugestion_txt; 
				break;	
			case '6': 
				var page = sugestions[index].sugestion;	
			
				if(page.substring(0, 23) == 'https://www.youtube.com'){
				
					var act = page.substring(24, 32);
				
					if(act == 'watch?v='){
				
						var obj = page.substring(32, 44);
				
						page = 'https://www.youtube.com/embed/'+obj;
					}
				}
			
				sugestion_url.src = page;	
				zoomItem = sugestion_url; 
				break;	
		}
			
		contributionPanel.append(zoomItem);

	}catch(Err){
		getSugestions();
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
	vote(gap_id,video,user_id,sugestions[index].id,sugestions[index].sugestion,sugestions[index].type,position,gap_problem);
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

	var URL = host+'/Service/random_with_contrib.php';

	$.ajax({
	    url: URL,
	    dataType: 'application/json',
	    complete: function(data){
			if(data.responseText.length < 10){
				clear();
			}else{
        			handleGap(JSON.parse(data.responseText)[0]);
			}
    	    }
	})
}

function getSugestions(){

	var URL = host+'/Service/sugestions.php?gap='+gap_id;


	$.ajax({
	    url: URL,
	    dataType: 'application/json',
	    complete: function(data){
        		handleSugestions(JSON.parse(data.responseText));
    	    }
	})
}


function vote(gap_id,video_id,user_id,sugestion_id,sugestion_text,sugestion_type,gap_position, gap_answer){

    var url = host+'/Service/vote.php';
    var form_data = new FormData();
    form_data.append('gap_id', gap_id);
    form_data.append('video_id', video_id);
    form_data.append('user_id', user_id);
    form_data.append('sugestion_id', sugestion_id);
    form_data.append('sugestion_text', sugestion_text);
    form_data.append('sugestion_type', sugestion_type);
    form_data.append('gap_position', gap_position);
    form_data.append('gap_answer', gap_answer);
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
    
    clear();
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

	
		original_width = zoomItem.width;
		original_height = zoomItem.height;

		var ratio = original_height / original_width;


		sugestion_img.width =  maskWidth * 0.6;

		if(ratio*maskWidth*0.6 > maskHeight * 0.55){
			sugestion_img.height = maskHeight * 0.55;
			sugestion_img.width = maskHeight * 0.55 / ratio;
		}else{
			sugestion_img.height = ratio*maskWidth*0.6 ;
		}


		sugestion_url.width = maskWidth * 0.6;
		sugestion_url.height = maskHeight * 0.55;

		sugestion_txt.cols = 60;
		sugestion_txt.rows = 20;


		dialog.append(zoomItem);



		$(id).fadeIn(2000); 
}






