import { ADD_TODO, DEL_TODO, COMPLETE_TODO} from '../actions';

const initialState = {todos:[]}


export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
    console.log(action);
      return   { todos: [...state.todos, action.payload.todo]}
    case DEL_TODO:
    console.log(action.todo)
      return  {...state, todos: state.todos.filter((todo, i) => action.payload.index !== i)};
    case COMPLETE_TODO:
      let newState = state;
      newState.todos[action.payload.index].completed = !newState.todos[action.payload.index].completed ;
      state = newState;
      return state;
    default:
      return state;
  }
}