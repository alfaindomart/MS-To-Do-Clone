import { clickImportant, todoContainer, checkTheBox, checkBoxes, starBtns, projectsContainer, projTitleMain, inputContainer, deleteTodoBtns, clickDelete} from "../dom";
import { allTodos } from "../JSON/storage";
import { filterCompleted, filterImportant, filterUncomplete, filterProjectOf } from "../projects/filter";
import { currentProject } from "../projects/projects";
/// Render todo
    //create elements from available todos in allTodos array

 export function renderTodo(todos) {

        todoContainer.innerHTML = '';

        todos.forEach((todo, index) => {
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

            if (todo.checked === true) {
                todoDiv.classList.add('completed');
                checkbox.classList.add('completed');
            } 
        
            starContainer.appendChild(starCheckbox);
            starContainer.appendChild(delBtn);
    
            todoDiv.appendChild(checkbox);
            todoDiv.appendChild(taskDiv);
            todoDiv.appendChild(starContainer);
        
            todoContainer.appendChild(todoDiv);
            }
        })

        //add classname and click event to newly created checkbox and important btns elements
        checkBoxes = document.getElementsByClassName("check");
        starBtns = document.getElementsByClassName("star");
        deleteTodoBtns = document.getElementsByClassName("delete-btn");
        clickImportant();
        checkTheBox();
        clickDelete();
    }

    //create elements from allTodos array for primary projects
export function renderPrimaryTodo(todos) {
    todoContainer.innerHTML = '';

        todos.forEach((todo, index) => {
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

            if (todo.checked === true) {
                todoDiv.classList.add('completed');
                checkbox.classList.add('completed');
            } 
        
            starContainer.appendChild(starCheckbox);
            starContainer.appendChild(delBtn);
    
            todoDiv.appendChild(checkbox);
            todoDiv.appendChild(taskDiv);
            todoDiv.appendChild(starContainer);
        
            todoContainer.appendChild(todoDiv);
            })

        //add classname and click event to newly created checkbox and important btns elements
        checkBoxes = document.getElementsByClassName("check");
        starBtns = document.getElementsByClassName("star");
        deleteTodoBtns = document.getElementsByClassName("delete-btn");
        clickImportant();
        checkTheBox();
        clickDelete();

}


/// Render the primary project's content when clicked

export let primaryState = true;

export function renderPrimary(e) {

    const target = e.target
    const primaryTarget = target.closest('.primary')
    const primaryName = primaryTarget.innerHTML

    primaryState = true

    //check clicked primary name
    console.log(primaryName)

    switch (primaryName) {
        case "All": {
            currentProject = "Tasks"
            console.log(currentProject)
            projTitleMain.innerText = primaryName;
            todoContainer.innerHTML = '';
            const renderAll = allTodos.filter(filterUncomplete);
            renderPrimaryTodo(renderAll);
        }
        break;
        case "Completed": {
            projTitleMain.innerText = primaryName;
            const renderCompleted = allTodos.filter(filterCompleted);
            renderPrimaryTodo(renderCompleted);
            inputContainer.style.display = "none"
        }
        break;
        case "Important": {
            currentProject = "Tasks"
            console.log(currentProject)
            projTitleMain.innerText = primaryName;
            const renderImportant = allTodos.filter(filterImportant);
            renderPrimaryTodo(renderImportant);
        }
        break;
        case "Tasks": {
            currentProject = "Tasks"
            console.log(currentProject)
            projTitleMain.innerText = primaryName;
            const renderTasks = allTodos.filter(filterProjectOf);
            renderPrimaryTodo(renderTasks);
        }
    }

    if (primaryName !== "Completed") {
        inputContainer.style.display = "block";
    }

    return primaryState;
}

//create element for new user's project
export function renderNewProjects(allCustProjects) {

    todoContainer.innerHTML = ''
    projTitleMain.innerText = ''
    projectsContainer.innerHTML = ''

    allCustProjects.forEach((customProject) => {
        
        console.log(customProject)
        console.log(allCustProjects)

        const projectDiv = document.createElement('div');
        projectDiv.classList.add('user-projects');
        projectDiv.textContent = customProject.projectName;
        projectDiv.dataset.projIndex = customProject.index;

        projTitleMain.textContent = customProject.projectName;

    
        projectsContainer.appendChild(projectDiv);
    })   
}

//render the clicked custom project and its todos
export function renderClickedProj() {
    projTitleMain.innerText = currentProject;
    todoContainer.innerHTML = '';
    
    const renderProjectOf = allTodos.filter(filterProjectOf);
    renderTodo(renderProjectOf);
}