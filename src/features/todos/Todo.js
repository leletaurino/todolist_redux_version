import { useDispatch } from "react-redux";

export default function Todo({todo, removeTodo}) {

    const dispatch = useDispatch();

    return(
        <li key={todo.name} className="list-group-item">
                {todo.name}
                <button onClick={() => dispatch(removeTodo(todo))} className='btn btn-danger btn-sm'  style={{float: "right", cursor: "pointer"}}>DEL</button>
        </li>
    )
}