import { FETCH_ALL_TODOS, ADD_NEW_TODO, UPDATE_TODO, DELETE_TODO, COMPLETE_TODO } from './todoTypes';
import { initialState } from '../../services/initialState';

const todoReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_NEW_TODO:
            const new_todo = action.payload;
            return {todos: [...state.todos, new_todo]};
        
        case DELETE_TODO:
            const filtered_todo = state.todos.filter(todo => todo.todo_id !== action.payload);

            return {todos: [...filtered_todo]}

        case COMPLETE_TODO:
            const mapped_completed_todos = state.todos.map(todo => (
                todo.todo_id === action.payload ? {...todo, status: 'Completed'} : {...todo}
                ));
                
                console.log("%c Line:17 🥤 mapped_completed_todos", "color:#ed9ec7", mapped_completed_todos);
            return {todos: [...mapped_completed_todos]};
        
        case UPDATE_TODO:
            const mapped_updated_todos = state.todos.map(todo => (
                todo.todo_id === action.payload ? {...action.payload} : {...todo}
            ))

            return {todos: [...mapped_updated_todos]}
        
        default: return state;
    }
}

export default todoReducer