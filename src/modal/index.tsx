import { useState } from "react";
import { createPortal } from "react-dom";
import ModalComponent from "./ModalComponent";

function Modal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="border border-black p-4">
        <p className="text-center">View Details</p>
        <button
          onClick={() => setShowModal(true)}
          className="bg-gray-400 border-black p-2 text-center rounded-lg">
          Show Modal
        </button>
        {showModal &&
          createPortal(
            <ModalComponent onClose={() => setShowModal(false)} />,
            document.body
          )}
      </div>
    </div>
  );
}
export default Modal;
