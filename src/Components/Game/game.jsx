const Game = () => {
  const $time = document.querySelector("time");
  const $paragraph = document.querySelector("p");
  const $input = document.querySelector("input");

  const INITIAL_TIME = 30;

  const TEXT = "They will have the following structure: first page same as the original articles summary in Castilian and English then the introduction should be a short paragraph that gives some message about the case"

  let words = [];
  let currentTime = INITIAL_TIME;

  initGame()
  // initEvents()

  function initGame() {
    words = TEXT.split(" ").slice(0, 32);
    let currentTime = INITIAL_TIME;

    $time.textContent = currentTime;

    $paragraph.innerHTML = words.map((word, index)=>{
      const letters = word.split("")

      return`<word>
        ${letters.map(letter=>`<letter>${letter}</letter>`).join('')}
        </word>`
    })

    const $fisrtWord = $paragraph.querySelector('word')
    $fisrtWord.classList.add('active')
    $fisrtWord.querySelector('letter').classList.add('active')
    

    const intervalID = setInterval(()=>{
      currentTime--
      $time.textContent = currentTime;

      if(currentTime === 0){
        clearInterval(intervalID)
        gameOver()
      }
    }, 1000)
    
  } 
  
  function initEvents() {
    document.addEventListener('keydown',()=>{
      $input.focus()
    })

    $input.addEventListener('keydown',onKeyDown)
    $input.addEventListener('keyup',onKeyUp)
  }
  
  function onKeyDown(event){
    const $currentWord = $paragraph.querySelector('word.active')
    const $currentLetter = $currentWord.querySelector('letter.active')

    const {key} = event;
    if(key == " "){
      event.preventDefault()

      const $nextWord = $currentWord.nextElementSibling
      const $nextLetter = $currentWord.querySelector('letter')

      $currentWord.classList.remove('active')
      $currentLetter.classList.remove('active')

      $nextWord.classList.add('active')
      $nextLetter.classList.add('active')

      $input.value = ""

      $input.value = ""

      const hasMissedLetters = $currentWord.querySelectorAll('letter:not(.correct)').length > 0

      const classToAd = hasMissedLetters ? 'marked' : 'correct';
      $currentWord.classList.add(classToAd)
      return
    }

    if(key == 'Backspace'){
      const $prevWord = $currentWord.previousElementSibling
      const $prevLetter = $currentLetter?.previousElementSibling

      if (!$prevLetter && !$prevWord) {
        event.preventDefault()
        return
      }

      if (!$prevLetter ) {
        event.preventDefault()
        const $wordMarked = $paragraph.querySelector('word.marked')

        if ($wordMarked && !$prevLetter) {
          event.preventDefault()
          $prevWord.classList.remove('marked')
          $prevWord.classList.add('active')

          const $letterToGo = $prevWord.querySelector('letter:last-child')

          $currentLetter.classList.remove('active')
          $letterToGo.classList.add('active')
        }

      }

    }

  }

  function gameOver() {
    
    console.log("Game Over");
  }
  

  return (
    <div className="Game">
      <body>
        <time></time>
        <p></p>
        <input type="text" autoFocus />
      </body>
    </div>
  )
}


export default Game;