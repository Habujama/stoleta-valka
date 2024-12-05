import { FC, ReactNode, SetStateAction, Dispatch } from 'react';
import { Link } from 'gatsby';
import { motion } from 'framer-motion';
import classNames from 'classnames';

import ButtonImage from '../../assets/button.svg';
import FlagImage from '../../assets/vrchni.svg';

type Target = '_blank';
export enum ButtonType {
  GHOST = 'ghost',
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
}
export interface ButtonProps {
  children: ReactNode | string;
  buttonType?: ButtonType;
  type?: 'button' | 'submit';
  target?: Target;
  href?: string;
  to?: string | void;
  disabled?: boolean;
  className?: string;
  onClick?: () => void | Dispatch<SetStateAction<any>>;
}

const Button: FC<ButtonProps> = ({
  buttonType = ButtonType.PRIMARY,
  type = 'button',
  href,
  target,
  to,
  className,
  onClick,
  children,
}) => {
  const backgroundImageStyle: React.CSSProperties | undefined =
    buttonType === ButtonType.PRIMARY
      ? { backgroundImage: `url(${ButtonImage})` }
      : buttonType === ButtonType.SECONDARY
      ? {
          backgroundImage: `url(${FlagImage})`,
          backgroundSize: '110% 100%',
          padding: '50px 80px 80px 80px',
        }
      : undefined;

  const css = classNames(
    'block text-center font-serifSmall outline-none whitespace-no-wrap hover:scale-110 hover:ease-in-out active:scale-90',
    {
      'bg-center bg-no-repeat':
        ButtonType.PRIMARY === buttonType ||
        buttonType === ButtonType.SECONDARY,
    },
    {
      'bg-transparent p-4': ButtonType.GHOST === buttonType,
    },
    className,
  );

  if (to) {
    return (
      <Link
        to={to}
        onClick={onClick}
        className={css}
        type={type}
        style={{ ...backgroundImageStyle }}
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
        onClick={onClick}
        className={css}
        target={target}
        rel={rel}
        type={type}
        style={{ ...backgroundImageStyle }}
      >
        {children}
      </a>
    );
  }

  return (
    <motion.button
      className={css}
      onClick={onClick}
      type={type}
      style={{ ...backgroundImageStyle }}
    >
      {children}
    </motion.button>
  );
};

export default Button;
