import { renderProjects } from "../todo/render";
import { inputProject } from "../dom";

function checkDuplicateProj() {
    const getProjects = document.querySelectorAll('user-projects')
    console.log(getProjects);
}

export function addNewProj (e) {
    if (e.keyCode === 13) {
    checkDuplicateProj();
    console.log('enter input project working');
    renderProjects()
    inputProject.value = ''
    }
}

// export function createProjects(projects) {
    
// } 