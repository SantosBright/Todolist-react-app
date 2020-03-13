import React, { useState } from 'react';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import { Toolbar, Grid } from '@material-ui/core';
import uuid from 'uuid/v4';
import TodoList from './TodoList';
import TodoForm from './TodoForm';

function TodoApp() {
    const initTodos = [
        {id: 1, task: 'Write all my exams.', completed: false},
        {id: 2, task: 'Cut suppid pineapple.', completed: false},
        {id: 3, task: 'Finished react-colors app.', completed: true}
    ];
    const [todos, setTodos] = useState(initTodos);
    const addTodo = newTodoText => {
        setTodos([...todos, { id: uuid(), task: newTodoText, completed: false }]);
    }
    const removeTodo = todoId => {
        setTodos(
            todos.filter(todo => todo.id !== todoId)
        );
    }
    const toggleTodo = todoId => {
        const updateTodos = todos.map(todo => (
            todo.id === todoId ? {...todo, completed: !todo.completed} : todo
        ));
        setTodos(updateTodos);
    }
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
                    />
                </Grid>
            </Grid>
        </Paper>
    );
}

export default TodoApp;
