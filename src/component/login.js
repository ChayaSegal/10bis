import React from 'react';
import { useHistory } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import ValidateTextField from '../common/validateTextFields';

const Login = () => {
  const history = useHistory();
 const handleClick1 = () =>{
   history.push("/login2")
 } 
 const handleClick2 = () =>{
  history.push("/")
}
  
  
  return (
    <div className="App">  
    <Button  onClick={handleClick1}>התחברות</Button>
    <Button  onClick={handleClick2}>הרשמה</Button>

    <div>דף הבית</div>
    <div>אודותינו</div>
    <div>מה חדש לחולי סכרת</div>
   
    </div>
  );
}

export default Login;