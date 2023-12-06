import React from 'react';
import { Link } from 'react-router-dom'
import Styles from "./Landing.module.css"

function Landing() {

    return (
        <div className="w-full h-screen flex flex-col lg:flex-row items-center justify-center bg-violet-800 space-y-16 lg:space-y-0 space-x-8 2xl:space-x-0">
            <img src="https://res.cloudinary.com/dsjsbp6qy/image/upload/v1701614580/descarga-removebg-preview_bz3uox.png" alt="chanchita" className={Styles.shake} />

            <div className="w-full lg:w-1/2 flex flex-col items-center justify-center lg:px-2 xl:px-0 text-center">
                <p className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-wider text-violet-500">Organizate!</p>
                <p className="text-1xl md:text-2xl lg:text-3xl font-bold tracking-wider text-stone-200 mt-2">
                    Transforma tu vida con Organizate! Tu compañero todo en uno para organizar tareas y gastos.
                </p>
                <p className="text-lg md:text-l lg:text-1xl text-slate-900 font-semibold my-12">
                    Descubre la libertad de una vida organizada y financieramente saludable. ¿Demasiadas tareas en tu lista y
                    gastos que parecen escaparse de control? Organizate tiene la solución que necesitas.
                </p>

                <Link to="/login" className="block bg-indigo-900 hover:bg-indigo-600 rounded-lg shadow text-center text-white text-sm md:text-base lg:text-lg font-semibold w-full sm:w-full md:w-2/3 lg:w-1/2 py-2 sm:py-2 md:py-3 lg:py-4 mt-9">
                    Login now!
                </Link>

            </div>
            <div className="w-1/2 lg:h-full flex lg:items-end justify-center p-4">
                <img
                    src="https://res.cloudinary.com/dsjsbp6qy/image/upload/v1701614140/Dise%C3%B1o_sin_t%C3%ADtulo__1_-removebg-preview_phoz9i.png"
                    alt="Landing"
                />
            </div>
        </div>
    );
}

export default Landing;
