import React from 'react';
import './loading.css'; // Create this CSS file for styling the loading animation

const Loading = () => {
    return (
        <div className="loading-container">
            <div className="spinner"></div>
        </div>
    );
};

export default Loading;