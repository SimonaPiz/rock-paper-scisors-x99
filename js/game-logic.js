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

  /*3.  Una funzione chiamata getRoundWinner, che prende un numero di round ( 1, 2, o 3), 
confronta i tipi di mosse e i valori di entrambi i giocatori per quel round e restituisce 
il vincitore appropriato ( 'Player One', 'Player Two', o 'Tie') */
const getRoundWinner = (roundNum) => {
  switch (roundNum) {
    // round 1:
    case 1:
      // verifichiamo che gli input siano validi
      if(
        !playerOneMoveOneType || !playerOneMoveOneValue ||
        !playerTwoMoveOneType || !playerTwoMoveOneValue
      ) {
        return null;
      };

      switch (playerOneMoveOneType) {
        case playerTwoMoveOneType:
          if (playerOneMoveOneValue < playerTwoMoveOneValue) {
            return 'Player Two';
          } else if (playerOneMoveOneValue > playerTwoMoveOneValue) {
            return 'Player One';
          } else {
            return 'Tie';
          }
          break;
        case 'rock':
          if (playerTwoMoveOneType === 'paper') {
            return 'Player Two';
          } else {
            return 'Player One';
          }
          break;
        case 'paper':
          if (playerTwoMoveOneType === 'scissors') {
            return 'Player Two';
          } else {
            return 'Player One';
          }
          break;
        case 'scissors':
          if (playerTwoMoveOneType === 'rock') {
            return 'Player Two';
          } else {
            return 'Player One';
          }
          break;
      };
      break;

    // round 2:
    case 2:
      // verifichiamo che gli input siano validi
      if(
        !playerOneMoveTwoType || !playerOneMoveTwoValue ||
        !playerTwoMoveTwoType || !playerTwoMoveTwoValue        
      ) {
        return null;
      };

      switch (playerOneMoveTwoType) {
        case playerTwoMoveTwoType:
          if (playerOneMoveTwoValue < playerTwoMoveTwoValue) {
            return 'Player Two';
          } else if (playerOneMoveTwoValue > playerTwoMoveTwoValue) {
            return 'Player One';
          } else {
            return 'Tie';
          }
          break;
        case 'rock':
          if (playerTwoMoveTwoType === 'paper') {
            return 'Player Two';
          } else {
            return 'Player One';
          }
          break;
        case 'paper':
          if (playerTwoMoveTwoType === 'scissors') {
            return 'Player Two';
          } else {
            return 'Player One';
          }
          break;
        case 'scissors':
          if (playerTwoMoveTwoType === 'rock') {
            return 'Player Two';
          } else {
            return 'Player One';
          }
          break;
      };
      break;

    // round 3:
    case 3:
      // verifichiamo che gli input siano validi
      if(
        !playerOneMoveThreeType || !playerOneMoveThreeValue ||
        !playerTwoMoveThreeType || !playerTwoMoveThreeValue        
      ) {
        return null;
      };

      switch (playerOneMoveThreeType) {
        case playerTwoMoveThreeType:
          if (playerOneMoveThreeValue < playerTwoMoveThreeValue) {
            return 'Player Two';
          } else if (playerOneMoveThreeValue > playerTwoMoveThreeValue) {
            return 'Player One';
          } else {
            return 'Tie';
          }
          break;
        case 'rock':
          if (playerTwoMoveThreeType === 'paper') {
            return 'Player Two';
          } else {
            return 'Player One';
          }
          break;
        case 'paper':
          if (playerTwoMoveThreeType === 'scissors') {
            return 'Player Two';
          } else {
            return 'Player One';
          }
          break;
        case 'scissors':
          if (playerTwoMoveThreeType === 'rock') {
            return 'Player Two';
          } else {
            return 'Player One';
          }
          break;
      };
      break;
    default: return null;
      break;
  };
};

/*4.  Una funzione chiamata getGameWinner, che confronta i tipi di mosse e i valori di 
entrambi i giocatori per l'intera partita e restituisce il vincitore appropriato 
( 'Player One', 'Player Two', o 'Tie') */
const getGameWinner = () => {
  const roundOneWinner = getRoundWinner(1);
  const roundTwoWinner = getRoundWinner(2);
  const roundThreeWinner = getRoundWinner(3);

  let playerOneScore = 0;
  let playerTwoScore = 0;

  // score round 1:
  if (roundOneWinner === 'Player One') {
    playerOneScore += 1;
  } else if (roundOneWinner === 'Player Two') {
    playerTwoScore += 1;
  } else if (roundOneWinner === 'Tie') {
    playerOneScore += 1;
    playerTwoScore += 1;
  } else {
    return null;
  };

  // score round 2:
  if (roundTwoWinner === 'Player One') {
    playerOneScore += 1;
  } else if (roundTwoWinner === 'Player Two') {
    playerTwoScore += 1;
  } else if (roundTwoWinner === 'Tie') {
    playerOneScore += 1;
    playerTwoScore += 1;
  } else {
    return null;
  };

  //score round 3:
  if (roundThreeWinner === 'Player One') {
    playerOneScore += 1;
  } else if (roundThreeWinner === 'Player Two') {
    playerTwoScore += 1;
  } else if (roundThreeWinner === 'Tie') {
    playerOneScore += 1;
    playerTwoScore += 1;
  } else {
    return null;
  };

  // final score and final winner:
  if (playerOneScore > playerTwoScore) {
    return 'Player One';
  } else if (playerOneScore < playerTwoScore) {
    return 'Player Two';
  } else if (playerOneScore === playerTwoScore) {
    return 'Tie';
  } else {
    return null;
  }
};

/*5.  Bonus: una funzione chiamata setComputerMoves, che sceglie tre mosse casuali per il 
secondo giocatore. Il tipo di mossa per ogni mossa dovrebbe essere completamente casuale e 
i valori di mossa dovrebbero essere casuali ma sommare fino a 99. */

const setComputerMoves = () => {
  const types = ['rock', 'paper', 'scissors'];
  
  // funzione per generare il tipo di mossa casuale
  const generateType = arrayTypes => {
    const casualIndex =  Math.floor(Math.random() * 3);
    return arrayTypes[casualIndex];
  };

  // funzione per generare il valore della mossa casuale
  const generateValue = () => {
    return Math.floor(Math.random() * 100);
  };

  // settiemo i valori e i tipi di mossa per il computer
  playerOneMoveOneType = generateType(types);
  playerOneMoveOneValue = generateValue();
  playerOneMoveTwoType = generateType(types);
  playerOneMoveTwoValue = generateValue();
  playerOneMoveThreeType = generateType(types);
  playerOneMoveThreeValue = generateValue();

  playerTwoMoveOneType = generateType(types);
  playerTwoMoveOneValue = generateValue();
  playerTwoMoveTwoType = generateType(types);
  playerTwoMoveTwoValue = generateValue();
  playerTwoMoveThreeType = generateType(types);
  playerTwoMoveThreeValue = generateValue();

  // verifichiamo che la somma dei valori sia 99
  while ((playerOneMoveOneValue + playerOneMoveTwoValue + playerOneMoveThreeValue) !== 99) {
    playerOneMoveOneValue = generateValue();
    playerOneMoveTwoValue = generateValue();
    playerOneMoveThreeValue = generateValue();    
  }

  while ((playerTwoMoveOneValue + playerTwoMoveTwoValue + playerTwoMoveThreeValue) !== 99) {
    playerTwoMoveOneValue = generateValue();
    playerTwoMoveTwoValue = generateValue();
    playerTwoMoveThreeValue = generateValue();    
  }
};