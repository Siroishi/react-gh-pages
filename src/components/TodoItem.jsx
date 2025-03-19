import React from 'react';

function TodoItem({ todo, onToggle, onDelete }) {
    return (
        <li>
            <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => onToggle(todo.id)}
            />
            <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
        {todo.text}
      </span>
            <button onClick={() => onDelete(todo.id)}>Видалити</button>
        </li>
    );
}

export default TodoItem;