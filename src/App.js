import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';  
import Createemployee from './crudfiles/Createemployee.js'  
import EmployeList from './crudfiles/EmployeeList.js'  
import Editemployee from "./crudfiles/Editemployee.js"; 




function App() {  
  
    return (  
  
      <div className="App">  
  
       <Router>    
  
        <div className="container">    
  
          <nav className="btn btn-warning navbar navbar-expand-lg navheader">    
  
            <div className="collapse navbar-collapse" >    
  
             
  
              <ul className="navbar-nav mr-auto">    
  
                <li className="nav-item">    
  
                  <Link to={'/Createemployee.js'} className="nav-link">Add Employee</Link>    
  
                </li>    
  
                <li className="nav-item">    
  
                  <Link to={'/EmployeList.js'} className="nav-link">Employee List</Link>    
  
                </li>    
  
              </ul>    
  
            </div>    
  
          </nav> <br />    
  
          <Switch>    
  
            <Route exact path='/Createemployee.js' component={Createemployee} />    
  
            <Route path='/edit/:id' component={Editemployee} />    
  
            <Route path='/EmployeList.js' component={EmployeList} />    
  
          </Switch>    
  
        </div>    
  
      </Router>    
  
      </div>  
  
    );  
  
  }  
  
  export default App;  
