$(document).ready(function() {

	 function findRandomNumbers(){
	 	var res = [];
	 	while(res.length < 9){
	 		var random = Math.ceil(Math.random()*25);
	 		var found =false;
	 		for(var i=0,len=res.length;i<len;i++){
	 			if (res[i] == random){found=true;break}
	 		}
	 		if (!found)res[res.length] = random;
	 	}
	 	return res;
	 }

	 function removeHighLight(){
	 	var allgameblocks = $('.color-swatch');
	 	$.each(allgameblocks,function(idx,val){
	 		$(allgameblocks[idx]).removeClass('btn-danger').addClass('green');
	 	})
        var allSelectedTiles = $('.selected');
        var obj = allSelectedTiles;
        alert('Selected tiles after remove highlight ' + $('.selected').length);
	 }

	 function highLightTiles(){
	 	// select 9 tiles
	 	// change color to red
	 	var arr = findRandomNumbers();
	 	var allgameblocks = $('.color-swatch');
	 	//var obj = arr;
	 	for(var i=0,len=arr.length;i<len;i++){	 		
	 		$(allgameblocks[arr[i]]).data('id', arr[i]).addClass('btn-danger selected').removeClass('green');	 		
	 	}

	 	alert('Selected tiles in teh beginning ' + $('.selected').length);

	 	setTimeout(removeHighLight, 10000);

	 }
	
     function createBoard(){
     	var start = 1;
     	for(var i=0;i<5;i++){
     		var row = '<div class="row"><div class="bs-example"><div class="color-swatches"><div class="color-swatch green"></div><div class="color-swatch green"></div><div class="color-swatch green"></div><div class="color-swatch green"></div><div class="color-swatch green"></div></div></div></div>';
     		$('.container').append(row);
     	}

     	// assign ids
     	 var allgameblocks = $('.color-swatch');
     	 for(var i=0,len=allgameblocks.length;i<len;i++){
     	 	$(allgameblocks[i]).data('id', start);
     	 	start++;
     	 }     	
     }

     


     function startGame(){
     	createBoard();
     	highLightTiles();
     }

     function init(){
     	 startGame();
     	 var currentSelected = $('.selected');
     	 currentSelected = $.makeArray(currentSelected);
     	$('.container .color-swatch').on('click', function(){
     		if(!($(this).hasClass('selected'))){
     			alert('boo hoo');
     			// restart game
     		}else{
     			currentSelected.pop();
     			if (currentSelected.length == 0){
     				alert('congratulations');
     			}

     		}
     	})

     }

    

     init();

});