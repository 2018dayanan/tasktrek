import React from 'react';
import "./Tag.css";

const Tag = ({ tagname, selectTag, selected }) => {
    const tagStyle = {
        HTML: { backgroundColor: "#fda821" },
        CSS: { backgroundColor: "#15d4c8" },
        JS: { backgroundColor: "#ffd12c" },
        React: { backgroundColor: "#4cdafc" },
        default: { backgroundColor: "#f9f9f9" }
    };

    const handleClick = (e) => {
        e.preventDefault();
        selectTag(tagname);
    };

    return (
        <button
            type="button"
            className='tag'
            onClick={handleClick}
            style={selected ? tagStyle[tagname] : tagStyle.default}
        >
            {tagname}
        </button>
    );
};

export default Tag;