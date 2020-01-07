import React from "react";

const Todo = ({ text, complete, onClick , deleteTodo,editTodo}) => {
  return (
    <div>
    <li
      
      style={{ textDecoration: complete ? "line-through" : "none" , background: complete ? "gray" : "#e6e2e2"}}
    >
    <span className={complete ? 'check' : "none" }></span>
    <span onClick={onClick} >{text}</span>
      
      {/* <button>Edit</button> */}
    <span className='close' onClick={deleteTodo}>X</span>
    </li>
   
    </div>
  );
};

export default Todo;
