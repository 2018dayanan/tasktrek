import React from 'react'
import "./Tag.css";

const Tag = ({ tagname, selectTag }) => {
    return (
        <button className='tag' onClick={() => selectTag(tagname)}>{tagname}</button>
    )
}

export default Tag;