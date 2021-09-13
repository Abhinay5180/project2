import React,{useState} from "react";
import './userInput.css'
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";


const UserInput = (props)=>{
const [enteredUsername,setEnteredUsername] = useState('');
const [enteredAge,setEnteredAge] = useState('');
const [error,setError] = useState();


  const UsernameChangeHandler = event =>{
   
    setEnteredUsername(event.target.value)
  }
  const AgeChangeHandler = event =>{
    
    setEnteredAge(event.target.value)
  }
  const AddUserHandler = event => {
        event.preventDefault();
        if(enteredUsername.trim().length === 0 || enteredAge.trim().length === 0){
            setError({
                title:'Invalid input',
                message:'Please enter a valid name and age (non-empty values).'
            }); 
            return;
          }
        if(+enteredAge < 1){
            setError({
                title:'Invalid age',
                message:'Please enter a valid age (>0).'
            }); 
            return;
        }  
        props.onUserInput(enteredUsername,enteredAge);
          setEnteredUsername('');
          setEnteredAge('');
     };
     const errorHandler = ()=>{
         setError(null);
     } 
    
    
  return (<div>
          {error &&<ErrorModal title={error.title} message={error.message} onConfirm={errorHandler}/>}
          <form onSubmit={AddUserHandler}>
               <div className ="form-control">
              <label>UserName </label>
              <input type="text" value={enteredUsername} onChange={UsernameChangeHandler}></input>
              <label>Age(Years)  </label>
              <input type="number" value={enteredAge} onChange={AgeChangeHandler} ></input>
              </div>
              <Button type="submit">Add User</Button>
              </form>
              </div>
          
     
  )  
}

export default UserInput;