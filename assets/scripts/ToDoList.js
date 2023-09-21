// Находим необходимые элементы DOM и записываем в переменные
const input = document.querySelector(".input-text");
const button = document.querySelector(".button");
const taskList = document.querySelector(".task-list");

// Создаем функцию createTask(). Внутри функции:
const createTask = () => {
  const newTask = document.createElement("li"); // Создаем новый элемент списка с помощью метода (createElement)
  newTask.textContent = input.value; // Присваиваем текст из поля ввода в качестве содержимого новой задачи (textContent)
  taskList.append(newTask); // Добавляем новую задачу в список с помощью метода (append)
  input.value = ""; // Очищаем поле ввода
};

// Создаем функцию checkTask(). Внутри функции:
// Проверяем, что кликнули на элемент списка (event.target)
// Если условие выполняется, то переключаем состояние выполнения задачи, добавляя или удаляя класс у элемента списка (element.classList.toggle)
const checkTask = (evt) => {
  if (evt.target.tagName === "LI") {
    evt.target.classList.toggle("check");
  }
};

// Добавляем функцию-обработчик к событию клика на кнопку (addEventListener)
button.addEventListener("click", createTask);
// Добавляем функцию-обработчик к событию клика на список задач (addEventListener)
taskList.addEventListener("click", checkTask);
