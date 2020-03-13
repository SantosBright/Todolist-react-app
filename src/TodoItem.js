import React from 'react';
import { ListItem, ListItemText, ListItemAvatar, Checkbox } from '@material-ui/core';
import { ListItemSecondaryAction, IconButton } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import useToggle from './hooks/useToggle';
import TodoEdit from './TodoEdit';

function TodoItem(props) {
    const { task, completed, toggleTodo, removeTodo, editTodo, id } = props;
    const [isEditing, toggle] = useToggle();
    return (
        <ListItem>
            {isEditing ? (
                <TodoEdit
                    task={task}
                    id={id}
                    editTodo={editTodo}
                    toggleForm={toggle}
                />
            ) : (
                <>
                    <ListItemAvatar>
                        <Checkbox
                            tabIndex={-1} 
                            checked={completed}
                            onClick={toggleTodo.bind(this, id)}
                        />
                    </ListItemAvatar>
                    <ListItemText
                        style={{
                            textDecoration: completed ? 
                            'line-through' : 'none',
                            color: completed ? 
                            'rgba(0,0,0,.4)' : 'black',
                        }}
                    >
                        {task}
                    </ListItemText>
                    <ListItemSecondaryAction>
                        <IconButton
                            aria-label="Delete"
                            onClick={removeTodo.bind(this, id)}
                        >
                            <DeleteIcon />
                        </IconButton>
                        <IconButton
                            aria-label="Edit"
                            onClick={toggle}
                        >
                            <EditIcon />
                        </IconButton>
                    </ListItemSecondaryAction>
                </>
            )}
        </ListItem>
    );
}

export default TodoItem;
