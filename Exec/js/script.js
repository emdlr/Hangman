//Header Title
loginHeader.innerText = 'Hangman Game';

//Naming Loging labels and level options
let isFLabel=true;
loginLabels.forEach(element => {
    if(isFLabel){
        element.innerHTML='</br></br><b>Player Name</b></br>';
        isFLabel=false;
    }else{
        element.innerHTML='<b>Select Game Level</b></br>';
        isFLabel=true;  
    };
});
loginBtns.forEach(element => {
    if(isFLabel){
        element.innerText='Exit';
        isFLabel=false;
    }else{
        element.innerText='Start';
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