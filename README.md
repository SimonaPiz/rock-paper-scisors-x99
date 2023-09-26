# Rock Paper Scisors x 99
> I build all of the logic needed for a more intense version of Rock Paper Scissors (RPS).

Live demo [_here_](https://simonapiz.github.io/rock-paper-scisors-x99/). <!-- If you have the project hosted somewhere, include the link here. -->

<img src="https://github.com/SimonaPiz/rock-paper-scisors-x99/assets/91121660/be81894f-507c-4166-ad67-f3de74f8048e" width="800px" alt="preview" title="preview"/>

## Table of Contents
* [General Info](#general-information)
* [Technologies Used](#technologies-used)
* [Features](#features)
* [Screenshots](#screenshots)
* [Acknowledgements](#acknowledgements)
* [Contact](#contact)
<!-- * [License](#license) -->


## General Information
In this project, I build all of the logic needed for a more intense version of Rock Paper Scissors (RPS). Rather than selecting just one of Rock, Paper, or Scissors - each player will select three moves. Each move will consist of a type (Rock, Paper, or Scissors) as well as a strength value. Each player will have 99 total points to use as strength between all three of their moves. For example, an example set of moves might be:

- Move 1: Rock - 30 Strength Points
- Move 2: Rock - 60 Strength Points
- Move 3: Paper - 9 Strength Points

The strength for each move must be at least 1.

After each player's moves are chosen, they will compare moves in the order they were selected. If two moves have different types (for example, Rock vs Scissors), then normal RPS rules will apply (in this case, Rock beats Scissors). However, if two types are the same, then the move with more strength will win. If both strength values are equal, then a tie is declared.

The player that wins the majority of the three rounds will be the winner of the game.


## Technologies Used
- HTML
- CSS
- JavaScript
- chai: 4
- mocha: 6


## Features
To complete this project, the code need to contain the following:

- [x] [☑issue #2](https://github.com/SimonaPiz/rock-paper-scisors-x99/issues/2) Twelve global variables representing each player's move types and values (3 move types and 3 move values for each player). These variable names should be in the form of playerOneMoveOneType, playerOneMoveOneValue, etc.
      ![Test Passed](https://user-images.githubusercontent.com/91121660/270665752-630bb36d-d991-4498-a54c-e144c03a9af0.png)
      
- [x] [☑issue #3](https://github.com/SimonaPiz/rock-paper-scisors-x99/issues/3) A function called setPlayerMoves, which will take a string representing a player (in the form of 'Player One' or 'Player Two'), three move types, and three move values, and set the correct global move variables. The method signature for this function should be as follows: setPlayerMoves(player, moveOneType, moveOneValue, moveTwoType, moveTwoValue, moveThreeType, moveThreeValue).
      ![Test Passed](https://github.com/SimonaPiz/rock-paper-scisors-x99/assets/91121660/91d66d6d-b61f-4088-ba13-3ba99a831ab8)
      
- [x] [☑issue #4](https://github.com/SimonaPiz/rock-paper-scisors-x99/issues/4) A function called getRoundWinner, which takes a round number (1, 2, or 3), compares both player's move types and values for that round, and returns the appropriate winner ('Player One', 'Player Two', or 'Tie')
      ![Test Passed](https://github.com/SimonaPiz/rock-paper-scisors-x99/assets/91121660/bdb244c4-47e2-433e-ad5a-96e531c39e9a)
      
- [x] [☑issue #5](https://github.com/SimonaPiz/rock-paper-scisors-x99/issues/5) A function called getGameWinner, which compares both player's move types and values for the whole game and returns the appropriate winner ('Player One', 'Player Two', or 'Tie')
      ![Test Passed](https://github.com/SimonaPiz/rock-paper-scisors-x99/assets/91121660/6f85096f-8863-4a7c-9f74-08f491995226)
      
- [x] [☑issue #6](https://github.com/SimonaPiz/rock-paper-scisors-x99/issues/6) Bonus: A function called setComputerMoves, which chooses three random moves for player two. The move type for each move should be completely random, and the move values should be random but add up to 99.
      ![Test Passed](https://github.com/SimonaPiz/rock-paper-scisors-x99/assets/91121660/7385e9eb-6ef2-4a53-9851-0f4dff73dba5)
      
## Screenshots
![Example screenshot](https://github.com/SimonaPiz/rock-paper-scisors-x99/assets/91121660/be81894f-507c-4166-ad67-f3de74f8048e)

![anteprima03](https://github.com/SimonaPiz/rock-paper-scisors-x99/assets/91121660/5612d5c0-09f1-4f5f-b03e-c1a7f5feb074)

<!-- If you have screenshots you'd like to share, include them here. -->

## Acknowledgements
This project comes from the [Codecademy's 'Create a Back-End app with JavaScript'](https://www.codecademy.com/enrolled/paths/create-a-back-end-app-with-javascript) skill path.

## Contact
Created by [Simona Pizio](https://github.com/SimonaPiz)


<!-- Optional -->
<!-- ## License -->
<!-- This project is open source and available under the [... License](). -->

<!-- You don't have to include all sections - just the one's relevant to your project -->
