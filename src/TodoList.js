import React from 'react';
import { Divider, Paper } from '@material-ui/core';
import { List } from '@material-ui/core';
import TodoItem from './TodoItem';


function TodoList({ todos, removeTodo, toggleTodo, editTodo }) {
    if(todos.length)
        return (
            <Paper>
                <List>
                    {todos.map((todo, i) => (
                        <>
                            <TodoItem
                                key={todo.id}
                                {...todo}
                                removeTodo={removeTodo}
                                toggleTodo={toggleTodo}
                                editTodo={editTodo}
                            />
                            {i < todos.length - 1 && <Divider />}
                        </>
                    ))}
                </List>
            </Paper>
        );
    return null; 
}

export default TodoList;