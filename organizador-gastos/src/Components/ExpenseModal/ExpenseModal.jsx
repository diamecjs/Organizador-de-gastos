import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { postExpenses } from "../../Redux/Expenses/expensesActions";
import Swal from "sweetalert2";



function ExpenseModal({ onClose }) {

    const dispatch = useDispatch();
    const [loading, setLoading] = useState("");
    const [success, setSuccess] = useState(false);
    const [image, setImage] = useState('');
    const [thumbnail, setThumbnail] = useState('');
    const [expenseData, setExpenseData] = useState({
        name: '',
        detail: '',
        amount: '',
        image: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setExpenseData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleUploadFile = (event) => {
        const file = event.target.files[0];
        const reader = new FileReader();

        reader.onloadend = () => {
            setExpenseData((prevData) => ({
                ...prevData,
                image: reader.result,
            }));
            setThumbnail(reader.result);
        };

        if (file) {
            reader.readAsDataURL(file);
        }
    };



    const handleAddExpense = async () => {
        try {
            setLoading(true);

            const expensePayload = {
                name: expenseData.name,
                detail: expenseData.detail,
                amount: expenseData.amount,
            };

            if (expenseData.image) {
                expensePayload.image = expenseData.image;
            }

            await dispatch(postExpenses(expensePayload));

            setSuccess(true);
            Swal.fire(
                '¡Gasto Agregado!',
                'Gasto creado correctamente.',
                'success'
            );
        } catch (error) {
            console.error("Error adding expense:", error);
            setSuccess(false);
        } finally {
            setLoading(false);
            onClose();

            setTimeout(() => {
                window.location.reload();
            }, 1000);
        }
    };
    return (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-900 bg-opacity-75">
            <div className="bg-violet-500 p-8 rounded-md">
                <div className="flex justify-end">
                    <button
                        onClick={onClose}
                        className="text-gray-500 hover:text-gray-700"
                    >
                        ❌
                    </button>
                </div>
                <h2 className="text-2xl text-white font-bold mb-4">Agregar Nuevo Gasto</h2>
                <div className="mb-4">
                    <label className="block text-indigo-950">Nombre:</label>
                    <input
                        type="text"
                        name="name"
                        value={expenseData.name}
                        onChange={handleInputChange}
                        className="w-full border border-gray-300 p-2 rounded"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-indigo-950">Detalle:</label>
                    <textarea
                        name="detail"
                        value={expenseData.detail}
                        onChange={handleInputChange}
                        className="w-full border border-gray-300 p-2 rounded"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-indigo-950">Monto:</label>
                    <input
                        type="text"
                        name="amount"
                        value={expenseData.amount}
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

                    {expenseData.image && (
                        <img
                            id="preview-image"
                            alt="Vista previa de imagen"
                            src={expenseData.image}
                            className="w-20 h-20 mt-2"
                        />
                    )}
                </div>

                <button
                    onClick={handleAddExpense}
                    className="bg-indigo-950 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded"
                >
                    Agregar Gasto
                </button>
            </div>
        </div>
    );
}

export default ExpenseModal;
