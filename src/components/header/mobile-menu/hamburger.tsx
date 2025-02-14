import { RefAttributes, useState } from 'react';
import classnames from 'classnames';
import { JSX } from 'react/jsx-runtime';
import {
  motion,
  SVGMotionProps,
  useScroll,
  useMotionValueEvent,
} from 'framer-motion';

const Path = (
  props: JSX.IntrinsicAttributes &
    SVGMotionProps<SVGPathElement> &
    RefAttributes<SVGPathElement>,
) => (
  <motion.path
    fill='transparent'
    strokeWidth='3'
    stroke='black'
    strokeLinecap='round'
    {...props}
  />
);

interface Props {
  toggle(): void;
  isTablet: boolean;
}

const Hamburger = ({ toggle, isTablet }: Props) => {
  const { scrollY } = useScroll();
  const [hasScrolled, setHasScrolled] = useState<boolean>();

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setHasScrolled(latest > 50);
  });

  const wrapper = classnames(
    'flex gap-x-4 items-center active:outline-none focus:outline-none rounded fixed right-4 p-2 z-30',
    hasScrolled ? 'bg-beige top-4' : 'bg-transparent',
    isTablet && !hasScrolled ? 'top-14' : 'top-10',
  );

  return (
    <button onClick={toggle} className={wrapper}>
      <svg width='23' height='23' viewBox='0 0 23 23'>
        <Path
          variants={{
            closed: { d: 'M 2 2.5 L 20 2.5' },
            open: { d: 'M 3 16.5 L 17 2.5' },
          }}
        />
        <Path
          d='M 2 9.423 L 20 9.423'
          variants={{
            closed: { opacity: 1 },
            open: { opacity: 0 },
          }}
          transition={{ duration: 0.1 }}
        />
        <Path
          variants={{
            closed: { d: 'M 2 16.346 L 20 16.346' },
            open: { d: 'M 3 2.5 L 17 16.346' },
          }}
        />
      </svg>
    </button>
  );
};

export default Hamburger;
