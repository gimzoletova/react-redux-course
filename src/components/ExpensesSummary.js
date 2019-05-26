import React from 'react';
import { connect } from 'react-redux';
import  { Link } from 'react-router-dom';

import numeral from 'numeral';

import filterAndSort from '../selectors/expenses';
import totalSum from '../selectors/expoenses-total';

const ExpensesSummary = ({ expenseCount, total}) => (
    <div className="page-header"> 
        <div className="content-container">
            {expenseCount > 0 && <h1 className="page-header__title">
                Viewing <span>{expenseCount}</span> {expenseCount === 1 ? 'expense' : 'expenses'} totalling <span>{numeral(total/100).format('0,0.00')} NIS</span>
            </h1>}
            <div className="page-header__actions">
                <Link className="button" to="/create">Add Expense</Link>
            </div>
        </div>       
            
    </div>
    
)


const mapStateToProps = ({expenses, filters}) => {
    const renderedExpenses = filterAndSort(expenses, filters)
    return { expenseCount:  renderedExpenses.length, total: totalSum(renderedExpenses)}
};

export default connect(mapStateToProps)(ExpensesSummary);

