import React from 'react';
import { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Login from './components/Login';
import Signup from './components/Singup';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Landing from './Landing';

const root = ReactDOM.createRoot(document.getElementById('root'));
function App(){
   const [users,Setusers]=useState([
      {
          username: "bala",
          password:"1234"
      }
  ])
   return(
      <>
    <div>
      <BrowserRouter>
      <Routes>
         <Route path='/'element={<Login users={users} Setusers={Setusers}></Login>}></Route>
         <Route path='/login'element={<Login users={users} Setusers={Setusers}></Login>}></Route>
         <Route path='/singup'element={<Signup users={users} Setusers={Setusers}></Signup>}></Route>
         <Route path='/landing'element={<Landing></Landing>}></Route>
      </Routes>
      </BrowserRouter>
    </div></>
   )
}
root.render(<App></App>);
   
  


