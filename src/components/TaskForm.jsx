import React, { useState } from 'react'
import "./TaskForm.css";
import Tag from './Tag';

const TaskForm = () => {
    const [task, setTask] = useState("");
    const [status, setStatus] = useState("todo");
    const handleStatusChange = (e) => {
        setStatus(e.target.value)
    }
    const handleTaskChange = (e) => {
        setTask(e.target.value);
    }
    console.log(task, status)

    return (
        <header className="app_header">
            <form action="">
                <input type="text" className='task_input' placeholder='Enter Your Task' onChange={handleTaskChange} />
                <div className='task_form_bottom_line'>
                    <div>
                        <Tag tagname="HTML"></Tag>
                        <Tag tagname="CSS"></Tag>
                        <Tag tagname="JS"></Tag>
                        <Tag tagname="React"></Tag>
                    </div>
                    <div>
                        <select className='task_status' onChange={handleStatusChange}>
                            <option value="todo">To do</option>
                            <option value="doing">doing</option>
                            <option value="done">Done</option>
                        </select>
                        <button type='submit' className='task_submit'>+ Add Task</button>
                    </div>
                </div>
            </form>
        </header>
    )
}

export default TaskForm