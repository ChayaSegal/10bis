import React from 'react';
import { useHistory } from 'react-router-dom';
import Button from '@material-ui/core/Button';
const Home = () =>  {
  const history = useHistory();
  const handleClick1 = () =>{
    history.push("/productHome")
  }
 const handleClick2 = () =>{
   history.push("/levelOfSugar")
 } 

  return (
    <div className="App">
    <Button  onClick={handleClick1}>להכנסת מוצר מהבית</Button>

    <Button  onClick={handleClick2}>להכנסת רמת הסוכר</Button>
</div>
  );
}

export default Home;