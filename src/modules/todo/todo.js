import moment from 'moment';
import { allTodos } from '../JSON/storage';
import { get } from 'lodash';
import { renderTodo, primaryState, renderPrimaryTodo} from './render';
import { inputTask } from '../dom';
import { inputStorage } from '../JSON/storage';
import { currentProject, checkProjsort, currentProjectSort } from '../projects/projects';
import { sortAlphabet } from '../projects/sort';
//store todo to allTodos storage and render the new todo when user press enter in input box
export function getInput(e) {
    if (e.keyCode === 13 && !primaryState) {
    allTodos.push(createTodo(inputTask.value, currentProject));
    inputStorage(allTodos);
    console.log(`getInput - allTodos is: ${JSON.stringify(allTodos)}`);

    checkProjsort()

    if (currentProjectSort) {
        const sortedProject = sortAlphabet(allTodos)
        console.log(sortedProject)
        renderTodo(sortedProject);
    } else if (!currentProjectSort) {renderTodo(allTodos);}

    console.log(allTodos)
    inputTask.value = '';
    }

    else if (e.keyCode === 13 && primaryState) {
    allTodos.push(createTodo(inputTask.value, currentProject));
    inputStorage(allTodos);
    checkProjsort()
    if (currentProjectSort) {
        const sortedProject = sortAlphabet(allTodos)
        console.log(sortedProject)
        renderPrimaryTodo(sortedProject);
    } else if (!currentProjectSort) {renderPrimaryTodo(allTodos);}
    console.log(allTodos)
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

        if (!primaryState) {renderTodo(allTodos)}
        else if (primaryState) {renderPrimaryTodo(allTodos)}
    }

    //delete todo from storage and frontend
export function deleteTodo(e) {
    const target = e.target;
    const delTodo = target.closest('.todo');
    const delTodoIdx = delTodo.dataset.todoIndex;
    
    console.log(delTodoIdx)
    allTodos.splice(delTodoIdx, 1);
    inputStorage(allTodos);

    if (!primaryState) {renderTodo(allTodos)}
    else if (primaryState) {renderPrimaryTodo(allTodos)}
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

//sort state