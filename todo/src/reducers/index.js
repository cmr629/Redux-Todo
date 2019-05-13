import { ADD_TODO, DEL_TODO, COMPLETE_TODO} from '../actions';

const initialState = {todos:[]}


export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return   { todos: [...state.todos, action.payload]}

    case DEL_TODO:
      return  {...state, todos: state.todos.filter((todo, i) => action.payload !== i)};

    case COMPLETE_TODO:
      let newState = state;
      newState.todos[action.payload].completed = !newState.todos[action.payload].completed;

      return {...state, todos: newState.todos};
 

    default:
      return state;
  }
}