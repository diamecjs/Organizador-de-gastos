/* eslint-disable no-undef */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */
import React from 'react'
import { Link } from 'react-router-dom'
import Styles from "./Landing.module.css"

function Landing() {


    return (
        <div className={Styles["landing-container"]}>
           <div>
            <h1 className={Styles["h1-title"]}>Organizate !</h1>
            </div>
            <div className={Styles["button-container"]}>
               <Link to='/login'> 
               <button>Ingresar</button> 
               </Link>
                {/* <button>Registrarse</button> */}
            </div>
            <div className={Styles["chanchita-container"]}>
                <img src="https://res.cloudinary.com/dsjsbp6qy/image/upload/v1701614580/descarga-removebg-preview_bz3uox.png" alt="chanchita" className={Styles.shake} />
            </div>
            <div className={Styles["h3-container"]}>
                <h3>Transforma tu Vida con Organizate!
                    Tu Compañero Todo en Uno para Organizar Tareas y Gastos.</h3>
            </div>
            <div className={Styles["image-container"]}>
                <img src="https://res.cloudinary.com/dsjsbp6qy/image/upload/v1701614140/Dise%C3%B1o_sin_t%C3%ADtulo__1_-removebg-preview_phoz9i.png" alt="Landing" />
            </div>
            <div className={Styles["texto-container"]}>
                <h5>Organiza tareas y proyectos con facilidad</h5>
                <h5>Controla tus gastos y ahorra dinero de manera inteligente</h5>
                <h5>Mantén un equilibrio perfecto entre trabajo y vida personal</h5>
            </div>
            <div className={Styles["texto2-container"]}>
                <h5>Sincronización instantánea en todos tus dispositivo</h5>
                <h5>Recordatorios personalizables para nunca perder una fecha límite</h5>
                <h5>Informes detallados de gastos para un control financiero total</h5>
            </div>
        </div>

    )
}

export default Landing