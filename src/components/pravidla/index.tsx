import { useEffect, useState } from 'react';
import { useMedia } from 'react-use';
import theme from 'tailwindcss/defaultTheme';
import { navigate } from 'gatsby';

import TextBlockWithTitle from '../shared/text-block-with-title';
import PageWrapper from '../shared/page-wrapper';

import characterSheet from '../../assets/button-small.png';
import GeneralRules from './general-rules';
import ArmysHandbook from './armys-handbook';
import ArtistsHandbook from './artists-handbook';
import CaravansHandbook from './caravans-handbook';
import FleetsHandbook from './fleets-handbook';
import PiratesHandbook from './pirates-handbook';
import RulersHandbook from './rulers-handbook';
import MerchantsHandbook from './merchants-handbook';
import PlayersHandbook from './players-handbook';
import Maps from './maps';
import CitiesList from './cities-list';
import Technologies from './technologies';

const { screens } = theme;

export enum RulesSectionsNames {
  Obecna_pravidla = 'Obecná pravidla',
  Mini_prirucka = 'Mini příručka',
  Prirucka_armady = 'Příručka armády',
  Prirucka_flotily = 'Příručka flotily',
  Prirucka_karavany = 'Příručka karavany',
  Prirucka_obchodnika = 'Příručka obchodníka',
  Prirucka_umelce = 'Příručka umělce',
  Prirucka_vladce = 'Příručka vládce',
  Prirucka_pirata = 'Příručka piráta',
  Mapy = 'Mapy',
  Technologie = 'Technologie',
  Seznam_mest = 'Seznam měst',
}

const sectionKeys = Object.keys(
  RulesSectionsNames,
) as (keyof typeof RulesSectionsNames)[];

const PravidlaPage = () => {
  const isMobile = useMedia(`(max-width: ${screens.md})`);
  const [selectedGroup, setSelectedGroup] =
    useState<keyof typeof RulesSectionsNames>('Obecna_pravidla');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const searchParams = new URLSearchParams(window.location.search);
      const param = searchParams.get(
        'selection',
      ) as keyof typeof RulesSectionsNames;

      if (param && sectionKeys.includes(param)) {
        setSelectedGroup(param);
      }
    }
  }, []);

  useEffect(() => {
    const updateSelectionFromUrl = () => {
      const params = new URLSearchParams(window.location.search);
      const selected = params.get(
        'selection',
      ) as keyof typeof RulesSectionsNames;
      if (selected && RulesSectionsNames[selected]) {
        setSelectedGroup(selected);
      } else {
        setSelectedGroup('Obecna_pravidla');
      }
    };

    updateSelectionFromUrl(); // run on mount

    window.addEventListener('popstate', updateSelectionFromUrl); // listen to back/forward

    return () => {
      window.removeEventListener('popstate', updateSelectionFromUrl);
    };
  }, []);

  const handleClick = (section: keyof typeof RulesSectionsNames) => {
    navigate(`?selection=${section}#1`);
    setSelectedGroup(section);
  };

  const sectionComponentMap: Record<
    keyof typeof RulesSectionsNames,
    JSX.Element
  > = {
    Obecna_pravidla: <GeneralRules />,
    Mini_prirucka: <PlayersHandbook />,
    Prirucka_armady: <ArmysHandbook />,
    Prirucka_flotily: <FleetsHandbook />,
    Prirucka_karavany: <CaravansHandbook />,
    Prirucka_obchodnika: <MerchantsHandbook />,
    Prirucka_umelce: <ArtistsHandbook />,
    Prirucka_vladce: <RulersHandbook />,
    Prirucka_pirata: <PiratesHandbook />,
    Mapy: <Maps setSelectedGroup={setSelectedGroup} />,
    Technologie: <Technologies />,
    Seznam_mest: <CitiesList setSelectedGroup={setSelectedGroup} />,
  };

  return (
    <div>
      <PageWrapper>
        <TextBlockWithTitle
          title='Pravidla hry'
          paragraph={
            <>
              Na této stránce naleznete přehled pravidel naší hry. Prostudujte
              si prosím především obecná pravidla a&nbsp;příručku hráče. Pokud
              se vás to týká, pročtěte si i&nbsp;odpovídající příručku podle
              vašeho postavení nebo povolání.
            </>
          }
        />
      </PageWrapper>
      <div
        className='flex flex-col sm:flex-row justify-center bg-neutral-800 bg-blend-screen bg-opacity-15 mt-16 pt-5 pb-10 sm:pb-20 px-4 sm:px-20'
        id='1'
      >
        <div className='w-auto 2xl:max-w-7xl sm:flex 2xl:justify-center'>
          <div
            className='grid grid-flow-col auto-cols-max whitespace-nowrap overflow-x-scroll no-scrollbar py-8
          sm:flex sm:flex-col sm:space-y-2 space-x-0 sm:mb-0 sm:py-4 sm:pl-6 sm:pr-10
          2xl:space-y-0 2xl:space-x-2 mb-4'
          >
            {sectionKeys.map((section, index) => (
              <button
                onClick={() => handleClick(section)}
                key={index}
                id={index.toString()}
                className={`${
                  section === selectedGroup
                    ? 'font-bold underline scale-125 z-1'
                    : 'mx-1'
                } flex items-center justify-center font-serif
                  hover:scale-125 first-of-type:ml-6 sm:first-of-type:ml-0 last-of-type:mr-6 sm:last-of-type:mr-0`}
                style={{
                  backgroundImage: `url(${characterSheet})`,
                  backgroundSize: 'contain',
                  backgroundRepeat: 'no-repeat',
                  backgroundPositionX: 'center',
                  backgroundPositionY: 'center',
                  width: isMobile ? 'auto' : 160,
                  height: isMobile ? 50 : 48,
                }}
              >
                <span className='px-4'>{RulesSectionsNames[section]}</span>
              </button>
            ))}
          </div>
          {sectionComponentMap[selectedGroup]}
        </div>
      </div>
    </div>
  );
};

export default PravidlaPage;
