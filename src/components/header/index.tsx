import { useMedia } from 'react-use';
import theme from 'tailwindcss/defaultTheme';
import { StaticImage } from 'gatsby-plugin-image';
import { Link } from 'gatsby';

import MobileNav from './mobile-menu';
import Hero from '../hero';

const { screens } = theme;

const Header = () => {
  const isMobile = useMedia(`(max-width: ${screens.lg})`);

  return (
    <>
      <Link
        to={'/'}
        className='xl:flex xl:flex-col self-center hover:cursor-pointer w-full'
      >
        <h1 className='sr-only'>Stoletá válka roku 1332</h1>
        <StaticImage
          src='../../assets/hlavicka-nadpis.png'
          alt='Stoletá válka roku 1332'
          placeholder='blurred'
          className='mb-4 2xl:pt-44'
        />
      </Link>
      {isMobile && <MobileNav />}
      <div className='lg:px-32 2xl:px-20'>
        <Hero />
      </div>
    </>
  );
};

export default Header;
