// export function filterCompleted(todos) {
//     if (todos.checked) return true; else return false 
// }

import { currentProject } from "./projects";

export function filterCompleted(todos) {
    return todos.checked;
}

export function filterUncomplete(todos) {
    return !todos.checked;
}

// export function filterMyDay(todos) {
    
// }

export function filterImportant(todos) {
    return todos.important
}

// export function filterDefaultTasks(todos) {
//     if 
// }

export function filterProjectOf(todos) {
    if (todos.projectOf === currentProject) return todos.projectOf
}