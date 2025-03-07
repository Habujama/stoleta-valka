import {
  ReactElement,
  JSXElementConstructor,
  ReactNode,
  ReactPortal,
  useMemo,
  useState,
  useRef,
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

  const groupRef = useRef<HTMLDivElement>(null);
  const isMobile = useMedia(`(max-width: ${screens.md})`);
  const [selectedGroup, setSelectedGroup] = useState<string>('Anglie');
  const [isAtStart, setIsAtStart] = useState(true);
  const [isAtEnd, setIsAtEnd] = useState(false);

  const updateScrollState = () => {
    if (groupRef.current) {
      setIsAtStart(groupRef.current.scrollLeft === 0);
      setIsAtEnd(
        groupRef.current.scrollLeft + groupRef.current.clientWidth >=
          groupRef.current.scrollWidth,
      );
    }
  };

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

  const charactersByGroup: Record<string, CharacterProps[]> = useMemo(
    () => groupCharactersByGroup(characterGroups),
    [characterGroups],
  );

  const groupsSortedAlphabetically = useMemo(
    () =>
      Object.entries(charactersByGroup).sort(([a], [b]) => a.localeCompare(b)),
    [charactersByGroup],
  );

  const enrichedGroups = useMemo(() => {
    const landDataMap = landData.reduce(
      (acc: { [x: string]: any }, group: LandDataProps) => {
        acc[group.nzevZem] = group;
        return acc;
      },
      {} as Record<string, (typeof landData)[0]>,
    );

    return groupsSortedAlphabetically.map(([groupName, characters]) => {
      return [groupName, { ...landDataMap[groupName] }, characters, ,];
    });
  }, [groupsSortedAlphabetically, landData]);

  const filteredGroup = enrichedGroups.filter(
    ([groupName]) => groupName === selectedGroup,
  );

  const scrollGroups = (direction: 'left' | 'right') => {
    if (groupRef.current) {
      const scrollAmount = 500;
      groupRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
    setTimeout(updateScrollState, 300);
  };

  return (
    <div>
      <PageWrapper>
        <div className='md:col-span-2 pt-6 pb-4' id='title'>
          <TextBlockWithTitle
            title='Vyber si postavu, která ti sedne'
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
        <div className='relative w-full'>
          {!isMobile && !isAtStart && (
            <button
              className='absolute left-10 top-10 z-20'
              onClick={() => scrollGroups('left')}
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
            className='grid grid-flow-col auto-cols-max w-full justify-center whitespace-nowrap overflow-x-scroll no-scrollbar py-8'
          >
            {enrichedGroups.map(([groupName]) => (
              <button
                onClick={() => setSelectedGroup(groupName)}
                key={groupName}
                className={`${
                  selectedGroup === groupName
                    ? 'font-bold underline scale-125 z-10'
                    : 'mx-1'
                } hover:scale-125 font-serif pb-6`}
                style={{
                  backgroundImage: `url(${characterSheet})`,
                  backgroundSize: 'contain',
                  backgroundRepeat: 'no-repeat',
                  width: 120,
                  height: 60,
                }}
              >
                {groupName}
              </button>
            ))}
          </div>
          {!isMobile && !isAtEnd && (
            <button
              className='absolute right-10 top-10 z-20'
              onClick={() => scrollGroups('right')}
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
          {filteredGroup.map(([groupName, landInfo, group]) => (
            <CharacterGroupComponent
              groupName={groupName}
              landInfo={landInfo}
              group={group}
            />
          ))}
        </PageWrapper>
      </div>
    </div>
  );
};

export default Postavy;
