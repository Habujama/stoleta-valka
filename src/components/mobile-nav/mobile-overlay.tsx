import { motion } from 'framer-motion';

const sidebar = {
  open: {
    clipPath: `circle(2000px at 100% 0px)`,
    transition: {
      type: 'spring',
      stiffness: 20,
      damping: 20,
    },
  },
  closed: {
    clipPath: 'circle(10px at 92% -40px)',
    transition: {
      delay: 0.1,
      type: 'spring',
      stiffness: 200,
      damping: 40,
    },
  },
};

const MobileOverlay = () => (
  <motion.div
    className='fixed top-0 bottom-0 right-0 w-full bg-gradient-to-b from-beige to-beigeDark z-10'
    variants={sidebar}
  />
);

export default MobileOverlay;
