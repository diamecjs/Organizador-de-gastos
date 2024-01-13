import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { updatedExpenses } from '../../Redux/Expenses/expensesActions';


const ModalEdit = ({ expense, onSave, onCancel }) => {

    const dispatch = useDispatch();
    const [editedExpense, setEditedExpense] = useState({ ...expense });

    useEffect(() => {
        setEditedExpense({ ...expense });
    }, [expense]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setEditedExpense((prevExpense) => ({
            ...prevExpense,
            [name]: value,
        }));
    };

    const handleUploadFile = (event) => {
        const file = event.target.files[0];
        const reader = new FileReader();

        reader.onloadend = () => {
            setEditedExpense((prevData) => ({
                ...prevData,
                image: reader.result,
            }));
        };

        if (file) {
            reader.readAsDataURL(file);
        }
    };

    const handleSave = () => {
        dispatch(updatedExpenses(editedExpense, () => onCancel()));
        console.log("editedExpense after save:", editedExpense);
    };
    
      

    return (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-900 bg-opacity-75 z-10">
            <div className="bg-violet-500 p-8 rounded-md w-96 ">
                <div className="flex justify-end">
                    <button onClick={onCancel} className="text-gray-500 hover:text-gray-700">
                        ❌
                    </button>
                </div>
                <h2 className="text-2xl text-white font-bold mb-4">Editar Gasto</h2>
                <div className="mb-4">
                    <label className="block text-indigo-950">Nombre:</label>
                    <input
                        type="text"
                        name="name"
                        value={editedExpense.name}
                        onChange={handleInputChange}
                        className="w-full border border-gray-300 p-2 rounded"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-indigo-950">Detalle:</label>
                    <textarea
                        name="detail"
                        value={editedExpense.detail}
                        onChange={handleInputChange}
                        className="w-full border border-gray-300 p-2 rounded"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-indigo-950">Monto:</label>
                    <input
                        type="text"
                        name="amount"
                        value={editedExpense.amount}
                        onChange={handleInputChange}
                        className="w-full border border-gray-300 p-2 rounded"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-indigo-950">Imagen:</label>
                    <input
                        id="image"
                        type="file"
                        accept=".jpg,.png,.jpeg"
                        onChange={handleUploadFile}
                        className="w-full border border-gray-300 p-2 rounded"
                    />
                    {editedExpense.image && (
                        <img
                            id="preview-image"
                            alt="Vista previa de imagen"
                            src={editedExpense.image}
                            className="w-20 h-20 mt-2"
                        />
                    )}
                </div>

                <button
                    onClick={handleSave}
                    className="bg-indigo-950 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded"
                >
                    Guardar Cambios
                </button>
            </div>
        </div>
    );
};

export default ModalEdit;
