//Bringing object data from Login
//let player = new Player (sessionStorage.getItem('nameStr'),sessionStorage.getItem('glStr'),0,0);
let player = new Player('EDGAR', 'medium',0,0);
//Create Player Data
player.myGameData(createRows(3),createCells(5));
createABC();

//Event Listeners
startGameBtn.addEventListener('click',startGame);










