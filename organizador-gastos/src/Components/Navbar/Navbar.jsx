import React from 'react'
import { useAuth } from '../Context/AuthContext';

function Navbar() {

    const { user, logout } = useAuth();

    return (
        <nav id="header" class="w-full z-30 py-1 bg-violet-500 shadow-lg border-b border-blue-400">
            <div class="w-full flex items-center justify-between mt-0 px-6 py-2">
                <label for="menu-toggle" class="cursor-pointer md:hidden block">
                    <svg class="fill-current text-blue-50" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
                    </svg>
                </label>
                <input class="hidden" type="checkbox" id="menu-toggle" />

                <div className="hidden md:flex md:items-center md:w-auto w-full order-3 md:order-1" id="menu">
                    <nav>
                        <ul className="md:flex items-center justify-between text-base text-white pt-4 md:pt-0">
                            <li>
                                <a className="inline-block no-underline hover:text-slate-600 font-medium text-lg py-2 px-4 lg:-ml-2" href="#">
                                    Sobre Nosotros
                                </a>
                            </li>
                            {user ? (
                                <>
                                    <li>
                                        <a className="inline-block no-underline hover:text-slate-600 font-medium text-lg py-2 px-4 lg:-ml-2" href="#">
                                            Mi cuenta
                                        </a>
                                    </li>
                                    <li>
                                        <a className="inline-block no-underline hover:text-slate-600 font-medium text-lg py-2 px-4 lg:-ml-2" href="#">
                                            Mis tareas
                                        </a>
                                    </li>
                                    <li>
                                        <a className="inline-block no-underline hover:text-slate-600 font-medium text-lg py-2 px-4 lg:-ml-2" href="#">
                                            Mis gastos
                                        </a>
                                    </li>
                                    <li>
                                        <a className="inline-block no-underline hover:text-slate-600 font-medium text-lg py-2 px-4 lg:-ml-2" href="#">
                                            Chanchita! $$
                                        </a>
                                    </li>
                                </>
                            ): null}
                        </ul>
                    </nav>
                </div>


                <div class="order-2 md:order-3 flex flex-wrap items-center justify-end mr-0 md:mr-4" id="nav-content">
                    <div class="auth flex items-center w-full md:w-full">
                        {!user ? (
                            <button class="bg-violet-700 text-white bold w-40  p-2 rounded border border-gray-300 mr-4 hover:bg-purple-500 hover:text-gray-700">Sign in</button>
                        ) : null}
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar