import React from 'react';
import { connect } from 'react-redux';

import ExpenseListItem from './ExpenseListItem';
import filterAndSort from '../selectors/expenses';

const ExpenseList = (props) => (
    <div className="content-container"> 
        <div className="list-header">
            <div className="show-mobile">Expenses</div>            
            <div className="show-desktop">Expense</div>
            <div >Amount</div>
            <div>Remove</div>
        </div>
        <div className="list-body">
            {
                props.expenses.length === 0 ? (
                    <div className="list-item list-item_message">No Exspenses on Chosen Filters</div>
                ) : (
                    props.expenses.map((expense, index) => <ExpenseListItem {...expense} key={index}/>)
                )
            }   
        </div>
    </div>
);

const mapStateToProps = ({expenses, filters}) => ({ expenses: filterAndSort(expenses, filters) });

export default connect(mapStateToProps)(ExpenseList);

