import {
  SetStateAction,
  Dispatch,
  JSXElementConstructor,
  ReactElement,
  RefObject,
} from 'react';
import { motion } from 'framer-motion';

import SubMenu from './submenu';
import Button, { ButtonType } from '../shared/button';
import Title, { TitleLevel } from '../shared/title';

const itemVariants = {
  open: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.5 },
  },
  closed: {
    opacity: 0,
    y: -20,
    transition: { duration: 0.1 },
  },
};

interface SingleMenuItemProps {
  navRef: RefObject<HTMLDivElement>;
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  title: string;
  children: ReactElement<any, string | JSXElementConstructor<any>>;
  variant?: 'BIG' | 'SMALL';
}

const SingleMenuItem = ({
  navRef,
  isOpen,
  setIsOpen,
  title,
  children,
  variant = 'SMALL',
}: SingleMenuItemProps) => (
  <motion.div
    variants={itemVariants}
    ref={navRef}
    className='relative flex flex-col items-center'
  >
    <Button
      onClick={() => setIsOpen(!isOpen)}
      buttonType={variant === 'BIG' ? ButtonType.SECONDARY : ButtonType.PRIMARY}
      className={`${
        variant === 'SMALL' ? 'w-60 text-xl' : 'w-80 2xl:w-[455px]'
      } py-4 bg-contain z-20 relative`}
    >
      <h2
        className={`font-serif text-xl lg:text-2xl 2xl:text-3xl font-bold
 ${variant === 'SMALL' ? 'pt-2' : 'mt-2'}`}
      >
        {title}
      </h2>
    </Button>
    {isOpen && <SubMenu isOpen={isOpen}>{children}</SubMenu>}
  </motion.div>
);

export default SingleMenuItem;
