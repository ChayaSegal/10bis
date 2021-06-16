import React from 'react';
import { useHistory } from 'react-router-dom';
import Button from '@material-ui/core/Button';
const LevelOfSugar = () => {
  const history = useHistory();
  const handleClick1 = () =>{
    history.push("/result")
  } 
  return (
      
    <div className="App">  



    <div>מה רמת הסוכר שלך היום?</div>

    <button>0</button>
    <button>1</button>
    <button>2</button>
    <button>3</button>
    <button>4</button>
    <button>5</button>
    <button>6</button>
    <button>7</button>
    <button>8</button>
    <button>9</button>   

    <input></input>

    
    <Button  onClick={handleClick1}>לחישוב כמות האינסולין</Button>
    </div>
  );
}

export default LevelOfSugar;