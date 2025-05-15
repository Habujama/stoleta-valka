import {
  ReactElement,
  JSXElementConstructor,
  ReactNode,
  ReactPortal,
  useMemo,
  useState,
  useRef,
  useEffect,
} from 'react';
import { useMedia } from 'react-use';
import { graphql, useStaticQuery } from 'gatsby';
import { IGatsbyImageData, StaticImage } from 'gatsby-plugin-image';
import theme from 'tailwindcss/defaultTheme';

import TextBlockWithTitle from '../shared/text-block-with-title';
import PageWrapper from '../shared/page-wrapper';
import CharacterGroupComponent from './character-group';
import characterSheet from '../../assets/button-small.png';
import ArrowLight from '../../assets/sipka-tmava.svg';
import Title, { TitleLevel } from '../shared/title';

const { screens } = theme;

export type Text =
  | string
  | number
  | boolean
  | ReactElement<any, string | JSXElementConstructor<any>>
  | Iterable<ReactNode>
  | ReactPortal
  | null
  | undefined;

export enum LandType {
  ANGLIE = 'Anglie',
  ARAGON = 'Aragon',
  BENATKY = 'Benátky',
  BRETAN = 'Bretaň',
  FLANDRY = 'Flandry',
  FRANCIE = 'Francie',
  IRSKO = 'Irsko',
  KASTILIE = 'Kastilie',
  NAVARRA = 'Navarra',
  NEAPOL = 'Neapol',
  PIRATI = 'Piráti',
  SAVOJSKO = 'Savojsko',
  SKOTSKO = 'Skotsko',
  SVRR = 'SVŘŘ',
  SVEDSKO = 'Švédsko',
  GRANADA = 'Granada',
  JANOV = 'Janov',
  PAPAL_STATES = 'Papežské státy',
  PORTUGALSKO = 'Portugalsko',
  SICILIE = 'Sicílie',
  TUNIS = 'Tunis',
  ZENEVA = 'Ženeva',
}

export type LandDataProps = {
  erbZem: IGatsbyImageData | null;
  nzevZem: string;
  popisZem: any;
};

export type CharacterProps = {
  jmnoPostavy: string;
  obsazeno: boolean;
  popisPostavy: any;
  rmeekPostavy: { gatsbyImageData: any };
  skupina: LandType;
};

