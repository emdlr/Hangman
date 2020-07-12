
//Initialize Login Variables from Objects
let loginLabels = document.querySelectorAll('.mainlogin label');
const loginHeader = document.querySelector('.login-title');
const loginName = document.querySelector('.mainlogin input');
const mainLogin = document.querySelector('.mainlogin');
const gameLevels = document.querySelector('.level-list');
const logExit = document.querySelector('#exit-login');
const logStart = document.querySelector('#start-game');
//Initialize Index Variables from Objects
const playerData = document.querySelector('.playerData');
let pName = document.createElement('p');
let center1 = document.createElement('center');
let center2 = document.createElement('center');
let tScore = document.querySelector('.abc table');
let timeBox = document.querySelector('.timer');
let timer = document.createElement('p');
let timerHeader = document.createElement('p');
//Initialize Global Login Aux Varables
let lvlSelected;
//Initialize Global Index Aux Varables
let rowCounter=0;
let cellsCounter=0;
//Crate Classes Player
class Player {
    constructor(name,gameLevel,posScore,negScore){
    gameLevel = gameLevel.replace(/\s+/g, '');
    this.name=name.toUpperCase();
    this.gameLevel=gameLevel.toUpperCase();
    this.posScore=posScore;
    this.negScore=negScore;
    };
    myGameData (rows,cells){
        pName.innerHTML = `<b>&nbsp;&nbsp;Player Name:</b>&nbsp;${this.name}`;
        center1.appendChild(pName);
        cells[0].innerHTML='<b>G A M E&nbsp;&nbsp;S C O R E</b>';
        cells[0].setAttribute('colspan',2);
        rows[0].appendChild(cells[0]);
        cells[1].innerText ='Wins';
        cells[2].innerText ='Lose';
        rows[1].appendChild(cells[1]);
        rows[1].appendChild(cells[2]);
        cells[3].innerText = this.posScore;
        cells[4].innerText = this.negScore;
        rows[2].appendChild(cells[3]);
        rows[2].appendChild(cells[4]);
        center1.appendChild(rows[0]);
        center1.appendChild(rows[1]);
        center1.appendChild(rows[2]);
        playerData.appendChild(center1);
    };
};
class Word {
    constructor(word,level,hint){
        this.word=word.toUpperCase();
        this.level=level;
        this.hint=hint;
        this.length=word.length;
    };
};
//Createing words bank
const eWord1 = new Word('apple','E','Hint: Common Red fruit')
const eWord2 = new Word('plane','E','Hint: Sky transportation');
const eWord3 = new Word('coke','E','Hint: Most popular soda brand');
const eWord4 = new Word('cat','E','Hint: Second most common home pet');
const mWord1 = new Word('soccer','M','Hint: Popular sport');
const mWord2 = new Word('tokio','M',`Hint: Japan's capital`);
const mWord3 = new Word('cancun','M','Hint: Famous Beach in Mexico');
const mWord4 = new Word('window','M','Hint: Microsoft logo');
const hWord1 = new Word('neverland','H','Hint:Michael Jacksons park name');
const hWord2 = new Word('daenerys','H','Hint: Mother of Dragons');
const hWord3 = new Word('cascade','H','Hint: What C stands for in CSS');
const hWord4 = new Word('pennywise','H','Hint: Scariest clown in movies');


//Functions
function createRows (cant){
    cant += rowCounter;
    let i=rowCounter;
    let arr =[];
    while(i<cant){
        const tr = document.createElement('tr');
        tr.setAttribute('id',`row${i}`);
        arr.push(tr);
        i++;
    };
    rowCounter=i;
    return arr;
};
function createCells (cant){
    cant += cellsCounter;
    let i=cellsCounter;
    let arr =[];
    while(i<cant){
        const td = document.createElement('td');
        td.setAttribute('id',`cell${i}`);
        arr.push(td);
        i++;
    };
    cellsCounter=i;
    return arr;
};
function createABC(){
    const abcKeyboard =['A','B','C','D','E','F','G','H','I','J','K','L',
                        'M','N','O','P','Q','R','S','T','U','V','W','X',
                        'Y','Z'];
    
    let rows = createRows(13);
    let cells = createCells(26);
    let abcIdx=0;

    for(let i=0;i<13;i++){
        for(let j=0;j<2;j++){
            cells[abcIdx].innerText=abcKeyboard[abcIdx];
            rows[i].appendChild(cells[abcIdx]);
            abcIdx++;
        };
        center2.appendChild(rows[i]);
    };
    tScore.appendChild(center2);
};
function startTimer(duration, where) {
    let start = Date.now(),diff,minutes,seconds;
    function timer() {
        diff = duration - (((Date.now() - start) / 1000) | 0);
        minutes = (diff / 60) | 0;
        seconds = (diff % 60) | 0;

        minutes = minutes<10?"0"+minutes:minutes;
        seconds = seconds<10?"0"+seconds:seconds;

        where.innerText = minutes + ":" + seconds; 
       // timeBox.appendChild(where);

        if (diff <= 0) {
          clearInterval(t);
          //start = Date.now() + 1000;
        };
    };
    timer();
    let t = setInterval(timer, 1000);
};