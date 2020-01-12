let compScore = 0
let userScore = 0
const choiceFeed = document.getElementById('feed')
const buttons = document.querySelectorAll("button")
const cScore = document.getElementById('cScore')
const uScore = document.getElementById('uScore')
const title = document.getElementById('outcome')

buttons.forEach (function (button){
button.addEventListener('click',function(e){
	gameFunction(e.target.value)
})
})

function gameFunction(num){
	const coinArray = ["head","tail"]
	let compChoice = Math.floor(Math.random()*coinArray.length)
	
	if(compChoice != num){
		choiceFeed.textContent = coinArray[compChoice]
		title.textContent = `You guessed wrong!`
		cScore.textContent = ++compScore
	} else{
		choiceFeed.textContent = coinArray[compChoice]
		title.textContent = `You guessed right!`
		uScore.textContent = ++userScore
	}
}