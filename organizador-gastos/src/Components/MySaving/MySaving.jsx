import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getSaving, postSaving } from '../../Redux/Saving/savingActions';



function MySaving() {


    const dispatch = useDispatch();


    const [newSaving, setNewSaving] = React.useState({ name: '', amount: '' });
    const savings = useSelector((state) => state?.saving?.saving);

    useEffect(() => {
        dispatch(getSaving());
    }, [dispatch]);


    const handleAddSaving = () => {
        if (newSaving.name && newSaving.amount) {
            dispatch(postSaving({ name: newSaving.name, amount: newSaving.amount }));
            setNewSaving({ name: '', amount: '' });
        }
    };

    const totalSavings = savings.reduce((total, saving) => total + saving.amount, 0);


    return (
        <div className="bg-indigo-950 text-white min-h-screen flex items-center">
            <div className="container mx-auto p-4 flex items-center">
                <div className="w-full md:w-5/12 text-center md:text-right p-4">
                    <img className="rounded-full" src="https://res.cloudinary.com/dsjsbp6qy/image/upload/v1705184255/Dise%C3%B1o_sin_t%C3%ADtulo_mklfhb.gif" alt="hucha" />
                </div>
                <div className="w-full md:w-7/12 text-center md:text-left p-4">
                    <div className="text-6xl font-medium">Estos son tus ahorros! 🪙 💵</div>

                    <div className="mt-8">
                        <table className="table text-white border-separate space-y-6 text-sm w-full">
                            <thead className="bg-indigo-900 text-teal-500">
                                <tr>
                                    <th className="p-3">Donde ahorraste?</th>
                                    <th className="p-3">Monto</th>
                                </tr>
                            </thead>
                            <tbody>
                                {savings?.map((saving, index) => (
                                    <tr className="bg-indigo-900" key={index}>
                                        <td className="font-bold p-3">{saving?.name}</td>
                                        <td className="font-bold p-3">{saving?.amount}</td>
                                    </tr>
                                ))}
                                <tr className="bg-slate-800">
                                    <td className="text-xl text-amber-500 font-bold p-3">Total:</td>
                                    <td className="text-xl p-3 text-amber-500 font-bold">{totalSavings}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className="mt-4">
                        <label className="text-teal-500 font-bold">Nueva entrada de ahorro:</label>
                        <div className="flex space-x-2">
                            <input
                                type="text"
                                placeholder="Name"
                                value={newSaving.name}
                                onChange={(e) => setNewSaving({ ...newSaving, name: e.target.value })}
                                className="rounded-lg border border-gray-300 text-gray-700 p-2"
                            />

                            <input
                                type="number"
                                placeholder="Monto"
                                value={newSaving.amount}
                                onChange={(e) => setNewSaving({ ...newSaving, amount: e.target.value })}
                                className="rounded-lg border border-gray-300 text-gray-700 p-2"
                            />
                            <button
                                type="button"
                                onClick={handleAddSaving}
                                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-3 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-3 text-center inline-flex items-center"
                            >
                                ➕
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MySaving;
