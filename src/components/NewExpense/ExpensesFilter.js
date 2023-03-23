import React,{useState} from 'react';

import './ExpensesFilter.css';



const ExpensesFilter = (props) => {
  
  

  let [yearArr, setYearArr] = useState( 
    props.expenses.map(expense => expense.date.getFullYear())
    .filter(function(v, i, self){
      return i == self.indexOf(v)
    }).sort() 
    )
    
   
  
  

  let changeHandler = (e)=>{
    props.onChangeFilter(e.target.value);
  }


  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Filter by year</label>
        <select >
          
          {yearArr.map(
            (year,index) =>
            <option id={index} onClick={changeHandler} value={year.toString()} >{year.toString()}</option>
          )}
          {/* <option onClick={changeHandler} value='2022'>2022</option>
          <option onClick={changeHandler}  value='2021'>2021</option>
          <option onClick={changeHandler} value='2020'>2020</option>
          <option onClick={changeHandler} value='2019'>2019</option> */}
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;