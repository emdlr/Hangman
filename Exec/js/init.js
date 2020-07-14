 
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
let tABC = document.querySelector('.abc');
let timeBox = document.querySelector('.timer');
let timer = document.createElement('p');
let timerHeader = document.createElement('p');
let startGameBtn = document.querySelector('#startBtn');
let hint = document.createElement('p');
let hangman = document.querySelector('.hangman');
let imgHM = document.createElement('img');
let exit = document.querySelector('#exitBtn');
let lblStrt = document.querySelector('#lblStr');
let lblExit = document.querySelector('#lblExt');
window.opener;
//Initialize Global Login Aux Varables
let lvlSelected;
//Initialize Global Index Aux Varables
let rowCounter=0;
let cellsCounter=0;
let isTime;
let triesLimit=6;
let hmState=1;
let isWon = false;


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
    revealWord(selectedChar){
        let wArry = this.word.split('');
        let k=0;
        let secFrame = document.querySelectorAll('.secFrame');
        let gotChars=false;
        let winCnt=0;
        secFrame.forEach(element =>{
            if(element.tagName === 'DIV'){
                if(wArry[k] ===selectedChar.innerText){
                    element.innerText = selectedChar.innerText;
                    gotChars=true;
                };
                k++;
            }; 
        });
         if(gotChars)
            selectedChar.style.background='royalblue';
         else{
            selectedChar.style.background ='tomato';
            triesLimit++;
            hmState++;
            changeHangman(hmState);
         };
        
        secFrame.forEach(e =>{
            if(e.innerText!=='')
                winCnt++;
        });
        if(winCnt === secFrame.length)
             winGame();
        else if(triesLimit===6)
            loseGame();
   
    };
};
let wordObj = new Word('x','x',0,0);
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
    tABC.innerHTML='';
    const abcKeyboard =['A','B','C','D','E','F','G','H','I','J','K','L',
                        'M','N','O','P','Q','R','S','T','U','V','W','X',
                        'Y','Z'];
    abcKeyboard.forEach(element =>{
        let abcDiv = document.createElement('div');
        abcDiv.setAttribute('class','abcFlex');
        abcDiv.innerText =element;
        tABC.appendChild(abcDiv);
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

        if (diff <= 0) {
          loseGame(diff);
          clearInterval(t);
        
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
function startGame(e){
    e.preventDefault();
    createABC();
    triesLimit=0;
    hmState=1;
    isWon=false;
    wordObj = getWord(player.gameLevel);
    wordObj.displayWord();
    hint.style.color ='whitesmoke';
    changeHangman(hmState);
    startTimer(.4*60, timer);
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
    return bank[getRandomInt(0,5)];
};
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; 
  }; 
function pickupCharacter (e){
    e.preventDefault();
    let target = e.target;
    if(timer.innerText !== '00:00'&&target.textContent.length===1&&triesLimit<6&&!isWon){
        wordObj.revealWord(target);
    };
};

function winGame(){
    hint.innerHTML = '&#x1F3C6 &#x1F389 &#x1F3C6 Y O U&nbsp;&nbsp;W I N &#x1F3C6 &#x1F389 &#x1F3C6';
    hint.style.color ='gold';
    isWon=true;
    player.posScore++;
    center1.children[3].children[0].innerText =player.posScore;
    changeHangman(0);
    clearInterval(isTime);   
};
function loseGame (loseTime){
    loseTime===0?hint.innerHTML =`&#x23F0 &#x231B T I M E ' S&nbsp;&nbsp;O V E R &#x23F0 &#x231B`:hint.innerHTML = '&#x1F614 &#x1F614 Y O U&nbsp;&nbsp;L O S E &#x1F614 &#x1F614';
    hint.style.color ='tomato';
    isWon=false;
    player.negScore++;
    center1.children[3].children[1].innerText =player.negScore;
    changeHangman(7);
    clearInterval(isTime);   
};

function changeHangman (state){
    let img='';
    hangman.innerHTML='';
    switch (state){
        case 0://Winner
            img = './img/mh0.png';
            break;
        case 1://Initial
            img = './img/mh1.png';
            break;
        case 2://1st Strike
            img = './img/mh2.png';
            break;
        case 3://2nd Strike
            img = './img/mh3.png';
            break;
        case 4://3rd Strike
            img = './img/mh4.png';
            break;
        case 5://4th Strike
            img = './img/mh5.png';
            break;
        case 6://6th Strike
            img = './img/mh6.png';
            break;
        case 7://Last Strike
            img = './img/mh7.png';
            break;          
    };
    imgHM.setAttribute('src',img);
    imgHM.setAttribute('alt','Hangman')
    imgHM.setAttribute('class','hangman');
    hangman.appendChild(imgHM);
};