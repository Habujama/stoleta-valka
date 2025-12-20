import { useEffect } from 'react';
import Button, { ButtonType } from './button';

const Modal = ({
  children,
  onClose,
}: {
  children: React.ReactNode;
  onClose: () => void;
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  useEffect(() => {
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, []);

  return (
    <div
      className='fixed inset-0 align-middle z-50 flex items-center justify-center bg-black/70'
      onClick={onClose}
    >
      <div className='relative w-full h-full content-center align-middle md:w-[95vw] md:h-[95vh] rounded-none md:rounded-lg overflow-hidden'>
        <Button
          onClick={onClose}
          buttonType={ButtonType.GHOST}
          className='absolute top-3 right-3 bg-yellow-100 py-2 px-12 rounded-md font-bold font-serif border-solid border-1 border-black z-50'
        >
          Zavřít
        </Button>
        <div onClick={(e) => e.stopPropagation()}>{children}</div>
      </div>
    </div>
  );
};

export default Modal;
