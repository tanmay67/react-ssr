import React, { useState, useContext } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import ToDoContext from '../context/ToDoList/toDoContext';

const Home = () => {
  const toDoContext = useContext(ToDoContext);
  const head = () => {
    return (
      <Helmet>
        <title>My Page Title</title>
      </Helmet>
    );
  };

  return (
    <div className="text-center" style={{ margin: '90px' }}>
      {head()}
      <button className="btn btn-dark">
        <Link to="/toDoList" className="nav-link">
          To Do List
        </Link>
      </button>
    </div>
  );
};

export default Home;
