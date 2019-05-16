// Expenses Reducer
const expensesReducerDefaultState = [];
export default (state = expensesReducerDefaultState, action) => {
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