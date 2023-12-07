import React from 'react'

function Footer() {

    const date = new Date();
    const year = date.getFullYear();

    return (

        <div class="relative bg-slate-800 pt-8 pb-6 h-48">
            <link rel="stylesheet" href="https://demos.creative-tim.com/notus-js/assets/styles/tailwind.css"></link>
            <link rel="stylesheet" href="https://demos.creative-tim.com/notus-js/assets/vendor/@fortawesome/fontawesome-free/css/all.min.css"></link>
            <div class="container mx-auto px-2">
                <div class="flex flex-wrap text-left lg:text-left">
                    <div class="w-full lg:w-6/12 px-4">
                        <h4 class="text-3xl fonat-semibold text-blueGray-700">RioplatenseCode</h4>
                        <h5 class="text-lg mt-0 mb-2 text-blueGray-600">
                            "Transformando ideas en código, y sueños en realidad."
                        </h5>
                        <div class="mt-6 lg:mb-0 mb-6">
                            <button class="bg-white text-lightBlue-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
                                <i class="fab fa-twitter"></i></button><button class="bg-white text-lightBlue-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
                                <i class="fab fa-facebook-square"></i></button><button class="bg-white text-pink-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
                                <i class="fab fa-dribbble"></i></button><button class="bg-white text-blueGray-800 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
                                <i class="fab fa-github"></i>
                            </button>
                        </div>
                    </div>
                    <div class="w-full lg:w-6/12 px-4">
                        <div class="flex flex-wrap items-top mb-6">
                            <div class="w-full lg:w-4/12 px-2 ml-auto">
                                <span class="block uppercase text-blueGray-500 text-sm font-semibold mb-2">Argentina - Uruguay</span>
                            </div>
                            <div class="w-full lg:w-4/12 px-2">
                                <span class="block uppercase text-blueGray-500 text-sm font-semibold mb-2">Nosotros</span>
                                <ul class="list-unstyled">
                                    <li>
                                        <a class="text-blueGray-600 hover:text-blueGray-300 font-semibold block pb-2 text-sm" href="https://port-folio-flax-psi.vercel.app/">Juan Manuel
                                            Berraz</a>
                                    </li>
                                    <li>
                                        <a class="text-blueGray-600 hover:text-blueGray-300 font-semibold block pb-2 text-sm" href="https://portfolio-diame.vercel.app/">Diamela Lares</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="">
                    <div class="w-full md:w-4/12 px-4 mx-auto text-center">
                        <div class="text-sm text-blueGray-500 font-semibold py-1">
                        &copy; {year} All Rights Reserved<span id="get-current-year"></span><a href="" class="text-blueGray-500 hover:text-gray-800" target="_blank" />
                        </div>
                    </div>
                </div>
              
            </div>
        </div>
    )
}

export default Footer