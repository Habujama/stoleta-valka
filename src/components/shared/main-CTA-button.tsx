import { useMedia } from 'react-use';
import theme from 'tailwindcss/defaultTheme';
import { StaticImage } from 'gatsby-plugin-image';

import CrownedButton from '../../assets/crowned-button.png';
import Title, { TitleLevel } from './title';

const { screens } = theme;

const MainCTAButton = () => {
  const isMobile = useMedia(`(max-width: ${screens.lg})`);
  return (
    <>
      {isMobile ? (
        <div className='flex justify-center mb-28'>
          <a
            href='https://forms.gle/13pdNp5YJQ1uUnKr6'
            target='_blank'
            rel='noopener noreferrer'
            className='relative block w-[300px] h-[100px] sm:w-[400px] sm:h-[120px] md:w-[500px] md:h-[150px] lg:w-[600px] lg:h-[180px] 
               bg-center bg-no-repeat hover:scale-110 hover:ease-in-out active:scale-90'
            style={{
              backgroundImage: `url(${CrownedButton})`,
              backgroundSize: 'contain',
            }}
          >
            <Title
              level={TitleLevel.H4}
              className='absolute inset-0 flex items-center justify-center mt-10 sm:mt-14 uppercase'
            >
              Přihlas se
            </Title>
          </a>
        </div>
      ) : (
        <div className='flex mb-32 2xl:mb-44 max-w-2xl self-center items-end mx-auto'>
          <div className='w-20 md:w-[339px]'>
            <StaticImage
              src='../../assets/prihlas-se_lev.png'
              alt='Přihlas se na Stoletou válku!'
              layout='constrained'
              placeholder='blurred'
              className='z-10 translate-x-16 lg:hover:rotate-45'
            />
          </div>
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
              }}
            >
              <h5 className='absolute inset-0 translate-y-6 flex items-center justify-center md:text-2xl uppercase'>
                Přihlas se
              </h5>
            </a>
          </div>
          <div className='w-20 md:w-[339px]'>
            <StaticImage
              src='../../assets/prihlas-se_zajic.png'
              alt='Přihlas se na larp Stoletá válka!'
              width={450}
              placeholder='blurred'
              className='z-10 -translate-x-8 lg:hover:-rotate-45'
            />
          </div>
        </div>
      )}
    </>
  );
};

export default MainCTAButton;
