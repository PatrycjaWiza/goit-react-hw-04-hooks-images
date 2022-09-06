import { useEffect } from 'react';
import { ModalStyles } from './ModalStyles';

export const Modal = ({ children, closeModal }) => {
  const escOnClick = ({ e, escModal }) => {
    if (e.key === 'Escape') {
      escModal();
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', escOnClick);

    return window.removeEventListener('keydown', escOnClick);
  }, []);

  return (
    <ModalStyles onClick={closeModal} className="overlay">
      <div className="modal">{children}</div>
    </ModalStyles>
  );
};
