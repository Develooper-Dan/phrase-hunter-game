//Initializing a new Game instance and putting event listeners on the start and keyboard buttons to call game methods on click
const startButton = document.getElementById("btn__reset");
const keyboard = document.getElementById("qwerty");
let game = new Game();

startButton.addEventListener("click", () =>{
  game;
  game.startGame();
})

keyboard.addEventListener("click", (e) =>{
  if (e.target.className==="key")
  game.handleInteraction(e.target);
})

document.addEventListener("keyup", (e) =>{
  if (/[a-z]/.test(e.key)){
    const allKeysArray = Array.from(document.querySelectorAll(".key"));
    const correspondingKey = allKeysArray.find(key => key.textContent === e.key);
    game.handleInteraction(correspondingKey);
  }
})
