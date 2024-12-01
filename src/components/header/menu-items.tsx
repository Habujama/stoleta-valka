import { useEffect } from 'react';
import { motion, usePresence } from 'framer-motion';

import Button from '../shared/button';

const variants = {
  open: {
    y: 0,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: -50,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

const MenuItems = () => {
  const [isPresent, safeToRemove] = usePresence();

  useEffect(() => {
    !isPresent && setTimeout(safeToRemove, 1000);
  }, [isPresent, safeToRemove]);

  return (
    <>
      <motion.div
        variants={variants}
        className='flex flex-col sm:flex-row space-y-4 sm:space-y-0 items-center justify-between outline-none'
      >
        <Button to='/' buttonStyle='primary' className='sm:mr-4 w-80'>
          <h2 className=''>O hře</h2>
        </Button>

        <Button to='/' buttonStyle='primary' className='sm:mr-4 w-80'>
          <h2 className=''>Praktické</h2>
        </Button>

        <Button to='/' buttonStyle='primary' className='sm:mr-4 w-80'>
          <h2 className='whitespace-nowrap'>Registrace</h2>
        </Button>
      </motion.div>
    </>
  );
};

export default MenuItems;
