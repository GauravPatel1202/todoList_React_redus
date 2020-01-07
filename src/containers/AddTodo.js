import React from "react";
import { addTodo } from "../actions/todo.actions";
import { connect } from "react-redux";

const AddTodo = ({ dispatch }) => {
  let input;
  let onClick = (e) => {
    if (input.value.trim() != "") {
      dispatch(addTodo(input.value.trim()));
      input.value = '';
    }
  };
  return (
    <React.Fragment>
      <header className="header">
      <h2>My To Do List</h2>
      <input type="text" ref={node => (input = node)} />
      <button type="submit" className='addBtn' onClick={onClick}>
        Add Todo
      </button>
      </header>
    </React.Fragment>
  );
};

export default connect()(AddTodo);
