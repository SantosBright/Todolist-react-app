import React, { useEffect } from 'react';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import { Toolbar, Grid } from '@material-ui/core';
import useTodoState from './hooks/useTodoState';
import TodoList from './TodoList';
import TodoForm from './TodoForm';

function TodoApp() {
    const initTodos = JSON.parse(window.localStorage.getItem("todos") || '[]');
    const { todos, addTodo, removeTodo, toggleTodo, editTodo } = useTodoState(
        initTodos
    );

    useEffect(() => {
        window.localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);

    return (
        <Paper
            style={{
                padding: 0,
                margin: 0,
                height: '100vh',
                backgroundColor: '#fafafa'
            }}
            elevation={0}
        >
            <AppBar
                color="primary"
                position="static"
                style={{height: '64px'}}
            >
                <Toolbar>
                    <Typography color="inherit">TodoApp</Typography>
                </Toolbar>
            </AppBar>
            <Grid container justify="center" style={{marginTop: '1rem'}}>
                <Grid item xs={11} md={8} lg={4} key={1}>
                    <TodoForm addTodo={addTodo} />
                    <TodoList
                        removeTodo={removeTodo}
                        toggleTodo={toggleTodo}
                        todos={todos}
                        editTodo={editTodo}
                    />
                </Grid>
            </Grid>
        </Paper>
    );
}

export default TodoApp;
