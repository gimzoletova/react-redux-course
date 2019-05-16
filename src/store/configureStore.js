import { createStore, combineReducers} from 'redux';
import expenses from '../reducers/expences';
import filters from '../reducers/filters';

// Store Creation
export default () => {
    const store = createStore(
        combineReducers({
            expenses,
            filters
        }),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );
    return store;
};
