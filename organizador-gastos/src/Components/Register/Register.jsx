import { useState } from "react"
import { useAuth } from "../Context/AuthContext";
import {Link, useNavigate} from 'react-router-dom'


export default function Register() {

  const [user, setUser] = useState({
    email: '',
    password: '',
  });

  const { signup } = useAuth()
  const navigate = useNavigate()
  const [error, setError] = useState()

  const handleChange = ({target: {name, value}}) => { //funcion para actualizar el estado.
    setUser({...user, [name]: value})
    
  }
  const handleSubmit = async (e) => { //funcion para ver que tiene el estado.
    e.preventDefault()
    
    setError('')
    try {
       await signup(user.email, user.password)
      navigate('/profile')
    } catch (error) {
      if(error.code === 'auth/invalid-email') {
        setError("Correo invalido")
      }
      // setError(error.message)
    }
    
  } 
  return (
    
   <div>
    
    {error && <p>{error}</p>}

    <form onSubmit={handleSubmit}>
      
      <label htmlFor="email">Email</label>
      <input type="email" name="email" placeholder="youremail@yourcompany.com"
      onChange={handleChange} />

      <label htmlFor="password">Password</label>
      <input type="password" name="password" id="password"
      placeholder="*******"
      onChange={handleChange}
      />

      <button>Register</button>
      
    </form>
    <div>
      <h3>Si ya tenes una cuenta ingresa ⬇️</h3>
      <Link to='/login'>
        <button>Login</button>
      </Link>
    </div>
   </div>
  )
}
