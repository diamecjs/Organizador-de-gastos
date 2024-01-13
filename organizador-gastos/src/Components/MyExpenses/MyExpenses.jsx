import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ExpenseModal from '../ExpenseModal/ExpenseModal';
import ImageModal from '../ImageModal/ImageModal';
import { getExpenses, Delete } from '../../Redux/Expenses/expensesActions';
import Swal from "sweetalert2";
import ModalEdit from '../ModalEdit/ModalEdit';


function MyExpenses() {
  const dispatch = useDispatch();
  const [isExpenseModalOpen, setIsExpenseModalOpen] = useState(false);
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectedExpense, setSelectedExpense] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  const { expenses } = useSelector((state) => state?.expenses);

  const [totalAmount, setTotalAmount] = useState(() => {
    const storedTotalAmount = localStorage.getItem('totalAmount');
    return storedTotalAmount ? parseFloat(storedTotalAmount) : 0;
  });

  const calculateTotalAmount = () => {
    const sum = expenses.reduce((total, expense) => total + parseFloat(expense.amount), 0);
    setTotalAmount(sum);
    localStorage.setItem('totalAmount', sum.toString());
    if (expenseLimit > 0 && sum >= expenseLimit) {
      useEffect(() => {
        Swal.fire({
          icon: 'warning',
          title: '¡Alerta!',
          text: 'Has alcanzado o superado el límite de gastos.',
          confirmButtonColor: '#3085d6',
          confirmButtonText: 'Ok',
        });
      }, []);
    }
  };

  const [expenseLimit, setExpenseLimit] = useState(() => {
    const storedExpenseLimit = localStorage.getItem('expenseLimit');
    return storedExpenseLimit ? parseFloat(storedExpenseLimit) : 0;
  });


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

  const openEditModal = (expense) => {
    setSelectedExpense(expense);
    setIsEditModalOpen(true);
  };

  const closeEditModal = () => {
    setSelectedExpense(null);
    setIsEditModalOpen(false);
  };

  useEffect(() => {
    const fetchData = async () => {
      await dispatch(getExpenses());
      calculateTotalAmount();
    };

    fetchData();
  }, [dispatch, expenses]);

  const handleDelete = (id) => {
    dispatch(Delete(id));
    Swal.fire("¡Borrado!", "Gasto eliminado", "success").then(() => {
      window.location.reload();
    });
  };

  const handleSaveLimitClick = () => {
    localStorage.setItem('expenseLimit', expenseLimit.toString());
    setIsEditing(false); 
  };

  const handleEditLimitClick = () => {
    setIsEditing(true);
  };


  return (
    <div className="flex items-center justify-center min-h-screen bg-indigo-950">

      <div className="col-span-12 w-full p-5 ">
        <label className="text-teal-500 font-bold ">Límite de gastos:</label>
        {isEditing ? (
          <>
            <input
              type="number"
              value={expenseLimit}
              onChange={(e) => setExpenseLimit(parseFloat(e.target.value))}
              className="rounded-lg border border-gray-300 text-gray-700 p-2 w-48"
            />
            <button
              type="button"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-3 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-3 text-center inline-flex items-center me-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            onClick={handleSaveLimitClick}
            >
              ✅
            </button>
          </>
        ) : (
          <>
            <p className="text-white font-bold ">${expenseLimit}</p>
            <button
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-3 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2 text-center inline-flex items-center me-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            onClick={handleEditLimitClick}
            >
             $ 🪙
            </button>
          </>
        )}
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
                <th className="p-3 ">Imagen</th>
                <th className="p-3 ">Monto</th>
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

                  <td className="p-3 font-bold">{expense?.amount}
                    <div className="flex items-center justify-center mt-2">
                      <img className="m-4 cursor-pointer" onClick={() => openEditModal(expense)} width="30" height="30" src="https://cdn.icon-icons.com/icons2/841/PNG/512/flat-style-circle-edit_icon-icons.com_66939.png" alt="edit" />
                      <img className="m-4 cursor-pointer" width="30" height="30" src="https://cdn.icon-icons.com/icons2/1880/PNG/512/iconfinder-trash-4341321_120557.png" alt="delete"
                        onClick={() => handleDelete(expense.id)} />

                    </div>
                  </td>

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
      {isEditModalOpen && (
        <ModalEdit
          expense={selectedExpense}
          onSave={(editedExpense) => {
            console.log('Guardar cambios:', editedExpense);
            closeEditModal();
          }}
          onCancel={closeEditModal}
        />
      )}
    </div>
  );
}

export default MyExpenses;
