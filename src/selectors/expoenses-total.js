const reducer = (total, num) => total + num;

export default (expenses) => {
    const arr =  expenses.map((expense) => expense.amount);
    return arr.reduce(reducer, 0);
}

