import { SET_ALERT, REMOVE_ALERT } from '../Types';
import AlertContext from './alertContext';
import alertReducer from './alertReducer';
import React, { useReducer } from 'react';

const AlertState = (props) => {
  const initialState = null;
  const [state, dispatch] = useReducer(alertReducer, initialState);

  //functions (actions)

  const setAlert = (msg, type) => {
    dispatch({
      type: SET_ALERT,
      payload: { msg, type },
    });
    setTimeout(
      () =>
        dispatch({
          type: REMOVE_ALERT,
        }),
      5000
    );
  };

  return (
    <AlertContext.Provider
      value={{
        alert: state,
        setAlert,
      }}
    >
      {props.children}
    </AlertContext.Provider>
  );
};

export default AlertState;
