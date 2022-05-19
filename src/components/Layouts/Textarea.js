import React from 'react'

const Textarea = ({ rows, title, placeholder, mb }) => {
    return (
        <div className={`textareagroup ${mb}`}>
            <label className="form-label">{title}</label>
            <textarea className="textarea" cols="30" rows={rows} placeholder={placeholder}></textarea>
        </div>
    )
}

export default Textarea