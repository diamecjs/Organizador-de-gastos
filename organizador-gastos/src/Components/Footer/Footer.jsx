/* eslint-disable no-unused-vars */
import React from 'react'

function Footer() {

    const date = new Date();
    const year = date.getFullYear();

    return (

        <div className="relative bg-slate-800 pt-8 pb-6 h-48">
            <link rel="stylesheet" href="https://demos.creative-tim.com/notus-js/assets/styles/tailwind.css"></link>
            <link rel="stylesheet" href="https://demos.creative-tim.com/notus-js/assets/vendor/@fortawesome/fontawesome-free/css/all.min.css"></link>
            <div className="container mx-auto px-2">
                <div className="flex flex-wrap text-left lg:text-left">
                    <div className="w-full lg:w-6/12 px-4">
                        <h4 className="text-3xl fonat-semibold text-blueGray-700">RioplatenseCode</h4>
                        <h5 className="text-lg mt-0 mb-2 text-blueGray-600">
                            Transformando ideas en código, y sueños en realidad.
                        </h5>
                        <div className="mt-6 lg:mb-0 mb-6">
                            <button className="bg-white text-lightBlue-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
                                <i className="fab fa-twitter"></i></button><button className="bg-white text-lightBlue-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
                                <i className="fab fa-facebook-square"></i></button><button className="bg-white text-pink-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
                                <i className="fab fa-dribbble"></i></button><button className="bg-white text-blueGray-800 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
                                <i className="fab fa-github"></i>
                            </button>
                        </div>
                    </div>
                    <div className="w-full lg:w-6/12 px-4">
                        <div className="flex flex-wrap items-top mb-6">
                            <div className="w-full lg:w-4/12 px-2 ml-auto">
                                <span className="block uppercase text-blueGray-500 text-sm font-semibold mb-2">Argentina - Uruguay</span>
                            </div>
                            <div className="w-full lg:w-4/12 px-2">
                                <span className="block uppercase text-blueGray-500 text-sm font-semibold mb-2">Nosotros</span>
                                <ul className="list-unstyled">
                                    <li>
                                        <a className="text-blueGray-600 hover:text-blueGray-300 font-semibold block pb-2 text-sm" href="https://port-folio-flax-psi.vercel.app/">Juan Manuel
                                            Berraz Montyn</a>
                                    </li>
                                    <li>
                                        <a className="text-blueGray-600 hover:text-blueGray-300 font-semibold block pb-2 text-sm" href="https://portfolio-diame.vercel.app/">Diamela Lares</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="">
                    <div className="w-full md:w-4/12 px-4 mx-auto text-center">
                        <div className="text-sm text-blueGray-500 font-semibold py-1">
                        &copy; {year} All Rights Reserved<span id="get-current-year"></span><a href="" className="text-blueGray-500 hover:text-gray-800" target="_blank" />
                        </div>
                    </div>
                </div>
              
            </div>
        </div>
    )
}

export default Footer