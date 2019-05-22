import { createStore, combineReducers, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import expenses from '../reducers/expences';
import filters from '../reducers/filters';
import auth from '../reducers/auth';

const composeEnhances = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Store Creation
export default () => {
    const store = createStore(
        combineReducers({
            expenses,
            filters,
            auth
        }),
        composeEnhances(applyMiddleware(thunk)),
    );
    return store;
};
