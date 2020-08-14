import React, { useContext } from 'react';
import AlertContext from '../context/alert/alertContext';

const Alert = () => {
  const alertContext = useContext(AlertContext);
  const { alert } = alertContext;
  return (
    <div className="mt-2">
      {alert !== null && (
        <div className={`alert ${alert.type}`}>{alert.msg}</div>
      )}
    </div>
  );
};

export default Alert;
