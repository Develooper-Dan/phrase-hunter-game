/*The Game class holds the array of phrases from which a random phrase is chosen and put onto display (also see Phrase class).
In addition, it holds the methods for the main game mechanics and resets the game elements if a new game is started.
*/
class Game {
   constructor(){
     this.phrases = [
     "Breaking the law",
     "Fear of the dark",
     "Grim and frostbitten kingdoms",
     "Come to the Sabbath",
     "Kings of Metal"
      ];
      this.activePhrase = null;
      this.missed = 0;
   }

   getRandomPhrase() {
     const phraseIndex = Math.floor(Math.random()*this.phrases.length);
     return this.phrases[phraseIndex];
   }
/*Resets previous games by re-enabling all keys and setting the appearance of keys and hearts to default.
Also creates a new Phrase class with a random phrase from the array.
*/
   startGame(){
     const keys = document.getElementsByClassName("key");
     const lostHearts = document.querySelectorAll('img[src="images/lostHeart.png"]');
     for (let i=0; i<keys.length; i++){
       keys[i].disabled = false;
       keys[i].className = "key";
     }
     for (let j=0; j<lostHearts.length; j++){
       lostHearts[j].setAttribute("src", "images/liveHeart.png");
     }
     document.getElementById("overlay").style.display = "none";
     this.activePhrase = new Phrase(this.getRandomPhrase());
     this.activePhrase.addPhraseToDisplay();
     this.missed = 0;
   }
/* The core of the game. Changes the appearance of pressed keys based on whether they appear in the active phrase
and calls methods for checking the winning/losing conditions.
*/
   handleInteraction(clickedLetter) {
     if (this.activePhrase.checkLetter(clickedLetter.textContent)){
       clickedLetter.className = "key chosen";
       this.activePhrase.showMatchedLetter(clickedLetter.textContent);
       if (this.checkForWin()){
        this.gameOver("win");
       }
     } else {
        clickedLetter.className = "key wrong";
        this.removeLife();
        if (this.missed === document.querySelectorAll(".tries").length){
          this.gameOver("lose");
        }
      }
     clickedLetter.disabled = true;
   }
// If there are no hidden letters in the HTML phrase section then...
   checkForWin(){
     if (document.querySelectorAll(".hide").length === 0){
       return true;
     }
  }
/* Simply changes the image source from a pic of a "full" heart to one of an "empty" heart.
Also increments the "missed" variable which is used for checking if the player loses the game.
*/
  removeLife(){
    document.querySelector('img[src="images/liveHeart.png"]').setAttribute("src", "images/lostHeart.png");
    this.missed++;
  }
//displays either the winning or losing message
  gameOver(winOrLose){
    document.getElementById("overlay").style.display = "";
    if (winOrLose === "win"){
      document.getElementById("overlay").className = "start win";
      document.getElementById("game-over-message").textContent = "You rock! \\\\m//";
    } else {
      document.getElementById("overlay").className = "start lose";
      document.getElementById("game-over-message").textContent = "Do, or do not. There is no try.";
    }
  }
}
