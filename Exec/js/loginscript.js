//Naming Login Header and bittons 
loginHeader.innerText = 'Hangman Game';
// logExit.innerText='Exit';
logStart.innerText='Start';
loginName.setAttribute('placeholder','Enter Player Name');
window.opener;
//Naming Loging labels and level options
let isFLabel=true;
loginLabels.forEach(element => {
    if(isFLabel){
        element.innerHTML='</br><b>Player Name</b></br>';
        isFLabel=false;
    }else{
        element.innerHTML='<b>Select Game Level</b>';
        isFLabel=true;  
    };
});
//Create Game Levels
for(let i=0;i<3;i++){
    let li = document.createElement('li');
    switch (i){
        case 0:
            li.innerText ='H a r d';
            break;
        case 1:
            li.innerText ='M e d i u m';
            break;
        default:
            li.innerText ='E a s y';
    };
    li.setAttribute('class','newLi');
    gameLevels.appendChild(li);
};
let chloginFrame = setInterval(() => {
    if(isFLabel){
        mainLogin.style.color='white';
        isFLabel=false;
    }else{
        mainLogin.style.color = 'gray';
        isFLabel=true;
    };
},1000);

//Events
//logExit.addEventListener('click',exitGame);
gameLevels.addEventListener('click',selectGameLevel);
logStart.addEventListener('click',startGame);

//Functions
// function exitGame(e){
//     window.history.back();
//     window.close();
// }
function selectGameLevel(e){
    e.preventDefault();
    let target = e.target;

    if(target.tagName === 'LI'){
        if(lvlSelected!==undefined)
            lvlSelected.setAttribute("class",'newLi');

        lvlSelected = target;
        lvlSelected.setAttribute('class','levelSelected');
    };
};

function startGame(e){
    e.preventDefault();
    if(lvlSelected!==undefined&&loginName.value!==''){
        let nameStr = loginName.value;
        let glStr = lvlSelected.innerText;
        sessionStorage.setItem('nameStr',nameStr);
        sessionStorage.setItem('glStr',glStr);
        window.open('Exec/hmgame.html');
        window.close();
    }else
        alert('Name or Game Level may be Missing');
};

