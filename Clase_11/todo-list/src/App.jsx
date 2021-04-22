import TodoItem from "./TodoItem"
import Form from "./Form"
import {useState, useEffect} from "react";

const FILTER_MAP = {
  All: () => true,
  Active: (todo) => !todo.completed,
  Completed: (todo) => todo.completed
}

const filterkeys = Object.keys(FILTER_MAP);


const initialState = JSON.parse(localStorage.getItem("todos") || "[]" )
const initialFilter = localStorage.getItem("filter") || "All";

function App() {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState(initialFilter);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos]);

  useEffect(() => {
    localStorage.setItem("filter", filter);
  }, [filter])
  const handleChangeCompletedTodo = ( id ) => {
    const newTodos = todos.map(todo => {
      if (todo.id === id) {
        return {...todo, completed: !todo.completed}
      } else {
        return todo
      }
    });
    setTodos(newTodos)
  }

  const deleteTodo = (id) => {
    const newTodos = todos.filter(todo => todo.id !== id);
    setTodos(newTodos);
  }

  const editTodo = (id, todop) => {
    const newTodos = todos.map( (todoItem) => {
      if ( todoItem.id === id ) return {...todoItem, todo: todop};
      else return todoItem;
    });
    setTodos(newTodos)
  }

  return (
    <>
        <main>
          <h1 id="title">Tasks to do</h1>
          <Form todos={todos} setTodos={setTodos}/>
          <section id="filters">
            {filterkeys.map(filterkey => <button key={filterkey} onClick={() => setFilter(filterkey) }>{filterkey}</button>)}
          </section>
          <section id="todo-list">
            {todos.length > 0 ? 
            todos.filter(FILTER_MAP[filter]).map(({id, todo, completed}) => (
              <TodoItem 
                key={id} 
                id={id} 
                todo={todo} 
                completed={completed}
                handleChangeCompletedTodo={handleChangeCompletedTodo}
                deleteTodo={deleteTodo}
                editTodo={editTodo}
              />

            )) : <h3>No pending tasks 🥳</h3>
          
            }
          </section>
        </main>
    </>
  );
}

export default App;
