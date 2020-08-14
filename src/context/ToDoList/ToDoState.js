import React, { useReducer } from 'react';
import {
  SHOW_LIST,
  DELETE_ITEM,
  SET_CURRENT,
  DELETE_CURRENT,
  ADD_ITEM,
  EDIT_ITEM,
} from '../Types';
import ToDoContext from './toDoContext';
import toDoReducer from './toDoReducer';

const ToDoState = (props) => {
  const initialState = {
    list: [
      {
        date: '2020-08-09',
        event: 'Event 1',
        id: '1',
      },
      {
        date: '2020-10-29',
        event: 'Event 2',
        id: '2',
      },
      {
        date: '2020-09-2',
        event: 'Event 3',
        id: '3',
      },
    ],
    loading: true,
    current: null,
  };

  const [state, dispatch] = useReducer(toDoReducer, initialState);

  //functions (actions)

  const showList = () => {
    dispatch({
      type: SHOW_LIST,
    });
  };

  const deleteInfo = (id) => {
    dispatch({
      type: DELETE_ITEM,
      payload: id,
    });
  };

  const setCurrent = (listItem) => {
    dispatch({
      type: SET_CURRENT,
      payload: listItem,
    });
  };

  const addListItem = (formData) => {
    dispatch({
      type: ADD_ITEM,
      payload: formData,
    });
  };

  const deleteCurrent = () => {
    dispatch({
      type: DELETE_CURRENT,
    });
  };

  const editItem = (formData) => {
    dispatch({
      type: EDIT_ITEM,
      payload: formData,
    });
  };

  return (
    <ToDoContext.Provider
      value={{
        list: state.list,
        loading: state.loading,
        current: state.current,
        showList,
        deleteInfo,
        setCurrent,
        deleteCurrent,
        addListItem,
        editItem,
      }}
    >
      {props.children}
    </ToDoContext.Provider>
  );
};

export default ToDoState;
