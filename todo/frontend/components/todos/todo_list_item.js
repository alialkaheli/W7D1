import React from 'react';


const todoListItem = ({todo}) => {
    return(
        <li key={todo.id}>{todo.title}</li>
    );
}
export default todoListItem;