import React, { useEffect } from 'react';
import ListForm from './ListForm';
import ToDoList from './ToDoList';

const ToDoListMain = ({ data }) => {
  // useEffect(() => {
  //   console.log(data);
  // }, []);
  return (
    <div className="row">
      <div className="col-md-5 mt-5">
        <ListForm />
      </div>
      <div className="col-md-7 mt-5">
        <ToDoList data={data} />
      </div>
    </div>
  );
};

export default ToDoListMain;
