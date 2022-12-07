import { useState } from 'react';
import './Login.css'

function Login() {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = (e) => {
      e.preventDefault()
      const data = {
        username: username,
        password: password
      }
      console.log(data)
    }

    return ( 
        <div className="login">
            <form id="login_form">
              <input type="text" name="username" id="username" placeholder='USERNAME' onChange={e => setUsername(e.target.value)} />
              <input type="password" name="password" id="password" placeholder='PASSWORD' onChange={e => setPassword(e.target.value)} />
              <button id='submit_button' type="submit" onClick={e => handleSubmit(e)}>LOGIN</button>
            </form>
        </div>
     );
}

export default Login;