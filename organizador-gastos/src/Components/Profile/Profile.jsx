/* eslint-disable react/prop-types */
import appFirebase from '../../firebase/credentials'
import { getAuth, signOut } from 'firebase/auth'

const auth = getAuth(appFirebase)

function Profile({correoUsuario}) {

    return (
        <div>
            <h1>Bienvenido {correoUsuario}</h1>
            <button onClick={()=> signOut(auth)}>Logout</button>
        </div>
    )
}
export default Profile