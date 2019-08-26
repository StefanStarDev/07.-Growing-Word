
let counter = 0
let startingPx = 1

function growingWord() {

  startingPx *= 2
  counter++
  let changedParagraph = document.querySelector("#exercise > p")

  if(counter === 1){

    changedParagraph.style.fontSize = `${startingPx}px`
    changedParagraph.style.color = 'blue'

  }else if(counter === 2){

    changedParagraph.style.fontSize = `${startingPx}px`
    changedParagraph.style.color = 'green'

  }else if(counter === 3){

    changedParagraph.style.fontSize = `${startingPx}px`
    changedParagraph.style.color = 'red'

  }
    
  if (counter == 3){
    counter = 0
  }
}