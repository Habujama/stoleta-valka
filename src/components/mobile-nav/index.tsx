import { useEffect } from 'react';
import { motion, useCycle, AnimatePresence } from 'framer-motion';

import MobileOverlay from './mobile-overlay';
import Hamburger from './hamburger';
import Content from './content';

const MobileNav = () => {
  const [isOpen, toggleOpen] = useCycle(false, true);

  useEffect(() => {
    isOpen
      ? document.body.classList.add('overflow-hidden')
      : document.body.classList.remove('overflow-hidden');
  }, [isOpen]);

  return (
    <motion.nav initial={false} animate={isOpen ? 'open' : 'closed'}>
      <MobileOverlay />
      <Hamburger toggle={toggleOpen} />
      <AnimatePresence>
        {isOpen && <Content toggle={toggleOpen} />}
      </AnimatePresence>
    </motion.nav>
  );
};

export default MobileNav;
