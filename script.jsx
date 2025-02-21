import { createStore } from 'redux'
import taskReducer from "./taskReducer"
import { addTask, removeTask, toggleTask, calculateTotalTasks } from "./actions"

const store = createStore(taskReducer)

store.subscribe(() => {
    updateTaskList()
})

const nameHTML = document.querySelector("#name")
const descriptionHTML = document.querySelector("#description")
const addTaskBtn = document.querySelector("#addTask")
const removeTaskIdHTML = document.querySelector("#removeTaskId")
const removeTaskBtn = document.querySelector("#removeTask")
const taskListHTML = document.querySelector("#taskList")
const totalTasksHTML = document.querySelector("#totalTasks")

const addTaskHandler = () => {
    if(!nameHTML.value || !descriptionHTML.value){
        alert("Please add Task name and description")
        return
    }
    const task = {
        name: nameHTML.value,
        description: descriptionHTML.value,
        completed: false
    }
    store.dispatch(addTask(task))
    nameHTML.value = ""
    descriptionHTML.value = ""
}

const removeTaskHandler = () => {
    if(!removeTaskIdHTML.value){
        alert("Please enter task ID to be removed.")
        return
    }
    store.dispatch(removeTask(parseInt(removeTaskIdHTML.value)))
    removeTaskIdHTML.value = ""
}

window.toggleTaskHandler = (taskId) => {
    store.dispatch(toggleTask(taskId))
}

addTaskBtn.addEventListener("click", () => addTaskHandler())

removeTaskBtn.addEventListener("click", () => removeTaskHandler())

const updateTaskList = () => {
    const state = store.getState()
    taskListHTML.innerHTML = state.tasks.map(
        task => 
            `<li>
                <input type="checkbox" onClick="toggleTaskHandler(${task.id})" ${task.completed ? "checked" : ""}/>
                    ${task.name}: ${task.description} ${task.completed ? ": Completed" : ""}
            </li>`
    ).join("")
    totalTasksHTML.textContent = `Total Tasks: ${state.totalTasks}`
}