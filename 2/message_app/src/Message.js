import React from 'react';

export const Message = ({ author, text }) => {
    let currentClassName = 'user_class';
    if (author == 'robot') {
        currentClassName = 'robot_class'
    }

    return (
        <div>
            <div className={currentClassName}>{author}: "{text}"</div>
        </div>
    )


}