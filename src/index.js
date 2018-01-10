//this part is client's side entry
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import { App, Home, Login, Register, Wall, Notifications, Coffee_con } from 'containers';
//Redux
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from 'reducers';
import thunk from 'redux-thunk';

const store = createStore(reducers, applyMiddleware(thunk));

const rootElement = document.getElementById('root'); // you can check from 'public/index.html' -> can find id=root
//IndexRoute: router의 첫 페이지!
ReactDOM.render(
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={App}>
                <IndexRoute component={Home}/>
                <Route path="home" component={Home}/>
                <Route path="login" component={Login}/>
                <Route path="register" component={Register}/>
                <Route path="wall/:username" component={Wall}/>
                <Route path = "notification" component = {Notifications}/>
                <Route path = "coffee" component = {Coffee_con}/>
            </Route>
        </Router>
    </Provider>, rootElement
);
