const redux = require("redux");

// actions
const ADD_TODO = "ADD_TODO";
const TOGGLE_TODO = "TOGGLE_TODO";

// Action creators
const addTodo = (text) => ({ text, type: ADD_TODO });
const toggleTodo = (index) => ({ index, type: TOGGLE_TODO });

// initial state
const initialState = {
  todos: [],
};

// Reducer function must return updated state
function todoReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            text: action.text,
            completed: false,
          },
        ],
      };
    case TOGGLE_TODO:
      return {
        ...state,
        todos: state.todos.map((todo, i) => {
          if (i === action.index) {
            return {
              ...todo,
              completed: !todo.completed,
            };
          }
          return todo;
        }),
      };
    default:
      return state;
  }
}

// creating store
const store = redux.createStore(todoReducer);

// dispatch actions
store.dispatch(addTodo("hello"));
store.dispatch(toggleTodo(0));

// read data from store
console.log(store.getState());
