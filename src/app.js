import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router';
import Home from './pages/Home';
import Navbar from './pages/Navbar';
import ToDoListMain from './ToDoList/ToDoListMain';
import ToDoState from './context/ToDoList/ToDoState';
import AlertState from './context/alert/AlertState';
import Alert from './pages/Alert';
import 'isomorphic-fetch';

class App extends Component {
  constructor(props) {
    super(props);
    let data = null;
    if (props.data) {
      data = props.data;
      console.log(props.data);
    }
    this.state = { news: data };
  }

  // componentDidMount() {
  //   console.log(this.state.news);
  // }

  // componentDidMount() {
  //   if (!this.state.news) {
  //     news.requestInitialData().then((data) => this.setState({ news: data }));
  //   }
  // }

  // static requestInitialData() {
  //   return fetch('https://jsonplaceholder.typicode.com/posts')
  //     .then((response) => response.json())
  //     .catch((error) => console.log(error));
  // }
  render() {
    const { news } = this.state;
    // console.log(news);
    return (
      <ToDoState>
        <AlertState>
          <div>
            <Navbar />
            <div className="container">
              <Alert />
              <Switch>
                <Route exact path="/" component={Home} />
                <Route
                  exact
                  path="/toDoList"
                  render={(props) => <ToDoListMain {...props} data={news} />}
                />
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
