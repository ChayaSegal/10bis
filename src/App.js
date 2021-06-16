import React from 'react';
import './App.css';
import Home from './component/home';
import Login from './component/login';
import Customer from './component/customer';
import LevelOfSugar from './component/levelOfSugar';
import LoginManager from './component/loginManager';
import LoginUser from './component/loginUser';
import Manager from './component/manager';
import Meal from './component/meal';
import OrderConfirmation from './component/orderConfirmation';
import ProductHome from './component/productHome';
import Restaurant from './component/restaurant';
import Result from './component/result';

import { Switch, BrowserRouter as Router,  Route } from 'react-router-dom';
function App() {
  return (
    <div className="App">

      
    <Router>
      <Switch>
      <Route path="/" exact>
          <Login />
      </Route>
   
        <Route path="/customer">
          <Customer />
        </Route>
        <Route path="/levelOfSugar">
          <LevelOfSugar />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/loginManager">
          <LoginManager />
        </Route>
        <Route path="/loginUser">
          <LoginUser />
        </Route>
        <Route path="/manager">
          <Manager />
        </Route>
      
        <Route path="/meal">
          <Meal/>
        </Route>
        <Route path="/orderConfirmation">
          <OrderConfirmation/>
        </Route>
        <Route path="/productHome">
          <ProductHome/>
        </Route>
        <Route path="/restaurant">
          <Restaurant/>
        </Route>
        <Route path="/result">
          <Result/>
        </Route>
      


      </Switch>
    </Router>


    </div>
  );
}

export default App;
