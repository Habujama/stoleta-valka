import { ReactElement } from 'react';
import { motion } from 'framer-motion';

import blueBanner from '../../assets/banner-blue.svg';

const containerVariants = {
  open: {
    y: 20,
    transition: { duration: 1.5 },
  },
  closed: {
    y: -40,
    transition: { duration: 0.5 },
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
    initial='closed'
    className='absolute items-center justify-center bg-contain bg-center bg-no-repeat text-white h-auto shadow-md mt-20 mx-auto pt-4 px-2 pb-12'
    style={{
      backgroundImage: `url(${blueBanner})`,
      backgroundSize: '150% 100%',
    }}
  >
    {children}
  </motion.div>
);

export default SubMenu;
