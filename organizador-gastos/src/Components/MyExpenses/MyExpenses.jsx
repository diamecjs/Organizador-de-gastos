import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ExpenseModal from '../ExpenseModal/ExpenseModal';
import ImageModal from '../ImageModal/ImageModal'; // Asegúrate de importar el nuevo componente
import { getExpenses } from '../../Redux/Expenses/expensesActions';

function MyExpenses() {
  const dispatch = useDispatch();
  const [isExpenseModalOpen, setIsExpenseModalOpen] = useState(false);
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');
  const { expenses } = useSelector((state) => state?.expenses);

  const [totalAmount, setTotalAmount] = useState(0);

  const calculateTotalAmount = () => {
    const sum = expenses.reduce((total, expense) => total + parseFloat(expense.amount), 0);
    setTotalAmount(sum);
  };


  const openExpenseModal = () => {
    setIsExpenseModalOpen(true);
  };

  const closeExpenseModal = () => {
    setIsExpenseModalOpen(false);
  };

  const openImageModal = (imageUrl) => {
    setSelectedImage(imageUrl);
    setIsImageModalOpen(true);
  };

  const closeImageModal = () => {
    setIsImageModalOpen(false);
  };

  useEffect(() => {
    const fetchData = async () => {
      dispatch(getExpenses());
      calculateTotalAmount();
    };

    fetchData();
  }, [dispatch]);


  return (
    <div className="flex items-center justify-center min-h-screen bg-indigo-950">
      <div className="col-span-12 w-full p-5">
        <div className="flex justify-end mb-4">
          <button
            onClick={openExpenseModal}
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
                <th className="p-3 ">Detalle</th>
                <th className="p-3 ">Monto</th>
                <th className="p-3 ">Imagen</th>
              </tr>
            </thead>
            <tbody>
              {expenses?.map((expense) => (
                <tr className="bg-indigo-900" key={expense?.id}>
                  <td className="p-3">
                    <div className="flex align-items-center">
                      <div className="ml-3">
                        <div className="">{expense?.name}</div>
                      </div>
                    </div>
                  </td>
                  <td className="p-3">{expense?.detail}</td>
                  <td className="p-3 font-bold cursor-pointer" onClick={() => openImageModal(expense?.image)}>
                    {expense?.image && (
                      <img
                        className="rounded h-12 w-12 object-cover cursor-pointer"
                        src={expense?.image}
                        alt="image"
                      />
                    )}
                  </td>

                  <td className="p-3 font-bold">{expense?.amount}</td>

                </tr>
              ))}
              <tr>
                <td className="p-3"></td>
              </tr>
              <tr className="bg-indigo-900">
                <td className="p-3 font-bold">Total:</td>
                <td className="p-3"></td>
                <td className="p-3"></td>
                <td className="p-3 font-bold">{totalAmount}</td>

              </tr>
            </tbody>
          </table>
        </div>
      </div>
      {isExpenseModalOpen && <ExpenseModal onClose={closeExpenseModal} />}
      {isImageModalOpen && <ImageModal imageUrl={selectedImage} onClose={closeImageModal} />}
    </div>
  );
}

export default MyExpenses;
