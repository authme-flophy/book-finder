import { useState } from 'react'
import './SignUp.css'

function SignUp() {

  const [name, setName] = useState("")
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    const data = {
      name: name,
      username: username,
      email: email,
      password: password
    }
    console.log(data)
  }



    return ( 
        <div className="signup">
             <form id="signup_form">
              <input type="text" name="name" id="name" placeholder="NAME" onChange={e => setName(e.target.value)} />
              <input type="text" name="username" id="username" placeholder='USERNAME' onChange={e => setUsername(e.target.value)}  />
              <input type="email" name="email" id="email" placeholder="EMAIL" onChange={e => setEmail(e.target.value)}  />
              <input type="password" name="password" id="password" placeholder='PASSWORD' onChange={e => setPassword(e.target.value)} />
              <button id='submit_button' type="submit" onClick={e => handleSubmit(e)}>SIGNUP</button>
            </form>
        </div>
     );
}

export default SignUp;