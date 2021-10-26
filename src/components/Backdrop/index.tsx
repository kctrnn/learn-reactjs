import './styles.scss';

export interface BackdropProps {
  onCloseModal: () => void;
}

function Backdrop({ onCloseModal }: BackdropProps) {
  const handleClick = () => {
    if (!onCloseModal) return;

    onCloseModal();
  };

  return <div className="backdrop" onClick={handleClick}></div>;
}

export default Backdrop;
