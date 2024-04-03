const Game = () => {
  const $time = document.querySelector("time");
  const $paragraph = document.querySelector("p");
  const $input = document.querySelector("input");

  const INITIAL_TIME = 30;

  const TEXT = "They will have the following structure: first page same as the original articles, summary in Castilian and English; then, the introduction should be a short paragraph that gives some message about the case."

  let words = [];
  let currentTime = INITIAL_TIME;

  initGame()
  initEvents()

  function initGame() {
    words = TEXT.split(" ").slice(0, 32);
    currentTime = INITIAL_TIME;

    $time.textContent = currentTime;
    
  } 
  function initEvents() { }
  

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