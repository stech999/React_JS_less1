import React from 'react';

function Message(prop) {
    return (
        <div class="center">
            <div class="name">Hello {prop.name}!</div>
            <div class="time">time Now: {new Date().toLocaleTimeString()}</div>
        </div>
    );
}

export default Message;