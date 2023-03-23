

import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "../NewExpense/ExpensesFilter";
import "./ExpenseItem.css";
import "./Expense.css";
import Card from '../UI/Card';
import ExpensesChart from "./ExpensesChart";
import {useState} from "react";


function App(props) {
  const[filteredYear, setFilteredYear] = useState('2020');

  let filterChangeHandler = (selectedYear) =>{
    setFilteredYear(selectedYear);
  }
  const filteredExpenses = props.expenses.filter((expense)=>{
    console.log(expense)
  return expense.date.getFullYear().toString()===filteredYear;
  })

  let expensesContent = <p>No Expenses found.</p>;
  if (filteredExpenses.length > 0){
    expensesContent = filteredExpenses.map(el=> 
      <ExpenseItem 
        key = {el.id}
        title = {el.title} 
        amount = {el.amount} 
        date={el.date}/>      
       )
  }

  return (
    
    
    <Card className="expenses">
      
      <ExpensesFilter expenses={props.expenses} selected={filteredYear} onChangeFilter={filterChangeHandler}/> 
      
      <ExpensesChart expenses={filteredExpenses}/>
      { expensesContent}
     
    </Card>
  );
}

export default App;
