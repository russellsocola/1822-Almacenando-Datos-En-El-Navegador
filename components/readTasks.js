import { createTask } from "./addtask.js";
import dateElement  from "./dateElement.js";

export const readTasks = () => {
    const list = document.querySelector('[data-list]');

    const taskList = JSON.parse(localStorage.getItem('tasks')) || [];
    
    taskList.forEach((task) => {
        list.appendChild(dateElement(task.dateFormat));
        list.appendChild(createTask(task));
    });
}