import React from 'react';
import moment from 'moment';
// import 'react-dates/initialize';
import { SingleDatePicker} from 'react-dates';
// import 'react-dates/lib/css/_datePicker.css';
import '!style-loader!css-loader!react-dates/lib/css/_datepicker.css';

export default class ExpenseForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            description: this.props.expense ? this.props.expense.description : '',
            note: this.props.expense ? this.props.expense.note : '',
            amount: this.props.expense ? this.props.expense.amount /100 : '',
            // amount: this.props.expense ? (this.props.expense.amount /100).toString() : '',
            createdAt: this.props.expense ?  moment(this.props.expense.createdAt) : moment(),
            calendarFocused: false,
            error: ''
        }
    }  
    

    onDescriptionChange = (e) => {
        const description = e.target.value;
        this.setState(() => ({description}));
    };

    onAmountChange = (e) => {
        const amount = e.target.value;
        if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) this.setState(() => ({amount}));
    }

    onDateChange = (createdAt) => {
        if (createdAt) this.setState(() => ({createdAt}));
    };

    onFocusChange = ({focused}) => {
        this.setState(() => ({calendarFocused: focused}));
    };

    onNoteChange = (e) => {
        const note = e.target.value;
        this.setState(() => ({note}));
    };

    onSubmit = (e) => {
        e.preventDefault();
        if (!this.state.description || !this.state.amount) this.setState(() => ({error: 'Description and amount required'}));
        else {
            this.setState(() => ({error: ''}));
            this.props.onSubmit({
                description: this.state.description, 
                amount: parseFloat(this.state.amount, 10) * 100, 
                createdAt: this.state.createdAt.valueOf(), 
                note: this.state.note
            })       
        }
    };
    onRemove = (e) => {
        e.preventDefault();
        this.props.onRemove();
    };

    render() {        
        return (
            <form className="form" onSubmit={this.onSubmit}>
                {this.state.error && <p className="form__error">{this.state.error}</p>}
                <input 
                    type="text" 
                    className="text"
                    placeholder="Description"
                    value={this.state.description} 
                    onChange={this.onDescriptionChange}
                    autoFocus/>
                <input 
                    type="text" 
                    className="text"
                    placeholder="Amount"
                    value={this.state.amount} 
                    onChange={this.onAmountChange}/>
                <SingleDatePicker 
                    date={this.state.createdAt}
                    onDateChange={this.onDateChange}
                    focused={this.state.calendarFocused}
                    onFocusChange={this.onFocusChange}
                    numberOfMonths={1}
                    isOutsideRange={() => false}
                />                    
                <textarea 
                    className="textarea"
                    placeholder="Add a note (optional)"
                    value={this.state.note} 
                    onChange={this.onNoteChange}></textarea>
                <div className="form__buttons">
                {this.props.expense && <button className="button button_secondary" onClick={this.onRemove}>Remove Expense</button>}
                <button className="button">{this.props.expense ? 'Save Changes' : 'Add Expense'}</button>
                </div>
            </form>
        )
    }
}