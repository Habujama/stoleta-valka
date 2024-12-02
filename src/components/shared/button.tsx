import { FC, ReactNode } from 'react';
import classNames from 'classnames';
import { motion } from 'framer-motion';
import { Link } from 'gatsby';

import ButtonImage from '../../static/button.svg';

type Target = '_blank';
export interface ButtonProps {
  children: ReactNode | string;
  type?: 'button' | 'submit';
  target?: Target;
  href?: string;
  to?: string | void;
  disabled?: boolean;
  className?: string;
  onClick?: () => void;
}

const Button: FC<ButtonProps> = ({
  type = 'button',
  href,
  target,
  to,
  className,
  children,
}) => {
  const css = classNames(
    'transform text-center font-serif outline-none whitespace-no-wrap bg-contain bg-center bg-no-repeat px-4 pt-10 sm:pt-10 pb-3 px-3 leading-7 hover:scale-110 hover:ease-in-out',
    className,
  );

  if (to) {
    return (
      <Link
        to={to}
        className={css}
        type={type}
        style={{ display: 'block', backgroundImage: `url(${ButtonImage})` }}
      >
        {children}
      </Link>
    );
  }

  if (href) {
    const rel = target && 'noopener noreferrer';

    return (
      <a
        href={href}
        className={css}
        target={target}
        rel={rel}
        type={type}
        style={{ display: 'block', backgroundImage: `url(${ButtonImage})` }}
      >
        {children}
      </a>
    );
  }

  return (
    <motion.button className={css} type={type}>
      {children}
    </motion.button>
  );
};

export default Button;
