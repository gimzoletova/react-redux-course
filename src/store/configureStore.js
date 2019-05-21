import { createStore, combineReducers, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import expenses from '../reducers/expences';
import filters from '../reducers/filters';

const composeEnhances = window.__REDUX_DEVTOOLS_EXTENSION__COMPOSE__ || compose;

// Store Creation
export default () => {
    const store = createStore(
        combineReducers({
            expenses,
            filters
        }),
        composeEnhances(applyMiddleware(thunk)),
    );
    return store;
};
