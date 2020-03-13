import React from 'react';
import { Divider, Paper } from '@material-ui/core';
import { List } from '@material-ui/core';
import TodoItem from './TodoItem';


function TodoList({ todos, removeTodo, toggleTodo, editTodo }) {
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
                            editTodo={editTodo}
                        />
                        <Divider />
                    </>
                ))}
            </List>
        </Paper>
    );
}

export default TodoList;