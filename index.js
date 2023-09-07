const inputField = document.querySelector('input[type = "text"]');
const addButton = document.querySelector("button");
const todoList = document.querySelector(".to-do-list");

addButton.addEventListener("click", () => {
  const listValue = inputField.value;

  const listElement = document.createElement("li");

  listElement.textContent = listValue;

  todoList.appendChild(listElement);
  inputField.value = " ";
});
