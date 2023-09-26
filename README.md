# Rock Paper Scisors x 99
> I build all of the logic needed for a more intense version of Rock Paper Scissors (RPS).
> Live demo [_here_](https://www.example.com). <!-- If you have the project hosted somewhere, include the link here. -->

<img src="" width="800px" alt="preview" title="preview"/>

## Table of Contents
* [General Info](#general-information)
* [Technologies Used](#technologies-used)
* [Features](#features)
* [Screenshots](#screenshots)
* [Setup](#setup)
* [Usage](#usage)
* [Project Status](#project-status)
* [Room for Improvement](#room-for-improvement)
* [Acknowledgements](#acknowledgements)
* [Contact](#contact)
<!-- * [License](#license) -->


## General Information
In this project, I build all of the logic needed for a more intense version of Rock Paper Scissors (RPS). Rather than selecting just one of Rock, Paper, or Scissors - each player will select three moves. Each move will consist of a type (Rock, Paper, or Scissors) as well as a strength value. Each player will have 99 total points to use as strength between all three of their moves. For example, an example set of moves might be:

Move 1: Rock - 30 Strength Points
Move 2: Rock - 60 Strength Points
Move 3: Paper - 9 Strength Points
The strength for each move must be at least 1.

After each player's moves are chosen, they will compare moves in the order they were selected. If two moves have different types (for example, Rock vs Scissors), then normal RPS rules will apply (in this case, Rock beats Scissors). However, if two types are the same, then the move with more strength will win. If both strength values are equal, then a tie is declared.

The player that wins the majority of the three rounds will be the winner of the game.


## Technologies Used
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
![Example screenshot](./img/screenshot.png)
<!-- If you have screenshots you'd like to share, include them here. -->


## Setup
What are the project requirements/dependencies? Where are they listed? A requirements.txt or a Pipfile.lock file perhaps? Where is it located?

Proceed to describe how to install / setup one's local environment / get started with the project.


## Usage
How does one go about using it?
Provide various use cases and code examples here.

`write-your-code-here`


## Project Status
Project is: _in progress_ / _complete_ / _no longer being worked on_. If you are no longer working on it, provide reasons why.


## Room for Improvement
Include areas you believe need improvement / could be improved. Also add TODOs for future development.

Room for improvement:
- Improvement to be done 1
- Improvement to be done 2

To do:
- Feature to be added 1
- Feature to be added 2


## Acknowledgements
Give credit here.
- This project was inspired by...
- This project was based on [this tutorial](https://www.example.com).
- Many thanks to...


## Contact
Created by [@flynerdpl](https://www.flynerd.pl/) - feel free to contact me!


<!-- Optional -->
<!-- ## License -->
<!-- This project is open source and available under the [... License](). -->

<!-- You don't have to include all sections - just the one's relevant to your project -->
