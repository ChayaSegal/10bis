import React from 'react';
import './App.css';
import Home from './home';
import Login from './login';
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
        <Route path="/addMeal">
          <AddMeal/>
        </Route>


      </Switch>
    </Router>


      <Login />
     <Home />
    </div>
  );
}

export default App;
