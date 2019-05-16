import React from 'react';
import { connect } from 'react-redux';

import ExpenseListItem from './ExpenseListItem';
import filterAndSort from '../selectors/expenses';
const ExpenseList = (props) => (
    <div>
       <h1>ExpenseList</h1>
        {props.expenses.map((expense) => <ExpenseListItem {...expense} key={expense.id}/>)}
    </div>
);

const mapStateToProps = ({expenses, filters}) => ({ expenses: filterAndSort(expenses, filters) });

export default connect(mapStateToProps)(ExpenseList);

