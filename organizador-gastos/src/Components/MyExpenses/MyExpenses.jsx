import React, { useState } from 'react';
import ExpenseModal from '../ExpenseModal/ExpenseModal';

function MyExpenses() {

    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
      setIsModalOpen(true);
    };
  
    const closeModal = () => {
      setIsModalOpen(false);
    };
  
    return (
        <div className="flex items-center justify-center min-h-screen bg-indigo-950">
        <div className="col-span-12 w-full p-5">
          <div className="flex justify-end mb-4">
          <button
            onClick={openModal}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
          >
            ➕
          </button>
          </div>
                <div className="w-full overflow-auto lg:overflow-visible">
                    <table className="table text-white border-separate space-y-6 text-sm w-full">
                        <thead className="bg-indigo-900 text-teal-500">
                            <tr>
                                <th className="p-3">Gasto</th>
                                <th className="p-3 text-left">Detalle</th>
                                <th className="p-3 text-left">Monto</th>
                                <th className="p-3 text-left">Imagen</th>
                                <th className="p-3 text-left"></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="bg-indigo-900">
                                <td className="p-3">
                                    <div className="flex align-items-center">
                                        <img className="rounded-full h-12 w-12  object-cover" src="https://images.unsplash.com/photo-1613588718956-c2e80305bf61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=80" alt="unsplash image" />
                                        <div className="ml-3">
                                            <div className="">Appple</div>
                                            <div className="text-gray-500">mail@rgmail.com</div>
                                        </div>
                                    </div>
                                </td>
                                <td className="p-3">
                                    Technology
                                </td>
                                <td className="p-3 font-bold">
                                    200.00$
                                </td>
                                <td className="p-3">
                                    <span className="bg-green-400 text-gray-50 rounded-md px-2">available</span>
                                </td>
                                <td className="p-3 ">
                                    <a href="#" className="text-gray-400 hover:text-gray-100 mr-2">
                                        <i className="material-icons-outlined text-base">visibility</i>
                                    </a>
                                    <a href="#" className="text-gray-400 hover:text-gray-100  mx-2">
                                        <i className="material-icons-outlined text-base">edit</i>
                                    </a>
                                    <a href="#" className="text-gray-400 hover:text-gray-100  ml-2">
                                        <i className="material-icons-round text-base">delete_outline</i>
                                    </a>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            {isModalOpen && <ExpenseModal onClose={closeModal} />}
        </div>
    )
}

export default MyExpenses