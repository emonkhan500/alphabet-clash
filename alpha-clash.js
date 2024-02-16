//   final score

function finalScore(){
  const previousScore= document.getElementById('score')
  const lastScore= previousScore.innerText
  setElementValueById('final',lastScore)

 
  return lastScore 
    

}

// keybourd function
function buttonPressed(event) {
  const playerPressed = event.key;
  

  
  const ranAlphabet = document.getElementById("alphabet");
  const currentAlphabet = ranAlphabet.innerText;
  const expectedText = currentAlphabet.toLocaleLowerCase();

  if (playerPressed === expectedText) {
    // get current score
    const currentScoreElement = document.getElementById("score");
    const currentScore = currentScoreElement.innerText;
    const score = parseInt(currentScore);

    // update new score
    const updateScore = score + 1;
    // set score
    currentScoreElement.innerText = updateScore;

    // for continue game
    continueGame();
  }
  
  else {
    // life decrease

    // get life
    const currentLifeElement = document.getElementById("life");
    const currentLife = currentLifeElement.innerText;
    const life = parseInt(currentLife);
    // update life
    const newLife = life - 1;
    // set life
    currentLifeElement.innerText = newLife;

    if (newLife == 0) {
      const hide = hidden("play-section");
      const seen = show("score-section");
      finalScore()
     
    }
  }
}

document.addEventListener("keyup", buttonPressed);



// play again

function playAgain() {
  const hide = hidden("score-section");
  const seen = show("play-section");
  setElementValueById("life", 3);
  setElementValueById("score", 0);


  // const lastAlphabet= document.getElementById('alphabet')
  // const last = lastAlphabet.innerText
  // last.innerText=''



//   final score








//   eivhabe dilew hobe

// const currentLifeElement = document.getElementById("life");
// const currentLife = currentLifeElement.innerText;
// const life = parseInt(currentLife);
// // update life
// const newLife = 3;
// // set life
// currentLifeElement.innerText = newLife;
}

// common function theke
function continueGame() {
  const alphabet = randomAlphabet();
  const ranAlphabet = document.getElementById("alphabet");
  ranAlphabet.innerText = alphabet;
}

function play() {
  hidden("home-section");
  show("play-section");
  
  continueGame();
}

// alada alada likhte

// function play(){
//     const home =document.getElementById('home-section')
//     home.classList.add('hidden')

//     const play= document.getElementById('play-section')
//     play.classList.remove('hidden')
// }
