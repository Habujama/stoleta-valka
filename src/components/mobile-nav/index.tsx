import React, { useEffect, useState } from 'react';
import { motion, useCycle, AnimatePresence } from 'framer-motion';
import { StaticImage } from 'gatsby-plugin-image';
import MobileOverlay from './mobile-overlay';
import Hamburger from './hamburger';
import Button from '../shared/button';

const containerVariants = {
  open: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
  closed: {
    transition: {
      staggerChildren: 0.1,
      staggerDirection: -1,
    },
  },
};

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

const MobileNav: React.FC = () => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
      setShowContent(false);
    }
  }, [isOpen]);

  const handleOverlayComplete = () => {
    if (isOpen) {
      setShowContent(true);
    }
  };

  return (
    <motion.nav initial={false} animate={isOpen ? 'open' : 'closed'}>
      <MobileOverlay onAnimationStart={handleOverlayComplete} />
      <Hamburger toggle={toggleOpen} />
      <AnimatePresence>
        {isOpen && showContent && (
          <motion.div
            variants={containerVariants}
            initial='closed'
            animate='open'
            exit='closed'
            className='absolute left-0 top-0 flex flex-col space-y-4 items-center justify-between text-xl outline-none w-screen h-screen p-6 mt-12 z-20'
          >
            <motion.div variants={itemVariants}>
              <Button to='/' onClick={toggleOpen} className='w-96'>
                O hře
              </Button>
            </motion.div>
            <motion.div variants={itemVariants}>
              <Button to='/' onClick={toggleOpen} className='w-96'>
                Praktické
              </Button>
            </motion.div>
            <motion.div variants={itemVariants}>
              <Button to='/' onClick={toggleOpen} className='w-96'>
                Registrace
              </Button>
            </motion.div>
            <motion.div variants={itemVariants}>
              <StaticImage
                src='../../assets/sachy.png'
                alt='Zahraj si středověkou deskovku'
                width={300}
                placeholder='blurred'
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default MobileNav;
