import { clickImportant, todoContainer, checkTheBox, checkBoxes, starBtns, projectContainer, projTitleMain } from "../dom";
import { allProjects, allCustom } from "../JSON/storage";
import { filterCompleted, filterImportant, filterUncomplete, filterProjectOf } from "../projects/filter";
import { currentProject } from "../projects/projects";
/// Render todo
    //render the inputted todo in all
 export function renderTodo(filtereds) {

        // const todoContainer = document.getElementById("todo-container");
        todoContainer.innerHTML = '';

        filtereds.forEach((todo, index) => {
            if (todo.projectOf === currentProject) {
            const todoDiv = document.createElement('div');
            todoDiv.classList.add('todo');
            todoDiv.dataset.todoIndex = index;
        
            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.classList.add('check');
            checkbox.checked = todo.checked;
        
            const taskDiv = document.createElement('div');
            taskDiv.classList.add('task');
            taskDiv.textContent = todo.task;
    
            const starContainer = document.createElement('div');
        
            const starCheckbox = document.createElement('input');
            starCheckbox.type = 'checkbox';
            starCheckbox.classList.add('star');
    
            const delBtn = document.createElement('div');
            delBtn.classList.add('delete-btn');
            delBtn.innerHTML = 'X';
            delBtn.style.color = 'red';
        
            starContainer.appendChild(starCheckbox);
            starContainer.appendChild(delBtn);
    
            todoDiv.appendChild(checkbox);
            todoDiv.appendChild(taskDiv);
            todoDiv.appendChild(starContainer);
        
            todoContainer.appendChild(todoDiv);
            }
        })
        checkBoxes = document.getElementsByClassName("check");
        starBtns = document.getElementsByClassName("star");
        clickImportant();
        checkTheBox();
    }

/// Render the primary projects

export function getCurrentProject(e) {
    // const currentProjectBaru = h1

    // const currentProject = e.target.id;
    // const isPrimary = e.target.nodeName === 'DIV';

    // return {currentProject, isPrimary};
}


export function renderPrimary() {

    if (!isPrimary) {
        console.log('not primary or custom projects')
        return;
    }

    switch (currentProject) {
        case "All": {
            console.log(currentProject)
            const renderAll = allProjects.filter(filterUncomplete);
            console.log(renderAll)
            renderTodo(renderAll, currentProject);
        }
        break;
        case "Completed": {
            console.log(currentProject)
            const renderCompleted = allProjects.filter(filterCompleted);
            console.log(renderCompleted)
            renderTodo(renderCompleted, currentProject);
        }
        break;
        case "Important": {
            const renderImportant = allProjects.filter(filterImportant);
            renderTodo(renderImportant, currentProject);
        }
        break;
    }
}

export function renderNewProjects(allCustProjects) {

    projectContainer.innerHTML = ''
    projTitleMain.innerText = ''

    allCustProjects.forEach((customProject) => {
        const projectDiv = document.createElement('div');
        projectDiv.classList.add('user-projects');
        projectDiv.textContent = customProject.projectName;
        projectDiv.dataset.projIndex = customProject.index;

        projTitleMain.textContent = customProject.projectName;
    
        projectContainer.appendChild(projectDiv);
    })   
}

export function renderClickedProj() {
    projTitleMain.innerText = currentProject;
    todoContainer.innerHTML = '';
    
    const renderProjectOf = allProjects.filter(filterProjectOf);
    renderTodo(renderProjectOf);
}