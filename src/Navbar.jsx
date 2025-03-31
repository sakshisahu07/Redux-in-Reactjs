import { useSelector } from "react-redux";
import { useState } from "react";
import React from "react";
export default function Navbar() {
  const [isModalOpen, setIsModalOpen] = useState(false);
    const amount=useSelector(state=>state.amount)
    return (
        
      <nav className="bg-blue-600 p-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
         
          <div className="hidden md:flex space-x-6">
            <a href="#" className="text-white hover:text-gray-200">Home</a>
            <a href="#" className="text-white hover:text-gray-200">About</a>
            <a href="#" className="text-white hover:text-gray-200">Services</a>
            <a href="#" className="text-white hover:text-gray-200">Contact</a>
            <button 
            onClick={() => setIsModalOpen(true)} 
            className="bg-white text-blue-600 px-4 py-1 rounded-lg shadow-md hover:bg-gray-200 transition">
            Open Modal
          </button>
          </div>

          <button>Your Balance:{amount}</button>
          <button className="md:hidden text-white focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
        {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96 text-center">
            <h2 className="text-xl font-bold mb-4">Modal Title</h2>
            <p className="mb-4">This is a modal content.</p>
            <button 
              onClick={() => setIsModalOpen(false)} 
              className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
              Close
            </button>
          </div>
        </div>
      )}
      </nav>
    );
  }
  