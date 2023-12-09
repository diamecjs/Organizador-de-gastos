// import { useState } from "react";
// import appFirebase from '../../firebase/credentials' 
// import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from 'firebase/auth'
// const auth = getAuth(appFirebase)

// function Login() {

//     const [register, setRegister] = useState(false);
//     const funcAtentication = async(e) => {
//         e.preventDefault()
//         const email = e.target.email.value;
//         const password = e.target.password.value;

//         if(register) {
//             try {
//                 await createUserWithEmailAndPassword(auth, email, password)
//             } catch (error) {
//                 alert("La contraseña tiene que tener mas de 6 caracteres.")
//             }

//         }else {
//             try {
//                 await signInWithEmailAndPassword(auth, email, password)
//             } catch (error) {
//                 alert("El correo o la contraseña no son correctas")
//             }
//         }
//     }

//     return(
//         <div>
//             <h1>Hola mundo</h1>
//             <form onSubmit={funcAtentication}>
//                 <input type="text" placeholder="Ingresar email" id="email" />
//                 <input type="password" placeholder="Ingresar contraseña" id="password" />
//                 <button>{register ? "Registrate" : "Inicia sesion"}</button>
//             </form>
//             <h4>{register ? "Si ya tienes una cuenta" : "No tienes una cuenta"}
//             <button onClick={()=>setRegister(!register)}>{register ? "Inicia sesion" : "Registrate"}</button>
//             </h4>
//         </div>
//     )
// }
// export default Login;

import { useState, useCallback } from "react";
import appFirebase from '../../firebase/credentials';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

const auth = getAuth(appFirebase);

function Login() {
  const [register, setRegister] = useState(false);

  const funcAtentication = useCallback(
    async (e) => {
      e.preventDefault();
      const email = e.target.email.value;
      const password = e.target.password.value;

      if (register) {
        try {
          await createUserWithEmailAndPassword(auth, email, password);
        } catch (error) {
          alert("La contraseña debe tener más de 6 caracteres.");
        }
      } else {
        try {
          await signInWithEmailAndPassword(auth, email, password);
        } catch (error) {
          alert("El correo o la contraseña no son correctos.");
        }
      }
    },
    [register] // Dependencia para useCallback
  );

  return (
    // <div>
    //   <h1>Hola mundo</h1>
    //   <form onSubmit={funcAtentication}>
    //     <input type="text" placeholder="Ingresar email" id="email" />
    //     <input type="password" placeholder="Ingresar contraseña" id="password" />
    //     <button>{register ? "Registrate" : "Inicia sesión"}</button>
    //   </form>
    //   <h4>
    //     {register ? "Si ya tienes una cuenta" : "No tienes una cuenta"}
    //     <button onClick={() => setRegister(!register)}>
    //       {register ? "Inicia sesión" : "Registrate"}
    //     </button>
    //   </h4>
    // </div>
    <div class="bg-violet-500 flex justify-center items-center h-screen">
      <div class="w-5/6 h-96 hidden lg:block" >
        <img src="https://res.cloudinary.com/dsjsbp6qy/image/upload/v1702131659/Dise%C3%B1o_sin_t%C3%ADtulo__6_-removebg-preview_wqujtb.png" alt="Placeholder Image" class="object-contain w-5/6 h-full" />
      </div>
      <div onSubmit={funcAtentication} class="lg:p-36 md:p-52 sm:20 p-8 w-96 lg:w-1/2">
        <h1 class="text-2xl font-semibold mb-4">Login</h1>
        <form onSubmit={funcAtentication}>
          <div class="mb-4">
            <label for="username" class="block text-gray-600">Username</label>
            <input type="text" placeholder="Ingresar email" id="email" class="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500" autocomplete="off" />
          </div>

          <div class="mb-4">
            <label for="password" class="block text-gray-600">Password</label>
            <input type="password" placeholder="Ingresar contraseña" id="password" class="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500" autocomplete="off" />
          </div>

          <div class="mb-4 flex items-center">
            <input type="checkbox" id="remember" name="remember" class="text-blue-500" />
            <label for="remember" class="text-gray-600 ml-2">Remember Me</label>
          </div>

          <div class="mb-6 text-blue-500">
            <a href="#" class="hover:underline"></a>
          </div>
          {register ? "Registrate" :
            <button type="submit" class="bg-purple-950 hover:bg-purple-500 text-white font-semibold rounded-md py-2 px-4 w-full">Login</button>
          }
        </form>

        <div class="mt-6 text-blue-500 text-center">
          {register ? "Inicia sesión" :
            <button onClick={() => setRegister(!register)} class="bg-purple-950 hover:bg-purple-500 text-white font-semibold rounded-md py-2 px-4 w-full"> Registrate</button>
          }
        </div>
      </div>
    </div>
  );
}

export default Login;
