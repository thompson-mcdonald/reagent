import React, { Component } from 'react';
import Header from './components/Header';
import Result from './components/Result';
import Start from './Start';
import Form from './Form';
import Results from './Results';
import Nav from './components/Nav';
import reactions from './data.json';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

class App extends Component {

  render() {
    return (
      <div className="App">
        <Header/>
        <div className="container bg-white bo-top pad-v pad-h">
          <div className='d-b'>
            <Router>
              <Switch>
                <Route exact path="/" component={Start}/>
                <Route path="/form" component={Form}/>
                <Route path="/results" component={Results}/>
              </Switch>
            </Router>
            <div className='clear'></div>
          </div>
        </div>
        <Nav />
      </div>
    );
  }
}

export default App;
