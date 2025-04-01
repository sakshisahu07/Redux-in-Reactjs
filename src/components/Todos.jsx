import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeTodo, editTodo, fetchTodos } from "../features/todo/todoSlice";
import { openModal, closeModal } from "../features/modal/modalSlice";
import { FaEdit } from "react-icons/fa";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Todos = () => {
  const { todos, status, error } = useSelector((state) => state.todo);
  const { isModalOpen, editTodo: currentTodo } = useSelector((state) => state.modal);
  const dispatch = useDispatch();
  const [editedText, setEditedText] = useState("");
  console.log(todos)

  toast.configure();

useEffect(() => {
  if (status === "succeeded") {
    toast.success("Todos loaded successfully!", {
      position: toast.POSITION.TOP_RIGHT,
      autoClose: 3000,
    });
  }
}, [status]);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchTodos());
    }
  }, [status, dispatch]);

  const handleOpenModal = (todo) => {
    dispatch(openModal(todo));
    setEditedText(todo.text);
  };

  const handleCloseModal = () => {
    dispatch(closeModal());
    setEditedText(""); 
  };

  const handleEditSubmit = (e) => {
    e.preventDefault();
    if (!editedText.trim() || !currentTodo) return;
    dispatch(editTodo({ id: currentTodo.id, newText: editedText }));
    handleCloseModal();
  };

  if (status === "loading") {
    return <div>Loading...</div>; 
  }

  if (status === "failed") {
    return <div>Error: {error}</div>; 
  }

  return (
    <div className="p-4 max-w-md mx-auto bg-white shadow-md rounded-lg">
      <h2 className="text-xl font-bold mb-4">Todos</h2>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id} className="flex justify-between items-center bg-gray-200 p-2 mb-2 rounded">
            <span className="text-black">{todo.text}</span>
            <div className="flex gap-2">
              <button
                onClick={() => dispatch(removeTodo(todo.id))}
                className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-700 transition"
              >
                X
              </button>
              <button
                onClick={() => handleOpenModal(todo)}
                className="bg-yellow-500 text-white px-2 py-1 rounded hover:bg-yellow-700 transition"
              >
                <FaEdit />
              </button>
            </div>
          </li>
        ))}
      </ul>

      {/* Modal */}
      {isModalOpen && currentTodo && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-xl font-bold mb-4">Edit Task</h2>
            <form onSubmit={handleEditSubmit} key={currentTodo.id} className="flex flex-col space-y-2">
              <input
                type="text"
                value={editedText}
                onChange={(e) => setEditedText(e.target.value)}
                className="p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <div className="flex justify-between">
                <button type="button" onClick={handleCloseModal} className="bg-gray-500 text-white px-4 py-2 rounded-lg">
                  Cancel
                </button>
                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Todos;
