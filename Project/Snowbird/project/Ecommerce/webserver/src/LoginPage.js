import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './style.css'

function LoginPage() {
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [errormessage, setErrorMessage] = useState('');
  const navigate = useNavigate()

  function handleClick() {
    var req = { username: username, password: password };
    var url = 'http://localhost:8000/Uservalidate';
    var header = {};

    axios.post(url, req, header).then((res) => {
      if (res.data.length > 0) {
        setErrorMessage('success')
        navigate('./Dashboard')
      } else {
        setErrorMessage('Error in Username Or Password')
      }
    })
  }

  function newClick(e) {
    e.preventDefault()
    navigate('./SignupPage')
  }

  return (
    <div className="container">
      <h1 className="h1">Login</h1>
      <div>
        <label>Username</label>
        <input
          type="text"
          value={username}
          onChange={(e) => {
            setUserName(e.target.value)
          }}
          className="textbox"
        />
      </div>
      <div>
        <label>Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value)
          }}
          className="textbox"
        />
      </div>
      <br />
      <br />
      <button onClick={handleClick} className="login">
        LOGIN
      </button>
      <p className="errormessage">{errormessage}</p>
      <button onClick={newClick} className="newuser">
        NewUser?
      </button>
    </div>
  )
}
export default LoginPage
