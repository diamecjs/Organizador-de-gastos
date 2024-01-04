import { useState } from "react"
import { useAuth } from "../Context/AuthContext";
import {useNavigate} from 'react-router-dom'


export default function Login() {

  const [user, setUser] = useState({
    email: '',
    password: '',
  });

  const { login } = useAuth()
  const navigate = useNavigate()
  const [error, setError] = useState()

  const handleChange = ({target: {name, value}}) => { //funcion para actualizar el estado.
    setUser({...user, [name]: value})
    
  }
  const handleSubmit = async (e) => { //funcion para ver que tiene el estado.
    e.preventDefault()
    
    setError('')
    try {
       await login(user.email, user.password)
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

      <button>Login</button>
    </form>
   </div>
  )
}


//   return (
  
//     <div className="bg-white flex justify-center items-center h-screen">
//       <div className="w-5/6 h-screen hidden lg:block">
//         <img src="https://res.cloudinary.com/dsjsbp6qy/image/upload/v1701960974/Dise%C3%B1o_sin_t%C3%ADtulo__4_-removebg-preview_swsmwt.png" alt="Placeholder Image" className="object-contain w-5/6 h-full" />
//       </div>
//       <div onSubmit={funcAtentication} className="lg:p-36 md:p-52 sm:20 p-8 w-96 lg:w-1/2">
//         <h1 className="text-2xl font-semibold mb-4">Login</h1>
//         <form onSubmit={funcAtentication}>
//           <div className="mb-4">
//             <label htmlFor="username" className="block text-gray-600">Username</label>
//             <input type="text" placeholder="Ingresar email" id="email" className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500" autoComplete="off" />
//           </div>

//           <div className="mb-4">
//             <label htmlFor="password" className="block text-gray-600">Password</label>
//             <input type="password" placeholder="Ingresar contraseña" id="password" className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500" autoComplete="off" />
//           </div>

//           <div className="mb-4 flex items-center">
//             <input type="checkbox" id="remember" name="remember" className="text-blue-500" />
//             <label htmlFor="remember" className="text-gray-600 ml-2">Remember Me</label>
//           </div>

//           <div className="mb-6 text-blue-500">
//             <a href="#" className="hover:underline"></a>
//           </div>
//           {register ? "Registrate" :
//             <button type="submit" className="bg-purple-950 hover:bg-purple-500 text-white font-semibold rounded-md py-2 px-4 w-full">Login</button>
//           }
//         </form>

//         <div className="mt-6 text-blue-500 text-center">
//           {register ? "Inicia sesión" :
//           <Link to="/modal">
//             <button onClick={() => setRegister(!register)} className="bg-purple-950 hover:bg-purple-500 text-white font-semibold rounded-md py-2 px-4 w-full"> Registrate</button>
//             </Link>
//           }
//         </div>
//       </div>
//     </div>
//   );
// }


