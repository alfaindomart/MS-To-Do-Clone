import { renderNewProjects, primaryState } from "../todo/render";
import { inputProject, inputContainer } from "../dom";
import { allProjects, storeUserProjs } from "../JSON/storage";

//give number to projectName if the same name exist in allProjects array
function checkDuplicateProj() {
    let duplicateNum = 1
    let originalProjectName = inputProject.value;
    while (allProjects.some(e => e.projectName === inputProject.value)) {
        inputProject.value = originalProjectName + `(${duplicateNum++})`
    };
};

//when user press enter, check any duplicate project, push the input to allProjects array,
//activate new project and deactivate others, update the storage, render new projects
export function addNewProj (e) {
    if (e.keyCode === 13) {
    checkDuplicateProj();
    allProjects.push(createCustomProjects(inputProject.value));
    activateNewProject();
    storeUserProjs(allProjects);
    console.log(allProjects);
    renderNewProjects(allProjects);
    console.log(currentProject);
    inputContainer.style.display = "block";
    inputProject.value = '';
    }
}

//create project's object

let projectIndex = 0

export function createCustomProjects(projectName) {
    return {
        projectName,
        icon: null,
        active: true,
        index: projectIndex++
    }
}

//activate newly created project and deactivate other projects
function activateNewProject() {
    allProjects.forEach(e => {
        if (e.projectName !== inputProject.value) {
            e.active = false;
        }
    });
    setCurrentProject()
}

//set current project state
export let currentProject;

//event for when user click user's projects
export function switchProject(e) {
    //deactivate all projects
    allProjects.forEach(element => element.active = false)

    //get clicked project
    const clickedProject = e.target
    const clickedProjClosest = clickedProject.closest('.user-projects')
    const clickedProjIndex = clickedProjClosest.dataset.projIndex
    const projActiveState = allProjects[clickedProjIndex]

    //change the clicked project's state to active and update change to storage
    projActiveState.active = true
    storeUserProjs(projActiveState)
    
    //look for active project and set it as currentProject
    setCurrentProject()

    inputContainer.style.display = "block";

}

function setCurrentProject() {
    allProjects.forEach(e => {
        if (e.active === true) {
            currentProject = e.projectName;
            primaryState = false
        }
    })
    return {currentProject, primaryState}
}