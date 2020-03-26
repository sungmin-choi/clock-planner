const COORDS = 'coords';

function askForCoords(){

}

function loadCoords(){
  const loadedCords = localStorage.getItem(COORDS);
  if(loadedCoords === null){
    askForCoords();
  }else{

  }
}
function init(){

}
init();
