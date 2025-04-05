// TaskColumn.jsx
import React from 'react';
import './TaskColumn.css';
import TaskCard from './TaskCard';
import DropArea from './DropArea';

const TaskColumn = ({ title, icon, tasks = [], status, handleDelete, setActiveCard, onDrop }) => {
    // Add console.log to debug
    console.log(`Tasks in ${title} column:`, tasks);

    return (
        <section className="task_column">
            <h2 className='task_column_heading'>
                <img className='task_column_icon' src={icon} alt={`${title} icon`} />
                {title}
            </h2>
            <DropArea onDrop={() => ondrop(status, 0)}></DropArea>
            {(
                tasks
                    .filter(task => task.status === status)
                    .map((task, index) => (
                        <React.Fragment key={index}>
                            <TaskCard
                                key={index}
                                title={task.task}
                                tags={task.tags}
                                handleDelete={handleDelete}
                                index={index}
                                setActiveCard={setActiveCard}
                            />
                            <DropArea onDrop={() => ondrop(status, index + 1)}></DropArea>
                        </React.Fragment>
                    ))
            )}
        </section>
    );
};

export default TaskColumn;