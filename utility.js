function hidden(element){
    const elementId =document.getElementById(element)
    elementId.classList.add('hidden')
}

function show(element){
    const elementId = document.getElementById(element)
    elementId.classList.remove('hidden')
}

// function randomNumber(){
//     const alphabrtString='abcdefghijklmnopqrstuvwxyz'
//     const alphabets = alphabrtString.split('')


// const number = Math.random()*25;
// const index = Math.round(number)
// const alphabet= alphabets[index]
// return alphabet

    
// }



function randomAlphabet(){
    const alphabrtString='abcdefghijklmnopqrstuvwxyz'
    const alphabets = alphabrtString.split('')


    const randomNumber= Math.random()*25;
    const index= Math.round(randomNumber)

    const alphabet=alphabets[index]
    return alphabet

}







