import { Dispatch, SetStateAction, useState } from 'react';
import { GatsbyImage, getImage, IGatsbyImageData } from 'gatsby-plugin-image';
import { useStaticQuery, graphql, navigate } from 'gatsby';
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';
import 'react-medium-image-zoom/dist/styles.css';

import RulesWrapper from '../shared/rules-wrapper';
import SmallTextBlockWithTitle from '../shared/small-text-block';
import { RulesSectionsNames } from '.';
import Button, { ButtonType } from '../shared/button';
import Modal from '../shared/modal';

interface CitiesListProps {
  setSelectedGroup: Dispatch<SetStateAction<keyof typeof RulesSectionsNames>>;
}

interface CityImage {
  title: string;
  small: IGatsbyImageData;
  large: IGatsbyImageData;
}

const CitiesList = ({ setSelectedGroup }: CitiesListProps) => {
  const data = useStaticQuery(graphql`
    query CityListQuery {
      allContentfulSeznamMest {
        edges {
          node {
            seznamMest{
              small: gatsbyImageData(width: 798, placeholder: BLURRED)
              large: gatsbyImageData(width: 2000, placeholder: NONE)
              title
            }
          }
        }
      }
    }
  `);
  const cities: CityImage[] =
    data.allContentfulSeznamMest.edges[0]?.node.seznamMest ?? [];

  const [openCity, setCityOpen] = useState<string | null>(null);

  return (
    <RulesWrapper title='Seznam měst'>
      <SmallTextBlockWithTitle
        title=''
        paragraph={
          <div className='flex flex-col gap-y-4'>
            <p>
              Vládce země může postavit za jedno kolo v&nbsp;každém městě/hradu
              jednu lokální stavbu (hradby) a&nbsp;v&nbsp;každé provincii jednu
              provinční stavbu.
            </p>
            <p>
              Pokud nemá celou provincii pod kontrolou (např. jedno z&nbsp;měst
              patří jinému vládci, nebo v&nbsp;provincii řádí rebelie
              a&nbsp;nebo se zde nachází armáda nepřítele), pak není možné
              v&nbsp;této provincii stavět{' '}
              <strong>žádné provinční stavby</strong>. Může ale stále stavět{' '}
              <strong>lokální stavby</strong> ve&nbsp;městech, která nejsou pod
              útokem.
            </p>
            <p>
              Seznam dostupných staveb najdete v{' '}
              <span
                onClick={() => {
                  navigate('?selection=Mini_prirucka#cenik-staveb');
                  setSelectedGroup('Mini_prirucka');
                }}
                className='ml-2 underline hover:no-underline cursor-pointer'
              >
                Mini příručce
              </span>
              .
            </p>
          </div>
        }
      />
      <div className='grid grid-cols-1 md:grid-cols-4 gap-8 p-4 w-[90%]'>
        {cities.map((city) => {
          const isOpen = openCity === city.title;

          return (
            <div key={city.title}>
              {!isOpen && (
                <Button
                  onClick={() => setCityOpen(city.title)}
                  className='block w-full'
                  buttonType={ButtonType.GHOST}
                >
                  <GatsbyImage
                    image={city.small}
                    alt={city.title}
                    className='rounded-md shadow-xl'
                  />
                  <span className='block sm:hidden mt-2 text-sm text-center font-serif opacity-70'>
                    Kliknutím přibliž
                  </span>
                </Button>
              )}

              {isOpen && (
                <Modal onClose={() => setCityOpen(null)}>
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
                        image={city.large}
                        alt={city.title}
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

export default CitiesList;
