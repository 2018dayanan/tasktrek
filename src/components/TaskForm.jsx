import React, { useState } from 'react';
import "./TaskForm.css";
import Tag from './Tag';

const TaskForm = ({ setTasks }) => {
    const [taskData, setTaskData] = useState({
        task: "",
        status: "todo",
        tags: []
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setTaskData((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!taskData.task.trim()) return; // Prevent empty tasks
        setTasks(prev => [...prev, taskData]);
        // Reset form after submission
        setTaskData({
            task: "",
            status: "todo",
            tags: []
        });
    };

    const selectTag = (tag) => {
        // No need to preventDefault here as we're handling it in the Tag component
        if (taskData.tags.includes(tag)) {
            setTaskData((prev) => ({
                ...prev,
                tags: prev.tags.filter(item => item !== tag)
            }));
        } else {
            setTaskData((prev) => ({
                ...prev,
                tags: [...prev.tags, tag]
            }));
        }
    };

    const checkTag = (tag) => {
        return taskData.tags.includes(tag);
    };

    return (
        <header className="app_header">
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="task"
                    className='task_input'
                    placeholder='Enter Your Task'
                    value={taskData.task}
                    onChange={handleChange}
                />
                <div className='task_form_bottom_line'>
                    <div>
                        <Tag tagname="HTML" selectTag={selectTag} selected={checkTag("HTML")} />
                        <Tag tagname="CSS" selectTag={selectTag} selected={checkTag("CSS")} />
                        <Tag tagname="JS" selectTag={selectTag} selected={checkTag("JS")} />
                        <Tag tagname="React" selectTag={selectTag} selected={checkTag("React")} />
                    </div>
                    <div>
                        <select
                            className='task_status'
                            name="status"
                            value={taskData.status}
                            onChange={handleChange}
                        >
                            <option value="todo">To do</option>
                            <option value="doing">Doing</option>
                            <option value="done">Done</option>
                        </select>
                        <button type='submit' className='task_submit'>+ Add Task</button>
                    </div>
                </div>
            </form>
        </header>
    );
};

export default TaskForm;