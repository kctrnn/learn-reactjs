import './styles.scss';

export interface ModalProps {
  onClose: () => void;
  onConfirm: () => void;
}

function Modal({ onClose, onConfirm }: ModalProps) {
  const handleCancelClick = () => {
    if (!onClose) return;

    onClose();
  };

  const handleConfirmClick = () => {
    if (!onConfirm) return;

    onConfirm();
  };

  return (
    <div className="modal">
      <p>Are you sure?</p>

      <button className="btn btn--alt" onClick={handleCancelClick}>
        Cancel
      </button>
      <button className="btn" onClick={handleConfirmClick}>
        Confirm
      </button>
    </div>
  );
}

export default Modal;
