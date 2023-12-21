import { clickImportant, todoContainer, checkTheBox, checkBoxes, starBtns } from "../dom";
import { allProjects } from "../JSON/storage";
import { filterCompleted, filterImportant, filterUncomplete } from "../projects/filter";

/// Render todo
    //render the inputted todo in all
 export function renderTodo(filtereds) {
        // const todoContainer = document.getElementById("todo-container");
        todoContainer.innerHTML = '';

        filtereds.forEach((todo, index) => {
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

        })
        checkBoxes = document.getElementsByClassName("check");
        starBtns = document.getElementsByClassName("star");
        clickImportant();
        checkTheBox();
        console.log('starCheckbox');
    }

/// Render the primary projects

export function renderPrimary(e) {
    const isPrimary = e.target.nodeName === 'DIV'
    if (!isPrimary) {
        return
    }
    let currentProject = e.target.id;

    switch (currentProject) {
        case "all": {
            console.log(currentProject)
            const renderAll = allProjects.filter(filterUncomplete);
            console.log(renderAll)
            renderTodo(renderAll);
        }
        break;
        case "completed": {
            console.log(currentProject)
            const renderCompleted = allProjects.filter(filterCompleted);
            console.log(renderCompleted)
            renderTodo(renderCompleted);
        }
        break;
        case "important": {
            const renderImportant = allProjects.filter(filterImportant);
            renderTodo(renderImportant);
        }
        break;
    }
}