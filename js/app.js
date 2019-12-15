/*Initializing a new Game instance and putting event listeners on the start and keyboard buttons to call game methods on .
Also allows the player to use his keyboard for input.
*/
const startButton = document.getElementById("btn__reset");
const keyboard = document.getElementById("qwerty");
let game = new Game();

startButton.addEventListener("click", () =>{
  game;
  game.startGame();
});

keyboard.addEventListener("click", (e) =>{
  if (e.target.className==="key"){
    game.handleInteraction(e.target);
    e.target.blur();
  }
});

document.addEventListener("keyup", (e) =>{
    const allKeysArray = Array.from(document.querySelectorAll(".key"));
    const correspondingKey = allKeysArray.find(key => key.textContent === e.key);
    if (/[a-z]/.test(e.key) && !correspondingKey.disabled){
      game.handleInteraction(correspondingKey);
  }
});
