
var myVideo,video, dialog, original_height, original_width, zoomItem, user_id, gap_id, gap_type, gap_problem, position, sugestion_url, sugestion_txt, sugestion_img, banner, answer_text,contrib,playpause,control;
var sugestions = [], index;

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
	index = 0;
	dialog = document.getElementById("dialog");
	answer_text = document.getElementById("answer_text");
	banner = document.getElementById("banner");
	playpause = document.getElementById("playpause");
	contrib = document.getElementById("contrib");
	control = document.getElementById("control");
	contributionPanel = document.getElementById("contributionPanel");
	sugestion_txt = document.getElementById("sugestion_txt");
	sugestion_img = document.getElementById("sugestion_img");
	sugestion_url = document.getElementById("sugestion_url");
	myVideo = document.getElementById("video");

	content_field = document.getElementById("content_field");

	zoomContent = document.createElement('div');

	answer_text.style = 'width:'+1.5*hvideo+'px;height:145px;background-color : #eeeeee;text-align: justify;font-size:16px;padding:11px;';


	if(hvideo < 420 || isMobile()==true ) hvideo *=2;
	myVideo.width = hvideo;
	myVideo.height = hvideo/1.778;


	contributionPanel.style = "width:"+hvideo+"px; align-items:center; text-align:center;display:flex;" ;


	sugestion_txt.style = "width:"+hvideo+"px;";  
	sugestion_img.style = "width:"+hvideo+"px;";   
	sugestion_url.style = "width:"+hvideo+"px;";   



	playpause.innerHTML = "Play";






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
		//banner.textContent = "Qual o melhor sinônimo ou definição para a expressão abaixo ?";
		answer_text.textContent = "1. Ajude a explicar a expressão acima.\n2. O vídeo está na posição onde a expressão é dita, aperte o [Play].\n3. O botão [Inicio] volta para a parte onde a expressão é dita.\n4. Você pode explicar a expressão escrevendo uma definição ou um sinônimo.\n5. Você pode ainda enviar uma imagem que ajude a entender a expressão.";
	}else{
		banner.textContent = "Qual o melhor explicação para a questão abaixo ?";
		answer_text.textContent = "1. Ajude a explicar a dúvida acima.\n2. O vídeo está na posição onde a dúvida aparece, aperte o [Play].\n3. O botão [Inicio] volta para a parte onde a dúvida aparece.\n4. Você pode escrever uma explicação ou enviar uma imagem.\n5. Você pode ainda colar um link para uma página Web (ex: Wikipédia, Youtube)";
	}
		
	//answer_text.textContent = gap_problem;
	banner.textContent = gap_problem;


	
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

		try{
//			a = decodeURIComponent(escape(gaps[p]));
			b = decodeURIComponent(escape(sugestions[index].sugestion));
		}catch(Err){
//			a = decodeURIComponent(gaps[p]);
			b = decodeURIComponent(sugestions[index].sugestion);	
		}

		user_id = sugestions[index].user;
		switch(sugestions[index].type){
			case '1': 
			case '4': 
				img_src = host+'/Images/Sugestions/'+video+'/'+sugestions[index].sugestion;
				sugestion_img.src = img_src;
				zoomItem = sugestion_img;

				var h,w,hx,wx;
				var maskHeight = $(document).height();
				var maskWidth = $(window).width();

				var image = new Image();
				image.src=host+'/Images/Sugestions/'+video+'/'+b;

				var original_width = image.width;
				var original_height = image.height;
				var ratio = original_height / original_width;

				if(ratio*maskWidth*0.6 > maskHeight * 0.45){
					h = maskHeight * 0.55;
					w = maskHeight * 0.55 / ratio;
				}else{
					w =  maskWidth * 0.6;
					h =  w * ratio;
				}

				hx = myVideo.height;
				wx = hx / ratio;

				if(wx > myVideo.width){
					wx = myVideo.width;
					hx = wx * ratio;
				}


				z = '<img height='+h+' width='+w+' src='+host+'/Images/Sugestions/'+video+'/'+b+'>';
				b = '<img height='+hx+' width='+wx+' src='+host+'/Images/Sugestions/'+video+'/'+b+'>';

 
				break;	
			case '2': 
			case '3': 
			case '5': 
				sugestion_txt.textContent = sugestions[index].sugestion;
				zoomItem = sugestion_txt;

				z = "<textarea rows=12 cols=60  style='background-color : #eeeeee;text-align: justify;font-size:18px;padding:5px;' readonly>"+b+"</textarea>";
				b = "<textarea rows=10 cols=44  style='width:"+myVideo.width+"px;height:"+myVideo.width/1.778+"px;background-color : #eeeeee;text-align: justify;font-size:18px;padding:11px;' readonly>"+b+"</textarea>";
 
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

				var page = b;	
		
				if(page.substring(0, 23) == 'https://www.youtube.com'){
			
					var act = page.substring(24, 32);
			
					if(act == 'watch?v='){
			
						var obj = page.substring(32, 44);
			
						page = 'https://www.youtube.com/embed/'+obj;
					}
				}
			
				var winH = $(window).height()*0.55;
				var winW = $(window).width()*0.6;
				z = "<iframe width="+winW+" height="+winH+" src="+page+"></iframe>";
				b = "<iframe width="+myVideo.width+" height="+myVideo.width/1.778+" src="+page+"></iframe>";

 
				break;	
		}
		
	//	gap_field.innerHTML = "<h2>"+a+"</h2>";
				
		content_field.innerHTML = b;

		zoomContent.innerHTML = z;

	
		//contributionPanel.append(zoomItem);
//		contrib.append(zoomItem);

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

function volta(){
	myVideo.currentTime = position -2;
}

function playPause() { 
    if (myVideo.paused){
       	myVideo.play();
	playpause.innerHTML = "Pause";
    }else{
        myVideo.pause(); 
	playpause.innerHTML = "Play";
    }
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

//console.log(URL);


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

/*	
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
*/
		dialog.append(zoomContent);



		$(id).fadeIn(2000); 
}






