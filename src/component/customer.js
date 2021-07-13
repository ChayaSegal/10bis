import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { signup } from "../api/loginApi";

const [email, setEmail] = useState('');
const [password, setPassword] = useState(0);
const [firstName, setFirstName] = useState('');
const [lastName, setLastName] = useState('');
const [address, setAddress] = useState('');
const [phone, setPhone] = useState('');

const Customer = () => {
  const history = useHistory();
  const handleClick2 = () =>{
   // signup(email, password, firstName, lastName,  phone, address)
    // history.push("/home")
  } 

//  useEffect(()=>{
 
//  }, [email]);
 
  return (
      
    <div className="App">  

    <label>מייל</label>
    <input onChange={(e)=>this.setEmail(e.target.value)}></input>
    <label>סיסמא</label>
    <input onChange={(e)=>this.setPassword(e.target.value)}></input>
    <label>שם פרטי</label>
    <input onChange={(e)=>this.setFirstName(e.target.value)}></input>
    <label>שם משפחה</label>
    <input onChange={(e)=>this.setLastName(e.target.value)}></input>
    <label>כתובת</label>
    <input onChange={(e)=>this.setAddress(e.target.value)}></input>
    <label>טלפון</label>
    <input  onChange={(e)=>this.setPhone(e.target.value)}></input>

    <Button  onClick={handleClick2}>לאישור הרשמה</Button>
    
    </div>
  );
}

export default Customer;