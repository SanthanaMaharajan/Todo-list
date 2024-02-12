
let formEle= document.querySelector("#form-container");
let inputEle= document.querySelector("#new-task-input");
let listEle=document.querySelector(".task-data");

formEle.addEventListener("submit", function(e){
    e.preventDefault(); 
     
    
let taskName = inputEle.value;
if (taskName===""){
   alert ("Please enter any Task");
}else{
inputEle.value="";

let taskEle=document.createElement("div");
taskEle.classList.add("task-list");
listEle.appendChild(taskEle);
let taskCheckEle= document.createElement("input");
taskCheckEle.setAttribute( "type","checkbox");
taskCheckEle.setAttribute("class","task-list-checkbox");
taskEle.appendChild(taskCheckEle);

let taskContent=document.createElement("div");
taskContent.classList.add("task-content");
taskEle.appendChild(taskContent);
let taskInputEle=document.createElement("input");
taskInputEle.setAttribute("type","text");
taskInputEle.setAttribute("class","task-list-input");
taskInputEle.setAttribute("value",taskName)
taskInputEle.setAttribute("readonly","readonly");
taskContent.appendChild(taskInputEle);

let taskStatus=document.createElement("div");
taskStatus.classList.add("task-status");
taskEle.appendChild(taskStatus);
let statusEle=document.createElement("span");
statusEle.innerText="Incomplete";
taskStatus.appendChild(statusEle);

let taskActionEle=document.createElement("div") ;
taskActionEle.setAttribute("class","task-actions");
taskEle.appendChild(taskActionEle);

let editButton=document.createElement("button");
editButton.classList.add("edit-btn");
editButton.innerHTML="<i class='bi bi-pencil-square'></i> Edit";
taskActionEle.appendChild(editButton);

let deleteButton=document.createElement("button");
deleteButton.classList.add("delete-btn");
deleteButton.innerHTML="<i class='bi bi-trash'></i> Delete";
taskActionEle.appendChild(deleteButton);

editButton.addEventListener("click", function(){
    taskInputEle.removeAttribute("readonly");
    taskInputEle.style.backgroundColor="#ccc";
    editButton.innerHTML = "<i class='bi bi-floppy-fill'></i>Save";
    editButton.addEventListener("click", function(){
        taskInputEle.setAttribute("readonly", "readonly");
        taskInputEle.style.backgroundColor="#fff";
        editButton.innerHTML = "<i class='bi bi-pencil-square'></i> Edit";
    })
});
deleteButton.addEventListener("click", function(){
    listEle.removeChild(taskEle);
});

taskCheckEle.addEventListener("click", function(){
    if (taskCheckEle.checked) {
        taskInputEle.style.textDecoration = "line-through";
        statusEle.style.backgroundColor="green";
        statusEle.innerText="Completed";
    } else {
        taskInputEle.style.textDecoration = "none";
        statusEle.style.backgroundColor="crimson";
        statusEle.innerText="Incomplete";
    }
});

}

});

