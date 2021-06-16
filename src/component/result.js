import React from 'react';
import { useHistory } from 'react-router-dom';
import Button from '@material-ui/core/Button';
const Result = () => {
  const history = useHistory();
  const handleClick1 = () =>{
    history.push("/orderConfirmation")
  } 
  return (
    <div className="App">  



    <div>כמות האינסולין שעליך לקחת</div>
    <div></div>
    <button>לביצוע הזמנה</button>
    <Button  onClick={handleClick1}>לביצוע הזמנה</Button>
    </div>
  );
}

export default Result;