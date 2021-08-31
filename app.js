let userScore = 0;
let computerScore = 0;
var userScore_span = document.getElementById('user-score');
const computerScore_span = document.getElementById('comp-score');
const scoreBoard_div = document.querySelector(".score-board");
const result_div = document.querySelector('result , p');
const rock = document.getElementById('r');
const paper = document.getElementById('p');
const scissor = document.getElementById('s');
const smallUser = "user".fontsize(3).sub(); 
const smallComp = "comp".fontsize(3).sub(); 



function getComputerChoice(){
	const choices = ['r','p','s'];
	const randomNumber = Math.floor(Math.random() * 3);
	return choices[randomNumber];
}
function convertTo(letter){
if(letter === 'r')return "Rock";
if(letter === 'p')return "Paper";
if(letter === 's')return "Scissor";
}
function win(userChoice,computerChoice){
	userScore++;
	//console.log(userChoice + computerChoice);
	userScore_span.innerHTML = userScore;
	result_div.innerHTML = convertTo(userChoice)+smallUser+" beats "+convertTo(computerChoice)+smallComp+". You Win!";
	//console.log("user wins");
	document.getElementById(userChoice).classList.add('green-glow');
	setTimeout(function() {document.getElementById(userChoice).classList.remove('green-glow')},2000)
}
function lose(userChoice,computerChoice){
	computerScore++;
	computerScore_span.innerHTML = computerScore;
	result_div.innerHTML = convertTo(computerChoice)+smallComp+" beats "+convertTo(userChoice)+smallUser+". You Lose!";
	//console.log("computer wins");
}
function draw(userChoice,computerChoice){
	result_div.innerHTML = "Its a draw";
	//console.log("Its a draw");
}


function game(userChoice){
const computerChoice = getComputerChoice();
switch(userChoice+computerChoice){
	case "pr":
	case "rs":
	case "sp":
		win(userChoice,computerChoice);
		
		break;
	case "rp":
	case "sr":
	case "ps":
		lose(userChoice,computerChoice);
		
		break;
	case "rr":
	case "ss":
	case "pp":
		draw(userChoice,computerChoice);
		
		break;
}
}

function main(){
rock.addEventListener('click',function(){
	game("r");
})
paper.addEventListener('click',function(){
	game("p");
})
scissor.addEventListener('click',function(){
	game("s");
	})
}
main();