import { StaticImage } from 'gatsby-plugin-image';

import SellingPoint from './selling-points';

const SellingPointsGroup = () => (
  <div className='bg-neutral-800 bg-blend-screen bg-opacity-15 pt-20 px-12 pb-16 mb-10'>
    <ul className='grid grid-rows-4 gap-y-6 md:gap-y-0 px-16 max-w-4xl xl:max-w-7xl mx-auto md:grid-rows-1 md:grid-cols-4 md:gap-x-6 justify-items-center items-baseline'>
      <SellingPoint
        text='Vyjednávejte, intrikujte, utvářejte a&nbsp;ničte spojenectví.'
        title='diplomacie'
        staticImage={
          <StaticImage
            src='../../assets/diplomacie-mobile.png'
            alt='Vyzkoušejte si středověkou diplomacii na vlastní kůži!'
            className='bg-contain mb-4'
            placeholder='blurred'
          />
        }
      />
      <SellingPoint
        text='Čelte cizím agentům, přepadejte cizí lodě, braňte svá města,
          nechte o&nbsp;sobě nebo o&nbsp;svém nepříteli skládat básně
          a&nbsp;hlavně - prožijte si&nbsp;dopady svých činů.'
        title='konflikty'
        staticImage={
          <StaticImage
            src='../../assets/konflikty-mobile.png'
            alt='konflikty'
            className='bg-contain mb-4'
            placeholder='blurred'
          />
        }
      />
      <SellingPoint
        text='Veďte své armády k&nbsp;vítězství... nebo k&nbsp;záhubě.'
        title='strategie'
        staticImage={
          <StaticImage
            src='../../assets/strategie-mobile.png'
            alt='strategie'
            className='bg-contain mb-4'
            placeholder='blurred'
          />
        }
      />
      <SellingPoint
        text='27&nbsp;mužských a&nbsp;12&nbsp;ženských postav, z&nbsp;nichž každá má vlastní
          propracovaný příběh a&nbsp;možnost ovlivnit svůj osud.'
        title='výběr z 39 rolí'
        staticImage={
          <StaticImage
            src='../../assets/vyber-roli-mobile.png'
            alt='výběr z 39 rolí'
            className='bg-contain mb-4'
            placeholder='blurred'
          />
        }
      />
    </ul>
  </div>
);

export default SellingPointsGroup;
