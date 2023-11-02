const input = document.getElementById("task");
const add = document.getElementById("add");
const ul = document.querySelector("ul");

function removeTask(e) {
    const data = e.target.closest("li");
    if (data) {
        data.remove();
    }
}

function toggleStrikethrough(e) {
    const listItem = e.target.closest("li");
    
        if (e.target.checked) {
            listItem.style.textDecoration = "line-through";
            listItem.style.backgroundColor="grey";
            listItem.style.color="red";
        } else {
            listItem.style.textDecoration = "none";
        }
    
}

function addData(e) {

    if(input.value!=""){
        e.preventDefault();
        const listItem = document.createElement("li");
        listItem.innerHTML = `
            <input type="checkbox">
            <span>${input.value}</span>
            <div class="delete">
                <i class="fas fa-trash-can trash" style="color: black;"></i>
            </div>
        `;
        ul.appendChild(listItem);
        input.value = "";

        const deleteIcon = listItem.querySelector(".delete i");
        deleteIcon.addEventListener("click", removeTask);
    
    }
   

 

    // Add an event listener to the trash icon in the newly created list item
  
    // Add an event listener to the checkbox in the newly created list item
    const checkbox = document.querySelector("input[type='checkbox']");
    checkbox.addEventListener("change", toggleStrikethrough);
}

add.addEventListener("click", addData);

// Add an event listener to existing checkboxes
 ul.addEventListener("change", function (e) {
     if (e.target.tagName === "INPUT" && e.target.type === "checkbox") {
         toggleStrikethrough(e);
     }
 });
