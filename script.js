import { addTask } from "./components/addtask.js";
import { readTasks } from "./components/readTasks.js";

const btn = document.querySelector('[data-form-btn]');


//Arrow functions o funciones anonimas
btn.addEventListener('click', addTask);
readTasks();
