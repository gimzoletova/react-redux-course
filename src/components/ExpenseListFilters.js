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
            <div className="content-container">
                <div className="input-group">
                    <div className="input-group__item">
                        <input type="text" className="text" value={this.props.filters.text} placeholder="Search expenses" onChange={(e)=> {
                            this.props.dispatch(setTextFilter(e.target.value));
                        }}/>
                    </div>
                    <div className="input-group__item">
                        <select className="select" value={this.props.filters.sortBy} onChange={(e) => {
                            if (e.target.value === 'date')  this.props.dispatch(sortByDate());
                            else this.props.dispatch(sortByAmount());
                        }}>
                            <option value="date">Date</option>
                            <option value="amount">Amount</option>
                        </select>
                    </div>
                    <div className="input-group__item">
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
                        />
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = ({filters}) => ({filters});

export default connect(mapStateToProps)(ExpenseListFilters);