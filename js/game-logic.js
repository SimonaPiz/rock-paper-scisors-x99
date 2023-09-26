// All code should be written in this file.

/*1.  Dodici variabili globali che rappresentano i tipi e i valori di mossa di ogni giocatore 
(3 tipi di mossa e 3 valori di mossa per ogni giocatore). Questi nomi di variabili dovrebbero 
essere sotto forma di playerOneMoveOneType, playerOneMoveOneValue, ecc. */
let playerOneMoveOneType;
let playerOneMoveTwoType;
let playerOneMoveThreeType;

let playerOneMoveOneValue;
let playerOneMoveTwoValue;
let playerOneMoveThreeValue;

let playerTwoMoveOneType;
let playerTwoMoveTwoType;
let playerTwoMoveThreeType;

let playerTwoMoveOneValue;
let playerTwoMoveTwoValue;
let playerTwoMoveThreeValue;

/*2.  Una funzione chiamata setPlayerMoves, che prenderà una stringa che rappresenta un giocatore 
(nella forma di 'Player One'o 'Player Two'), tre tipi di mosse e tre valori di mossa e imposterà 
le variabili di movimento globali corrette. La firma del metodo per questa funzione dovrebbe 
essere la seguente: setPlayerMoves(player, moveOneType, moveOneValue, moveTwoType, moveTwoValue, 
moveThreeType, moveThreeValue). */

const setPlayerMoves = (player, moveOneType, moveOneValue, moveTwoType, moveTwoValue, 
  moveThreeType, moveThreeValue) => {
    if(
      //if valid inputs and not missing
      moveOneType && moveThreeType && moveTwoType && 
      moveOneValue && moveTwoValue && moveThreeValue &&
      // move values are more then 1
      ((moveOneValue >= 1 && moveTwoValue >= 1 && moveThreeValue >= 1) &&
      // move values are less then 99
      (moveOneValue <= 99 && moveTwoValue <= 99 && moveThreeValue <= 99) ) &&
      // values sum is less then 99
      (moveOneValue + moveTwoValue + moveThreeValue) < 100 &&
      //if a valid move type
      (moveOneType.toLowerCase() === 'rock' || 
      moveOneType.toLowerCase() === 'paper' ||
      moveOneType.toLowerCase() === 'scissors') && 
      (moveTwoType.toLowerCase() === 'rock' ||
      moveTwoType.toLowerCase() === 'paper' ||
      moveTwoType.toLowerCase() === 'scissors') &&
      (moveThreeType.toLowerCase() === 'rock' ||
      moveThreeType.toLowerCase() === 'paper' ||
      moveThreeType.toLowerCase() === 'scissors')
    ) {
      // player one
      if(player.toLowerCase() === 'player one') {
        playerOneMoveOneType = moveOneType;
        playerOneMoveTwoType = moveTwoType;
        playerOneMoveThreeType = moveThreeType;
        playerOneMoveOneValue = moveOneValue;
        playerOneMoveTwoValue = moveTwoValue;
        playerOneMoveThreeValue = moveThreeValue;
      } 
      //player two
      else if (player.toLowerCase() === 'player two') {
        playerTwoMoveOneType = moveOneType;
        playerTwoMoveTwoType = moveTwoType;
        playerTwoMoveThreeType = moveThreeType;
        playerTwoMoveOneValue = moveOneValue;
        playerTwoMoveTwoValue = moveTwoValue;
        playerTwoMoveThreeValue = moveThreeValue;
      } else {
        //if invalid player
        return;
      }
    } else {
      return;
    };
  };
