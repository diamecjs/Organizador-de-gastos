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
    <div>
      <h1>Hola mundo</h1>
      <form onSubmit={funcAtentication}>
        <input type="text" placeholder="Ingresar email" id="email" />
        <input type="password" placeholder="Ingresar contraseña" id="password" />
        <button>{register ? "Registrate" : "Inicia sesión"}</button>
      </form>
      <h4>
        {register ? "Si ya tienes una cuenta" : "No tienes una cuenta"}
        <button onClick={() => setRegister(!register)}>
          {register ? "Inicia sesión" : "Registrate"}
        </button>
      </h4>
    </div>
  );
}

export default Login;
