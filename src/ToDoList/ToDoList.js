import React, { useContext, useEffect } from 'react';
import ToDoContext from '../context/ToDoList/toDoContext';
import ToDoListItem from './ToDoListItem';

const ToDoList = ({ data }) => {
  const toDoContext = useContext(ToDoContext);
  const { loading, list, showList, dataFetch, fetchDataFun } = toDoContext;

  useEffect(() => {
    showList();
    // fetchDataFun(data);
    // if (data) {
    //   fetchDataFun(data);
    // }
  }, []);

  // if (dataFetch !== null) {
  //   console.log(dataFetch);
  // }

  return (
    <div>
      {!loading &&
        list !== null &&
        list.map((listItem) => (
          <ToDoListItem key={listItem.id} listItem={listItem} />
        ))}
    </div>
  );
};

export default ToDoList;
