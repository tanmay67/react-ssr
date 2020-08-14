import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router';
import Home from './pages/Home';
import Navbar from './pages/Navbar';
import ToDoListMain from './ToDoList/ToDoListMain';
import ToDoState from './context/ToDoList/ToDoState';
import AlertState from './context/alert/AlertState';
import Alert from './pages/Alert';

export class App extends Component {
  render() {
    return (
      <ToDoState>
        <AlertState>
          <div>
            <Navbar />
            <div className="container">
              <Alert />
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/toDoList" component={ToDoListMain} />
                <Redirect to="/" />
              </Switch>
            </div>
          </div>
        </AlertState>
      </ToDoState>
    );
  }
}

export default App;
