import { Dispatch, SetStateAction } from 'react';
import { GatsbyImage, getImage, IGatsbyImageData } from 'gatsby-plugin-image';
import { useStaticQuery, graphql, navigate } from 'gatsby';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';

import RulesWrapper from '../shared/rules-wrapper';
import SmallTextBlockWithTitle from '../shared/small-text-block';
import { RulesSectionsNames } from '.';

interface CitiesListProps {
  setSelectedGroup: Dispatch<SetStateAction<keyof typeof RulesSectionsNames>>;
}

const CitiesList = ({ setSelectedGroup }: CitiesListProps) => {
  const data = useStaticQuery(graphql`
    query CityListQuery {
      allContentfulSeznamMest {
        edges {
          node {
            seznamMest{
              gatsbyImageData(width: 798, placeholder: BLURRED)
              title
            }
          }
        }
      }
    }
  `);
  const maps = data.allContentfulSeznamMest.edges[0]?.node.seznamMest ?? [];

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
        {maps.map((photo: { item: IGatsbyImageData; title: string }) => {
          const image = getImage(photo);
          return (
            <div key={photo.title}>
              {image && (
                <Zoom>
                  <GatsbyImage
                    image={image}
                    alt={photo.title}
                    className='h-auto w-full object-contain rounded-md shadow-xl'
                  />
                </Zoom>
              )}
            </div>
          );
        })}
      </div>
    </RulesWrapper>
  );
};

export default CitiesList;
