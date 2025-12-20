import { Dispatch, SetStateAction, useState } from 'react';
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image';
import { useStaticQuery, graphql, navigate } from 'gatsby';
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';

import RulesWrapper from '../shared/rules-wrapper';
import SmallTextBlockWithTitle from '../shared/small-text-block';
import { RulesSectionsNames } from '.';
import Modal from '../shared/modal';
import Button, { ButtonType } from '../shared/button';

interface MapsProps {
  setSelectedGroup: Dispatch<SetStateAction<keyof typeof RulesSectionsNames>>;
}

interface MapImage {
  title: string;
  small: IGatsbyImageData;
  large: IGatsbyImageData;
}

const Maps = ({ setSelectedGroup }: MapsProps) => {
  const [openMap, setOpenMap] = useState<string | null>(null);

  const data = useStaticQuery(graphql`
    query MapQuery {
      allContentfulMapy {
        edges {
          node {
            mapy {
              title
              small: gatsbyImageData(width: 1000, placeholder: BLURRED)
              large: gatsbyImageData(width: 5000, placeholder: NONE)
            }
          }
        }
      }
    }
  `);

  const maps: MapImage[] = data.allContentfulMapy.edges[0]?.node.mapy ?? [];

  return (
    <RulesWrapper title='Mapy'>
      <SmallTextBlockWithTitle
        title=''
        paragraph={
          <div className='flex flex-col gap-y-4'>
            <p>
              V určených časových úsecích hráči umisťují a přesouvají figurky
              svých armád a flotil na velkoformátových mapách. Zde mohou
              přehledně sledovat rozmístění sil, vyhodnocovat postavení spojenců
              i nepřátel a plánovat další kroky.
            </p>
            <p>
              Pravidla pro zajištění a pohyb armád a flotil jsou popsána v
              příručkách{' '}
              <span
                onClick={() => {
                  navigate('?selection=Prirucka_armady#1');
                  setSelectedGroup('Prirucka_armady');
                }}
                className='underline cursor-pointer'
              >
                armády
              </span>{' '}
              a{' '}
              <span
                onClick={() => {
                  navigate('?selection=Prirucka_flotily#1');
                  setSelectedGroup('Prirucka_flotily');
                }}
                className='underline cursor-pointer'
              >
                flotily
              </span>
              .
            </p>
          </div>
        }
      />

      <div className='flex flex-col gap-10 p-4'>
        {maps.map((map) => {
          const isOpen = openMap === map.title;

          return (
            <div key={map.title} className='relative'>
              {!isOpen && (
                <Button
                  onClick={() => setOpenMap(map.title)}
                  className='block w-full'
                  buttonType={ButtonType.GHOST}
                >
                  <GatsbyImage
                    image={map.small}
                    alt={map.title}
                    className='rounded-md shadow-xl'
                  />
                  <span className='block mt-2 text-sm text-center font-serif opacity-70'>
                    Kliknutím mapu přibliž
                  </span>
                </Button>
              )}

              {isOpen && (
                <Modal onClose={() => setOpenMap(null)}>
                  <TransformWrapper
                    initialScale={1}
                    minScale={1}
                    maxScale={6}
                    wheel={{ step: 0.12 }}
                    panning={{ velocityDisabled: true }}
                    doubleClick={{ disabled: true }}
                    centerOnInit={false}
                    limitToBounds={false}
                  >
                    <TransformComponent>
                      <GatsbyImage
                        image={map.large}
                        alt={map.title}
                        className='w-auto h-auto select-none'
                        draggable={false}
                      />
                    </TransformComponent>
                  </TransformWrapper>
                </Modal>
              )}
            </div>
          );
        })}
      </div>
    </RulesWrapper>
  );
};

export default Maps;
