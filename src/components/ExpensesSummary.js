import React from 'react';
import { connect } from 'react-redux';

import numeral from 'numeral';

import filterAndSort from '../selectors/expenses';
import totalSum from '../selectors/expoenses-total';

const ExpensesSummary = ({ expenseCount, total}) => (
    <h2>
        {expenseCount > 0 && <span>Viewing {expenseCount} {expenseCount === 1 ? 'expense' : 'expenses'} totalling {numeral(total/100).format('0,0.00')} NIS</span>}
    </h2>
)


const mapStateToProps = ({expenses, filters}) => {
    const renderedExpenses = filterAndSort(expenses, filters)
    return { expenseCount:  renderedExpenses.length, total: totalSum(renderedExpenses)}
};

export default connect(mapStateToProps)(ExpensesSummary);

