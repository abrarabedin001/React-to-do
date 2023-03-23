
import React, {useState} from 'react';

import "./ExpenseForm.css";



function ExpenseForm(props) {
    const [enteredTitle, setEnteredTitle] = useState(props.title);
    const [amountChange, setAmountChange] = useState(props.amount);
    const [dateChange, setDateChanged] = useState(props.date);
    const [visibility, setvisibility] = useState(true);

    const changeVisibility= ()=>{
        setvisibility (!visibility);
    }

    const titleChangeHandler = (event)=>{
        setEnteredTitle(event.target.value);
    }
    const amountChangeHandler = (event)=>{
        setAmountChange(event.target.value);
    }
    const dateChangeHandler = (event)=>{
        setDateChanged(event.target.value);
    }

    const submitHandler = (event) => {
        event.preventDefault();
        const expenseData = {
            title: enteredTitle,
            amount: amountChange,
            date: new Date(dateChange)
        } 
    props.onSaveExpenseData(expenseData);

    setEnteredTitle("");
    setAmountChange("");
    setDateChanged("");
    }
    let formDisplay = <div className="new-expense__actions">
            
            <button onClick={changeVisibility}>
                Add New Expense
            </button>

        </div>

    if ( visibility )    
    {
        formDisplay = 
        <div className='new-expense__controls'>
            <div className='new-expense__control'>
                <label>Title</label>
                <input type='text' onChange={titleChangeHandler} value={enteredTitle}/>
            </div>
            <div className='new-expense__control' >
                <label>Amount</label>
                <input type='number' min="0.01" step="0.01" onChange={amountChangeHandler} value={amountChange}/>
            </div>
            <div className='new-expense__control' >
                <label>Date</label>
                <input type='date' min="2019-01-01" max="2028-12-31" onChange={dateChangeHandler} value={dateChange}/>
            </div>
            <div className="new-expense__actions">
                <button type='submit'>
                    Add Expense
                </button>
                <button onClick={changeVisibility}>
                    Cancel
                </button>
    
            </div>
        </div>
     
    }


  return (
    <form onSubmit={submitHandler}>
        {formDisplay}
    </form>
    
  );
}

export default ExpenseForm;
