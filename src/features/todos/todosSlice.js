import { createSlice } from "@reduxjs/toolkit";
//import { createStore } from "redux";

const initTodos = [
    {
      name: 'Call my mum',
      dueDate: new Date().toLocaleString(),
      user_id: 1
    },
    {
      name: 'Go to school',
      dueDate: new Date().toLocaleString(),
      user_id: 1
    },
    {
      name: 'Do my homework',
      dueDate: new Date().toLocaleString(),
      user_id: 1
    }
  ]
export const todosSlice = createSlice({
    name: 'todos',
    initialState: initTodos,
    reducers: {
        addTodo(state, action){
            state.push(action.payload)
        },
        removeTodo(state, action){
            const newList = state.filter((item) => item.name !== action.payload.name);
            return newList
        }
    }
});
const {actions, reducer} = todosSlice;
export const {addTodo, removeTodo} = actions;
export default reducer;