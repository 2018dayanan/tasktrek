import React, { useState } from 'react'
import "./TaskForm.css";
import Tag from './Tag';

const TaskForm = () => {
    // const [task, setTask] = useState("");
    // const [status, setStatus] = useState("todo");
    // const handleStatusChange = (e) => {
    //     setStatus(e.target.value)
    // }
    // const handleTaskChange = (e) => {
    //     setTask(e.target.value);
    // }
    // console.log(task, status)
    const [taskData, setTaskData] = useState({
        task: "",
        status: "todo"
    })
    const handleChange = (e) => {
        // const name = e.target.name;
        // const value = e.target.value;
        // console.log(name, value)
        const { name, value } = e.target;
        setTaskData((prev) => {
            return { ...prev, [name]: value }
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(taskData)

    }


    return (
        <header className="app_header">
            <form action="" onSubmit={handleSubmit}>
                <input type="text" name="task" className='task_input' placeholder='Enter Your Task' onChange={handleChange} />
                <div className='task_form_bottom_line'>
                    <div>
                        <Tag tagname="HTML"></Tag>
                        <Tag tagname="CSS"></Tag>
                        <Tag tagname="JS"></Tag>
                        <Tag tagname="React"></Tag>
                    </div>
                    <div>
                        <select className='task_status' name="status" onChange={handleChange}>
                            <option value="todo">To do</option>
                            <option value="doing">doing</option>
                            <option value="done">Done</option>
                        </select>
                        <button type='submit' className='task_submit' >+ Add Task</button>
                    </div>
                </div>
            </form>
        </header>
    )
}

export default TaskForm