import { StaticImage } from 'gatsby-plugin-image';
import { useMedia } from 'react-use';
import theme from 'tailwindcss/defaultTheme';

const { screens } = theme;

const Hero = () => {
  const isMobile = useMedia(`(max-width: ${screens.lg})`);

  return (
    <div>
      {isMobile ? (
        <div className='flex items-center justify-center px-20 mx-auto'>
          <StaticImage
            src='../assets/kostra.png'
            alt='Staň se chrabrým rytířem'
            width={150}
            className='-mr-16'
            loading='eager'
            placeholder='blurred'
          />
          <StaticImage
            src='../assets/husy.png'
            alt='Veď svoje vojsko k vítězství'
            width={368}
            className='-ml-16'
            loading='eager'
            placeholder='blurred'
          />
        </div>
      ) : (
        <div className='flex justify-center gap-x-4 items-end mx-auto'>
          <div className='pl-20'>
            <StaticImage
              src='../assets/rytir-a-sneci.png'
              alt='Zahraj si středověkou deskovku'
              width={276}
              loading='eager'
              placeholder='blurred'
            />
          </div>
          <div className='pl-24'>
            <StaticImage
              src='../assets/kostra.png'
              alt='Zahraj si středověkou deskovku'
              width={276}
              placeholder='blurred'
            />
          </div>
          <div className='px-20'>
            <StaticImage
              src='../assets/husy.png'
              alt='Veď svoje vojsko k vítězství'
              width={368}
              loading='eager'
              placeholder='blurred'
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Hero;
