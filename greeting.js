const form = document.querySelector(".js-form");
const input = form.querySelector("input");
const USER_LS = "currentUser", SHOWING_CN ="showing";
const greeting = document.querySelector(".js-greetings");

function handleSubmit(event){
  event.preventDefault();
  const currentUser = input.value;
  paintGreeting(currentUser);
  saveName(currentUser);
}
function saveName(text){
  localStorage.setItem('currentUser',text);
}
function askForName(){
  form.classList.add(SHOWING_CN);
  form.addEventListener("submit",handleSubmit);
}

function paintGreeting(text){
  form.classList.remove(SHOWING_CN);
  greeting.classList.add(SHOWING_CN);
  greeting.innerText = `Hello ${text}`;

}

function loadname(){
  const currentUser = localStorage.getItem(USER_LS);
 if(currentUser === null){
    askForName();
 }else {
    paintGreeting(currentUser);
 }

}

function init(){
  loadname();
}
init();
