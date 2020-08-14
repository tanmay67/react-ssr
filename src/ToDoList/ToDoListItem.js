import React, { useContext, useEffect } from 'react';
import ToDoContext from '../context/ToDoList/toDoContext';

const ToDoListItem = ({ listItem }) => {
  const { event, date, id } = listItem;
  const toDoContext = useContext(ToDoContext);
  const {
    deleteInfo,
    current,
    loading,
    setCurrent,
    deleteCurrent,
  } = toDoContext;

  const deleteFun = () => {
    deleteInfo(id);
    deleteCurrent();
  };
  return (
    <div className="card bg-light my-3">
      <div className="card-body ">
        <h4 className="lead">{event}</h4>
        <h4 className="lead">{date}</h4>
      </div>
      <div className="card-footer">
        <button className="btn btn-danger m-1" onClick={deleteFun}>
          Delete
        </button>
        <button
          className="btn btn-primary m-1"
          onClick={() => setCurrent(listItem)}
        >
          Edit
        </button>
      </div>
    </div>
  );
};

export default ToDoListItem;
