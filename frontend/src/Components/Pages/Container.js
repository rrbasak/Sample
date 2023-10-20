import React from 'react';
export const Container = ({ title, content }) => {
    return (
        <div className="key-feature-container">
            <h3>{title}</h3>
            <p>{content}</p>
        </div>
    );
}