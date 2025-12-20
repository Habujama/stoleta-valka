import { Dispatch, SetStateAction } from 'react';
import { GatsbyImage, getImage, IGatsbyImageData } from 'gatsby-plugin-image';
import { useStaticQuery, graphql, navigate } from 'gatsby';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';

import RulesWrapper from '../shared/rules-wrapper';
import SmallTextBlockWithTitle from '../shared/small-text-block';
import { RulesSectionsNames } from '.';

interface MapsProps {
  setSelectedGroup: Dispatch<SetStateAction<keyof typeof RulesSectionsNames>>;
}

const Maps = ({ setSelectedGroup }: MapsProps) => {
  const data = useStaticQuery(graphql`
  query MapQuery {
    allContentfulMapy {
      edges {
        node {
          mapy {
            small: gatsbyImageData(width: 400, placeholder: BLURRED)
            large: gatsbyImageData(placeholder: BLURRED)
            title
          }
        }
      }
    }
  }
`);
  const maps = data.allContentfulMapy.edges[0]?.node.mapy ?? [];

  return (
    <RulesWrapper title='Mapy'>
      <SmallTextBlockWithTitle
        title=''
        paragraph={
          <div className='flex flex-col gap-y-4'>
            <p>
              V&nbsp;určených časových úsecích hráči umisťují a&nbsp;přesouvají
              figurky svých armád a&nbsp;flotil na velkoformátových mapách. Zde
              mohou přehledně sledovat rozmístění sil, vyhodnocovat postavení
              spojenců i&nbsp;nepřátel a&nbsp;plánovat další kroky.
            </p>
            <p>
              Pravidla pro zajištění a&nbsp;pohyb armád a&nbsp;flotil jsou
              popsána v&nbsp;příručkách{' '}
              <span
                onClick={() => {
                  navigate('?selection=Prirucka_armady#1');
                  setSelectedGroup('Prirucka_armady');
                }}
                className='ml-2 underline hover:no-underline cursor-pointer'
              >
                armády
              </span>{' '}
              a&nbsp;
              <span
                onClick={() => {
                  navigate('?selection=Prirucka_flotily#1');
                  setSelectedGroup('Prirucka_flotily');
                }}
                className='ml-2 underline hover:no-underline cursor-pointer'
              >
                flotily
              </span>
              . Úroveň výcviku armády je obvykle podmíněna výstavbou
              odpovídajících staveb.
            </p>
          </div>
        }
      />
      <div className='flex flex-col gap-8 p-4 w-[90%]'>
        {maps.map(
          (photo: {
            small: { gatsbyImageData: IGatsbyImageData };
            large: IGatsbyImageData;
            title: string;
          }) => {
            const image = getImage(photo.large);
            return (
              <div key={photo.title}>
                {image && (
                  <Zoom>
                    <GatsbyImage
                      image={image}
                      alt={photo.title}
                      className='h-auto w-full object-contain rounded-md shadow-xl mx-1'
                    />
                  </Zoom>
                )}
              </div>
            );
          },
        )}
      </div>
    </RulesWrapper>
  );
};

export default Maps;
