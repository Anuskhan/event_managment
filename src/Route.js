import React, { Component } from 'react';
import { Route, Router } from 'react-router-dom';
import Home from './components/home';
// import Todo from './components/todolist';
import Main from './components/reacttoolbox';
// import Signup from './components/signup';
// import Signin from './components/signin';

// import Chat from './components/chat';
// import Navbar from './components/navbar';


import history from './History';

// export const history = createBrowserHistory()

class Routers extends Component {
    render() {
        return (
            <Router history={history}>
                <div>
                   
                    {/* <Route exact path="/" component={Home} /> */}
                    <Route exact path="/" component={Home} />
                 
                    
                </div>
            </Router>
        )
    }
}

export default Routers;