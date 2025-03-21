import { Dispatch, SetStateAction } from 'react';
import { motion } from 'framer-motion';

import Button, { ButtonType } from '../shared/button';

interface RegisterProps {
  toggleOpen: Dispatch<SetStateAction<boolean>>;
}

const Register = ({ toggleOpen }: RegisterProps) => (
  <motion.div
    initial={{ opacity: 0, y: -100 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, type: 'spring', stiffness: 90 }}
    className='flex flex-col items-center px-10'
  >
    <div className='h-10 md:h-16 w-40' />
    <Button
      href='https://forms.gle/13pdNp5YJQ1uUnKr6'
      target='_blank'
      onClick={() => toggleOpen(false)}
      buttonType={ButtonType.GHOST}
      className='w-40'
    >
      <p className='whitespace-nowrap text-lg lg:text-xl 2xl:text-2xl font-bold'>
        Hráči
      </p>
    </Button>

    <Button
      href='https://docs.google.com/forms/d/e/1FAIpQLSc5t-xMVN6Rbo98Ss7NIxX07HYlKPEr8EynEn8dv2nCj7_9FA/viewform'
      target='_blank'
      onClick={() => toggleOpen(false)}
      buttonType={ButtonType.GHOST}
      className='w-40'
    >
      <p className='whitespace-nowrap text-lg  lg:text-xl 2xl:text-2xl font-bold'>
        Pomocníci
      </p>
    </Button>
    <Button
      to='/platby'
      onClick={() => toggleOpen(false)}
      buttonType={ButtonType.GHOST}
      className='w-40'
    >
      <p className='whitespace-nowrap text-lg lg:text-xl 2xl:text-2xl font-bold'>
        Platby
      </p>
    </Button>
    <div className='h-10 w-40' />
  </motion.div>
);

export default Register;
