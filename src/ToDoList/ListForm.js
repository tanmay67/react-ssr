import React, { useState, useContext, useEffect } from 'react';
import ToDoContext from '../context/ToDoList/toDoContext';
import AlertContext from '../context/alert/alertContext';

const ListForm = () => {
  const toDoContext = useContext(ToDoContext);
  const { addListItem, current, deleteCurrent, editItem } = toDoContext;
  const alertContext = useContext(AlertContext);
  const { setAlert } = alertContext;

  function uuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (
      c
    ) {
      var r = (Math.random() * 16) | 0,
        v = c == 'x' ? r : (r & 0x3) | 0x8;
      return v.toString(16);
    });
  }

  const [formData, setFormData] = useState({
    event: '',
    date: '',
    id: uuidv4(),
  });
  const { event, date } = formData;

  useEffect(() => {
    if (current !== null) {
      setFormData(current);
    } else {
      setFormData({
        event: '',
        date: '',
        id: uuidv4(),
      });
    }
  }, [current]);

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (event === '') {
      setAlert('Plese Enter Event', 'alert-danger');
    } else if (current !== null) {
      editItem(formData);
    } else {
      addListItem(formData);
      setFormData({
        event: '',
        date: '',
        id: uuidv4(),
      });
    }
  };

  const clearFun = () => {
    deleteCurrent();
  };

  return (
    <div>
      <div className="card">
        <div className="card-header">
          {current !== null ? <h2>Edit ToDo Item</h2> : <h2>Add ToDO Item</h2>}
        </div>
        <div className="card-body">
          <form className="form" onSubmit={onSubmit}>
            <div className="form-group">
              <label htmlFor="event">Event</label>
              <input
                type="text"
                name="event"
                id="event"
                placeholder="Event Name...."
                value={event}
                onChange={onChange}
                className="form-control"
              />
            </div>

            <div className="form-group">
              <label htmlFor="event">Event</label>
              <input
                type="date"
                name="date"
                id="date"
                placeholder="Date...."
                value={date}
                onChange={onChange}
                className="form-control"
              />
            </div>
            <div className="form-group">
              <input
                type="submit"
                value={current !== null ? 'Edit Event' : 'Add Event'}
                className="btn btn-primary"
              />
            </div>
            {current !== null && (
              <div className="form-group">
                <button className="btn btn-dark" onClick={clearFun}>
                  Clear
                </button>
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default ListForm;
