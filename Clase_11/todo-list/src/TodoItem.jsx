import {useState} from 'react';


const TodoItem = ({id, todo, completed, handleChangeCompletedTodo, deleteTodo, editTodo}) => {
    const [isEditing, setIsEditing] = useState(false)
    const [editedTodo, setEditedTodo] = useState(todo)

    const handleSaveTodo = () => {
        editTodo(id, editedTodo);
        setIsEditing(false);
    }

    if ( isEditing ) {
        return (
            <div className="todo">
                <input 
                    type="text" 
                    value={editedTodo} 
                    onChange={(e) => setEditedTodo(e.target.value)}
                />
                <button onClick={() => setIsEditing(false)}>Cancel</button>
                <button onClick={() => handleSaveTodo()}>Save</button>
            </div>
        )
    }

    return (
        <div className="todo">
            <label htmlFor={`todo-${id}`}>{todo}</label>
            <div className="actions">
                <button onClick={() => setIsEditing(true)}> Edit </button>
                <button onClick={() => deleteTodo(id)}> Remove </button>
                <input 
                    type="checkbox" 
                    id={`todo-${id}`}
                    checked={completed}
                    onChange={() => handleChangeCompletedTodo(id)}
                />
            </div>
        </div>
    )
}

export default TodoItem
