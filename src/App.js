import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Editor from './components/Editor';
import Project from './components/Project';
import './App.css';

function App() {
    return (
        <Router>
            <div className="App">
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/editor" component={Editor} />
                    <Route path="/project" component={Project} />
                </Switch>
            </div>
        </Router>
    );
}

export default App;
