import { useState } from 'react';
import uuid from 'uuid/v4';


export default (initTodos) => {
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
    const editTodo = (todoId, task) => {
        const updateTodos = todos.map(todo => (
            todo.id === todoId ? {...todo, task } : todo
        ));
        setTodos(updateTodos);
    }
    return {
        todos,
        addTodo,
        removeTodo,
        toggleTodo,
        editTodo
    };
}