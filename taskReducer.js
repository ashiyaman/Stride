import { ADD_TASK, REMOVE_TASK, TOGGLE_TASK, CALCULATE_TOTAL_TASKS } from './actions.js'

const initialState = {tasks: [], totalTasks: 0}

const taskReducer = (state = initialState, action) => {    
    switch(action.type){
        case ADD_TASK:
            const numOfTasks = state.tasks.length
            return {
                ...state, 
                tasks: [...state.tasks, {...action.payload, id: numOfTasks + 1}],
                totalTasks: numOfTasks + 1
            }
        case REMOVE_TASK:
            return {
                ...state, 
                tasks: state.tasks.filter(task => task.id !== action.payload),
                totalTasks: state.tasks.length - 1
            }
        case TOGGLE_TASK:
            return {
                ...state,
                tasks: [...state.tasks.map(
                    task => {
                        return task.id === action.payload ? 
                        {
                            ...task,
                            completed: (task.id === action.payload) ? !task.completed : task
                        } : 
                        {
                            ...task
                        }}
                    )]
            }
        default:
            return state
    }
}

export default taskReducer