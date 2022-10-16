import React,{useState,useContext} from 'react'
import {Link,useNavigate} from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'

const Login = () => {
  const { login } = useContext(AuthContext)
  let navigate = useNavigate()

  const [inputs,setInputs] = useState({
    username:"",
    password:"",
  }) 

  const [error,setError] = useState(null)

  const handleChange = (e) =>{
      setInputs(prev => ({ ...prev, [e.target.name]: e.target.value}))
  }

  const handleSubmit = async(e) =>{
    e.preventDefault()
    try{
      await login(inputs)
      navigate("/")
    }
    catch(err){
      setError(err.response.data) 
    }
  }

  return (
    <div className="auth">
        <h1>LOGIN</h1>
        <form onSubmit={handleSubmit}>
            {error && <p>{error}</p>}
            <label>Username</label>
            <input type="text"  name="username" value={inputs.username} onChange={handleChange} placeholder="Enter username"/>
            <label>Password</label>
            <input type="password"  name="password" value={inputs.password} onChange={handleChange} placeholder="Enter password"/>
            <button>Login</button>
            <span>Don't have an account? <Link to="/register">Register</Link></span>
        </form>
    </div>
  )
}

export default Login