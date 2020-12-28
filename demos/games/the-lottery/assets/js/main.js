"use strict";

/*******************************************************
 Start by defining all the data needed for the game
********************************************************/

var money = 0,
	limit = 0,
	scale = 9999;



/*******************************************************
 Game functions
********************************************************/


function playLottery(cost) {
	money -= cost;
	let yourNumber = getRandomNumber(),
		winningNumber = getRandomNumber();
	if (yourNumber === winningNumber){
		// player wins!
	} else {
		// player loses
	}

	$("#money").val(money);
}

function getRandomNumber() {
	// pick the number
	let random = Math.random() * scale;
	// round and return
	return Math.ceil(random);
}

// function updateScore() {
// 	$("#numberCorrect").html(numberCorrect);
// 	$("#numberErrors").html(numberErrors);
// }




/*******************************************************
 Single Page App functions
********************************************************/

// all others hidden on load
gameStart();

function gameStart() {
	console.log("gameStart");
	// hide / show sections
	$(".game-start").show();
	$(".game-play").hide();
	$(".game-end").hide();
}

function gamePlay() {
	// hide / show sections
	$(".game-start").hide();
	$(".game-play").show();
	$(".game-end").hide();
}

function gameEnd() {
	// hide / show sections
	$(".game-start").hide();
	$(".game-play").hide();
	$(".game-end").show();
}
$(document).on("click", ".game-start-btn", gameStart);
$(document).on("click", ".game-play-btn", gamePlay);
$(document).on("click", ".game-end-btn", gameEnd);







/*******************************************************
 Other functions
********************************************************/



// play sound function
function playSound(selector) {
	// get reference
	var audio = $(selector)[0];
	// if muted (required for Chrome) then unmute
	if (audio.muted)
		audio.muted = false;
	// if already playing then reset
	audio.currentTime = 0;
	// finally, play
	audio.play();
}
