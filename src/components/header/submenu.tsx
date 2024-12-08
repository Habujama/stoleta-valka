import { ReactElement } from 'react';
import { motion } from 'framer-motion';

import redBanner from '../../assets/banner-red.svg';

const containerVariants = {
  open: {
    y: 20,
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
    className='absolute items-center justify-center bg-contain bg-center bg-no-repeat text-white h-auto shadow-md mt-20 mx-auto pt-4 pb-12'
    style={{
      backgroundImage: `url(${redBanner})`,
      backgroundSize: '140% 100%',
      maxWidth: '180px',
    }}
  >
    {children}
  </motion.div>
);

export default SubMenu;
