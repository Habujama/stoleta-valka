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
    /* className='flex flex-col items-center pt-5 lg:pt-10 2xl:pt-7 px-10 lg:pb-10' */
    className='flex flex-col items-center px-10'
  >
    {/* <div className='h-5 2xl:h-10 w-40' /> */}
    <div className='h-10 md:h-14 w-40' />
    <Button
      to='/#uvod'
      onClick={() => toggleOpen(false)}
      buttonType={ButtonType.GHOST}
      className='w-40'
    >
      <p className='whitespace-nowrap text-lg lg:text-xl 2xl:text-2xl font-bold'>
        Úvod
      </p>
    </Button>
    {/*  <Button
      to='/'
      onClick={() => toggleOpen(false)}
      buttonType={ButtonType.GHOST}
      className='w-40'
    >
      <p className='whitespace-nowrap text-lg lg:text-xl 2xl:text-2xl font-bold'>
        Svět
      </p>
    </Button> */}

    <Button
      to='/postavy#title'
      onClick={() => toggleOpen(false)}
      buttonType={ButtonType.GHOST}
      className='w-40'
    >
      <p className='whitespace-nowrap text-lg lg:text-xl 2xl:text-2xl font-bold'>
        Postavy
      </p>
    </Button>

    <Button
      to='/#galerie'
      onClick={() => toggleOpen(false)}
      buttonType={ButtonType.GHOST}
      className='w-40'
    >
      <p className='whitespace-nowrap text-lg lg:text-xl 2xl:text-2xl font-bold'>
        Galerie
      </p>
    </Button>

    {/* <Button
      to='/'
      onClick={() => toggleOpen(false)}
      buttonType={ButtonType.GHOST}
      className='w-40'
    >
      <p className='whitespace-nowrap text-lg lg:text-xl 2xl:text-2xl font-bold'>
        Pravidla
      </p>
    </Button> */}
    <div className='w-40 h-10' />
  </motion.div>
);

export default AboutGame;
