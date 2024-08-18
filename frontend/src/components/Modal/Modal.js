import React from "react";
import { AiOutlineClose } from "react-icons/ai";

const Modal = ({ isOpen, onClose, body, footer, title }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="relative w-full max-w-lg p-6 bg-white rounded-lg shadow-lg">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">{title}</h2>
          <button
            className="text-gray-600 hover:text-gray-800"
            onClick={onClose}
          >
            <AiOutlineClose size={24} />
          </button>
        </div>
        <div className="mb-4 max-h-[460px] overflow-y-auto body-modal">
          {body}
        </div>
        <div className="mt-4">
          {footer}
        </div>
      </div>
    </div>
  );
};

export default Modal;
