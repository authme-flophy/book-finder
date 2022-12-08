import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './SignUp.css'

function SignUp( {user, setUser} ) {

  const [name, setName] = useState("")
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [errors, setErrors] = useState([])
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    const data = {
      name: name,
      username: username,
      email: email,
      password: password,
    }
    const response = await fetch('/signup', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data)
    });
    
    const returnedData = await response.json()

    if (response.ok) {
      setUser(returnedData)
      navigate("/")
    } else (
      setErrors(returnedData.errors)
    )

  }



    return ( 
        <div className="signup">
             <form id="signup_form">
              <div className="error_message">{errors[0]}</div>
              <input type="text" name="name" id="name" placeholder="name" onChange={e => setName(e.target.value)} />
              <input type="text" name="username" id="username" placeholder='username' onChange={e => setUsername(e.target.value)}  />
              <input type="email" name="email" id="email" placeholder="email" onChange={e => setEmail(e.target.value)}  />
              <input type="password" name="password" id="password" placeholder='password' onChange={e => setPassword(e.target.value)} />
              <button id='submit_button' type="submit" onClick={e => handleSubmit(e)}>SIGNUP</button>
            </form>
        </div>
     );
}

export default SignUp;