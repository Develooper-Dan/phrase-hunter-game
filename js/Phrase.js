// The Phrase class is created by the Game class and represents the randomly chosen phrase which the player should guess

 class Phrase {
   constructor(phrase){
     this.phrase = phrase.toLowerCase();
   }
// This method "converts" the string of the phrase to single HTML list elements for each letter and writes them into the phrase div
   addPhraseToDisplay(){
     const phraseDiv = document.querySelector("#phrase ul");
     let htmlString = "";
     for (let i=0; i<this.phrase.length; i++){
       if (this.phrase[i]===" "){
         htmlString += `<li class="space">${this.phrase[i]}</li>`
       } else {
         htmlString += `<li class="hide letter ${this.phrase[i]}">${this.phrase[i]}</li>`;
         }
       }
     phraseDiv.innerHTML=htmlString;
   }

   checkLetter(clickedLetter){
     for (let i=0; i<this.phrase.length; i++){
       if (this.phrase[i] === clickedLetter){
       return true;
       }
     }
   }
/* Called by the main game handler, this function checks if a clicked letter is part of the phrase and shows all matching letters.
This means there is no need for a separate method to check for a match.
*/
   showMatchedLetter(clickedLetter){
     const letters = document.querySelectorAll("#phrase li");
     letters.forEach(letter => {
       if (letter.textContent===clickedLetter){
         letter.className = `show letter ${letter.textContent}`;
       }
     });
   }
 }
