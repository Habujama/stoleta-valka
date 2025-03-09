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
    className='flex flex-col items-center pt-5 lg:pt-10 2xl:pt-7 px-10 lg:pb-10'
  >
    <div className='h-5 2xl:h-10 w-40' />
    <Button
      to='/prakticke#misto-a-cas'
      onClick={() => toggleOpen(false)}
      buttonType={ButtonType.GHOST}
      className='w-40'
    >
      <p className='whitespace-nowrap text-lg lg:text-xl 2xl:text-2xl font-bold'>
        Místo a čas
      </p>
    </Button>

    <Button
      to='/prakticke#co-je-v-cene'
      onClick={() => toggleOpen(false)}
      buttonType={ButtonType.GHOST}
      className='w-40'
    >
      <p className='whitespace-nowrap text-lg lg:text-xl 2xl:text-2xl font-bold'>
        Co je v ceně
      </p>
    </Button>

    <Button
      to='/prakticke#harmonogram'
      onClick={() => toggleOpen(false)}
      buttonType={ButtonType.GHOST}
      className='w-40'
    >
      <p className='whitespace-nowrap text-lg lg:text-xl 2xl:text-2xl font-bold'>
        Harmonogram
      </p>
    </Button>

    <Button
      to='#footer'
      onClick={() => toggleOpen(false)}
      buttonType={ButtonType.GHOST}
      className='w-40'
    >
      <p className='whitespace-nowrap text-lg lg:text-xl 2xl:text-2xl font-bold'>
        Kontakty
      </p>
    </Button>
  </motion.div>
);

export default Practical;
