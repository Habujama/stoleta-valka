import { FC, ReactNode, SetStateAction, Dispatch } from 'react';
import { Link } from 'gatsby';
import { motion } from 'framer-motion';
import classNames from 'classnames';

import ButtonImage from '../../assets/ribbon.png';
import CrownedButton from '../../assets/crowned-button.png';
import MainCTA from '../../assets/main-CTA-button.png';

type Target = '_blank';
export enum ButtonType {
  GHOST = 'ghost',
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  MAIN = 'main',
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
      : buttonType === ButtonType.MAIN
      ? {
          backgroundImage: `url(${MainCTA})`,
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
        }
      : buttonType === ButtonType.SECONDARY
      ? {
          backgroundImage: `url(${CrownedButton})`,
          backgroundSize: '90% 100%',
          padding: '70px 25px 20px 20px',
        }
      : undefined;

  const css = classNames(
    'block text-center outline-none whitespace-no-wrap hover:scale-110 hover:ease-in-out active:scale-90',
    {
      'bg-center bg-no-repeat':
        ButtonType.PRIMARY === buttonType ||
        buttonType === ButtonType.SECONDARY,
    },
    {
      'bg-transparent p-4': ButtonType.GHOST === buttonType,
    },
    {
      'w-[600px]': ButtonType.MAIN === buttonType,
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
      whileHover={{ scale: 1.05 }}
      transition={{ ease: 'easeInOut' }}
      type={type}
      style={{ ...backgroundImageStyle }}
    >
      {children}
    </motion.button>
  );
};

export default Button;
