import React from 'react';
import { removeTodo } from "./todos/todosSlice";
import Todo from './todos/Todo';

export const Todos = ({todos}) => {

    return (
        <>
            <ul className="list-group list-group-flush">
              {todos.map(todo => 
                <Todo key={todo.name} todo={todo} removeTodo = {removeTodo}/>
                             
              )}

            </ul>
        </>
    )
};
