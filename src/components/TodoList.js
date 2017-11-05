import React from 'react';
import { TodoItem } from './TodoItem';

export const TodoList = (props) => {
    return props.todos.map((todo, index) => {
        return <TodoItem 
            key={index}
            title={todo.title}
            isDone={todo.isDone} 
            onTodoToggle={() => props.handleTodoCheck(index)}
        />;
    });
}