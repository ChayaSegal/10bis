import React from 'react';
import { useHistory } from 'react-router-dom';
import Button from '@material-ui/core/Button';

const LoginManager = () => {

  const history = useHistory();
  const handleClick1 = () =>{
    history.push("/manager")
  } 
  const handleClick2 = () =>{
   history.push("/customer")
 }
  return (
      
    <div className="App">  
    <Button  onClick={handleClick1}>מנהל</Button> 
    <Button  onClick={handleClick2}>לקוח</Button>
    </div>
  );
}

export default LoginManager;