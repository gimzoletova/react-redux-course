import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import './firebase/firebase';

import storeConfig from './store/configureStore';
import { startSetExpenses } from './actions/expenses';

// import 'react-dates/initialize';

import 'normalize.css/normalize.css';
import './styles/styles.scss';
// import 'react-dates/lib/css/_datePicker.css';

import {AppRouter} from './routers/AppRouter';

const store = storeConfig();
// store.dispatch(addExpense({ description: 'water bill', amount: 12000, createdAt: 1558056885500 }));
// store.dispatch(addExpense({ description: 'gas bill', amount: 120005, createdAt: 1558876885555 }));

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>    
)


ReactDOM.render(<p>Loading...</p>, document.getElementById('app'));
store.dispatch(startSetExpenses()).then(() =>{
    ReactDOM.render(jsx, document.getElementById('app'));
})
