import { motion } from 'framer-motion';
import classNames from 'classnames';
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

interface Props {
  toggle(): void;
}

export const Content = ({ toggle }: Props) => (
  <motion.div
    variants={variants}
    className='absolute left-0 top-0 flex flex-col space-y-4 items-center text-xl outline-none w-screen h-screen p-6 mt-24 z-20'
  >
    <Button to='/' onClick={toggle} className='w-80'>
      <motion.h2 whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
        O hře
      </motion.h2>
    </Button>

    <Button to='/' onClick={toggle} className='w-80'>
      <motion.h2 whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
        Praktické
      </motion.h2>
    </Button>

    <Button to='/' onClick={toggle} className='w-80'>
      <motion.h2 whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
        Registrace
      </motion.h2>
    </Button>
  </motion.div>
);

export default Content;
