import {useState} from "react";
import './ExpenseForm.css'


const ExpenseForm = (props) => {

    const [enteredTitle, setenteredTitle] = useState('');
    const [enteredAmount, setenteredAmount] = useState('');
    const [enteredDate, setenteredDate] = useState('');

    // const [userIpunt, setUserInput] = useState({
    //     enteredTitle: '',
    //     enteredAmount: '',
    //     enteredDate: ''
    // });

    const titleChangeHandler = (event) => {
        setenteredTitle(event.target.value);

        // setUserInput((prevState) => {
        //     return { ...prevState, enteredTitle: event.target.value};
        // })

    }

    const amountChangeHandler = (event) => {
        setenteredAmount(event.target.value);
    }

    const dateChangeHandler = (event) => {
        setenteredDate(event.target.value);
    }


    const submitHandler = (event) => {
        event.preventDefault();

        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        }
        //console.log(expenseData);
        props.onSaveExpenseDate(expenseData);
        setenteredTitle('');
        setenteredAmount('');
        setenteredDate('');
    }




    return (
        <form onSubmit={submitHandler}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label htmlFor="title">Title</label>
                    <input type="text" value={enteredTitle} onChange={titleChangeHandler}/>
                </div>
                <div className='new-expense__control'>
                    <label htmlFor="amount">Amount</label>
                    <input type="number" value={enteredAmount} min='0.01' step='0.01' onChange={amountChangeHandler}/>
                </div>
                <div className='new-expense__control'>
                    <label htmlFor="date">Date</label>
                    <input type="date" min='2019-01-01' max='2022-12-31' value={enteredDate} onChange={dateChangeHandler}/>
                </div>
            </div>
            <div className='new-expense__actions'>
                <button type='submit'>Add Expense</button>
            </div>
        </form>
    )
}
export default ExpenseForm;