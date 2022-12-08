import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css'

function Login({user, setUser}) {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [errors, setErrors] = useState([])
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
      e.preventDefault()
      const data = {
        username: username,
        password: password
      }
      const response = await fetch('/login', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data)
      });
      
      const returnedData = await response.json()

      if (response.ok) {
        setUser(returnedData)
        navigate(-1)
      } else (
        setErrors(returnedData.errors)
      )

    }

    return ( 
        <div className="login">
            <form id="login_form">
              <div className='error_message'>{errors[0]}</div>
              <input type="text" name="username" id="username" placeholder='username' onChange={e => setUsername(e.target.value)} />
              <input type="password" name="password" id="password" placeholder='password' onChange={e => setPassword(e.target.value)} />
              <button id='submit_button' type="submit" onClick={e => handleSubmit(e)}>LOGIN</button>
            </form>
        </div>
     );
}

export default Login;