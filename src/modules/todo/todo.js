import moment from 'moment';
import { allTodos } from '../JSON/storage';
import { get } from 'lodash';
import { renderTodo, primaryState, renderPrimaryTodo} from './render';
import { inputTask } from '../dom';
import { inputStorage } from '../JSON/storage';
import { currentProject } from '../projects/projects';

//store todo to allTodos storage and render the new todo when user press enter in input box
export function getInput(e) {
    if (e.keyCode === 13 && !primaryState) {
    allTodos.push(createTodo(inputTask.value, currentProject));
    inputStorage(allTodos);
    console.log(`getInput - allTodos is: ${JSON.stringify(allTodos)}`);
    renderTodo(allTodos);
    inputTask.value = '';
    }

    else if (e.keyCode === 13 && primaryState) {
    allTodos.push(createTodo(inputTask.value, currentProject));
    inputStorage(allTodos);
    renderPrimaryTodo(allTodos);
    inputTask.value = '';
    }
}

///handle todo object


    //create todo

    let todoIndex = 0;

export function createTodo(task, projectOf) {


    return {
    task,
    creationDate : moment().format("[Created on] ddd, MMM D"),
    important: false,
    checked: false,
    dueDate: null,
    index: todoIndex++,
    projectOf,
    }
}

    //change selected todo.checked to true when user check the checkbox
export function checked(e) {
        const target = e.target;
        const clickedTodo = target.closest('.todo');
        const clickedTodoIdx = clickedTodo.dataset.todoIndex;

        let todoChecked = allTodos[clickedTodoIdx];
        console.log(todoChecked);
        todoChecked.checked = target.checked;

        localStorage.setItem("todos", JSON.stringify(todoChecked))
    }

    //delete todo from storage and frontend
export function deleteTodo(e) {
    const target = e.target;
    const delTodo = target.closest('.todo');
    const delTodoIdx = delTodo.dataset.todoIndex;
    console.log(delTodoIdx);
}

    //set todo as important
export function setImportant(e) {
    const target = e.target;
    const closestTodo = target.closest('.todo');
    const importantTodoIdx = closestTodo.dataset.todoIndex;
    const importantTodo = allTodos[importantTodoIdx];

    importantTodo.important = target.checked;

    localStorage.setItem("todos", JSON.stringify(importantTodo));
}  