import React from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import moment from 'moment';
import numeral from 'numeral';


import { removeExspense } from '../actions/expenses';

const ExpenseListItem = (props) => (
    <div>
        <Link to={`/edit/${props.id}`}><h3>{props.description}</h3></Link>
        <p>
            {numeral(props.amount/100).format('0,0.00')} 
            - 
            {moment(props.createdAt).format('DD/MM/YYYY')}
        </p>
        <button onClick={() => {
            props.dispatch(removeExspense(props.id));
        }}>Remove</button>
    </div>
);

export default connect()(ExpenseListItem);


