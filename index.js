const inputField = document.querySelector('input[type = "text"]');
const addButton = document.querySelector("button");
const todoList = document.querySelector(".to-do-list");

addButton.addEventListener("click", () => {
  const listValue = inputField.value;

  const listElement = document.createElement("li");

  listElement.textContent = listValue;
  if ((listValue = " ")) {
    return;
  }
  todoList.appendChild(listElement);
  inputField.value = " ";
});
todoList.addEventListener("click", (e) => {
  if (e.target.tagName === "LI") {
    e.target.remove();
  }
});
