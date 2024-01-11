import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postExpenses } from "../../Redux/Expenses/expensesActions";



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

            await dispatch(postExpenses({
                name: expenseData.name,
                detail: expenseData.detail,
                amount: expenseData.amount,
                image: expenseData.image,
            }));

            setSuccess(true);
        } catch (error) {
            console.error("Error adding expense:", error);
            setSuccess(false);
        } finally {
            setLoading(false);
            onClose();
        }
    };

    return (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-900 bg-opacity-75">
            <div className="bg-white p-8 rounded-md">
                <div className="flex justify-end">
                    <button
                        onClick={onClose}
                        className="text-gray-500 hover:text-gray-700"
                    >
                        ❌
                    </button>
                </div>
                <h2 className="text-2xl font-bold mb-4">Agregar Nuevo Gasto</h2>
                <div className="mb-4">
                    <label className="block text-gray-700">Nombre:</label>
                    <input
                        type="text"
                        name="name"
                        value={expenseData.name}
                        onChange={handleInputChange}
                        className="w-full border border-gray-300 p-2 rounded"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Detalle:</label>
                    <input
                        type="text"
                        name="detail"
                        value={expenseData.detail}
                        onChange={handleInputChange}
                        className="w-full border border-gray-300 p-2 rounded"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Monto:</label>
                    <input
                        type="text"
                        name="amount"
                        value={expenseData.amount}
                        onChange={handleInputChange}
                        className="w-full border border-gray-300 p-2 rounded"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Imagen:</label>
             
                    <input
                        id="image"
                        type="file"
                        accept=".jpg,.png,.jpeg"
                        onChange={handleUploadFile}
                        className="w-full border border-gray-300 p-2 rounded"
                    />
                     <img id="preview-image" alt="Vista previa de imagen" src={expenseData.image} className="w-20 h-20" />
                </div>
                <button
                    onClick={handleAddExpense}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                    Agregar Gasto
                </button>
            </div>
        </div>
    );
}

export default ExpenseModal;
