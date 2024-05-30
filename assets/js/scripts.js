function createTodoList() {
    let userInput = document.getElementById("userInput").value.trim();
  
    if (userInput === "") {
      alert("Please enter a to-do item!");
    } else {
      let todoList = document.createElement("div");
      todoList.classList.add("todo-item");
  
      let todoListInput = document.createElement("input");
      todoListInput.type = "text";
      todoListInput.value = userInput;
      todoListInput.setAttribute("readonly", "readonly");
  
      todoList.append(todoListInput);
  
      let todoStoredList = document.getElementById("todoStoredList");
      todoStoredList.append(todoList);
  
      let editBtn = document.createElement("button");
      editBtn.innerText = "Update";
      todoList.append(editBtn);
  
      let deleteBtn = document.createElement("button");
      deleteBtn.innerText = "Delete";
      todoList.append(deleteBtn);
  
      editBtn.onclick = function () {
        if (editBtn.innerText.toLowerCase() === "update") {
          todoListInput.removeAttribute("readonly");
          todoListInput.focus();
          editBtn.innerText = "Save";
        } else {
          todoListInput.setAttribute("readonly", "readonly");
          editBtn.innerText = "Update";
        }
      };
  
      deleteBtn.onclick = function () {
        todoStoredList.removeChild(todoList);
      };
  
      let checkBox = document.createElement("input");
      checkBox.type = "checkbox";
      todoList.prepend(checkBox);
  
      checkBox.onchange = function () {
        if (checkBox.checked) {
          todoListInput.style.textDecoration = "line-through";
        } else {
          todoListInput.style.textDecoration = "none";
        }
      };
  
      document.getElementById("userInput").value = "";
    }
  }
  