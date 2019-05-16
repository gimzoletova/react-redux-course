import React from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';

import { removeExspense } from '../actions/expenses';

const ExpenseListItem = (props) => (
    <div>
        <Link to={`/edit/${props.id}`}><h3>{props.description}</h3></Link>
        <p>{props.amount} - {props.createdAt}</p>
        <button onClick={() => {
            props.dispatch(removeExspense(props.id));
        }}>Remove</button>
    </div>
);

export default connect()(ExpenseListItem);


