import React from 'react'


function Landing() {


    return (
        <div className={Styles["landing-container"]}>
            <h1>Nombre App</h1>

            <div>
                <button>Ingresar</button>
                <button>Registrarse</button>
            </div>
            <div>
                <h3>Transforma tu Vida con [Nombre de la Aplicación]:
                    Tu Compañero Todo en Uno para Organizar Tareas y Gastos.</h3>
            </div>
            <div>
                <img src="https://res.cloudinary.com/dsjsbp6qy/image/upload/v1701614140/Dise%C3%B1o_sin_t%C3%ADtulo__1_-removebg-preview_phoz9i.png" alt="Landing" />
            </div>
            <div>
                <img src="https://res.cloudinary.com/dsjsbp6qy/image/upload/v1701614580/descarga-removebg-preview_bz3uox.png" alt="chanchita"/>
            </div>
        </div>

    )
}

export default Landing