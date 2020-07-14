![HangmanLogo](https://github.com/emdlr/Hangman/blob/master/Exec/img/icon.png=15x15)
# Hangman Project
---
**Project Name:** Hangman Game

**Sponsor:** JD

**Software Engineer:** _Edgar Martinez_

### Project Definition
---

Have a player enter a word that will be guessed during the game. The word is then hidden and represented by blank spaces. The second player then chooses letters, which are revealed if present.

This has to be eventually published and running from own GitHub regular account, along with all the repository structure.

**M V P**
---

- As a player I want to be able to put my custom name on the board
- As a player I need to be able to choose how difficult my game will be
- As a player I want to be able to know how much time left I have to guess the word
- As a player I want to graphically be able to pick a letter
- As a player I want to see how many tries I have left to guess the word (Hangman)
- As a player I want to know which letter I have already picked
- As a player I need to have at least one hint of the word
- As a player I want to know my score on the board
- As a player I need to see on the board whenever I lose or win

**Use Case Diagram**
---

![UseCaseDiagram](https://github.com/emdlr/Hangman/blob/master/Diagrams/uc.png=50x50)

**Project Plan**

The use of any database will not be required for this project.
Technology Stack to develop the game:
- HTML 5
- CSS
- Javascript

 _*Include separate HTML / CSS / JavaScript files_

All documentation will be store in the Hangman Project repository setup on GitHub under “emdlr” user account. This game will be rendered in the browser.

**Project Start Date:** Friday July 10th, 2020

**Deployment Day:** Tuesday July 14th, 2020

**Rollout:** Wednesday July 15th, 2020

##### Often commits on GitHub will be performed.

**Project Design**
---

**_Technologies_**
- *Visual Studio Code* – Main Development Tool
- *Web Browser* – Google Chrome
- *Programing language* – Javascript
- *Styles Formats* – Cascading Style Sheets
- *Web Design Platform* – HTML 5


**_Pseudocode_**

1. Have the player put his/her name to display it on the board
2. Have the player select the game difficulty decided to go for:
    - There can be only 3 options:
        - **Hard:** Long length words
        - **Medium:** Medium length words
        - **Easy:** Short length word
3. Once the game begins, have the player select a letter of the alphabet.    
    - *If the letter is contained in the word/phrase*
        - The letter is revealed in all the spaces it fits in the word.
    - *If Not:*
        - A member of the body of the hangman is drawn on the board
4. The player takes another turn guessing a letter. 
5. The game continues until:
The word/phrase is guessed (all letters are revealed) – **WINNER** else
all the parts of the hangman are displayed – **LOSER**.

**Flow Diagram**
---

![FlowDiagram](https://github.com/emdlr/Hangman/blob/master/Diagrams/flowdiagram.png)

**Wireframes**
---
**Login**

![Wireframe1](https://github.com/emdlr/Hangman/blob/master/Diagrams/wf1.png)

**Main Game Window**

![Wireframe1](https://github.com/emdlr/Hangman/blob/master/Diagrams/wf2.png)

**Installation**

- Internet Connectivity
- No high Internet speed required
- Click on the [LINK](https://emdlr.github.io/Hangman/) and have fun!

**More Data**
You can also take a look to the [project document](https://github.com/emdlr/Hangman/blob/master/Docs/Charter%20Hangman%20Game.docx) for more info.