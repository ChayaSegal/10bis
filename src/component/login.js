import React from 'react';
import { useHistory } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import ValidateTextField from '../common/validateTextFields';

const Login = () => {
  const history = useHistory();
 const handleClick1 = () =>{
   history.push("/")
 } 
 const handleClick2 = () =>{
  history.push("/")
}
  
  
  return (
    <div className="App">
      //אני רוצה שכאשר נלחץ על התחברות יגלל לנו חלון קטן ששם יהיה אפשרות לבחירה של לקוח או בעל מסעדה לכן עדין לא חיברתי את זה כמו שצריך  
    <Button  onClick={handleClick1}>התחברות</Button>
    
    <Button  onClick={handleClick2}>הרשמה</Button>

    <div>דף הבית</div>
    <div>אודותינו</div>
    <div>מה חדש לחולי סכרת</div>
   
    </div>
  );
}

export default Login;




/*const Login = () => {
    const history = useHistory();
    const handleClick = () => {
        //Validation - if email and pwd are VALID 
        loginToServer()/*send params .then((res) => {
            //save token
            history.push("/registersHomePage");
        }).catch(() => {
            //Handle error
        })

    }
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');

    return (<div>
        <div>שם משתמש</div>
        <ValidateTextField value={userName}
            onChange={(value) => setUserName(value)}
            validate={() => { return userName === '' }}
            errorMessage={'שדה חובה'} />
        <br />

        <div>סיסמה</div>
        <ValidateTextField value={password}
            onChange={(value) => setPassword(value)}
            validate={() => { return password.length < 6 }}
            errorMessage={'חייב להכיל לפחות 6 תוים'} />
        <br />
        <Button variant="contained" color="primary" onClick={handleClick}>כניסה</Button>
    </div>)


}
export default Login;
 */