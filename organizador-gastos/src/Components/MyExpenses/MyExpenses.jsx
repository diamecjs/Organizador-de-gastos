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
    dispatch(getExpenses());
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
                <th className="p-3 text-left">Detalle</th>
                <th className="p-3 text-left">Monto</th>
                <th className="p-3 text-left">Imagen</th>
                <th className="p-3 text-left"></th>
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
                  <td className="p-3">Detalle</td>
                  <td className="p-3 font-bold">{expense?.amount}</td>
                  <td
                    className="p-3 font-bold cursor-pointer"
                    onClick={() => openImageModal(expense?.image)}
                  >
                    <img
                      className="rounded h-12 w-12 object-cover"
                      src={expense?.image}
                      alt="image"
                    />
                  </td>
                </tr>
              ))}
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
