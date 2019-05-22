import database from '../firebase/firebase';

//SET_EXPENSES
export const setExpenses = (expenses) => ({
  type: 'SET_EXPENSES',
  expenses
});
export const startSetExpenses = () => {
  return (dispatch) => {
    return database.ref('expenses').once('value')
    .then((snapshot) => {
      const expenses = [];
      snapshot.forEach((child) => {
        expenses.push({id: child.key, ...child.val()});
      });
      dispatch(setExpenses(expenses));
    });
  };
};
// ADD_EXPENCE
export const addExpense = (expense) => ({
    type: 'ADD_EXPENCE',
    expense
});
export const stratAddExpense = ({ description = '', note = '', amount = 0, createdAt = 0 } = {}) => {
    return (dispatch) => {
      database.ref('expenses').push({ description, note, amount, createdAt})
      .then((ref) =>{
        dispatch(addExpense({id: ref.key, description, note, amount, createdAt}));
      });
    };
};
// REMOVE_EXPENCE
export const removeExspense = (id) => ({
    type: 'REMOVE_EXPENCE',
    id
});
export const startRemoveExspense = (id) => {
  return(dispatch) => {
    database.ref(`expenses/${id}`).remove()
    .then(() => {
      dispatch(removeExspense(id));
    });
  };
};
// EDIT_EXPENCE
export const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENCE',
    id,
    updates
});
export const startEditExpense = (id, updates) => {
  return(dispatch) => {
    database.ref(`expenses/${id}`).update(updates)
    .then(() => {
      dispatch(editExpense(id, updates));
    });
  };
};