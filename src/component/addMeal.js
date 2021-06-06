import React from 'react';

const AddMeal = () => {
  const history = useHistory();
  const handleClick1 = () =>{
    history.push("/custemer")
  } 
  const handleClick2 = () =>{
   history.push("/maneger")
 }
  
  
  
  
  
  
  return (
      
    <div className="App">  

 
    <Button  onClick={handleClick1}>התחברות</Button>
    <Button  onClick={handleClick2}>הרשמה</Button>
    <div>קטגוריה</div>

    <button>מנות פתיחה</button>
    <button> מרקים</button>
    <button>לחמים </button>
    <button> דגים</button>
    <button> בשר</button>
    <button> משקאות</button>
    <button> תוספות</button>
    <button> קינוחים</button>
    <button>עוף סיני</button>
   
    </div>
  );
}

export default AddMeal;