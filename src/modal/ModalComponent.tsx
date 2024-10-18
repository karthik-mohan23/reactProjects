function ModalComponent({ onClose }) {
  return (
    <div
      onClick={onClose}
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div
        className="bg-white w-96 p-4 rounded-lg"
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal
      >
        <p>This is a modal</p>
        <button
          onClick={onClose}
          className="border border-black bg-gray-500 mt-4 p-2 rounded">
          Close
        </button>
      </div>
    </div>
  );
}
export default ModalComponent;
