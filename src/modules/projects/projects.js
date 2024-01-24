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

export let currentProject;

export function switchProject(e) {
    //deactivate all projects
    allCustom.forEach(element => element.active = false)

    //get clicked project
    const clickedProject = e.target
    const clickedProjClosest = clickedProject.closest('.user-projects')
    const clickedProjIndex = clickedProjClosest.dataset.projIndex
    const projActiveState = allCustom[clickedProjIndex]

    //change the clicked project's state to active and update change to storage
    projActiveState.active = true
    storeUserProjs(projActiveState)
    
    //set active as current project so it can be used in other code
    currentProject = projActiveState.projectName
    console.log(allCustom)
    return {
        currentProject
    }
}