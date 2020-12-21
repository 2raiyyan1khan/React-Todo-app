import React from 'react';

const TodoList = ({ todoItems, markCompleteHandler }) => {

    return (
        <Todos todoItems={todoItems} markCompleteHandler={markCompleteHandler} />

    )




}
const Todos = ({ todoItems, markCompleteHandler }) => {
    return (
        <>
            {todoItems.map((item, index) => {
                return (
                    <div key={item.action} className="input-group mb-3">
                        <div className="input-group-text">
                            <input className="form-check-input bg-warning" checked={item.done} onChange={() => markCompleteHandler(index)} type="checkbox" aria-label="Checkbox for following text input" />
                        </div>
                        <input type="text" disabled className="form-control" style={{ textDecoration: item.done ? "line-through" : '' }} value={item.action} aria-label="Text input with checkbox" />
                    </div>
                )
            })}
        </>
    )
}



export default TodoList;