import { StaticImage } from 'gatsby-plugin-image';
import { useMedia } from 'react-use';
import theme from 'tailwindcss/defaultTheme';

const { screens } = theme;

const Hero = () => {
  const isMobile = useMedia(`(max-width: ${screens.lg})`);

  return (
    <div>
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
            width={220}
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
