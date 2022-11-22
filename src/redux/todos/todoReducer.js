import { FETCH_ALL_TODOS, ADD_NEW_TODO, UPDATE_TODO, DELETE_TODO, COMPLETE_TODO } from './todoTypes';
import { initialState } from '../../services/initialState';

const todoReducer = (state = initialState, action) => {
    console.log("%c Line:5 🥝 state", "color:#ed9ec7", state);
    switch(action.type) {
        case ADD_NEW_TODO:
            const new_todo = action.payload;
            console.log("%c Line:8 🍑 new_todo", "color:#7f2b82", new_todo);
            return {todos: [...state.todos, new_todo]};
        
        case DELETE_TODO:
            const filtered_todo = state.todos.filter(todo => todo.id !== action.payload);

            return {todos: [...filtered_todo]}

        case COMPLETE_TODO:
            const mapped_completed_todos = state.todos.map(todo => (
                todo.id === action.payload ? {...todo, status: 'Completed'} : {...todo}
            ));

            return {todos: [...mapped_completed_todos]};
        
        case UPDATE_TODO:
            const mapped_updated_todos = state.todos.map(todo => (
                todo.id === action.payload ? {...action.payload} : {...todo}
            ))

            return {todos: [...mapped_updated_todos]}
        
        default: return state;
    }
}

export default todoReducer