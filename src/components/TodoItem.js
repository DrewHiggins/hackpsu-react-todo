import React from 'react';

export const TodoItem = (props) => {
    return (
        <div onClick={props.onTodoToggle}>
            <input
                type="checkbox"
                defaultChecked={props.isDone}
            />
            {
                props.isDone ?
                <strike>{props.title}</strike> :
                <span>{props.title}</span>
            }
        </div>
    );
};