export const ADD_TASK = "task/added" 
export const REMOVE_TASK = "task/removed" 
export const TOGGLE_TASK = "task/toggle" 
export const CALCULATE_TOTAL_TASKS = "totalTask/calculate"

export const addTask = (task) => ({
    type: "ADD_TASK",
    payload: task
})

export const removeTask = (taskId) => ({
    type: "REMOVE_TASK",
    payload: taskId
})

export const toggleTask = (task) => ({
    type: "TOGGLE_TASK",
    payload: task
})

export const calculateTotalTasks  = () => ({
    type: "CALCULATE_TOTAL_TASKS"
})