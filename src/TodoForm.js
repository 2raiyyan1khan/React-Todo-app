import React, { useState } from 'react';

const TodoForm = ({ addTodo }) => {
    const [todoItem, setItem] = useState('')

    const setItemHandler = (e) => {
        setItem(e.target.value)
    }

    const addTodoHandler = () => {
        if (!todoItem) {
            return
        }
        addTodo(todoItem)
        setItem('')


    }

    return (
        <div className="input-group mb-3">
            <input type="text" className="form-control form-control-lg" value={todoItem} onChange={setItemHandler} placeholder="Add todos.." aria-label="Recipient's username" aria-describedby="button-addon2" />
            <button className="btn btn-outline-warning" type="button" id="button-addon2" onClick={addTodoHandler}>Add</button>
        </div>
    );
}

export default TodoForm;