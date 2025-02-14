import { motion } from 'framer-motion';

const sidebar = {
  open: {
    clipPath: `circle(1000px at 100% 0px)`,
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

interface MobileOverlayProps {
  onAnimationStart: () => void;
}

const MobileOverlay = ({ onAnimationStart }: MobileOverlayProps) => (
  <motion.div
    onAnimationStart={onAnimationStart}
    className='fixed inset-0 bg-gradient-to-b from-beige to-beigeDark z-10'
    style={{
      height: '100vh',
      overflow: 'hidden',
    }}
    variants={sidebar}
  />
);

export default MobileOverlay;
