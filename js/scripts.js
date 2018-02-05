$(document).ready(function(){
console.log("test")

	const cards = [
		'<img src="images/animals-01.png">',
		'<img src="images/animals-02.png">',
		'<img src="images/animals-03.png">',
		'<img src="images/animals-04.png">',
		'<img src="images/animals-05.png">',
		'<img src="images/animals-06.png">',
		'<img src="images/animals-07.png">',
		'<img src="images/animals-08.png">',
		'<img src="images/animals-09.png">',
		'<img src="images/animals-10.png">',
		'<img src="images/animals-11.png">',			
		'<img src="images/animals-12.png">',
		'<img src="images/animals-13.png">',
		'<img src="images/animals-14.png">',
		'<img src="images/animals-15.png">',
		'<img src="images/animals-16.png">',

	];
	
	var freshCards = cards.slice()

	var gridSize = 4;
	var cardsToUse = [];





	


	$('button').click(function(){

	
		var userAnswer = $(this).html();
	
		if(userAnswer === "Easy"){
			gridSize = 4;
		}else if(userAnswer === "Medium"){
			gridSize = 12;
		}else if(userAnswer === "Hard"){
			gridSize = 28
		}


		for(let i = 0; i < gridSize/2; i++){
			var rand = cards[Math.floor(Math.random()*cards.length)];
			cardsToUse.push(rand, rand)
			// console.log(cardsToUse)
		}
	
		cardsToUse = shuffleCards(cardsToUse);



		function shuffleCards(cardsToShuffle){
			for(let i = 0; i < 5000; i++){
				rand1 = Math.floor(Math.random()*cardsToShuffle.length);
				rand2 = Math.floor(Math.random()*cardsToShuffle.length);
				var temp = cardsToShuffle[rand1];
				cardsToShuffle[rand1] = cardsToShuffle[rand2];
				cardsToShuffle[rand2] = temp;

			}
			return cardsToShuffle
		}

		





		var memoryHTML = "";
		
		for(let i = 0; i < gridSize; i++){    
			memoryHTML += `<div class="card col-sm-3">`;
				memoryHTML += `<div class="card-holder">`;
					memoryHTML += `<div class="card-front">${cardsToUse[i]}</div>`;
					memoryHTML += `<div class="card-back"></div>`;
				memoryHTML += `</div>`;
			memoryHTML += `</div>`;
		}
		
		$('.mg-stuff').html(memoryHTML);

		$('.card-holder').click(function(){
		
			$(this).addClass('flip');
			
			var cardsUp = $('.flip');
			if(cardsUp.length === 2){
				
				var card1 = cardsUp[0]
				var card2 = cardsUp[1]
				
				if(card1.innerHTML === card2.innerHTML){
					
					cardsUp.each(function(){
						$(this).addClass('matched')
						cardsUp.removeClass('flip'); 
					})
				}else{
					cardsUp.removeClass("flip");
					cardsUp.addClass('temp-flip')
					setTimeout(function(){ 
						cardsUp.removeClass('temp-flip');
					},1000)
				}
			}else{

			}

		})

	});



});