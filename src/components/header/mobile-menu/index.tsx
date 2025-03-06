import React, { useState, useRef, useEffect } from 'react';
import { useMedia } from 'react-use';
import theme from 'tailwindcss/defaultTheme';
import { motion, useCycle, AnimatePresence } from 'framer-motion';
import { StaticImage } from 'gatsby-plugin-image';
import classNames from 'classnames';

import MobileOverlay from './mobile-overlay';
import Hamburger from './hamburger';
import useClickAway from '../../../utilities/use-click-away';
import AboutGame from '../about-game';
import Register from '../register';
import Practical from '../practical';
import MenuItem from '../single-menu-item';

const { screens } = theme;

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

const MobileNav = () => {
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

  const handleHamburgerToggle = () => {
    window[`scrollTo`]({ top: 0, behavior: `smooth` });
    toggleOpen();
  };

  useEffect(() => {
    if (typeof document !== 'undefined') {
      const html = document.documentElement;
      const body = document.body;

      if (isOpen) {
        html.style.overflow = 'hidden';
        html.style.height = '100%';
        body.style.overflow = 'hidden';
        body.style.height = '100%';
      } else {
        html.style.overflow = '';
        html.style.height = '';
        body.style.overflow = '';
        body.style.height = '';
      }
    }
  }, [isOpen]);

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

  const navCSS = classNames(isOpen && 'h-screen overflow-hidden');

  const isTablet = useMedia(
    `(min-width: ${screens.md}) and (max-width: ${screens.lg})`,
  );

  return (
    <motion.nav
      initial={false}
      animate={isOpen ? 'open' : 'closed'}
      className={navCSS}
    >
      <MobileOverlay onAnimationStart={handleOverlayComplete} />
      <Hamburger toggle={handleHamburgerToggle} isTablet={isTablet} />
      <AnimatePresence>
        {isOpen && showContent && (
          <motion.div
            variants={containerVariants}
            initial='closed'
            animate='open'
            exit='closed'
            className='absolute overflow-y-hidden left-0 top-0 flex flex-col justify-between items-center text-xl outline-none w-screen h-screen pt-16 px-6 z-20'
          >
            <div className='flex flex-col gap-y-4'>
              <MenuItem
                navRef={gameRef}
                isOpen={isGameOpen}
                setIsOpen={setGameOpen}
                title='O hře'
              >
                <AboutGame toggleOpen={clickOnGameItem} />
              </MenuItem>
              <MenuItem
                navRef={practicalRef}
                isOpen={isPracticalOpen}
                setIsOpen={setPracticalOpen}
                title='Praktické'
              >
                <Practical toggleOpen={clickOnPracticalItem} />
              </MenuItem>
              <MenuItem
                navRef={registerRef}
                isOpen={isRegisterOpen}
                setIsOpen={setRegisterOpen}
                title='Registrace'
              >
                <Register toggleOpen={clickOnRegisterItem} />
              </MenuItem>
            </div>
            {isGameOpen || isPracticalOpen || isRegisterOpen ? null : (
              <motion.div variants={imageVariants}>
                <StaticImage
                  src='../../../assets/kostra.png'
                  alt='Zahraj si středověkou deskovku'
                  width={200}
                  placeholder='blurred'
                  className='z-20'
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
