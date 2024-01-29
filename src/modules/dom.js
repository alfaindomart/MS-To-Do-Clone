import { renderPrimary, renderClickedProj } from "./todo/render";
import { getInput, setImportant, deleteTodo } from "./todo/todo";
import { checked } from "./todo/todo";
import { addNewProj, switchProject, currentProject} from "./projects/projects";
//todo container DOM - export to render
export const todoContainer = document.getElementById("todo-container")

//Primary projects DOM
const primaryContainer = document.getElementById("primary-container");
const primary = document.querySelectorAll(".primary");
    // const myDay = document.getElementById("my-day");
    // const important = document.getElementById("important");
    // const all = document.getElementById("all");
    // const completed = document.getElementById("completed");
    // const tasks = document.getElementById("tasks");

//Projects Dom
export const projTitleMain = document.querySelector('h1');
export const inputProject = document.getElementById("add-project");
export const projectsContainer = document.getElementById("projects-container");
export const addProjBtn = document.getElementById("add-proj-btn")

//input dom
export const inputContainer = document.getElementById("input-container")
export const inputTask = document.getElementById("input-task");

//todo DOM
export let checkBoxes = document.getElementsByClassName("check");
export let starBtns = document.getElementsByClassName("star");
export let deleteTodoBtns = document.getElementsByClassName("delete-btn");

//handle checkbox event
export function checkTheBox() {
    Array.from(checkBoxes).forEach(checkBox => {checkBox.addEventListener('change', checked)
    });
}

//handle primary projects event
export const clickPrimary = primaryContainer.addEventListener('click', renderPrimary)

//handle user's custom projects event
export const clickCustomProj = projectsContainer.addEventListener('click', (e) => {
    switchProject(e);
    renderClickedProj();
    console.log(currentProject)
});

//handle input Todo event
export function enterInput (){inputTask.addEventListener("keydown", getInput);}

//handle Important button event
export function clickImportant() {
    Array.from(starBtns).forEach(starBtn => {starBtn.addEventListener('click', setImportant)
})
}

//handle add new project event
export function enterProject () {inputProject.addEventListener('keydown', addNewProj)}


//handle delete todo event
export function clickDelete () {
    Array.from(deleteTodoBtns).forEach(deleteBtn => {deleteBtn.addEventListener('click', deleteTodo)})
}
