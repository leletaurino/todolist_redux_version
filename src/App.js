import React, { useRef } from 'react'; // useEffect, useState, 
import './App.css';
import { useSelector, useDispatch } from "react-redux";
import { addTodo } from "./features/todos/todosSlice";
import {Todos} from './features/Todos';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faMinusCircle } from '@fortawesome/free-solid-svg-icons'

// const initTodos = [
//   {
//     name: 'Call my mum',
//     dueDate: new Date().toLocaleString(),
//     user_id: 1
//   },
//   {
//     name: 'Go to school',
//     dueDate: new Date().toLocaleString(),
//     user_id: 1
//   },
//   {
//     name: 'Do my homework',
//     dueDate: new Date().toLocaleString(),
//     user_id: 1
//   }
// ]

function App() {
  // const [todos, setTodos] = useState([])
  // useEffect(() => {
  //   setTodos(initTodos);

  //   return () => {

  //   }
  
  // }, []);


  const todos = useSelector(state => {
    return state.todos
  })

  const dispatch = useDispatch()

  const todoEl = useRef('')

  const manageClick = (e) =>{
    e.preventDefault();
    let newValue = todoEl.current.value;
    if(newValue !== '' && checkTodos(newValue)) {
      dispatch( addTodo({name: newValue, dueDate: new Date().toLocaleString(), user_id: 1}))
    } else {
      alert('Please enter a correct value')
    }
  }

  const checkTodos = (val) => {

    for(let t in todos){
      if(todos[t].name === val){
        return false
      }
    }
    return true
  }

  return (
    <div className="App container-fluid">
      <div className='row d-flex justify-content-center'>
          <div className='col-md-6'>
          <h1> MY TODO</h1>

            <form>
              <div className='form-group'>
                <input ref={todoEl} className='form-field' name="todo" id="todo" />
                <button onClick={manageClick} className='m-1 btn btn-success'>ADD</button>
              </div>
            </form>
            <Todos todos={todos}/>
          </div>
      </div>
    </div>
  );
}
// const matchStateToProps = (state) => {
//   return {todos: [...state]}
// }
// const mapDispatchToProps = (dispatch) =>{
//   return {
//     addTodo: name => dispatch(addTodo(name)),
//     removeTodo: todo => dispatch(removeTodo(todo))
//   }
// }

//const createConnector = connect(matchStateToProps, mapDispatchToProps);
export default App; //createConnector(App);
