import React from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import moment from 'moment';
import numeral from 'numeral';

import { startRemoveExspense } from '../actions/expenses';

const ExpenseListItem = (props) => (
    <div className="list-item_wrapper">
        <Link className="list-item" to={`/edit/${props.id}`}>
            <div>
                <h3 className="list-item__title">{props.description}</h3>
                <span className="list-item__subtitle">{moment(props.createdAt).format('DD/MM/YYYY')}</span>
            </div>
            <div>
            <h3 className="list-item__data">{numeral(props.amount/100).format('0,0.00')}</h3>
            </div> 
            <div className="list-item__fill"></div>           
        </Link>        
        <button className="button remove-button" onClick={() => {
            props.dispatch(startRemoveExspense(props.id));
        }}>X</button>
    </div>
);

export default connect()(ExpenseListItem);


