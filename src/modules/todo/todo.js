import moment from 'moment';
import { allProjects } from '../JSON/storage';
import { get } from 'lodash';
import { renderTodo } from './render';
import { inputTask } from '../dom';
import { inputStorage } from '../JSON/storage';
import { currentProject } from '../projects/projects';

//do something when press enter
export function getInput(e) {
    if (e.keyCode === 13) {
    allProjects.push(createTodo(inputTask.value, currentProject));
    inputStorage(allProjects);
    console.log(allProjects);
    renderTodo(allProjects);
    inputTask.value = '';
    }
}

///handle todo object
let todoIndex = 0;

    //create todo
export function createTodo(task, projectOf) {


    return {
    task,
    creationDate : moment().format("[Created on] ddd, MMM D"),
    important: false,
    checked: false,
    dueDate: null,
    index: todoIndex++,
    projectOf,
    // projectOf: currentProject,
    // setProjectOf: () => {
    //     switch (currentProject) {
    //         case "all":
    //         case "tasks":
    //             {
    //                 console.log(currentProject)
    //                 projectOf = "tasks"}
    //         break;
    //         case "important":
    //             {projectOf = "important"; important = true}
    //         break;
    //         case "completed":
    //             {checked = true}
    //         break;
    //     }
    //     }
    }
}

    //check the todo
export function checked(e) {
        const checkBox = e.target;
        const clickedTodo = checkBox.closest('.todo');
        const clickedTodoIdx = clickedTodo.dataset.todoIndex;
        console.log(clickedTodo);
        console.log(clickedTodoIdx);
        let modifiedCheck = allProjects[clickedTodoIdx];
        console.log(modifiedCheck);
        modifiedCheck.checked = checkBox.checked;
        localStorage.setItem("todos", JSON.stringify(modifiedCheck))
    }

    //delete todo
export function deleteTodo(e) {
    const delBtn = e.target;
    const delTodo = delBtn.closest('.todo');
    const delTodoIdx = delTodo.dataset.todoIndex;
    console.log(delTodoIdx);
}

    //set todo as important
export function setImportant(e) {
    const importantBtn = e.target;
    console.log(`importantBtn is ${importantBtn}`)
    const closestTodo = importantBtn.closest('.todo');
    console.log(`closestTodo is ${closestTodo}`)
    const importantTodoIdx = closestTodo.dataset.todoIndex;
    console.log(`importantTodoIdx is ${importantTodoIdx}`);
    const importantTodo = allProjects[importantTodoIdx];
    console.log(`importantTodo is ${importantTodo}`);
    importantTodo.important = importantBtn.checked;
    localStorage.setItem("todos", JSON.stringify(importantTodo));
}  