import { StaticImage } from 'gatsby-plugin-image';
import { useMedia } from 'react-use';
import theme from 'tailwindcss/defaultTheme';

import SellingPoint from './selling-points';
import ButtonImage from '../../assets/ribbon.png';

const { screens } = theme;

const SellingPointsGroup = () => {
  const isMobile = useMedia(`(max-width: ${screens.sm})`);
  const isTablet = useMedia(`(max-width: ${screens.lg})`);
  return (
    <div className='bg-neutral-800 bg-blend-screen bg-opacity-15 px-12 pb-16 mb-10'>
      <div
        className='text-xl lg:text-2xl 2xl:text-4xl font-bold font-serif text-center bg-contain bg-no-repeat w-[279px] sm:w-[397px] pt-8 pb-6 h-auto -translate-y-10 mb-6 mx-auto'
        style={{
          backgroundImage: `url(${ButtonImage})`,
          backgroundSize: `${isMobile ? '279px 80px' : '397px 80px'}`,
        }}
      >
        Co vás čeká?
      </div>
      <ul className='grid grid-rows-4 gap-y-6 md:gap-y-0 max-w-4xl mx-auto md:grid-rows-1 md:grid-cols-4 md:gap-x-6 justify-items-center items-baseline'>
        <SellingPoint
          text='Vyjednávejte, intrikujte, utvářejte a&nbsp;ničte spojenectví.'
          title={isTablet ? '' : 'diplomacie'}
          staticImage={
            isTablet ? (
              <StaticImage
                src='../../assets/diplomacie-mobile.png'
                alt='Vyzkoušejte si středověkou diplomacii na vlastní kůži!'
                className='bg-contain mb-4'
                placeholder='blurred'
              />
            ) : (
              <StaticImage
                src='../../assets/diplomacie.png'
                alt='Vyzkoušejte si středověkou diplomacii na vlastní kůži!'
                className='bg-contain mb-4'
                placeholder='blurred'
              />
            )
          }
        />
        <SellingPoint
          text='Čelte cizím agentům, přepadejte cizí lodě, braňte svá města,
          nechte o&nbsp;sobě nebo o&nbsp;svém nepříteli skládat básně
          a&nbsp;hlavně - prožijte si&nbsp;dopady svých činů.'
          title={isTablet ? '' : 'konflikty'}
          staticImage={
            isTablet ? (
              <StaticImage
                src='../../assets/konflikty-mobile.png'
                alt='konflikty'
                className='bg-contain mb-4'
                placeholder='blurred'
              />
            ) : (
              <StaticImage
                src='../../assets/konflikty.png'
                alt='konflikty'
                className='bg-contain mb-4'
                placeholder='blurred'
              />
            )
          }
        />
        <SellingPoint
          text='Veďte své armády k&nbsp;vítězství... nebo k&nbsp;záhubě.'
          title={isTablet ? '' : 'strategie'}
          staticImage={
            isTablet ? (
              <StaticImage
                src='../../assets/strategie-mobile.png'
                alt='strategie'
                className='bg-contain mb-4'
                placeholder='blurred'
              />
            ) : (
              <StaticImage
                src='../../assets/valecna-strategie.png'
                alt='strategie'
                className='bg-contain mb-4'
                placeholder='blurred'
              />
            )
          }
        />
        <SellingPoint
          text='27&nbsp;mužských a&nbsp;12&nbsp;ženských postav, z&nbsp;nichž každá má vlastní
          propracovaný příběh a&nbsp;možnost ovlivnit svůj osud.'
          title={isTablet ? '' : 'výběr z 39 rolí'}
          staticImage={
            isTablet ? (
              <StaticImage
                src='../../assets/vyber-roli-mobile.png'
                alt='výběr z 39 rolí'
                className='bg-contain mb-4'
                placeholder='blurred'
              />
            ) : (
              <StaticImage
                src='../../assets/vyber-roli.png'
                alt='výběr z 39 rolí'
                className='bg-contain mb-4'
                placeholder='blurred'
              />
            )
          }
        />
      </ul>
    </div>
  );
};

export default SellingPointsGroup;
