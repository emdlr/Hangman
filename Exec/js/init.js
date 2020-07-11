//Crate Classes
class Player {
    constructor(name,gameLevel){
    gameLevel = gameLevel.replace(/\s+/g, '');
    this.name=name.toUpperCase();
    this.gameLevel=gameLevel.toUpperCase();
    };
};

//Initialize Login Variables from Objects
let loginLabels = document.querySelectorAll('.mainlogin label');
const loginHeader = document.querySelector('.login-title');
const loginName = document.querySelector('.mainlogin input');
const mainLogin = document.querySelector('.mainlogin');
const gameLevels = document.querySelector('.level-list');
const logExit = document.querySelector('#exit-login');
const logStart = document.querySelector('#start-game');

//Initialize Global Login Aux Varables
let lvlSelected;



