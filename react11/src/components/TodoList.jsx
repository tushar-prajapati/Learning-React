import React from 'react'
import { useState } from 'react'

const TodoList = () => {
    const [todos, setTodos] = useState([]);
    function addTodo(e){
        e.preventDefault();
        const todo = document.getElementById('todoInput').value;
        setTodos([...todos,todo]);
        document.getElementById('todoInput').value = '';
    }
  return (
    <div>Todos:
        {todos.map((todo)=>(
            <li key={Math.random()}>{todo}</li>
        ))}
        <form action="">
            <input type="text" placeholder='Enter Todo' id='todoInput' />
            <button onClick={addTodo}>Add Todo</button>
        </form>
    </div>
  )
}

export default TodoList