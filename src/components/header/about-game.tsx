import { Dispatch, SetStateAction } from 'react';
import { motion } from 'framer-motion';

import Button, { ButtonType } from '../shared/button';

interface AboutGameProps {
  toggleOpen: Dispatch<SetStateAction<boolean>>;
}

const AboutGame = ({ toggleOpen }: AboutGameProps) => (
  <motion.div
    initial={{ opacity: 0, y: -100 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, type: 'spring', stiffness: 90 }}
    className='flex flex-col items-center px-10'
  >
    <Button
      to='/'
      onClick={() => toggleOpen(false)}
      buttonType={ButtonType.GHOST}
      className='w-40 mt-10'
    >
      <p className='whitespace-nowrap text-2xl font-serifSmall'>Úvod</p>
    </Button>
    <Button
      to='/'
      onClick={() => toggleOpen(false)}
      buttonType={ButtonType.GHOST}
      className='w-40'
    >
      <p className='whitespace-nowrap text-2xl font-serifSmall'>Svět</p>
    </Button>

    <Button
      to='/postavy#title'
      onClick={() => toggleOpen(false)}
      buttonType={ButtonType.GHOST}
      className='w-40'
    >
      <p className='whitespace-nowrap text-2xl font-serifSmall'>Postavy</p>
    </Button>

    <Button
      to='/'
      onClick={() => toggleOpen(false)}
      buttonType={ButtonType.GHOST}
      className='w-40'
    >
      <p className='whitespace-nowrap text-2xl font-serifSmall'>Pravidla</p>
    </Button>
  </motion.div>
);

export default AboutGame;
