import React from 'react';
import  ExpenseForm from './ExpenseForm';
import { connect } from 'react-redux';
import { startEditExpense, startRemoveExspense } from '../actions/expenses';

const EditExpensePage = (props) => {
    return (
        <div>
            <h1>Edit Expense</h1>
            <ExpenseForm 
                expense={props.expense}
                onSubmit={(expense)=> {
                    props.dispatch(startEditExpense(props.expense.id, expense));
                    props.history.push('/');
                }}/> 
            <button onClick={() => {
                props.dispatch(startRemoveExspense(props.expense.id));
                props.history.push('/');
            }}>Remove</button>
        </div>
    );
};

const mapStateToProps = (state, props) => {
    return {
        expense: state.expenses.find((expense) => expense.id == props.match.params.id)
    };
}

export default connect(mapStateToProps)(EditExpensePage);