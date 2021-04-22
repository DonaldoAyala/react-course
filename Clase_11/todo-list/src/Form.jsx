import React from 'react'
import {useState} from 'react';
import {nanoid} from 'nanoid';

const Form = ({todos, setTodos}) => {

    const [todo, setTodo] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();
        if ( todo.length <= 0 ) return;
        setTodos([{id:nanoid(3), todo, completed: false}, ...todos]);
        setTodo("");
    }

    return (
        <form id="todo-form" onSubmit={(e) => handleSubmit(e)}>
            <input 
                type="text" 
                onChange={(e) => setTodo(e.target.value)}
                value={todo}
            />
            <button onClick={() => {}}>Add</button>
        </form>
    )
}

export default Form
