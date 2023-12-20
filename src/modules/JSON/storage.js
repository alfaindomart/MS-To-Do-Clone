//all projects/todo array
export let allProjects = localStorage.getItem("todos") ? 
                    JSON.parse(localStorage.getItem("todos")) : [];

export function inputStorage (projcts) {
    localStorage.setItem("todos", JSON.stringify(projcts))
}

// export function modifyStorageValue (index, value) {
//     let modifiedKey = localStorage.getItem("todos") ?
//         JSON.parse(localStorage)
// }