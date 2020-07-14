//Bringing object data from Login
let player = new Player (sessionStorage.getItem('nameStr'),sessionStorage.getItem('glStr'),0,0);
//let player = new Player('EDGAR', 'hard',0,0);
let switch1=true;
let switch2=true;

//Create Player Data
player.myGameData(createRows(3),createCells(5));
createABC();

//Event Listeners
startGameBtn.addEventListener('click',startGame);
tABC.addEventListener('click',pickupCharacter);
exit.onclick = function (e){
    window.close();
    alert('CLOSE YOUR TAB');
};
startGameBtn.onmouseover = function () {
        lblStrt.style.color ='blue';
        lblStrt.style.fontStyle ='italic';
        lblStrt.style.fontWeight ='bolder';
};
exit.onmouseover = function () {
    lblExit.style.color ='red';
    lblExit.style.fontStyle ='italic';
    lblExit.style.fontWeight ='bolder';
};
startGameBtn.onmouseleave = function () {
    lblStrt.style.color ='ivory';
    lblStrt.style.fontStyle ='normal';
    lblStrt.style.fontWeight ='bolder';
};
exit.onmouseleave = function () {
   lblExit.style.color ='ivory';
   lblExit.style.fontStyle ='normal';
   lblExit.style.fontWeight ='bolder';
};








