import PropTypes from "prop-types";

function Modal({ setModalState }) {
  return (
    <div className="modal">
      <div className="modal-content">
        <button className="close-modal" onClick={() => setModalState(false)}>
          &times;
        </button>
        <p>You need to be logged in to be able too add items to cart</p>
      </div>
    </div>
  );
}

Modal.propTypes = {
    setModalState: PropTypes.func.isRequired,
  };

export default Modal;
