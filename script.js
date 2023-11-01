const form=document.querySelector("form");
const add=document.querySelector("button")
const input=document.getElementById("task");
const ul=document.querySelector("ul");

function addData(event){
    event.preventDefault();
    const list=document.createElement("li");
    list.innerText=input.value;
    ul.appendChild(list);
   input.value="";
}

add.addEventListener("click",addData);