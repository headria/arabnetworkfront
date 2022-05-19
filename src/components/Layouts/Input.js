import React from 'react'

const InputGroup = ({ type, title, placeholder, mb }) => {
    return (
        <div className={`inputgroup ${mb}`}>
            <label className="form-label">{title}</label>
            <input type={type} className="form-control" placeholder={placeholder} />
        </div>
    )
}

export default InputGroup