import Button, { ButtonType } from './button';

const Modal = ({
  children,
  onClose,
}: {
  children: React.ReactNode;
  onClose: () => void;
}) => {
  return (
    <div
      className="fixed inset-0 align-middle z-50 flex items-center justify-center bg-black/70"
      onClick={onClose}
    >
      <div
        className="relative w-full h-full content-center align-middle md:w-[95vw] md:h-[95vh] rounded-none md:rounded-lg overflow-hidden"
      >
        <Button
          onClick={onClose}
          buttonType={ButtonType.PRIMARY}
          className="absolute top-3 right-3 py-2 px-12 rounded-md font-bold font-serif z-50"
        >
          Zavřít
        </Button>
        <div onClick={(e) => e.stopPropagation()}>
          {children}
          </div>
      </div>
    </div>
  );
};

export default Modal
