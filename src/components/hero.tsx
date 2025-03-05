import { StaticImage } from 'gatsby-plugin-image';
import { useMedia } from 'react-use';
import theme from 'tailwindcss/defaultTheme';

const { screens } = theme;

const Hero = () => {
  const isMobile = useMedia(`(max-width: ${screens.lg})`);

  return (
    <div>
      {isMobile ? (
        <div className='flex flex-col items-center sm:gap-x-11 px-8'>
          <StaticImage
            src='../assets/kostra.png'
            alt='Staň se chrabrým rytířem'
            width={150}
            placeholder='blurred'
            className='mt-6 mx-4'
          />
        </div>
      ) : (
        <div className='flex justify-between xl:items-center max-w-8xl mx-auto'>
          <StaticImage
            src='../assets/kostra.png'
            alt='Zahraj si středověkou deskovku'
            width={276}
            placeholder='blurred'
          />
          <StaticImage
            src='../assets/husy.png'
            alt='Veď svoje vojsko k vítězství'
            width={368}
            placeholder='blurred'
          />
        </div>
      )}
    </div>
  );
};

export default Hero;
