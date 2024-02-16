// alada alada likhte

// function play(){
//     const home =document.getElementById('home-section')
//     home.classList.add('hidden')

//     const play= document.getElementById('play-section')
//     play.classList.remove('hidden')
// }


// common function theke
function continueGame(){
    const alphabet= randomAlphabet()
   const ranAlphabet= document.getElementById('alphabet')
   ranAlphabet.innerText= alphabet
}

function play(){
    hidden('home-section')
    show('play-section')
    continueGame()
}