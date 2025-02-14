import { ReactElement } from 'react';
import { motion } from 'framer-motion';

import prapor from '../../assets/prapor.png';

const containerVariants = {
  open: {
    y: -25,
    transition: { duration: 1.5 },
  },
  closed: {
    y: -20,
    transition: { duration: 1 },
  },
};

interface SubMenuProps {
  isOpen: boolean;
  children: ReactElement;
}

const SubMenu = ({ isOpen, children }: SubMenuProps) => (
  <motion.div
    variants={containerVariants}
    animate={isOpen ? 'open' : 'closed'}
    exit={'closed'}
    initial='closed'
    className='lg:absolute z-10 lg:mt-28 items-center justify-center font-semibold bg-contain bg-center bg-no-repeat h-auto shadow-md pb-8'
    style={{
      backgroundImage: `url(${prapor})`,
    }}
  >
    {children}
  </motion.div>
);

export default SubMenu;
