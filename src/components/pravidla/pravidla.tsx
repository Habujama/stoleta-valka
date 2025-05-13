import { useEffect, useRef, useState } from 'react';
import { useMedia } from 'react-use';  
import { IGatsbyImageData, StaticImage } from 'gatsby-plugin-image';
  import theme from 'tailwindcss/defaultTheme';
  
  import TextBlockWithTitle from '../shared/text-block-with-title';
  import { changeIndexByOffset, scrollToCenter, selectIndex } from '../shared/slider-functions';
  import PageWrapper from '../shared/page-wrapper';
import Title, { TitleLevel } from '../shared/title';

import ArrowLight from '../../assets/sipka-tmava.svg';
import characterSheet from '../../assets/button-small.png';


const { screens } = theme;
  
enum rulesSectionsNames {
    GENERAL = 'Obecné',
    HANDBOOK = 'Příručka hráče',
    ARMY_HANDBOOK = 'Příručka armády',
    FLEET_HANDBOOK = 'Příručka flotily',
    CARAVAN_HANDBOOK = 'Příručka karavany',
    TRADERS_HANDBOOK = 'Příručka obchodníka',
    ARTISTS_HANDBOOK = 'Příručka umělce',
    RULERS_HANDBOOK = 'Příručka vládce',
    PIRATES_HANDBOOK = 'Příručka piráta',
}

  const sections = Object.values(rulesSectionsNames);

const rulesSections = [
    ...sections,
    ...sections,
    ...sections,
    ...sections,
    ...sections,
    ...sections,
    ...sections,
    ...sections,
]
  
const PravidlaPage = () => {
    const rulesSectionRef = useRef<HTMLDivElement>(null);
    const isMobile = useMedia(`(max-width: ${screens.md})`);
    const [selectedGroup, setSelectedGroup] = useState<string>('Obecné');
    const [activeIndex, setActiveIndex] = useState<number>(
        rulesSections.length / 2,
    );

      useEffect(() => {
        if (activeIndex === 0) {
          setTimeout(() => {
            setActiveIndex(rulesSections.length);
            scrollToCenter(rulesSectionRef, rulesSections.length, true);
          }, 300);
        } else if (activeIndex === rulesSections.length - 1) {
          setTimeout(() => {
            setActiveIndex(1);
            scrollToCenter(rulesSectionRef, 1, true);
          }, 300);
        } else {
          scrollToCenter(rulesSectionRef, activeIndex, false);
        }
      }, [activeIndex]);
    
    return (
        <div>
            <PageWrapper>
                <TextBlockWithTitle
                    title="Pravidla hry"
            paragraph={
              <>
                    Na této stránce naleznete přehled pravidel naší hry. Prostudujte si prosím především obecná pravidla a&nbsp;příručku
                    hráče. Pokud se vás to týká, najděte si i&nbsp;odpovídající příručku podle vašeho postavení nebo
                    povolání.
              </>
            }
          />
            </PageWrapper>
        <div className='bg-neutral-800 bg-blend-screen bg-opacity-15 mt-16 pt-5 pb-20'>
        <div className='relative'>
          {!isMobile && (
            <button
              className='absolute left-10 top-8 z-20'
              onClick={() => changeIndexByOffset(setActiveIndex, setSelectedGroup, rulesSections, activeIndex, -1)}
            >
              <img
                src={ArrowLight}
                alt='Posuň skupiny postav doleva'
                className='transform rotate-180 hover:scale-110'
              />
            </button>
          )}
          <div
            ref={rulesSectionRef}
            className='grid grid-flow-col auto-cols-max justify-center  whitespace-nowrap overflow-x-scroll no-scrollbar py-8'
          >
            {rulesSections.map((name, index) => (
              <button
                onClick={() => selectIndex(setActiveIndex, setSelectedGroup, rulesSections, index)}
                key={index}
                id={index.toString()}
                className={`${
                  index === activeIndex
                    ? 'font-bold underline scale-125 z-10'
                    : 'mx-1'
                } flex items-center justify-center hover:scale-125 font-serif`}
                style={{
                  backgroundImage: `url(${characterSheet})`,
                  backgroundSize: 'contain',
                  backgroundRepeat: 'no-repeat',
                  width: isMobile ? 130 : 160,
                  height: isMobile ? 40 : 48,
                }}
              >
                {name}
              </button>
            ))}
          </div>
          {!isMobile && (
            <button
              className='absolute right-10 top-8 z-20'
              onClick={() => changeIndexByOffset(setActiveIndex, setSelectedGroup, rulesSections, activeIndex,+1)}
            >
              <img
                src={ArrowLight}
                alt='Posuň skupiny postav doprava'
                className='hover:scale-110'
              />
            </button>
          )}
        </div>
        <PageWrapper withMenu={false}>
          <p>Selected rules group shown here</p>
        </PageWrapper>
      </div>
      </div>
    );
  };
  
  export default PravidlaPage;
  