const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");
const addTaskButton = document.getElementById("addTaskBtn");
const clearTasksBtn = document.getElementById("clearTasksBtn");


addTaskButton.addEventListener("click", tıklandı);
clearTasksBtn.addEventListener("click", temizle);


function checkTodosFromStorage(){
  if(localStorage.getItem("tasks") == null){ 
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("tasks"));
  }
}
function tıklandı(){
  const olusturulanLi = document.createElement("li");
  if (taskInput.value.trim() === "") {
    alert("Lütfen bir görev girin!");
    return;
  }
  function CiftTiklama() {
    this.remove();
    localStorage.setItem("tasks", taskList.innerHTML);
  }
  function UstunuCiz() {
    this.style.textDecoration = "line-through";
  }

// sayfa yenilenince butonlar kayboluyor. bu hataya bak !

  olusturulanLi.addEventListener("click", UstunuCiz);
  olusturulanLi.addEventListener("dblclick", CiftTiklama);

  CarpiButonu = document.createElement("button");
  CarpiButonu.textContent = "X";
  CarpiButonu.classList.add("carpiButonu");
  
  olusturulanLi.textContent = taskInput.value;
  olusturulanLi.appendChild(CarpiButonu);

CarpiButonu.addEventListener("click", function () {
  this.parentElement.remove();
  localStorage.setItem("tasks", taskList.innerHTML);
  localStorage.removeItem("tasks");
});

  taskList.appendChild(olusturulanLi);
  taskInput.value = "";
  localStorage.setItem("tasks", taskList.innerHTML);
  console.log("tıklandı");
}
taskInput.addEventListener("keypress", function (olay) {
  if (olay.key === "Enter") {
    tıklandı();
  }
});


function temizle() {
  taskList.innerHTML ="";
  localStorage.removeItem("tasks");
}
