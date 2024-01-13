import { useState } from 'react';
import { useDispatch} from 'react-redux';
import {  postUser } from '../../Redux/Register/user.Actions';

export default function RegisterUser() {

  const dispatch = useDispatch();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('')
  const [birthday, setBirthday] = useState('');
  const [image, setImage] = useState('');
  const [income, setIncome] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault();

    const newUser = {
      firstName,
      lastName,
      email,
      birthday,
      password,
      image,
      income
    }
    dispatch(postUser(newUser))

    setFirstName('')
    setLastName('');
    setEmail('');
    setBirthday('');
    setPassword('');
    setImage('');
    setIncome('')
  }



  return(
    <div className="min-h-screen flex items-center justify-center bg-white shadow-md p-6">
  
    <form className='w-full max-w-sm' onSubmit={handleSubmit}>
      
      <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='firstName'>First Name</label>
      <input 
      type='text'
      id='firstName'
      value={firstName}
      placeholder='Your Name'
      onChange={(e) => setFirstName(e.target.value)}
      />

      <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='lastName'>Last Name</label>
      <input 
      type='text'
      id='lastName'
      value={lastName}
      placeholder='Your Last Name'
      onChange={(e) => setLastName(e.target.value)}
      />

      <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='email'>Email</label>
      <input
      type='email'
      id='email'
      value={email}
      placeholder='youEmail@youcompany.com'
      onChange={(e) => setEmail(e.target.value)}
      />

      <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='birthday'>Your Birthday</label>
      <input
      type='date'
      id='birthday'
      value={birthday}
      placeholder='14/08/1989'
      onChange={(e) => setBirthday(e.target.value)}
      />

      <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='password'>Password</label>
      <input
      type='password'
      id='password'
      value={password}
      placeholder='********'
      onChange={(e) => setPassword(e.target.value)}
      />

      <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='image'>Imagen</label>
      <input 
      type='img'
      id='image'
      value={image}
      placeholder=''
      onChange={(e) => setImage(e.target.value)}
      />

      <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='income'>Income</label>
      <input 
      type='number'
      id='income'
      value={income}
      placeholder=''
      onChange={(e) => setIncome(e.target.value)}
      />

      <button className='block text-gray-700 text-sm font-bold mb-2' type='submit'>Register</button>
    </form>
    </div>
  )
}
// import { useState } from "react"
// import { useAuth } from "../Context/AuthContext";
// import {Link, useNavigate} from 'react-router-dom'


// export default function Register() {

//   const [user, setUser] = useState({
//     email: '',
//     password: '',
//   });

//   const { signup } = useAuth()
//   const navigate = useNavigate()
//   const [error, setError] = useState()

//   const handleChange = ({target: {name, value}}) => { //funcion para actualizar el estado.
//     setUser({...user, [name]: value})
    
//   }
//   const handleSubmit = async (e) => { //funcion para ver que tiene el estado.
//     e.preventDefault()
    
//     setError('')
//     try {
//        await signup(user.email, user.password)
//       navigate('/profile')
//     } catch (error) {
//       if(error.code === 'auth/invalid-email') {
//         setError("Correo invalido")
//       }
//       // setError(error.message)
//     }
    
//   } 
//   return (
    
//    <div>
    
//     {error && <p>{error}</p>}

//     <form onSubmit={handleSubmit}>
      
//       <label htmlFor="email">Email</label>
//       <input type="email" name="email" placeholder="youremail@yourcompany.com"
//       onChange={handleChange} />

//       <label htmlFor="password">Password</label>
//       <input type="password" name="password" id="password"
//       placeholder="*******"
//       onChange={handleChange}
//       />

//       <button>Register</button>
      
//     </form>
//     <div>
//       <h3>Si ya tenes una cuenta ingresa ⬇️</h3>
//       <Link to='/login'>
//         <button>Login</button>
//       </Link>
//     </div>
//    </div>
//   )
// }
