import { renderProjects } from "../todo/render";
import { inputProject } from "../dom";
import { allCustom, storeUserProjs } from "../JSON/storage";

function checkDuplicateProj() {
    console.log(allCustom)
    let duplicateNum = 1
    let originalProjectName = inputProject.value;
    while (allCustom.some(e => e.projectName === inputProject.value)) {
        inputProject.value = originalProjectName + `(${duplicateNum++})`
    };
}

export function addNewProj (e) {
    if (e.keyCode === 13) {
    checkDuplicateProj();
    allCustom.push(createCustomProjects(inputProject.value));
    activateNewProject();
    storeUserProjs(allCustom);
    console.log(allCustom);
    renderProjects(allCustom);
    inputProject.value = '';
    }
}

let projectIndex = 0

export function createCustomProjects(projectName) {
    return {
        projectName,
        icon: null,
        active: true,
        index: projectIndex++
    }
}

function activateNewProject() {
    allCustom.forEach(e => {
        if (e.projectName !== inputProject.value) {
            e.active = false;
        }
    });
}

export function switchProject(e) {
    allCustom.forEach(element => element.active = false)
    const clickedProject = e.target
    const clickedProjClosest = clickedProject.closest('.user-projects')
    console.log(clickedProject)
    const clickedProjIndex = clickedProjClosest.dataset.projIndex
    console.log(clickedProjIndex)
    const projActiveState = allCustom[clickedProjIndex]
    projActiveState.active = true
    storeUserProjs(projActiveState)
    console.log(allCustom)
}

function activateClickedProj() {
    //activate clicked project and deactivate all other projects in the storage
    
}