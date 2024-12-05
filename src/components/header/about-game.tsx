import { Dispatch, SetStateAction } from 'react';
import Button, { ButtonType } from '../shared/button';

interface AboutGameProps {
  toggleOpen: Dispatch<SetStateAction<boolean>>;
}

const AboutGame = ({ toggleOpen }: AboutGameProps) => (
  <div className='flex flex-col items-center'>
    <Button
      to='/'
      onClick={() => toggleOpen(false)}
      buttonType={ButtonType.GHOST}
      className='w-40 mt-10'
    >
      <p className='whitespace-nowrap text-2xl'>Svět</p>
    </Button>

    <Button
      to='/'
      onClick={() => toggleOpen(false)}
      buttonType={ButtonType.GHOST}
      className='w-40'
    >
      <p className='whitespace-nowrap text-2xl'>Postavy</p>
    </Button>

    <Button
      to='/'
      onClick={() => toggleOpen(false)}
      buttonType={ButtonType.GHOST}
      className='w-40'
    >
      <p className='whitespace-nowrap text-2xl'>Tablo</p>
    </Button>

    <Button
      to='/'
      onClick={() => toggleOpen(false)}
      buttonType={ButtonType.GHOST}
      className='w-40'
    >
      <p className='whitespace-nowrap text-2xl'>Pravidla</p>
    </Button>
  </div>
);

export default AboutGame;
