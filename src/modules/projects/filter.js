// export function filterCompleted(todos) {
//     if (todos.checked) return true; else return false 
// }

export function filterCompleted(todos) {
    return todos.checked;
}

export function filterUncomplete(todos) {
    return !todos.checked;
}

