import React, { Component } from 'react';
import './App.css';
import './index.css';
import 'bulma/css/bulma.css';
import Home from './Home';
import Weather from './WeatherApp';
import StarWars from './StarWarsApp';
import TodoList from './TodoListApp';
import About from './About';

import { Route, NavLink, HashRouter } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <HashRouter>
        <div className="App">
          {/* <h1>Multi page App on Ract.JS</h1> */}
          <nav className="navbar" role="navigation" aria-label="main navigation" >
            


            <ul className="header">
              <li><NavLink className="navbar-item" to="/">Home</NavLink></li>
              <li><NavLink className="navbar-item" to="/weather">Weather APP</NavLink></li>
              <li><NavLink className="navbar-item" to="/star-wars">Star Wars API</NavLink></li>
              <li><NavLink className="navbar-item"  to="/todo-list">Todo List App</NavLink> </li>
              <li><NavLink className="navbar-item"  to="/about">About</NavLink></li>
            </ul>
          </nav>

          <div className="content">
            <Route exact path="/" component={Home} />
            <Route path="/weather" component={Weather} />
            <Route path="/star-wars" component={StarWars} />
            <Route path="/todo-list" component={TodoList} />
            <Route path="/about" component={About} />
          </div>
        </div>
      </HashRouter>
    );
  }
}

export default App;
