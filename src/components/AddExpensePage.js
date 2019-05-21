import React from 'react';
import  ExpenseForm from './ExpenseForm';
import { connect } from 'react-redux';
import { stratAddExpense } from '../actions/expenses';

const AddExpensePage = (props) => (
    <div>
        <h1>Add Expense</h1>
        <ExpenseForm onSubmit={(expense)=> {
            props.dispatch(stratAddExpense(expense));
            props.history.push('/');
        }}/>
    </div>
);

export default connect()(AddExpensePage);