const Postavy = () => {
  const data = useStaticQuery(graphql`
        query CombinedQuery {
    allContentfulPostavy {
      nodes {
        jmnoPostavy
        skupina
        obsazeno
        popisPostavy {
          raw
        }
        rmeekPostavy {
          gatsbyImageData(placeholder: BLURRED)
        }
      }
    }
    allContentfulSkupinyPostav {
      nodes {
        erbZem {
          gatsbyImageData(placeholder: BLURRED, width: 200)
          title
        }
        nzevZem
        popisZem {
          raw
        }
      }
    }
  }
      `);

  const characterGroups = data.allContentfulPostavy.nodes;
  const landData = data.allContentfulSkupinyPostav.nodes;

  const landNames = Object.values(LandType).sort(([a], [b]) =>
    a.localeCompare(b),
  );
  const extendedLandNames = [
    ...landNames,
    ...landNames,
    ...landNames,
    ...landNames,
    ...landNames,
    ...landNames,
    ...landNames,
    ...landNames,
    ...landNames,
    ...landNames,
  ];

  const groupRef = useRef<HTMLDivElement>(null);
  const isMobile = useMedia(`(max-width: ${screens.md})`);
  const [selectedGroup, setSelectedGroup] = useState<string>('Anglie');
  const [activeIndex, setActiveIndex] = useState<number>(
    extendedLandNames.length / 2,
  );

  const groupCharactersByGroup = (
    characters: CharacterProps[],
  ): Record<LandType, CharacterProps[]> => {
    return characters.reduce((acc, character) => {
      const group = character.skupina as LandType;

      if (!acc[group]) {
        acc[group] = [];
      }

      acc[group].push(character);

      return acc;
    }, {} as Record<LandType, CharacterProps[]>);
  };

  const charactersByGroup = useMemo(
    () => groupCharactersByGroup(characterGroups),
    [characterGroups],
  );

  const enrichedGroups = useMemo(() => {
    const landDataMap = landData.reduce(
      (acc: { [x: string]: any }, group: LandDataProps) => {
        acc[group.nzevZem] = group;
        return acc;
      },
      {} as Record<string, (typeof landData)[0]>,
    );

    const groups = Object.entries(charactersByGroup).map(
      ([groupName, characters]) => {
        return [groupName, { ...landDataMap[groupName] }, characters];
      },
    );

    return [...groups];
  }, [landData]);

  const filteredGroup = enrichedGroups.find(
    ([groupName]) => groupName === selectedGroup,
  );

  const scrollToCenter = (index: number, instant = false) => {
    setTimeout(() => {
      const chosenLand = document.getElementById(index.toString());
      if (chosenLand && groupRef.current) {
        const container = groupRef.current;
        const elementRect = chosenLand.getBoundingClientRect();
        const containerRect = container.getBoundingClientRect();

        const scrollLeft =
          container.scrollLeft +
          (elementRect.left - containerRect.left) -
          (container.clientWidth / 2 - elementRect.width / 2);

        container.scrollTo({
          left: scrollLeft,
          behavior: instant ? 'auto' : 'smooth',
        });
      }
    }, 100);
  };

  const changeIndexByOffset = (offset: number) => {
    let newIndex = activeIndex + offset;

    if (newIndex < 0) {
      newIndex = extendedLandNames.length - 1; // Přeskoč na konec
    } else if (newIndex >= extendedLandNames.length) {
      newIndex = 0; // Přeskoč na začátek
    }
    setActiveIndex(newIndex);
    setSelectedGroup(extendedLandNames[newIndex]);
  };

  const selectIndex = (index: number) => {
    if (index < 0 || index >= extendedLandNames.length) return;
    setActiveIndex(index);
    setSelectedGroup(extendedLandNames[index]);
  };

  useEffect(() => {
    if (activeIndex === 0) {
      setTimeout(() => {
        setActiveIndex(landNames.length);
        scrollToCenter(landNames.length, true);
      }, 300);
    } else if (activeIndex === extendedLandNames.length - 1) {
      setTimeout(() => {
        setActiveIndex(1);
        scrollToCenter(1, true);
      }, 300);
    } else {
      scrollToCenter(activeIndex);
    }
  }, [activeIndex]);

  return (
    <div>
      <PageWrapper>
        <div className='md:col-span-2 pb-4' id='title'>
          <Title
            level={TitleLevel.H3}
            className='underline-offset-8 text-center mb-2'
          >
            Vyber si postavu, která ti sedne
          </Title>
          <TextBlockWithTitle
            paragraph={
              <>
                V&nbsp;následujícím seznamu jsou postavy zemí, které
                na&nbsp;naší hře budou zastoupené. Každá postava má svou kartu,
                na níž ikonami vyznačeny jsou její hlavní rysy, náročnost
                a&nbsp;charakter její hry. Kliknutím na kartu uzříš krátký
                medailon s&nbsp;popiskem postavy.
              </>
            }
          />
        </div>
        <div className='md:col-span-3 flex flex-col md:flex-row items-center justify-center'>
          <StaticImage
            src='../../assets/legenda-01.png'
            alt='Legenda ke kartám postav'
            placeholder='blurred'
          />
          <StaticImage
            src='../../assets/legenda-02.png'
            alt='Legenda ke kartám postav'
            placeholder='blurred'
          />
        </div>
      </PageWrapper>
      <div className='bg-neutral-800 bg-blend-screen bg-opacity-15 mt-16 pt-5 pb-20'>
        <div className='relative'>
          {!isMobile && (
            <button
              className='absolute left-10 top-8 z-20'
              onClick={() => changeIndexByOffset(-1)}
            >
              <img
                src={ArrowLight}
                alt='Posuň skupiny postav doleva'
                className='transform rotate-180 hover:scale-110'
              />
            </button>
          )}
          <div
            ref={groupRef}
            className='grid grid-flow-col auto-cols-max justify-center  whitespace-nowrap overflow-x-scroll no-scrollbar py-8'
          >
            {extendedLandNames.map((name, index) => (
              <button
                onClick={() => selectIndex(index)}
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
              onClick={() => changeIndexByOffset(+1)}
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
          {filteredGroup && (
            <CharacterGroupComponent
              groupName={filteredGroup[0]}
              landInfo={filteredGroup[1]}
              group={filteredGroup[2]}
            />
          )}
        </PageWrapper>
      </div>
    </div>
  );
};

export default Postavy;
