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
        status: "todo",
        tags: []
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
    const selectTag = (tag) => {
        if (taskData.tags.some(item => item === tag)) {
            const filterTags = taskData.tags.filter(item => item !== tag)
            setTaskData((prev) => {
                return { ...prev, tags: filterTags }
            })
        } else {
            setTaskData((prev) => {
                return { ...prev, tags: [...prev.tags, tag] };
            })
        }
    }
    const checkTag = (tag) => {
        return taskData.tags.some(item => item === tag)
    }
    return (
        <header className="app_header">
            <form action="" onSubmit={handleSubmit}>
                <input type="text" name="task" className='task_input' placeholder='Enter Your Task' onChange={handleChange} />
                <div className='task_form_bottom_line'>
                    <div>
                        <Tag tagname="HTML" selectTag={selectTag} selected={checkTag("HTML")}></Tag>
                        <Tag tagname="CSS" selectTag={selectTag} selected={checkTag("CSS")}></Tag>
                        <Tag tagname="JS" selectTag={selectTag} selected={checkTag("JS")}></Tag>
                        <Tag tagname="React" selectTag={selectTag} selected={checkTag("React")}></Tag>
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