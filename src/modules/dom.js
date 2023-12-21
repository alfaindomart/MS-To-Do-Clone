import { renderPrimary } from "./todo/render";
import { getInput, setImportant } from "./todo/todo";
import { checked } from "./todo/todo";

//todo container DOM - export to render
export const todoContainer = document.getElementById("todo-container")

//Primary projects DOM
const primary = document.getElementById("primary");
    const myDay = document.getElementById("my-day");
    const important = document.getElementById("important");
    const all = document.getElementById("all");
    const completed = document.getElementById("completed");
    const tasks = document.getElementById("tasks");

//input dom
export const inputTask = document.getElementById("input-task");

//todo DOM
export let checkBoxes = document.getElementsByClassName("check");
export let starBtns = document.getElementsByClassName("star");
let deleteTodoBtn = document.getElementsByClassName("delete-btn");

//handle checkbox event
export function checkTheBox() {
    Array.from(checkBoxes).forEach(checkBox => {checkBox.addEventListener('change', checked)
    });
}

//handle primary projects event
export const clickPrimary = primary.addEventListener('click', renderPrimary)

//handle input Todo event
export function enterInput (){inputTask.addEventListener("keydown", getInput);}

//handle Important button event
export function clickImportant() {
    Array.from(starBtns).forEach(starBtn => {starBtn.addEventListener('click', setImportant)
})
}
