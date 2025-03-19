import React, { useState } from 'react';
import TodoList from './components/TodoList.jsx';
import TodoForm from './components/TodoForm.jsx';
import BookList from "./components/BookList.jsx";

function App() {
    const [todos, setTodos] = useState([]);

    const addTodo = (text) => {
        const newTodo = { id: Date.now(), text, completed: false };
        setTodos([...todos, newTodo]);
    };

    const toggleTodo = (id) => {
        setTodos(
            todos.map((todo) =>
                todo.id === id ? { ...todo, completed: !todo.completed } : todo
            )
        );
    };

    const deleteTodo = (id) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    };

    return (
        <div>
            <h1>Todo List</h1>
            <TodoForm onAdd={addTodo} />
            <TodoList todos={todos} onToggle={toggleTodo} onDelete={deleteTodo} />
        </div>
    );

    function App() {
        return (
            <div>
                <BookList />
            </div>
        );
    }


}

export default App;