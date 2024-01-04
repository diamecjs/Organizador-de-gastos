import { useAuth } from "../Context/AuthContext"
import { useNavigate } from 'react-router-dom'


export function Profile() {
    
    const {user, logout, loading} = useAuth()
    const navigate = useNavigate()

    console.log(user)
    const handleLogout = async () => {
        await logout()
        navigate('/')
    }
    if (loading) return <h1>Loading</h1>

    return (
        <div>
            <h1>Bienvenido {user.email}</h1>
            <button onClick={handleLogout}>
                Logout
            </button>
        </div>
    )
}