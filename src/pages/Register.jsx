import React,{useState} from 'react'
import {Link,useNavigate} from 'react-router-dom'
import axios from 'axios'

const Register = () => {
  let navigate = useNavigate()
  const [inputs,setInputs] = useState({
    username:"",
    email:"",
    password:"",
  })

  const [error,setError] = useState(null) 

  const handleChange = (e) =>{
    setInputs(prev =>({ ...prev,[e.target.name] : e.target.value}))
  }

  const handleSubmit = async(e) =>{
    e.preventDefault()
    try{
        await axios.post('/signup',inputs)
        navigate("/login")
    }
    catch(err){
      setError(err.response.data)
    }
  }
  
  // console.log(inputs)
  return (
    <div className="auth">
        <h1>REGISTER</h1>
        <form  onSubmit={handleSubmit}>
            { error && <p>{error} </p>}
            <label>Username</label>
            <input type="text" name="username" value={inputs.username} placeholder="Enter username" onChange={handleChange}/>
            <label>Email address</label>
            <input type="email" name="email" value={inputs.email} placeholder="Enter email address" onChange={handleChange}/>
            <label>Password</label>
            <input type="password" name="password" value={inputs.password} placeholder="Enter password" onChange={handleChange}/>
            <button>Register</button>
            <span>Already have an account? <Link to="/login">Login</Link></span>
        </form>
    </div>
  )
}

export default Register