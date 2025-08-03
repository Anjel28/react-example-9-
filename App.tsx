import React from 'react';
import './App.css';
//import Customer from './components/Customer'
import Users from './components/Users'
//import AnotherCounter from './components/AnotherCounter'
//import Counter from './components/Counter'
//import  Youtube from './components/Youtube'
//import FunComp from './components/FunComp'
//import ClassComp from './components/ClassComp'
//import Login from './components/Login'
//import Form from './components/Form'
//import AuthUser from './components/AuthUser'
//import AuthUserClass from './components/AuthUserClass'
//import AuthUserReducer from './components/AuthUserReducer'
//import UserList from './components/UserList'
//import ShoopingList from './components/ShoppingList'
//import NumberList from './components/NumberList'
//import ActiveUserList from './components/ActiveUserList'
 
 
function App() {
  
  return (
  <div className = "container">
   <div className="row">
    <div className="col-md-6">
  {/*<AnotherCounter />
      <Counter  />
      <Youtube />
      <Login />
      <Form />
      <AuthUser />
      <AuthUserClass />
      <AuthUserReducer />*/}
      {/*<UserList />
      <ShoopingList />
      <NumberList />
      <ActiveUserList />*/}
    
  {/* <FunComp name="Technofoyt"age={26}  name="Anjel" age={26} />
   <ClassComp name="Youtuber" age={13} />
     <Customer  text="typescript" onClick={() => console.log('button clicked')} text="Click me" 
  onClick={() => console.log('Button clicked')} />*/}
  
    </div>
   <Users />
    <div className="col-md-6">
 
    </div>

   </div>
  
  
  
         
       
      
  </div>
  );
}

export default App;
