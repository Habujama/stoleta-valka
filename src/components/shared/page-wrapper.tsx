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
      {withMenu && <div className='border-t-solid border-t-2 border-black' />}
      <div className='px-4 lg:px-32 pb-10'>
        {!isMobile && withMenu && (
          <header
            className='flex text-lg px-6 justify-center'
            style={{
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center center',
              backgroundAttachment: 'fixed',
            }}
          >
            <div className='flex-1 bg- flex items-center justify-center max-w-laptop mx-auto mb-12'>
              <MenuItems />
            </div>
          </header>
        )}
        {children}
      </div>
    </MotionConfig>
  );
};

export default PageWrapper;
