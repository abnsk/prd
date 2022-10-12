import React from "react";
import ReactDOM from "react-dom";
import { useDispatch } from 'react-redux'
import { createTask } from "../features/kanban/kanbanSlice";

function TaskCreator({ isOpen, onClose }) {
    if (!isOpen) return null;
    const dispatch = useDispatch();

    function handleSubmit(event) {
        event.preventDefault();
        const task = {
            board: document.querySelector("form [name='board']").value,
            title: document.querySelector("form [name='title']").value,
            score: document.querySelector("form [name='score']").value,
            priority: document.querySelector("form [name='priority']").value,
            icon: document.querySelector("form [name='icon']").value,
            code: document.querySelector("form [name='code']").value
        }

        dispatch(createTask(task));
        onClose();
    }

    return (
        <div className="modal-backdrop">
            <div className="modal">
                <div className="modal-title">
                    Create a New Task
                    <button className="producter-button btn-small" onClick={onClose}>x</button>
                </div>
                <form className="display-flex flex-column" onSubmit={handleSubmit}>

                    <div className="modal-body">
                        <label htmlFor="board">Board</label>
                        <select name="board">
                            <option>Backlog</option>
                            <option>To Do</option>
                            <option>In Progress</option>
                            <option>Test</option>
                        </select>

                        <label htmlFor="title" >Title</label>
                        <input type="text" name="title" required />

                        <label htmlFor="code">Code</label>
                        <input type="text" name="code" required />

                        <label htmlFor="score" >Score</label>
                        <input type="number" name="score" required />

                        <label htmlFor="priority">Priority</label>
                        <select name="priority">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                        </select>

                        <label htmlFor="icon">Type</label>
                        <select name="icon">
                            <option value="sprint">Sprint</option>
                            <option value="epic">Epic</option>
                        </select>
                    </div>

                    <div className="modal-footer">
                        <button className="producter-button btn-fill" type="submit">Create</button>
                    </div>
                </form>
            </div>
        </div>
    )
}


export default TaskCreator