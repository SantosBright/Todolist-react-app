import React from 'react';
import { Divider, Paper } from '@material-ui/core';
import { List } from '@material-ui/core';
import TodoItem from './TodoItem';


function TodoList({ todos, removeTodo, toggleTodo }) {
    return (
        <Paper>
            <List>
                {todos.map(todo => (
                    <>
                        <TodoItem
                            key={todo.id}
                            {...todo}
                            removeTodo={removeTodo}
                            toggleTodo={toggleTodo}
                        />
                        <Divider />
                    </>
                ))}
            </List>
        </Paper>
    );
}

export default TodoList;