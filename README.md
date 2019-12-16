# Game app "Metalsong Hunter"

This game app is based on the "Phrase Hunter" project for the Treehouse Techdegree course on Full Stack JavaScript. It uses the basic HTML and CSS which were provided for this project but adds its own flavor to create a nicer UX.

As the name suggests, the goal of the game is to guess a certain phrase, or song in this case. He can use a digital keyboard to enter letters by clicking or just press the key on his keyboard. If the player does 5 wrong guesses, he loses the game. The number of guesses a player has left is represented by filled/empty beer mugs.

### Game logic
The game logic was written in JavaScript using object-orientated programming. There are two classes, "Game" and "Song" and the main app. Here's a short summary what each of them does:
##### Game class:
- Contains the array of songs and uses a method to retrieve one random entry
- The startGame()-method resets all changes to the document that occured during earlier games like chosen letters or empty beer mugs and also chooses a new song
- Handles click- or keyup-events passed on by the app script by checking for winning conditions, removing guesses or calling the Phrase class to show matched letters
- Finally, displays a different screen if the player eithers wins or loses

##### Phrase class:
- This class uses the random song passed on by the Game class to generate a lower case version which is then displayed on screen
- The class uses a method to split the song into single letters which are passed as list elements into a ul. Initially, the letters are hidden (of course)
- Provides a method to check if any letter the player enters either by clicking or typing is part of the song

##### App.js:
- Provides the event listeners for the starting button, for clicks on the digital keyboard and for keyup-events and calls the appropriate methods of the Game class

### Styling
In terms of styling, I tried to come up with something that would be more fitting to the Metal-theme:

- I chose 2 custom fonts I found on the web to replace the given font. One for the title, one for the rest. Unfortunately, the fonts don't have any special characters in them so dots and commas etc. are not displayed. Maybe I'll try to add them later on or just change the game over messages

- The heart-images which were already provided by Treehouse were replaced with beer mugs

- The background of the game screen was changed to a reddish gradient style. I also made minor changes to the bg color of chosen keys and letters to be a bit mor fitting to the new background

- To make the site more vivid, I included some animations: a fade-in for the tile and start button and a blur-in for the game over screen. Furthermore, I added two hovering effects: one on the start button which scales up and one on the keys which get a kind of glow effect

*This is the censored, politically correct version of the app for reviewing purposes*
