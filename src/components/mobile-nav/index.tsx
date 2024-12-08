import React, { useState, useRef } from 'react';
import { motion, useCycle, AnimatePresence } from 'framer-motion';
import { StaticImage } from 'gatsby-plugin-image';

import MobileOverlay from './mobile-overlay';
import Hamburger from './hamburger';
import Button from '../shared/button';
import useClickAway from '../../utilities/use-click-away';
import AboutGame from '../header/about-game';
import Register from '../header/register';
import Practical from '../header/practical';

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

const imageVariants = {
  open: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.5 },
  },
  closed: {
    opacity: 0,
    y: 20,
    transition: { duration: 0.1 },
  },
};

const MobileNav: React.FC = () => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const [showContent, setShowContent] = useState(false);

  const [isGameOpen, setGameOpen] = useState<boolean>(false);
  const [isPracticalOpen, setPracticalOpen] = useState<boolean>(false);
  const [isRegisterOpen, setRegisterOpen] = useState<boolean>(false);

  const gameRef = useRef<HTMLDivElement>(null);
  const practicalRef = useRef<HTMLDivElement>(null);
  const registerRef = useRef<HTMLDivElement>(null);

  useClickAway(gameRef, () => setGameOpen(false));
  useClickAway(practicalRef, () => setPracticalOpen(false));
  useClickAway(registerRef, () => setRegisterOpen(false));

  const handleOverlayComplete = () => {
    if (isOpen) {
      setShowContent(true);
    }
  };

  const clickOnGameItem = () => {
    setGameOpen(false);
    toggleOpen();
  };

  const clickOnPracticalItem = () => {
    setPracticalOpen(false);
    toggleOpen();
  };

  const clickOnRegisterItem = () => {
    setRegisterOpen(false);
    toggleOpen();
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
            className='absolute overflow-hidden left-0 top-0 flex flex-col justify-between items-center text-xl outline-none w-screen h-screen pt-14 px-6 z-20'
          >
            <div>
              <motion.div variants={itemVariants} ref={gameRef}>
                <Button
                  onClick={() => setGameOpen(!isGameOpen)}
                  className='h-20 w-80'
                >
                  <p className='pt-8 font-serifSmall'>O hře</p>
                </Button>
                {isGameOpen && <AboutGame toggleOpen={clickOnGameItem} />}
              </motion.div>
              <motion.div variants={itemVariants} ref={practicalRef}>
                <Button
                  onClick={() => setPracticalOpen(!isPracticalOpen)}
                  className='h-20 w-80'
                >
                  <p className='pt-8 font-serifSmall'>Praktické</p>
                </Button>
                {isPracticalOpen && (
                  <Practical toggleOpen={clickOnPracticalItem} />
                )}
              </motion.div>
              <motion.div variants={itemVariants} ref={registerRef}>
                <Button
                  onClick={() => setRegisterOpen(!isRegisterOpen)}
                  className='h-20 w-80'
                >
                  <p className='pt-8 font-serifSmall'>Registrace</p>
                </Button>
                {isRegisterOpen && (
                  <Register toggleOpen={clickOnRegisterItem} />
                )}
              </motion.div>
            </div>
            {isGameOpen || isPracticalOpen || isRegisterOpen ? null : (
              <motion.div variants={imageVariants}>
                <StaticImage
                  src='../../assets/sachy.png'
                  alt='Zahraj si středověkou deskovku'
                  width={200}
                  placeholder='blurred'
                />
              </motion.div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default MobileNav;
