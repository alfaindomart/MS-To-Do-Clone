

export function sortAlphabet(todos) {
   return todos.toSorted((a ,b) => a.task.localeCompare(b.task))
}

export function sortImportance(todoA, todoB) {
    (todoA === todoB) ? 0 : todoA ? -1 : todoB;
}