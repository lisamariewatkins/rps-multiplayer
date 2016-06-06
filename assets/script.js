//initial values
var players = 0;
var name1;
var choice1;
var wins1 = 0;
var losses1 = 0;
var name2;
var choice2;
var wins2 = 0;
var losses2 = 0;

var dataRef = new Firebase("https://rps-multiplayer2437.firebaseio.com/");

//======================================

function addPlayer(){
	$("#addName").on('click', function(){
		if (players===0){
			name1 = $("#name-input").val().trim();
			$("#player1").html(name1 + 
				"<br>Choose <class='weapon' id='rock'>rock</a>" + 
					", <class='weapon' id='paper'>paper</a>" + 
						", or <a href='' class='weapon' id='scissors'>scissors</a>!");

			dataRef.push({
				name: name1,
				choice: "",
				wins: wins1,
				losses: losses1
			});
		}
		if (players===1){
			name2 = $("#name-input").val().trim();
			$("#player2").html(name2 + 
				"<br>Choose <class='weapon' id='rock'>rock</a>" + 
					", <class='weapon' id='paper'>paper</a>" + 
						", or <class='weapon' id='scissors'>scissors</a>!"); 

			dataRef.push({
				name: name2,
				choice: "",
				wins: wins2,
				losses: losses2
			});
		}
		players++;
		return false;	
	});	
}
//================================================

function selectRock(){
	$(".playerBox").on('click', '#rock', function(){
		
	});
}

//================================================

$(document).ready(function(){
	addPlayer();
});