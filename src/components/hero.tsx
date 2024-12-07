import { StaticImage } from 'gatsby-plugin-image';
import { useMedia } from 'react-use';
import theme from 'tailwindcss/defaultTheme';

import Title from '../assets/titulek.svg';

const { screens } = theme;

const Hero = () => {
  const isMobile = useMedia(`(max-width: ${screens.lg})`);

  return (
    <div
      className='content-end xl:px-32'
      style={{
        backgroundImage: !isMobile ? `url(${Title})` : '',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '50% 100%',
        backgroundAttachment: 'fixed',
        backgroundSize: '80% 120%',
      }}
    >
      {isMobile ? (
        <div className='flex items-center sm:gap-x-11'>
          <StaticImage
            src='../assets/rytir.png'
            alt='Staň se chrabrým rytířem'
            width={250}
            placeholder='blurred'
          />
          <h1 className='sm:text-5xl text-xl text-center'>
            Stoletá válka
            <br />
            roku 1337
          </h1>
        </div>
      ) : (
        <div className='flex justify-between items-baseline'>
          <StaticImage
            src='../assets/sachy.png'
            alt='Zahraj si středověkou deskovku'
            width={320}
            placeholder='blurred'
          />
          <StaticImage
            src='../assets/rytir.png'
            alt='Staň se chrabrým rytířem'
            width={250}
            placeholder='blurred'
          />
          <StaticImage
            src='../assets/johanka.png'
            alt='Veď svoje vojsko k vítězství'
            width={350}
            placeholder='blurred'
            className='-mr-10'
          />
        </div>
      )}
    </div>
  );
};

export default Hero;
