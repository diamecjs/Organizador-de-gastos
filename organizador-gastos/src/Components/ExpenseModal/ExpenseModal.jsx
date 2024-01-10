import React, { useState} from "react";
import { useDispatch } from "react-redux";
import axios from "axios";


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

    const uploadImage = async (e) => {
        const files = e.target.files;
        const data = new FormData();
        data.append("file", files[0]);
        data.append("upload_preset", "Donde-Suena-Events");
        setLoading(true);

        try {
            const res = await axios.post(
                "https://api.cloudinary.com/v1_1/ds41xxspf/image/upload",
                data
            );
            if (res.data.secure_url) {
                setSuccess(true);
                setImage(res.data.secure_url);
                const reader = new FileReader();
                reader.onload = (e) => {
                    setThumbnail(e.target.result);
                };
                reader.readAsDataURL(files[0]);
            } else {
                setSuccess(false);
                setImage('');
            }
        } catch (error) {
            console.error("Error uploading image:", error);
            setSuccess(false);
            setImage('');
        } finally {
            setLoading(false);
        }
    };

    const handleAddExpense = async () => {
        try {
            setLoading(true);

            await dispatch(postExpenses({
                name: expenseData.name,
                detail: expenseData.detail,
                amount: expenseData.amount,
                image: image,
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
                    <label
                        htmlFor="image"
                        className="block text-gray-700"
                    >
                        {loading ? (
                            <span className="block text-gray-700">
                                (Subiendo Imágen...)
                            </span>
                        ) : success ? (
                            <span className="block text-gray-700">
                                (Imágen subida con éxito)
                            </span>
                        ) : null}
                    </label>
                    {thumbnail && (
                        <img
                            src={thumbnail}
                            alt="Vista previa en miniatura"
                            className="mt-2 mb-2 w-24 h-auto"
                        />
                    )}
                    <input
                        id="image"
                        type="file"
                        accept="image/png, image/jpeg, image/jpg"
                        onChange={uploadImage}
                        className="w-full border border-gray-300 p-2 rounded"
                    />
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
