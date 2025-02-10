import { Dispatch, SetStateAction } from 'react';
import { motion } from 'framer-motion';

import Button, { ButtonType } from '../shared/button';

interface PracticalProps {
  toggleOpen: Dispatch<SetStateAction<boolean>>;
}

const Practical = ({ toggleOpen }: PracticalProps) => (
  <motion.div
    initial={{ opacity: 0, y: -100 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, type: 'spring', stiffness: 90 }}
    className='flex flex-col items-center px-10'
  >
    <div className='h-10 w-40' />
    <Button
      to='/'
      onClick={() => toggleOpen(false)}
      buttonType={ButtonType.GHOST}
      className='w-40'
    >
      <p className='whitespace-nowrap text-xl'>Místo a čas</p>
    </Button>
    <Button
      to='/'
      onClick={() => toggleOpen(false)}
      buttonType={ButtonType.GHOST}
      className='w-40'
    >
      <p className='whitespace-nowrap text-xl'>Jídlo</p>
    </Button>

    <Button
      to='/'
      onClick={() => toggleOpen(false)}
      buttonType={ButtonType.GHOST}
      className='w-40'
    >
      <p className='whitespace-nowrap text-xl'>Kostýmy</p>
    </Button>

    <Button
      to='/'
      onClick={() => toggleOpen(false)}
      buttonType={ButtonType.GHOST}
      className='w-40'
    >
      <p className='whitespace-nowrap text-xl'>Kontakty</p>
    </Button>
  </motion.div>
);

export default Practical;
