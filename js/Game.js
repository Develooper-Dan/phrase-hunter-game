/*The Game class holds the array of songs from which a random song is chosen and put onto display (also see Song class).
In addition, it holds the methods for the main game mechanics and resets the game elements if a new game is started.
*/
class Game {
   constructor(){
     this.songs = [
     "Breaking the law",
     "Fear of the dark",
     "Grim and frostbitten kingdoms",
     "Come to the Sabbath",
     "Kings of Metal"
      ];
      this.activeSong = null;
      this.keys = document.getElementsByClassName("key");
      this.keyboard = document.getElementById("qwerty");
      this.scoreboard = document.getElementById("scoreboard");
      this.message = document.getElementById("game-over-message");
   }

   getRandomSong() {
     const songIndex = Math.floor(Math.random()*this.songs.length);
     return this.songs[songIndex];
   }
/*Resets previous games by re-enabling all keys and setting the appearance of keys and "hearts" to default.
Also creates a new Song class with a random song from the array.
*/
   startGame(){
     const lostHearts = document.querySelectorAll('img[src="images/lostHeart.png"]');
     for (let i=0; i<this.keys.length; i++){
       this.keys[i].disabled = false;
       this.keys[i].className = "key";
       this.keys[i].style.display= "";
     }
     this.keyboard.style.display= "";
     this.scoreboard.style.opacity= "1";
     this.message.style.display ="none";
     for (let j=0; j<lostHearts.length; j++){
       lostHearts[j].setAttribute("src", "images/liveHeart.png");
     }
     document.getElementById("main-container").className = "start";
     this.activeSong = new Song(this.getRandomSong());
     this.activeSong.addSongToDisplay();
   }
/* The core of the game. Changes the appearance of pressed keys based on whether they appear in the active song
and calls methods for checking the winning/losing conditions.
*/
   handleInteraction(clickedLetter) {
     if (this.activeSong.showMatchedLetter(clickedLetter.textContent)){
       clickedLetter.className = "key chosen";
       if (this.checkForWin()){
        this.gameOver("win");
       }
     } else {
        clickedLetter.className = "key wrong";
        if (this.removeLife() === 0){
          this.gameOver("lose");
        }
      }
     clickedLetter.disabled = true;
   }
// If there are no hidden letters in the HTML song section then...
   checkForWin(){
     if (document.querySelectorAll(".hide").length === 0){
       return true;
     }
  }
/* Simply changes the image source from a pic of a full mug to one of an empty mug.
Also returns 0 if there are no full mugs left which means the player loses the game
*/
  removeLife(){
    document.querySelector('img[src="images/liveHeart.png"]').setAttribute("src", "images/lostHeart.png");
    if (document.querySelectorAll('img[src="images/liveHeart.png"]').length ===0){
      return 0;
    }
  }
//displays either the winning or losing message. Also hides all keys so they don't appear on the game over screen.
  gameOver(winOrLose){
    const startButton = document.getElementById("btn__reset");
    this.keyboard.style.display= "none";
    startButton.style.display="";
    this.message.style.display ="";
    if (winOrLose === "win"){
      document.getElementById("main-container").className = "win";
      this.message.textContent = "Fuckin' Slayer!";
    } else {
      document.getElementById("main-container").className = "lose";
      this.message.textContent = "Go die, please!";
    }
  }
}
