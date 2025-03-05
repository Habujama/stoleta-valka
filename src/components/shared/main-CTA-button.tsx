import { useMedia } from 'react-use';
import theme from 'tailwindcss/defaultTheme';
import { StaticImage } from 'gatsby-plugin-image';

import CrownedButton from '../../assets/crowned-button.png';

const { screens } = theme;

const MainCTAButton = () => {
  const isMobile = useMedia(`(max-width: ${screens.lg})`);
  return (
    <div className='flex mb-16 md:mb-28 2xl:mb-44 max-w-4xl self-center items-end mx-auto'>
      <StaticImage
        src='../../assets/prihlas-se_lev.png'
        alt='Přihlas se na Stoletou válku!'
        layout='constrained'
        width={550}
        placeholder='blurred'
        className='z-10 translate-x-16 lg:hover:rotate-45'
      />
      <div className='h-auto md:w-[650px] lg:w-[681px]'>
        <a
          href='https://forms.gle/13pdNp5YJQ1uUnKr6'
          target='_blank'
          rel='noopener noreferrer'
          className='relative block bg-center bg-no-repeat hover:scale-110 hover:ease-in-out active:scale-90'
          style={{
            backgroundImage: `url(${CrownedButton})`,
            backgroundSize: 'contain',
            paddingTop: '50%',
            width: isMobile ? '300px' : '400px',
          }}
        >
          <h5 className='absolute inset-0 translate-y-6 flex items-center justify-center md:text-2xl uppercase'>
            Přihlas se
          </h5>
        </a>
      </div>
      <StaticImage
        src='../../assets/prihlas-se_zajic.png'
        alt='Přihlas se na larp Stoletá válka!'
        width={450}
        placeholder='blurred'
        className='z-10 -translate-x-8 lg:hover:-rotate-45'
      />
    </div>
  );
};

export default MainCTAButton;
