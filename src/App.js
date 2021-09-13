import './App.css';
import React, { useState } from 'react';
import UserInput from './components/userInput';
import UserList from './components/userList';

const App = props => {
  const [usersList, setUsersList] = useState([]);

  const userInputHandler =(uName,uAge,uId=Math.random().toString()) =>{
    setUsersList((prevUsersList) => {
      return [...prevUsersList,{name :uName, age :uAge,id : uId}]
    });
  }
  
  return ( 
    <div>
      <section id="user-form">
     <UserInput onUserInput={userInputHandler}/>
     </section>
     <section>
      <UserList users={usersList}/>
     </section>
     </div>
  );
  
}

export default App;
