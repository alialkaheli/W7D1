import React from 'react';


const todoListItem = ({todo}) => {
    return(
       <li> {todo.title}</li>
    );
}
export default todoListItem;