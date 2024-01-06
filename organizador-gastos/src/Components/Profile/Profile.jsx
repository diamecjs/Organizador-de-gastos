import React, { useState } from "react";
import { useAuth } from "../Context/AuthContext";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

export function Profile() {
    const { user } = useAuth();
    const [selectedDate, setSelectedDate] = useState(new Date());

    return (
        <div className="bg-indigo-950">
            <div className="text-gray-300 rounded-lg text-sm w-full bg-indigo-950 border border-[#3f3f46] flex flex-col items-center">
                <div className="w-full md:flex p-4 items-center">
                    <div className="md:w-1/2 p-4 text-center">
                        <img
                            className="rounded-2xl border-zinc-700 w-20 h-20 mb-4 mx-auto"
                            alt="User"
                            src="https://avatars.githubusercontent.com/u/65394410?v=4"
                        />
                        <div>
                            <p className="text-lg pb-5 font-bold text-teal-700">Nombre de usuario</p>
                            <p className="pb-3 font-extralight">{user?.email}</p>
                            <p className="font-bold">FRASE ELEGIDA POR EL USUARIO</p>
                        </div>
                        <div className="w-full  border-b border-[#3f3f46]"></div>
                        <div className="w-full flex-col space-y-1 text-gray-500 text-sm">
                            <div className="flex items-center pb-8 space-x-1">
                                <img className="w-10 h-10" src="https://cdn.icon-icons.com/icons2/2512/PNG/512/birthday_party_decoration_fun_event_happiness_cake_icon_150835.png" />
                                <p className="font-bold text-gray-100">CUMPLEAÑOS:</p>
                            </div>
                            <div className="flex items-center pb-8 space-x-1">
                                <img className="w-10 h-10" src="https://cdn.icon-icons.com/icons2/606/PNG/512/dollar-coin-money_icon-icons.com_56177.png" />
                                <p className="font-bold text-gray-100">INGRESOS:</p>
                            </div>
                            <div className="flex items-center space-x-1">
                                <img className="w-10 h-10" src="https://res.cloudinary.com/dsjsbp6qy/image/upload/v1704486172/icons8-piggy-bank-64_s6amu3.png" />
                                <a className="font-bold text-gray-100 hover:text-blue-500" href="#">AHORROS:</a>
                            </div>
                        </div>
                    </div>
                    <div className="md:w-1/2 p-4 flex items-center justify-center">
                        <div className="self-end pr-4">
                            <Calendar
                                onChange={setSelectedDate}
                                value={selectedDate}
                                className="bg-indigo-900 text-purple-500 p-2 border-teal-700 rounded-md"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
