// TaskColumn.jsx
import React from 'react';
import './TaskColumn.css';
import TaskCard from './TaskCard';

const TaskColumn = ({ title, icon, tasks = [], status }) => {
    // Add console.log to debug
    console.log(`Tasks in ${title} column:`, tasks);

    return (
        <section className="task_column">
            <h2 className='task_column_heading'>
                <img className='task_column_icon' src={icon} alt={`${title} icon`} />
                {title}
            </h2>
            {tasks.length > 0 ? (
                tasks
                    .filter(task => task.status === status)
                    .map((task, index) => (
                        <TaskCard
                            key={index}
                            title={task.task}
                            tags={task.tags}
                        />
                    ))
            ) : (
                <p>No tasks yet</p>
            )}
        </section>
    );
};

export default TaskColumn;