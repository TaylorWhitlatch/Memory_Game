// Add ready listener to the document.
// I.e., JavaScript, wait until the DOM is fully loaded before proceeding to this code
$(document).ready(function(){
	// console.log("Sanity Check!!")

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
	var gridSize = 4;
	var cardsToUse = [];
	var newCards = []
	var newerCards = []

	newCards = cards.slice()
	newerCards = shuffleDeck(newCards)
	console.log(newCards)
	console.log(newerCards)


	$('button').click(function(){
		// console.log('user clicked on a button')
		// var userAnswer = $(this).html();
		var gridSize = $(this).attr("diff");
		// console.log(userAnswer);
		// if(userAnswer === "Easy"){
		// 	gridSize = 4;
		// }else if(userAnswer === "Medium"){
		// 	gridSize = 12;
		// }else if(userAnswer == "Hard"){
		// 	gridSize = 28;
		// }
		
		newerCards.map((card, index)=>{
			cardsToUse.push(card,card);
			console.log(newCards)
			console.log(newerCards)
		})

		var memoryHTML = "";
		for(let i = 0; i < gridSize; i++){
			memoryHTML += '<div class="card col-sm-3">';
				memoryHTML += '<div class="card-holder">';
					memoryHTML += `<div class="card-front">${cardsToUse[i]}</div>`;
					memoryHTML += `<div class="card-back"></div>`;
				memoryHTML += '</div>';
			memoryHTML += `</div>`;
		}
		console.log(memoryHTML);
		console.log(typeof(memoryHTML))
		$('.mg-stuff').html(memoryHTML);

		// Add a click listener to all card-holders
		$('.card-holder').click(function(){
			// $(this) will target teh card-holder that was clicked
			$(this).addClass('flip');
			console.log(new Date().getTime())
			// A card just flipped over. 
			// Is there another one turned over already?
			// - if not, do nothing.
			// - if so, check and see if they match.

			// Go get all elements with a class of flip.
			var cardsUp = $('.flip');
			if(cardsUp.length === 2){
				// two cards up. Check. The only way the length can be 2
				// is if two elements ahve a class of flip
				var card1 = cardsUp[0];
				var card2 = cardsUp[1];
				// console.dir(card1);
				if(card1.innerHTML === card2.innerHTML){
					// these are a match. THe html is exactly the same.
					cardsUp.addClass('matched');
					cardsUp.removeClass('flip');
					// cardsUp.each(function(){
					// 	$(this).addClass('matched');
					// });
					// cardsUp.map((card)=>{
					// 	$(card).addClass()...
					// })
				}else{
					// these are not a match, because the HTML is dif
					cardsUp.removeClass('flip');
					cardsUp.addClass('temp-flip')
					setTimeout(()=>{
						cardsUp.removeClass('temp-flip');
					},2000);
					console.log(new Date().getTime())
				}
			}else{
				// one card up. Do nothing.
			}

		});

	});

	function shuffleDeck(arrayToBeShuffled){
		for(let i = 0; i < 50000; i++){
			var rand1 = Math.floor(Math.random() * arrayToBeShuffled.length);
			var rand2 = Math.floor(Math.random() * arrayToBeShuffled.length);
			var saveValueOfCard1 = arrayToBeShuffled[rand1];
			arrayToBeShuffled[rand1] = arrayToBeShuffled[rand2];
			arrayToBeShuffled[rand2] = saveValueOfCard1;
		}
		return arrayToBeShuffled;
	}

	// $('h1').click(()=>{
	// 	console.log("H1 clicked")
	// })


});