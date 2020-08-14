import React, { useContext, useEffect } from 'react';
import ToDoContext from '../context/ToDoList/toDoContext';
import ToDoListItem from './ToDoListItem';

const ToDoList = () => {
  const toDoContext = useContext(ToDoContext);
  const { loading, list, showList } = toDoContext;

  useEffect(() => {
    showList();
  }, []);

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
