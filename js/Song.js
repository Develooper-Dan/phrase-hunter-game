// The Song class is created by the Game class and represents the randomly chosen song which the player should guess

 class Song {
   constructor(song){
     this.song = song.toLowerCase();
   }
// This method "converts" the string of the song to single HTML list elements for each letter and writes them into the song div
   addSongToDisplay(){
     const songDiv = document.querySelector("#song ul");
     let htmlString = "";
     for (let i=0; i<this.song.length; i++){
       if (this.song[i]===" "){
         htmlString += `<li class="space">${this.song[i]}</li>`
       } else {
         htmlString += `<li class="hide letter ${this.song[i]}">${this.song[i]}</li>`;
         }
       }
     songDiv.innerHTML=htmlString;
   }
/* Called by the main game handler, this function checks if a clicked letter is part of the song and shows all matching letters.
This means there is no need for a separate method to check for a match.
*/
   showMatchedLetter(clickedLetter){
     const letters = document.querySelectorAll("#song li");
     let hit = null;
     letters.forEach(letter => {
       if (letter.textContent===clickedLetter){
         letter.className = `show letter ${letter.textContent}`;
         hit = true;
       }
     });
     if (hit){
       return true;
     } else {
       return false;
     }
   }
 }
