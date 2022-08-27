import React from "react";
import './TodoItem.css'

function TodoItem(props){

    return(
        <li className="TodoItem">
            <span 
                className={`TodoItem_checkButton ${props.completed && 'completed'}`}
                onClick={props.onComplete}
            ><div></div></span>
            <div 
                className={`TodoItem_task ${props.completed && 'completed'}`}
                onClick={props.onDelete}
            >
                <p>{props.text}</p>
                <span>X</span>
            </div>
        </li>
    )
}

export {TodoItem}