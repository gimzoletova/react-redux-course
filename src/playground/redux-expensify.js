import {createStore, combineReducers} from 'redux';
import uuid from 'uuid';

// ADD_EXPENCE
const addExpense = ({ description = '', note = '', amount = 0, createdAt = 0 } = {}) => ({
    type: 'ADD_EXPENCE',
    expense: {
        id: uuid(),
        description,
        note,
        amount,
        createdAt
    }
});
// REMOVE_EXPENCE
const removeExspense = ({id}) => ({
    type: 'REMOVE_EXPENCE',
    id
});
// EDIT_EXPENCE
const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENCE',
    id,
    updates
});
// SET_TEXT_FILTER
const setTextFilter = (text = '') => ({
    type: 'SET_TEXT_FILTER',
    text
});
// SORT_BY_DATE
const sortByDate = () => ({
    type: 'SORT_BY_DATE'
});
// SORT_BY_AMOUNT
const sortByAmount = () => ({
    type: 'SORT_BY_AMOUNT'
});
// SET_START_DATE
const setStartDate = (time) => ({
    type: 'SET_START_DATE',
    time
});
// SET_END_DATE
const setEndDate = (time) => ({
    type: 'SET_END_DATE',
    time
});

// Expenses Reducer
const expensesReducerDefaultState = [];
const expensesReducer = (state = expensesReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_EXPENCE': 
            // return state.concat(action.expense) or the new es6 synthax:
            return [...state, action.expense];
        case 'REMOVE_EXPENCE':
            // return state.filter((ex) => ex.id !== action.id); ex is an object and we need only the id, so here is a shorter synthax for calling it:
            return state.filter(({id}) => id !== action.id);
        case 'EDIT_EXPENCE':
            return state.map((expense)=>{
                if (expense.id === action.id) return {...expense, ...action.updates};
                return expense;
            });
        default: 
            return state;
    }
};

// Filters Reducer
const filtersReducerDefaultState = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
};
const filtersReducer = (state = filtersReducerDefaultState, action) => {
    switch (action.type) {
        case 'SET_TEXT_FILTER':
            return {...state, text: action.text};
        case 'SET_START_DATE':
            return {...state, startDate: action.time};
        case 'SET_END_DATE':
            return {...state, endDate: action.time};
        case 'SORT_BY_AMOUNT':
            return {...state, sortBy: 'amount'};
        case 'SORT_BY_DATE':
            return {...state, sortBy: 'date'};            
        default: 
            return state;
    }
}

// get visible expences
const getVisibleExpenses = (expenses, {text, sortBy, startDate, endDate}) => {
    return expenses.filter((expense) => {
        const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
        const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
        const textMatch = text === '' || expense.description.toLowerCase().includes(text.toLowerCase());

        return startDateMatch && endDateMatch && textMatch;
    }).sort((a, b) => {
        if (sortBy === 'date') return a.createdAt < b.createdAt ? 1 : -1;
        return a.amount < b.amount ? 1 : -1;
    });
};

// Store Creation
const store = createStore(
    combineReducers({
        expenses: expensesReducer,
        filters: filtersReducer
    })
);
// console.log(store.getState());
store.subscribe(() => {
    const {expenses, filters} = store.getState();
    console.log(getVisibleExpenses(expenses, filters));
});

const ex1 = store.dispatch(addExpense({ description: 'rent', amount: 100, createdAt: -11000}));
const ex2 = store.dispatch(addExpense({ description: 'coffee', amount: 300, createdAt: -1000}));
const ex3 = store.dispatch(addExpense({ description: 'tea', amount: 200, createdAt: 1000}));

// store.dispatch(removeExspense({id: ex1.expense.id}));
// store.dispatch(editExpense(ex2.expense.id, { amount: 500}));

// store.dispatch(setTextFilter('ffe'));
// store.dispatch(setTextFilter(''));

store.dispatch(sortByAmount());
// store.dispatch(sortByDate());

// store.dispatch(setStartDate(125));
// store.dispatch(setStartDate());
// store.dispatch(setEndDate(1250));
// store.dispatch(setEndDate());


const demoState = { 
    expenses: [{
        id: 'aaa',
        description: 'rent',
        note: 'last payment',
        amount: 10000, //counting pennis and not dollars to avoid problems
        createdAt: 0
    }],
    filters: {
        text: 'rent',
        sortBy: 'amount', //date or amount
        startDate: undefined,
        endDate: undefined
    }
};
