import React from 'react';

function TodoItem({ todo, toggleComplete, deleteTodo }) {
    return (
        <li className={`todo-item ${todo.completed ? 'completed' : ''}`}>
            <div className="todo-text-container" onClick={() => toggleComplete(todo.id)}>
                <input
                    type="checkbox"
                    checked={todo.completed}
                    onChange={() => toggleComplete(todo.id)}
                    className="todo-checkbox"
                />
                <span className="todo-text">{todo.text}</span>
            </div>
            <button
                className="delete-button"
                onClick={() => deleteTodo(todo.id)}
            >
                Delete
            </button>
        </li>
    );
}

export default TodoItem;