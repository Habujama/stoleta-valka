import { Dispatch, SetStateAction } from 'react';
import Button, { ButtonType } from '../shared/button';

interface PracticalProps {
  toggleOpen: Dispatch<SetStateAction<boolean>>;
}

const Practical = ({ toggleOpen }: PracticalProps) => (
  <div className='flex flex-col items-center'>
    <Button
      to='/'
      onClick={() => toggleOpen(false)}
      buttonType={ButtonType.GHOST}
      className='w-40 mt-10'
    >
      <p className='whitespace-nowrap text-2xl'>Místo a čas</p>
    </Button>

    <Button
      to='/'
      onClick={() => toggleOpen(false)}
      buttonType={ButtonType.GHOST}
      className='w-40'
    >
      <p className='whitespace-nowrap text-2xl'>Jídlo</p>
    </Button>

    <Button
      to='/'
      onClick={() => toggleOpen(false)}
      buttonType={ButtonType.GHOST}
      className='w-40'
    >
      <p className='whitespace-nowrap text-2xl'>Kostýmy</p>
    </Button>

    <Button
      to='/'
      onClick={() => toggleOpen(false)}
      buttonType={ButtonType.GHOST}
      className='w-40'
    >
      <p className='whitespace-nowrap text-2xl'>Kontakty</p>
    </Button>
  </div>
);

export default Practical;
