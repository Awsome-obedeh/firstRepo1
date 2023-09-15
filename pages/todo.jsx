import { useState } from "react";
import classes from './todo.module.css'

export default function Todo({todo}){
    // declear a state isCompleted to false 
    const [isCompleted,setIsCompleted]=useState(false)
    console.log(isCompleted);
    // create a function to change the value of our state
    function completedHandle(){
        console.log(todo);
        // set isCompleted state  to true 
        setIsCompleted(true)
    }

    let a=5;
    let b=10
    if(a>b){
        console.log('a is  greater');
    }

    else{
        console.log('b is greater');
    }

    a>b ? console.log('a is greater') : console.log('b is greater');

    return(
        // conditional rendering
        // if the first condition is true the second condition runs
        // <div className={isCompleted && classes.completed  }>
          
        //     <li > {todo} </li>
        //   <button onClick={completedHandle}>Completed</button>
 
            
        // </div>

        <div className={isCompleted ? classes.completed: ''  }>
          
        <li > {todo} </li>
      <button onClick={completedHandle}>Completed</button>
      

        
    </div>

    )
}