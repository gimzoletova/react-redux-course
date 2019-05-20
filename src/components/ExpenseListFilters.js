import React from 'react';
import { connect } from 'react-redux';
import { setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate } from '../actions/filters';
import { DateRangePicker} from 'react-dates';
// import 'react-dates/lib/css/_datePicker.css';
import '!style-loader!css-loader!react-dates/lib/css/_datepicker.css';

class ExpenseListFilters extends React.Component {
    
    state = {
        calendarFocused: null
    }

    onDatesChange = ({ startDate, endDate }) => {
        this.props.dispatch(setStartDate(startDate));
        this.props.dispatch(setEndDate(endDate));
    };
    onFocusChange = (calendarFocused) => {
        this.setState(() => ({calendarFocused}));
    }

    render() {
        return (
            <div>
                <input type="text" value={this.props.filters.text} onChange={(e)=> {
                    this.props.dispatch(setTextFilter(e.target.value));
                }}/>
                <select value={this.props.filters.sortBy} onChange={(e) => {
                    if (e.target.value === 'date')  this.props.dispatch(sortByDate());
                    else this.props.dispatch(sortByAmount());
                }}>
                    <option value="date">Date</option>
                    <option value="amount">Amount</option>
                </select>
                <DateRangePicker 
                    startDate={this.props.filters.startDate}
                    startDateId='startDateId'
                    endDate={this.props.filters.endDate}
                    endDateId='endDateId'
                    onDatesChange={this.onDatesChange}
                    focusedInput={this.state.calendarFocused}
                    onFocusChange={this.onFocusChange}
                    numberOfMonths={1}
                    isOutsideRange={() => false}
                    showClearDates={true}
                    showDefaultInputIcon={true}
                />
            </div>
        );
    }
}

const mapStateToProps = ({filters}) => ({filters});

export default connect(mapStateToProps)(ExpenseListFilters);