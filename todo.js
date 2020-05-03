const toDoForm = document.querySelector(".js-toDoForm");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = 'toDos';
const LI ='li';
const BUTTON ='btncolor';
let toDos = [];

function saveToDos(){
  localStorage.setItem(TODOS_LS,JSON.stringify(toDos));
}


function deleteToDo(event){
  const btn = event.target;
  const li = btn.parentNode;
  toDoList.removeChild(li);
  const cleanToDos = toDos.filter(function(toDo){
    return toDo.id !== parseInt(li.id);
  } );
  toDos = cleanToDos;
  saveToDos();
}

function paintToDo(text){
  const li = document.createElement("li");
  const delbtn = document.createElement("button");
  delbtn.innerHTML ="❌"
  delbtn.addEventListener("click",deleteToDo);
  const span = document.createElement("span");
  const newId = toDos.length+1;
  span.innerText = text;
  li.appendChild(delbtn);
  li.appendChild(span);
  li.id = newId;
  toDoList.appendChild(li);
  li.classList.add(LI);
  li.style.padding=0;
  li.style.margin=0;


  const toDoObj ={
    text : text,
    id : newId
  };
  toDos.push(toDoObj);
  saveToDos();
}



function loadToDos(){
  const loadedToDos = localStorage.getItem(TODOS_LS);
  if( loadedToDos !== null){
    const parsedToDos = JSON.parse(loadedToDos);
    parsedToDos.forEach(function(toDo){
      paintToDo(toDo.text);
    });
  }
}

function handleSubmit(event){
  event.preventDefault();
  const currentValue = toDoInput.value;
  paintToDo(currentValue);
  toDoInput.value = "";
}

function init(){
  loadToDos();
  toDoForm.addEventListener('submit',handleSubmit);
}
init();
