import React from 'react';
import { useHistory } from 'react-router-dom';
import Button from '@material-ui/core/Button';
const LoginUser = () => {
  const history = useHistory();
  const handleClick1 = () =>{
    history.push("/home")
  } 



  
  return (
    <div className="App">  
  

    <label>שם משתמש</label>
    <input></input>
    <label>סיסמא</label>
    <input></input>
    <Button  onClick={handleClick1}>התחברות</Button>

    
    </div>
  );
}

export default LoginUser;

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