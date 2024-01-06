import React, { useState, useEffect } from "react";
import { useAuth } from "../Context/AuthContext";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

export function Profile() {

    const { user } = useAuth();
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [userPhrase, setUserPhrase] = useState("Frase predeterminada");
    const [isEditing, setIsEditing] = useState(false);

    useEffect(() => {
        const storedPhrase = localStorage.getItem("userPhrase");
        if (storedPhrase) {
            setUserPhrase(storedPhrase);
        }
    }, []);

    const handleEditClick = () => {
        setIsEditing(true);
    };

    const handleSaveClick = () => {
        setIsEditing(false);
        localStorage.setItem("userPhrase", userPhrase);
    };


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
                            <div className="font-bold">
                                {isEditing ? (
                                    <>
                                        <input
                                            type="text"
                                            className=" rounded-lg border border-gray-300 text-gray-700 p-2 w-full"
                                            value={userPhrase}
                                            onChange={(e) => setUserPhrase(e.target.value)}
                                        />
                                        <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-3 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-3 text-center inline-flex items-center me-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={handleSaveClick}>💾</button>
                                           
                                
                                        </>
                                        ) : (
                                        <>
                                            <p>{userPhrase}</p>
                                            <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-3 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2 text-center inline-flex items-center me-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={handleEditClick}>
                                            ✏️
                                            </button>
                                        </>
                                )}
                                    </div>
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
                                    className="bg-indigo-900  text-purple-500 p-2 border-teal-700 rounded-md"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            );
}
