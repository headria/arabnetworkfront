import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import TopToBottom from '../lib/TopToBottom';

function BackToTop({ className }) {
    useEffect(() => {
        TopToBottom('.back-to-top');
    });
    return (
        <>
            <div className={`back-to-top ${className || ''}`}>
                <Link to="#">
                    <i className="fal fa-arrow-up" />
                </Link>
            </div>
        </>
    );
}

export default BackToTop;
