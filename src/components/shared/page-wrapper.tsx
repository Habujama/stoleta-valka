import { ReactNode } from 'react';
import { useMedia } from 'react-use';
import theme from 'tailwindcss/defaultTheme';

import MenuItems from '../../components/header/menu-items';
import { MotionConfig } from 'framer-motion';

interface PageWrapper {
  children: ReactNode;
  withMenu?: boolean;
}

const { screens } = theme;

const PageWrapper = ({ children, withMenu = true }: PageWrapper) => {
  const isMobile = useMedia(`(max-width: ${screens.lg})`);

  return (
    <MotionConfig reducedMotion='user'>
      <div>
        {!isMobile && withMenu && (
          <header
            className='flex text-lg justify-center'
            style={{
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center center',
              backgroundAttachment: 'fixed',
            }}
          >
            <MenuItems />
          </header>
        )}
        <div className='max-w-4xl mx-auto px-8'>{children}</div>
      </div>
    </MotionConfig>
  );
};

export default PageWrapper;
