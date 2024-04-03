const Game = () => {
  const $time = document.querySelector("time");
  const $paragraph = document.querySelector("p");
  const $input = document.querySelector("input");


  return (
    <div className="Game">
      <body>
        <time>30</time>
        <p></p>
        <input type="text" autoFocus />
      </body>
    </div>
  )
}


export default Game;