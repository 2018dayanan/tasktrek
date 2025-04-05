import React from 'react'
import "./TaskCard.css";
import Tag from "./Tag";
import deleteIcon from '../assets/delete.png';
function TaskCard({ title, tags }) {
    return (
        <article className="task_card">
            <p className="task_text">{title}</p>
            <div className="task_card_bottom_line">
                <div className="task_card_tags">
                    {
                        tags.map((tag, index) => <Tag key={index} tagname={tag} selected></Tag>)
                    }
                </div>
                <div className="task_delete">
                    <img src={deleteIcon} alt='Delete Icon' className='delete_icon' />
                </div>
            </div>
        </article>
    );
};
export default TaskCard;