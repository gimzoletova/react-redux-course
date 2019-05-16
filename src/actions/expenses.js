import uuid from 'uuid';

// ADD_EXPENCE
export const addExpense = ({ description = '', note = '', amount = 0, createdAt = 0 } = {}) => ({
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
export const removeExspense = (id) => ({
    type: 'REMOVE_EXPENCE',
    id
});
// EDIT_EXPENCE
export const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENCE',
    id,
    updates
});