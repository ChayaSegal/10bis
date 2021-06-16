import React from 'react';
import { useHistory } from 'react-router-dom';
import Button from '@material-ui/core/Button';
const Customer = () => {
  const history = useHistory();
  const handleClick2 = () =>{
    history.push("/home")
  } 
  return (
      
    <div className="App">  



    <label>שם משתמש</label>
    <input></input>
    <label>סיסמא</label>
    <input></input>
    <label>שם פרטי</label>
    <input></input>
    <label>שם משפחה</label>
    <input></input>
    <label>כתובת מייל</label>
    <input></input>
    <label>כתובת</label>
    <input></input>
    <label>טלפון</label>
    <input></input>
    <Button  onClick={handleClick2}>לאישור הרשמה</Button>
    </div>
  );
}

export default Customer;