import { useState } from 'react';
import { useMedia } from 'react-use';
import theme from 'tailwindcss/defaultTheme';

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

const { screens } = theme;

enum rulesSectionsNames {
  GENERAL = 'Obecná pravidla',
  PLAYERS_HANDBOOK = 'Příručka hráče',
  ARMY_HANDBOOK = 'Příručka armády',
  FLEET_HANDBOOK = 'Příručka flotily',
  CARAVAN_HANDBOOK = 'Příručka karavany',
  MERCHANTS_HANDBOOK = 'Příručka obchodníka',
  ARTISTS_HANDBOOK = 'Příručka umělce',
  RULERS_HANDBOOK = 'Příručka vládce',
  PIRATES_HANDBOOK = 'Příručka piráta',
}

const sections = Object.values(rulesSectionsNames);

const PravidlaPage = () => {
  const isMobile = useMedia(`(max-width: ${screens.md})`);
  const [selectedGroup, setSelectedGroup] = useState<rulesSectionsNames>(
    rulesSectionsNames.GENERAL,
  );

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
      <div className='flex flex-col sm:flex-row justify-center bg-neutral-800 bg-blend-screen bg-opacity-15 mt-16 pt-5 pb-10 sm:pb-20 px-4 sm:px-20'>
        <div className='w-auto 2xl:max-w-7xl sm:flex 2xl:justify-center'>
          <div
            className='grid grid-flow-col auto-cols-max whitespace-nowrap overflow-x-scroll no-scrollbar py-8
          sm:flex sm:flex-col sm:space-y-2 space-x-0 sm:mb-0 sm:py-4 sm:pl-6 sm:pr-10
          2xl:space-y-0 2xl:space-x-2 mb-4'
          >
            {sections.map((section, index) => (
              <button
                onClick={() => setSelectedGroup(section)}
                key={index}
                id={index.toString()}
                className={`${
                  section === selectedGroup
                    ? 'font-bold underline scale-125 z-10'
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
                <span className='px-4'>{section}</span>
              </button>
            ))}
          </div>
          {selectedGroup === rulesSectionsNames.GENERAL && <GeneralRules />}
          {selectedGroup === rulesSectionsNames.PLAYERS_HANDBOOK && (
            <PlayersHandbook />
          )}
          {selectedGroup === rulesSectionsNames.FLEET_HANDBOOK && (
            <FleetsHandbook />
          )}
          {selectedGroup === rulesSectionsNames.CARAVAN_HANDBOOK && (
            <CaravansHandbook />
          )}
          {selectedGroup === rulesSectionsNames.MERCHANTS_HANDBOOK && (
            <MerchantsHandbook />
          )}
          {selectedGroup === rulesSectionsNames.ARMY_HANDBOOK && (
            <ArmysHandbook />
          )}
          {selectedGroup === rulesSectionsNames.ARTISTS_HANDBOOK && (
            <ArtistsHandbook />
          )}
          {selectedGroup === rulesSectionsNames.RULERS_HANDBOOK && (
            <RulersHandbook />
          )}
          {selectedGroup === rulesSectionsNames.PIRATES_HANDBOOK && (
            <PiratesHandbook />
          )}
        </div>
      </div>
    </div>
  );
};

export default PravidlaPage;
