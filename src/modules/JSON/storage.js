//get and parse todo and projects array if exist, return empty array if not
export let allTodos = localStorage.getItem("todos") ? 
                    JSON.parse(localStorage.getItem("todos")) : [];

export let allProjects = localStorage.getItem("projects") ?
                    JSON.parse(localStorage.getItem('projects')) : [];

//convert input to string and store to local storage
export function inputStorage (projcts) {
    localStorage.setItem("todos", JSON.stringify(projcts))
};

export function storeUserProjs (input) {
    localStorage.setItem("projects", JSON.stringify(input))
};