import { useEffect } from 'react';
import { ModalStyles } from './ModalStyles';

export function Modal({ children, closeModal, escModal }) {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const escOnClick = e => {
    if (e.key === 'Escape') {
      escModal();
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', escOnClick);

    return () => {
      window.removeEventListener('keydown', escOnClick);
    };
  }, [escOnClick]);

  return (
    <ModalStyles onClick={closeModal} className="overlay">
      <div className="modal">{children}</div>
    </ModalStyles>
  );
}
