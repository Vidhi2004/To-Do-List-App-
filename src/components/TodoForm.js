import React, { useState } from 'react';

function TodoForm({ addTodo }) {
    const [value, setValue] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        addTodo(value);
        setValue(''); // Clear input after submission
    };

    return (
        <form className="todo-form" onSubmit={handleSubmit}>
            <input
                type="text"
                className="todo-input"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                placeholder="Add a new task..."
            />
            <button type="submit" className="add-button">Add</button>
        </form>
    );
}

export default TodoForm;