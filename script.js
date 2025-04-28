//Add your global variables here

let pattern = [2, 2, 4, 3, 2, 1, 2, 4]; //keep track of the secret pattern of button presses
let progress = 0; //how far along the player is in guessing the pattern
let gamePlaying = false; //keeps track if the game is currently active
let tonePlaying = false; //keeps track whether or not there is a tone playing
let volume = 0.5; //controls how loud the tone plays
let guessCounter = 0; //keeps track of how many guesses the player has made

//store the start and stop buttons
const startBtn = document.getElementById("startBtn");
const stopbtn = document.getElementById("stopBtn");

const clueHoldTime = 1000; //how long to hold each clue's light/sound
const cluePauseTime = 333; //how long to pause in between clues
const nextClueWaitTime = 1000; //how long to wait before starting playback of the clue sequence


// Add your functions here

function startGame() {

  //ensuring that the user's progress is reset to 0 at the start of every game
  progress = 0;
  
//sets boolean so that the game is now in motion
  gamePlaying = true;

  //swap the Start and Stop buttons
  startBtn.classList.add("hidden");
  stopBtn.classList.remove("hidden");

  playClueSequence();
  
}

function stopGame() {

  //the game is no longer being played
  gamePlaying = false;

  //swap the Start and Stop buttons so that the Start button is now being showed
  startBtn.classList.remove("hidden");
  stopBtn.classList.add("hidden");
  
}

function lightButton(btn) {
  document.getElementById("button"+btn).classList.add("lit");
}

function clearButton(btn) {
  document.getElementById("button"+btn).classList.remove("lit");
}

function playSingleClue(btn) {
  if(gamePlaying) {
    lightButton(btn);
    playTone(btn, clueHoldTime);
    setTimeout(clearButton, clueHoldTime, btn);
  }
}

function playClueSequence() {
  context.resume();
  guessCounter = 0;
  let delay = nextClueWaitTime; //set delay to initial wait time
  for(let i = 0; i <= progress; i++)
    {
      //for each clue that is revealed so far
      console.log("play single clue: " + pattern[i] + " in " + delay + "ms");
      setTimeout(playSingleClue, delay, pattern[i]); //set a timeout to play that clue
      delay += clueHoldTime;
      delay += cluePauseTime;
    }
}

function loseGame() {
  stopGame();
  alert("Game Over! You lost.");
}

function winGame() {
  stopGame();
  alert("You have won the game! Congratulations!");
}

function guess(btn) {
  console.log("user guessed: " + btn);
  if(!gamePlaying) {
    return;
  }
  
  //guess was incorrect
  if(pattern[guessCounter] != btn)
  {
    loseGame();
  }

  //guess was correct
  if(pattern[guessCounter] === btn) { //checking that the button that the user chose matches the current pattern
    //makes sure that the guessess match the current stage of the game
    if(guessCounter === progress){
      //if the progress of the game is the same to the length of the pattern that means that the user has guessed the entire pattern correctly
    if(progress === pattern.length - 1) {
       winGame();
     } else { //if the user has yet to complete the entire sequence but guessed the previous stage correctly, then the user is prompted to continue guessing
       progress++; //moves to the next stage of the pattern
       playClueSequence();
     }
  } else {
       guessCounter++; //moves to the next guess in the current stage
     }
  }
}

// Sound Synthesis Functions for Steps 6-8
// You do not need to edit the below code
const freqMap = {
  1: 261.6,
  2: 329.6,
  3: 392,
  4: 466.2
}

function playTone(btn,len){ 
  o.frequency.value = freqMap[btn]
  g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
  context.resume()
  tonePlaying = true
  setTimeout(function(){
    stopTone()
  },len)
}

function startTone(btn) {
  if(!tonePlaying){
    context.resume()
    o.frequency.value = freqMap[btn]
    g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
    context.resume()
    tonePlaying = true
  }
}

function stopTone() {
  g.gain.setTargetAtTime(0,context.currentTime + 0.05,0.025)
  tonePlaying = false
}

// Page Initialization
// Init Sound Synthesizer
let AudioContext = window.AudioContext || window.webkitAudioContext 
let context = new AudioContext()
let o = context.createOscillator()
let g = context.createGain()
g.connect(context.destination)
g.gain.setValueAtTime(0,context.currentTime)
o.connect(g)
o.start(0)