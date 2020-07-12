//Bringing object data from Login
//let player = new Player (sessionStorage.getItem('nameStr'),sessionStorage.getItem('glStr'),0,0);
let player = new Player('EDGAR', 'HARD',0,0);
//Create Player Data
player.myGameData(createRows(3),createCells(5));
createABC();
timerHeader.innerHTML=`<b>Level: ${player.gameLevel}</br>Game Timer</b>`;
timeBox.appendChild(timerHeader);
timer.innerText='00:00';
timeBox.appendChild(timer);

startTimer(.3*60, timer);








