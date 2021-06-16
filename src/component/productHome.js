import React from 'react';
import { useHistory } from 'react-router-dom';
import Button from '@material-ui/core/Button';
const PoductHome = () => {
  const history = useHistory();
  const handleClick1 = () =>{
    history.push("/levelOfSugar")
  } 
  return (
      
    <div className="App">  



    <div> מה מבית?</div>

    <Button  onClick={handleClick1}>להכנסת רמת הסוכר</Button>

    </div>
  );
}

export default PoductHome;