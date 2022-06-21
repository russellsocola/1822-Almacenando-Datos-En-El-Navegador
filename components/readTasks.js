import { createTask } from "./addtask.js";
import dateElement  from "./dateElement.js";
import { uniqueDate, orderDates } from "../services/date.js";

export const displayTasks = () => {
    const list = document.querySelector('[data-list]');
    const taskList = JSON.parse(localStorage.getItem('tasks')) || [];
    const dates = uniqueDate(taskList);
    orderDates(dates);
    dates.forEach((date) =>{
        const dateMoment = moment(date, 'DD/MM/YYYY');
        list.appendChild(dateElement(date));

        taskList.forEach((task) => {
            const taskDate = moment(task.dateFormat, 'DD/MM/YYYY');
            const diff = dateMoment.diff(taskDate);
            if(diff === 0){
                list.appendChild(createTask(task));
            };
        });
    });
};