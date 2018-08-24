import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux';
import reducer from './reducers'

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

const Index = () => (
    <Provider store={store} >  
        <BrowserRouter basename={process.env.PUBLIC_URL} >
            <Route render={(props) => <App filter={props.location.pathname}/>} />
        </BrowserRouter>
    </Provider>
)


ReactDOM.render(<Index />, document.getElementById('root'));
registerServiceWorker();
