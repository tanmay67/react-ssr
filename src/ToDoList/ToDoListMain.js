import React from 'react';
import ListForm from './ListForm';
import ToDoList from './ToDoList';

const ToDoListMain = () => {
  return (
    <div className="row">
      <div className="col-md-5 mt-5">
        <ListForm />
      </div>
      <div className="col-md-7 mt-5">
        <ToDoList />
      </div>
    </div>
  );
};

export default ToDoListMain;
