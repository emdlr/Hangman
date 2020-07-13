 
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
let tScore = document.querySelector('.abc');
let timeBox = document.querySelector('.timer');
let timer = document.createElement('p');
let timerHeader = document.createElement('p');
let startGameBtn = document.querySelector('#startBtn');
let hint = document.createElement('p');
 


//Initialize Global Login Aux Varables
let lvlSelected;
//Initialize Global Index Aux Varables
let rowCounter=0;
let cellsCounter=0;
let isTime;


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

        timerHeader.innerHTML=`<b>Level: ${this.gameLevel}</br>Game Timer</b>`;
        timeBox.appendChild(timerHeader);
        timer.innerText='00:00';
        timer.style.fontSize ='30px';
        timeBox.appendChild(timer);
    };
};
class Word {
    constructor(word,level,hint){
        this.word=word.toUpperCase();
        this.level=level;
        this.hint=hint;
        this.length=word.length;
    };
    displayWord(){
        document.querySelector('#secFrame').innerHTML='';
        let wArry = this.word.split('');
        wArry = hideCharacters(wArry);
        wArry.forEach(chr =>{
            const character = document.createElement('div');
            character.innerText = chr;
            character.setAttribute('class','secFrame');
            document.querySelector('#secFrame').appendChild(character);
        });
        hint.innerText=this.hint;
        document.querySelector('.hint').appendChild(hint);
        
    };
};
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
    
    abcKeyboard.forEach(element =>{
        const abcDiv = document.createElement('div');
        abcDiv.setAttribute('class','abcFlex');
        abcDiv.innerHTML =`<center><b>${element}</b></center>`;
        tScore.appendChild(abcDiv);
    });
};
function startTimer(duration, where) {
    let start = Date.now(),diff,minutes,seconds;
    let r=true;
    where.style.color ='white';
    if(isTime!==undefined)
        clearInterval(isTime);

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
        
        }else if (diff <= 5){//Last five seconds alert
            if(r){
                where.style.color ='Red';
                r=false;
            }else{
                where.style.color ='white';
                r=true;
            };
         };
    };
    timer();
    let t = setInterval(timer,1000);
    isTime=t;

};
function startGame(){
    let wordObj = getWord(player.gameLevel);
    wordObj.displayWord();
 
 //startTimer(.3*60, timer);

};
function hideCharacters(arr){
    let displayChr1='';
    let displayChr2='';
    let displayChr3='';
    switch(player.gameLevel){
        case 'EASY':
            displayChr1 = getRandomInt(0,arr.length-1);
            for(let i=0;i < arr.length;i++)
                if(i!==displayChr1)
                    arr[i] = ' ';
            break;
        case 'MEDIUM':
            while(displayChr1===displayChr2){
                displayChr1 = getRandomInt(0,arr.length-1);
                displayChr2 = getRandomInt(0,arr.length-1);
            };
            for(let i=0;i < arr.length;i++)
                if(!(i===displayChr1||i===displayChr2))
                    arr[i] = ' ';
            break;
        default:
            while(displayChr1===displayChr2||displayChr1===displayChr3){
                displayChr1 = getRandomInt(0,arr.length-1);
                displayChr2 = getRandomInt(0,arr.length-1);
                displayChr3 = getRandomInt(0,arr.length-1);
            };
            for(let i=0;i < arr.length;i++)
                if(!(i===displayChr1||i===displayChr2||i==displayChr3))
                    arr[i] = ' ';
        }; 
        return arr;
};

function getWord (level) {
let bank =[];
    switch(level){
        case 'EASY':
            bank = [new Word('apple','E','Hint: Common Red fruit'),
                    new Word('plane','E','Hint: Sky transportation'),
                    new Word('coke','E','Hint: Most popular soda brand'),
                    new Word('cat','E','Hint: Second most common home pet')];
            break;
        case 'MEDIUM':
            bank = [new Word('soccer','M','Hint: Popular sport'),
                    new Word('tokio','M',`Hint: Japan's capital`),
                    new Word('cancun','M','Hint: Famous Beach in Mexico'),
                    new Word('window','M','Hint: Microsoft logo')];
            break;
        default:
            bank = [new Word('neverland','H','Hint:Michael Jacksons park name'),
                    new Word('daenerys','H','Hint: Mother of Dragons'),
                    new Word('cascade','H','Hint: What C stands for in CSS'),
                    new Word('pennywise','H','Hint: Scariest clown in movies')];
    }; 
    return bank[getRandomInt(0,3)];
};
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; 
  }; 