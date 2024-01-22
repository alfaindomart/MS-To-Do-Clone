//all projects/todo array
export let allProjects = localStorage.getItem("todos") ? 
                    JSON.parse(localStorage.getItem("todos")) : [];

export let allCustom = localStorage.getItem("projects") ?
                    JSON.parse(localStorage.getItem('projects')) : [];

export function inputStorage (projcts) {
    localStorage.setItem("todos", JSON.stringify(projcts))
}

export function storeUserProjs (input) {
    localStorage.setItem("projects", JSON.stringify(input))
}

// export function modifyStorageValue (index, value) {
//     let modifiedKey = localStorage.getItem("todos") ?
//         JSON.parse(localStorage)
// }